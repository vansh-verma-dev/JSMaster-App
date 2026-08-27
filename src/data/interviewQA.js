// src/data/interviewQuestions.js

const interviewQuestions = [
  // ===================== ARRAYS =====================
  {
    id: 1,
    category: "Arrays",
    type: "theory",
    level: "Beginner",
    question: "What does the push() method do?",
    options: [
      "Removes the last element from an array",
      "Adds one or more elements to the end of an array and returns the new length",
      "Adds an element to the beginning of an array",
      "Removes the first element from an array",
    ],
    correctIndex: 1,
    explanation:
      "push() mutates the original array by adding one or more elements to the end, and it returns the array's new length (not the array itself).",
  },
  {
    id: 2,
    category: "Arrays",
    type: "theory",
    level: "Beginner",
    question: "What does pop() return?",
    options: [
      "The new length of the array",
      "The first element of the array",
      "The removed last element of the array",
      "undefined, always",
    ],
    correctIndex: 2,
    explanation:
      "pop() removes the last element from the array and returns that removed element. If the array is empty, it returns undefined.",
  },
  {
    id: 3,
    category: "Arrays",
    type: "practical",
    level: "Beginner",
    answerType: "text",
    question:
      "Predict the final state of arr after running:\n\nconst arr = [2, 4, 6];\narr.push(8);\narr.pop();\narr.unshift(1);\narr.shift();",
    answer: "[2, 4, 6, 8] -> after pop(): [2, 4, 6] -> after unshift(1): [1, 2, 4, 6] -> after shift(): [2, 4, 6]",
    note:
      "push() and pop() work on the end of the array. unshift() and shift() work on the start. They cancel each other out here, so arr ends up back at [2, 4, 6].",
  },
  {
    id: 4,
    category: "Arrays",
    type: "theory",
    level: "Intermediate",
    question: "What is the key difference between unshift() and push()?",
    options: [
      "unshift() adds to the start of the array, push() adds to the end",
      "unshift() only works on strings",
      "push() returns a new array, unshift() mutates the original",
      "There is no difference, they are aliases",
    ],
    correctIndex: 0,
    explanation:
      "unshift() inserts elements at the beginning of the array (shifting every existing index up), while push() appends to the end.",
  },
  {
    id: 5,
    category: "Arrays",
    type: "theory",
    level: "Intermediate",
    question: "How is find() different from filter()?",
    options: [
      "find() returns a boolean, filter() returns a number",
      "find() returns the first matching element (or undefined), filter() returns a new array of all matches",
      "filter() mutates the original array, find() does not",
      "They behave identically",
    ],
    correctIndex: 1,
    explanation:
      "find() stops as soon as it locates the first matching element and returns that single element (or undefined if none match). filter() checks every element and returns a new array containing all matches.",
  },
  {
    id: 6,
    category: "Arrays",
    type: "practical",
    level: "Intermediate",
    answerType: "code",
    question:
      "Write code that returns the first even number in an array using find(), and also a version using filter() to get all even numbers.",
    code: `const numbers = [3, 7, 8, 12, 15, 20];

// find() -> first match only
const firstEven = numbers.find((n) => n % 2 === 0);
console.log(firstEven); // 8

// filter() -> all matches
const allEvens = numbers.filter((n) => n % 2 === 0);
console.log(allEvens); // [8, 12, 20]`,
    note: "Use find() when you only need one result and want to stop early. Use filter() when you need every matching element.",
  },
  {
    id: 7,
    category: "Arrays",
    type: "practical",
    level: "Intermediate",
    answerType: "code",
    question: "Write a function that removes duplicate values from an array.",
    code: `function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
// [1, 2, 3, 4, 5]`,
    note: "A Set only stores unique values, so spreading it back into an array is the shortest way to dedupe. filter() + indexOf() also works but is O(n^2).",
  },

  // ===================== LOOPS =====================
  {
    id: 8,
    category: "Loops",
    type: "theory",
    level: "Beginner",
    question: "What is the difference between for...of and for...in?",
    options: [
      "for...of iterates over values, for...in iterates over keys/indexes",
      "for...in is used only for arrays, for...of only for objects",
      "They are interchangeable in every case",
      "for...of works only on strings",
    ],
    correctIndex: 0,
    explanation:
      "for...of gives you the values of an iterable (arrays, strings, Maps, Sets). for...in gives you the enumerable property keys of an object (and array indexes as strings).",
  },
  {
    id: 9,
    category: "Loops",
    type: "practical",
    level: "Intermediate",
    answerType: "code",
    question: "Write code to print the square of each number from 1 to 5 using a loop.",
    code: `// Using a classic for loop
for (let i = 1; i <= 5; i++) {
  console.log(i * i);
}

// Using forEach
[1, 2, 3, 4, 5].forEach((n) => console.log(n * n));`,
    note: "A classic for loop gives you full control (break/continue). forEach() is more readable but can't be stopped early.",
  },
  {
    id: 10,
    category: "Loops",
    type: "theory",
    level: "Intermediate",
    question: "Can you use break to stop a forEach() loop early?",
    options: [
      "Yes, break works inside forEach() just like a for loop",
      "No, break/continue don't work inside forEach() - use a for loop or for...of if you need to stop early",
      "Only in strict mode",
      "Only if the array has fewer than 10 elements",
    ],
    correctIndex: 1,
    explanation:
      "forEach() always runs its callback for every element and doesn't support break or continue. If you need to exit early, use a for, for...of, or every()/some().",
  },

  // ===================== PROMISES =====================
  {
    id: 11,
    category: "Promises",
    type: "theory",
    level: "Beginner",
    question: "What are the three possible states of a Promise?",
    options: [
      "started, running, finished",
      "pending, fulfilled, rejected",
      "waiting, success, error",
      "open, closed, cancelled",
    ],
    correctIndex: 1,
    explanation:
      "A Promise starts as pending. It then settles to either fulfilled (resolved with a value) or rejected (with a reason/error), and can never change state again after settling.",
  },
  {
    id: 12,
    category: "Promises",
    type: "theory",
    level: "Intermediate",
    question: "What happens with Promise.all() if one of the promises rejects?",
    options: [
      "It ignores the rejected one and resolves with the rest",
      "It waits for all promises regardless of failures",
      "It immediately rejects with that reason, even if other promises are still pending",
      "It retries the failed promise automatically",
    ],
    correctIndex: 2,
    explanation:
      "Promise.all() is all-or-nothing: as soon as any promise in the array rejects, Promise.all() rejects immediately with that reason. Use Promise.allSettled() if you want results from every promise regardless of failure.",
  },
  {
    id: 13,
    category: "Promises",
    type: "practical",
    level: "Advanced",
    answerType: "code",
    question: "Write a Promise chain that reads a user ID, then fetches the user, then fetches their posts.",
    code: `function getUserId() {
  return Promise.resolve(101);
}

function getUser(id) {
  return fetch(\`/api/users/\${id}\`).then((res) => res.json());
}

function getPosts(user) {
  return fetch(\`/api/users/\${user.id}/posts\`).then((res) => res.json());
}

getUserId()
  .then(getUser)
  .then(getPosts)
  .then((posts) => console.log(posts))
  .catch((err) => console.error("Something failed:", err));`,
    note: "Each .then() returns a new promise, so you can chain async steps in sequence. A single .catch() at the end handles errors from any step in the chain.",
  },

  // ===================== ASYNC / AWAIT =====================
  {
    id: 14,
    category: "Async/Await",
    type: "theory",
    level: "Beginner",
    question: "What does an async function always return?",
    options: [
      "The raw value you return inside it",
      "undefined",
      "A Promise, which resolves with the returned value",
      "A callback function",
    ],
    correctIndex: 2,
    explanation:
      "Declaring a function async automatically wraps its return value in a Promise. If you return a plain value, it becomes Promise.resolve(value); if you throw, it becomes a rejected Promise.",
  },
  {
    id: 15,
    category: "Async/Await",
    type: "theory",
    level: "Intermediate",
    question: "What does the await keyword do?",
    options: [
      "Pauses the entire application until the promise resolves",
      "Pauses execution of the async function until the promise settles, then returns the resolved value (or throws on rejection)",
      "Converts a promise into a callback",
      "Cancels a pending promise",
    ],
    correctIndex: 1,
    explanation:
      "await can only be used inside an async function. It pauses that function (without blocking the rest of the app) until the awaited promise settles, then unwraps the value - or throws if the promise rejected.",
  },
  {
    id: 16,
    category: "Async/Await",
    type: "practical",
    level: "Intermediate",
    answerType: "code",
    question:
      "This code has a bug - it doesn't handle a failed request. Fix it using try/catch:\n\nasync function loadUser(id) {\n  const res = await fetch(`/api/users/${id}`);\n  const data = await res.json();\n  return data;\n}",
    code: `async function loadUser(id) {
  try {
    const res = await fetch(\`/api/users/\${id}\`);
    if (!res.ok) {
      throw new Error(\`Request failed with status \${res.status}\`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Failed to load user:", err.message);
    return null;
  }
}`,
    note: "Without try/catch, a network failure or a thrown error inside the async function becomes an unhandled promise rejection. Also note fetch() does not reject on HTTP error codes - you must check res.ok yourself.",
  },
  {
    id: 17,
    category: "Async/Await",
    type: "practical",
    level: "Advanced",
    answerType: "code",
    question:
      "Rewrite this promise chain using async/await:\n\ngetUserId().then(getUser).then(getPosts).then(console.log).catch(console.error);",
    code: `async function loadUserPosts() {
  try {
    const id = await getUserId();
    const user = await getUser(id);
    const posts = await getPosts(user);
    console.log(posts);
  } catch (err) {
    console.error(err);
  }
}`,
    note: "async/await lets you write asynchronous steps top-to-bottom like synchronous code, while try/catch replaces .catch() for error handling.",
  },

  // ===================== FETCH API =====================
  {
    id: 18,
    category: "Fetch API",
    type: "theory",
    level: "Beginner",
    question: "What does fetch() return?",
    options: [
      "The parsed JSON data directly",
      "A Promise that resolves with a Response object",
      "A plain object with status and body",
      "An XMLHttpRequest instance",
    ],
    correctIndex: 1,
    explanation:
      "fetch() returns a Promise that resolves to a Response object once the HTTP response headers arrive. You still need to call a method like .json() or .text() (which itself returns a promise) to read the body.",
  },
  {
    id: 19,
    category: "Fetch API",
    type: "practical",
    level: "Intermediate",
    answerType: "code",
    question: "Write an async function that fetches a list of products and handles both network and HTTP errors.",
    code: `async function getProducts() {
  try {
    const res = await fetch("/api/products");

    if (!res.ok) {
      throw new Error(\`Server responded with \${res.status}\`);
    }

    const products = await res.json();
    return products;
  } catch (err) {
    console.error("Could not load products:", err.message);
    return [];
  }
}`,
    note: "Two failure modes to handle: fetch() rejects on network failure (e.g. offline), and it resolves normally even for 404/500 - so checking res.ok is required to catch HTTP errors.",
  },
  {
    id: 20,
    category: "Fetch API",
    type: "theory",
    level: "Advanced",
    question: "Why doesn't fetch() reject the promise for a 404 or 500 response?",
    options: [
      "It's a bug in the Fetch API that hasn't been fixed",
      "fetch() only rejects on network-level failures (like DNS errors or being offline); it treats any received HTTP response, even an error status, as a successful fetch",
      "It only rejects for 500 errors, not 404",
      "fetch() automatically retries failed requests instead of rejecting",
    ],
    correctIndex: 1,
    explanation:
      "By design, fetch() considers 'the request completed and I got a response' a success, regardless of the status code. That's why you must always check response.ok or response.status yourself before trusting the body.",
  },
];

export default interviewQuestions;