import { useEffect, useState } from "react";
 
const USERS_KEY = "jsmaster_users";
const SESSION_KEY = "jsmaster_session";
const AUTH_EVENT = "jsmaster:auth-changed";

/* ---------------------------- low-level helpers --------------------------- */

function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error("JSMaster auth: failed to write to localStorage", err);
  }
}

function notify() {
  window.dispatchEvent(new Event(AUTH_EVENT));
}

function getUsers() {
  return readJSON(USERS_KEY, []);
}

function saveUsers(users) {
  writeJSON(USERS_KEY, users);
}

function stripPassword(user) {
  if (!user) return null;
  const { password, ...safe } = user;
  return safe;
}

/* --------------------------------- reads ---------------------------------- */

export function getCurrentUser() {
  if (typeof window === "undefined") return null;
  const session = readJSON(SESSION_KEY, null);
  if (!session?.userId) return null;

  const user = getUsers().find((u) => u.id === session.userId);
  return stripPassword(user);
}

export function isAuthenticated() {
  return !!getCurrentUser();
}

export function getInitials(firstName = "", lastName = "") {
  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  return initials || "U";
}

/* -------------------------------- actions ---------------------------------- */

export function signUp({ firstName, lastName, email, password }) {
  const cleanEmail = (email || "").trim().toLowerCase();

  if (!firstName?.trim() || !lastName?.trim()) {
    throw new Error("Please enter your first and last name.");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
    throw new Error("Please enter a valid email address.");
  }
  if (!password || password.length < 6) {
    throw new Error("Password must be at least 6 characters.");
  }

  const users = getUsers();
  if (users.some((u) => u.email === cleanEmail)) {
    throw new Error("An account with this email already exists.");
  }

  const newUser = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    email: cleanEmail,
    password, // demo only — see note at top of file
    img: "",
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  saveUsers(users);
  writeJSON(SESSION_KEY, { userId: newUser.id });
  notify();

  return stripPassword(newUser);
}

export function signIn({ email, password }) {
  const cleanEmail = (email || "").trim().toLowerCase();
  const user = getUsers().find((u) => u.email === cleanEmail);

  if (!user || user.password !== password) {
    throw new Error("Incorrect email or password.");
  }

  writeJSON(SESSION_KEY, { userId: user.id });
  notify();

  return stripPassword(user);
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
  notify();
}

export function updateCurrentUser(updates) {
  const session = readJSON(SESSION_KEY, null);
  if (!session?.userId) throw new Error("No user is signed in.");

  const users = getUsers();
  const idx = users.findIndex((u) => u.id === session.userId);
  if (idx === -1) throw new Error("User not found.");

  users[idx] = { ...users[idx], ...updates };
  saveUsers(users);
  notify();

  return stripPassword(users[idx]);
}

export function deleteCurrentUser() {
  const session = readJSON(SESSION_KEY, null);
  if (!session?.userId) return;

  saveUsers(getUsers().filter((u) => u.id !== session.userId));
  localStorage.removeItem(SESSION_KEY);
  notify();
}

/* ---------------------------------- hook ------------------------------------ */

/**
 * useAuth() — subscribe any component to auth state.
 * Re-renders automatically on sign in / sign up / logout / profile update,
 * including changes made in another tab.
 */
export function useAuth() {
  const [user, setUser] = useState(() => getCurrentUser());

  useEffect(() => {
    const sync = () => setUser(getCurrentUser());
    window.addEventListener(AUTH_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(AUTH_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return { user, isAuthenticated: !!user };
}