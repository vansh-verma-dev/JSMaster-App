import { Braces, Code2, Layers, Terminal, Timer } from "lucide-react";

export const TOPICS = [
  {
    id: "variables",
    num: "01",
    title: "Variables & Data Types",
    tag: "Fundamentals",
    icon: Braces,
    summary: "var, let, const and the types JavaScript actually has.",
    definition:
      "A variable is a named container for a value. JavaScript gives you three ways to declare one — var, let and const — and every value at runtime is one of a small set of types: string, number, boolean, null, undefined, symbol, bigint, or object.",
    why:
      "Picking the right declaration controls where a variable lives and whether it can be reassigned. const communicates intent, let allows re-assignment inside a scope, and var (mostly avoided today) is function-scoped and hoisted, which causes subtle bugs.",
    example: `const price = 499;\nlet quantity = 2;\nconst total = price * quantity;\n\nconsole.log(typeof price);    // "number"\nconsole.log(typeof total);    // "number"\n\nquantity = 3; // ✅ let can be reassigned\n// price = 599; // ❌ TypeError: Assignment to constant`,
    practice:
      "Declare a const named user with a name and age, then write a function that returns a greeting string using template literals.",
    interview: [
      "What is the difference between let, const and var in terms of scope and hoisting?",
      "Why does typeof null return \"object\"?",
      "What's the difference between undefined and not defined?",
    ],
  },
  {
    id: "functions",
    num: "02",
    title: "Functions",
    tag: "Fundamentals",
    icon: Code2,
    summary: "Declarations, expressions, arrow functions and closures.",
    definition:
      "A function is a reusable block of code. JavaScript treats functions as first-class values — they can be stored in variables, passed as arguments, and returned from other functions.",
    why:
      "Functions are how you break a program into small, testable pieces. Understanding closures — a function remembering the scope it was created in — unlocks patterns like private state and callbacks.",
    example: `function makeCounter() {\n  let count = 0;\n  return () => ++count;\n}\n\nconst counter = makeCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2`,
    practice:
      "Write a function debounce(fn, delay) that returns a new function which only calls fn after delay ms of silence.",
    interview: [
      "What is a closure, and can you give a real use case?",
      "How do arrow functions handle `this` differently from regular functions?",
      "What's the difference between a function declaration and a function expression?",
    ],
  },
  {
    id: "arrays",
    num: "03",
    title: "Arrays",
    tag: "Data structures",
    icon: Layers,
    summary: "map, filter, reduce and the methods you'll use daily.",
    definition:
      "An array is an ordered list of values. Modern JavaScript ships a rich set of higher-order methods — map, filter, reduce, find, some, every — for transforming arrays without manual loops.",
    why:
      "Array methods make data transformations declarative and easy to read. reduce alone can replace most loops you'd otherwise write by hand, and chaining methods reads like a pipeline of the actual business logic.",
    example: `const cart = [{ price: 200 }, { price: 150 }, { price: 90 }];\n\nconst total = cart\n  .filter(item => item.price > 100)\n  .reduce((sum, item) => sum + item.price, 0);\n\nconsole.log(total); // 350`,
    practice:
      "Given an array of student objects { name, marks }, return the names of students who scored above 80, sorted alphabetically.",
    interview: [
      "What's the difference between map and forEach?",
      "How does reduce work — can you implement your own map using reduce?",
      "What is the time complexity of Array.prototype.includes and when would you use a Set instead?",
    ],
  },
  {
    id: "objects",
    num: "04",
    title: "Objects",
    tag: "Data structures",
    icon: Terminal,
    summary: "Object literals, destructuring, spread and prototypes.",
    definition:
      "An object stores data as key-value pairs. Destructuring lets you pull values out into variables, spread/rest let you copy or merge objects, and every object links to a prototype it inherits from.",
    why:
      "Most real-world data — API responses, component props, form state — is modelled as objects. Comfort with destructuring and spread is what makes modern JS code compact and readable.",
    example: `const user = { name: "Riya", age: 22, city: "Agra" };\nconst { name, ...rest } = user;\n\nconst updated = { ...user, age: 23 };\n\nconsole.log(name);    // "Riya"\nconsole.log(updated); // { name:"Riya", age:23, city:"Agra" }`,
    practice:
      "Write a function mergeConfigs(defaults, overrides) that returns a new object where overrides win, without mutating either input.",
    interview: [
      "What's the difference between Object.freeze and const for an object?",
      "How does the spread operator differ from Object.assign?",
      "Explain prototypal inheritance in your own words.",
    ],
  },
  {
    id: "async",
    num: "05",
    title: "Promises & Async/Await",
    tag: "Asynchronous JS",
    icon: Timer,
    summary: "How JavaScript handles work that takes time.",
    definition:
      "A Promise represents a value that will exist eventually — pending, fulfilled, or rejected. async/await is syntax sugar over promises that lets asynchronous code read like synchronous code.",
    why:
      "Almost every real app talks to a network at some point. Understanding the event loop, microtasks, and error handling with try/catch is what separates code that merely works from code that handles failure gracefully.",
    example: `async function getUser(id) {\n  try {\n    const res = await fetch(\`/api/users/\${id}\`);\n    if (!res.ok) throw new Error("Request failed");\n    return await res.json();\n  } catch (err) {\n    console.error(err.message);\n  }\n}`,
    practice:
      "Write a function fetchWithTimeout(url, ms) that rejects if the request takes longer than ms milliseconds.",
    interview: [
      "What's the difference between the microtask queue and the macrotask (callback) queue?",
      "How do you run several promises in parallel and wait for all of them?",
      "What happens if you forget to await an async function call?",
    ],
  },
];
