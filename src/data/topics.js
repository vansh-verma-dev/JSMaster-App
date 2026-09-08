/**
 * jsDocs.js — tutorial-style JavaScript reference content.
 * Each topic has a short definition plus a series of sections, each with
 * an explanation and (optionally) a code example to illustrate it.
 */
const jsDocs = [
  {
    id: "intro",
    title: "Introduction to JavaScript",
    category: "Basics",
    definition:
      "JavaScript is a lightweight, interpreted programming language that runs in the browser (and on servers via Node.js) to make web pages interactive.",
    sections: [
      {
        heading: "What JavaScript does",
        text: "HTML builds the structure of a page and CSS styles it, but JavaScript is what makes it interactive — responding to clicks, updating content without reloading, validating forms, and much more.",
      },
      {
        heading: "Your first script",
        text: "JavaScript code can live inside a <script> tag or a separate .js file linked to your HTML.",
        code: `console.log("Hello, JSMaster!");`,
      },
      {
        heading: "Where code runs",
        text: "In the browser, JavaScript runs in the console (open DevTools with F12) — a great place to experiment with small snippets.",
      },
    ],
  },
  {
    id: "variables",
    title: "Variables (var, let, const)",
    category: "Basics",
    definition:
      "Variables store data values. Modern JavaScript uses let and const; var is the older way and is mostly avoided in new code.",
    sections: [
      {
        heading: "let — can be reassigned",
        text: "Use let when the value needs to change later.",
        code: `let score = 10;\nscore = 20; // allowed`,
      },
      {
        heading: "const — cannot be reassigned",
        text: "Use const by default. It prevents the variable from being reassigned (though objects/arrays it points to can still be mutated).",
        code: `const name = "Vansh";\n// name = "Rahul"; // ❌ TypeError`,
      },
      {
        heading: "Why avoid var",
        text: "var is function-scoped (not block-scoped) and can be redeclared, which leads to confusing bugs — let and const fix both issues.",
        code: `if (true) {\n  var x = 1;\n}\nconsole.log(x); // 1 — leaks outside the block!`,
      },
    ],
  },
  {
    id: "data-types",
    title: "Data Types",
    category: "Basics",
    definition:
      "JavaScript has a handful of primitive types (string, number, boolean, null, undefined, symbol, bigint) plus the object type for everything else.",
    sections: [
      {
        heading: "Primitives",
        text: "The most commonly used primitive types you'll work with daily.",
        code: `let name = "Vansh";     // string\nlet age = 22;           // number\nlet isStudent = true;   // boolean\nlet nothing = null;     // intentional empty value\nlet notSet;              // undefined`,
      },
      {
        heading: "typeof operator",
        text: "Use typeof to check a value's type at runtime.",
        code: `typeof "hello";  // "string"\ntypeof 42;       // "number"\ntypeof true;     // "boolean"`,
      },
      {
        heading: "Objects and arrays",
        text: "Everything that isn't a primitive is an object — including arrays, which are technically a special kind of object.",
        code: `let user = { name: "Vansh", age: 22 };\nlet fruits = ["apple", "banana"];`,
      },
    ],
  },
  {
    id: "operators",
    title: "Operators",
    category: "Basics",
    definition:
      "Operators perform actions on values — arithmetic, comparison, logical, and assignment operators are the ones you'll use most.",
    sections: [
      {
        heading: "Arithmetic",
        text: "Standard math operators, plus the remainder (%) operator for finding leftovers after division.",
        code: `5 + 3;   // 8\n10 % 3;  // 1 (remainder)\n2 ** 3;  // 8 (exponent)`,
      },
      {
        heading: "Comparison",
        text: "=== checks value AND type (strict equality) — always prefer it over == which allows type coercion.",
        code: `5 === "5";  // false (different types)\n5 == "5";   // true (coerced — avoid this)`,
      },
      {
        heading: "Logical",
        text: "&& (and), || (or), and ! (not) combine boolean expressions.",
        code: `let age = 20;\nage >= 18 && age <= 65; // true`,
      },
    ],
  },
  {
    id: "conditionals",
    title: "Conditional Statements",
    category: "Control Flow",
    definition:
      "Conditionals let your code make decisions — running different blocks based on whether a condition is true or false.",
    sections: [
      {
        heading: "if / else if / else",
        text: "The most common way to branch logic based on conditions.",
        code: `let age = 20;\nif (age < 13) {\n  console.log("Child");\n} else if (age < 18) {\n  console.log("Teen");\n} else {\n  console.log("Adult");\n}`,
      },
      {
        heading: "switch",
        text: "Cleaner than long if/else chains when comparing one value against many possibilities.",
        code: `switch (day) {\n  case "Mon":\n    console.log("Start of week");\n    break;\n  default:\n    console.log("Another day");\n}`,
      },
      {
        heading: "Ternary operator",
        text: "A compact one-line if/else for simple conditions.",
        code: `let status = age >= 18 ? "Adult" : "Minor";`,
      },
    ],
  },
  {
    id: "loops",
    title: "Loops",
    category: "Control Flow",
    definition:
      "Loops repeat a block of code multiple times — essential for processing arrays, generating sequences, and more.",
    sections: [
      {
        heading: "for loop",
        text: "Best when you know exactly how many times to repeat.",
        code: `for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}`,
      },
      {
        heading: "while loop",
        text: "Repeats as long as a condition stays true — useful when the number of iterations isn't known upfront.",
        code: `let count = 0;\nwhile (count < 3) {\n  console.log(count);\n  count++;\n}`,
      },
      {
        heading: "for...of (arrays)",
        text: "The cleanest way to loop over array values directly.",
        code: `const fruits = ["apple", "banana"];\nfor (const fruit of fruits) {\n  console.log(fruit);\n}`,
      },
    ],
  },
  {
    id: "functions",
    title: "Functions",
    category: "Functions",
    definition:
      "Functions are reusable blocks of code that take inputs (parameters) and can return an output. They're the core building block of any JS program.",
    sections: [
      {
        heading: "Function declaration",
        text: "The classic way to define a named function.",
        code: `function greet(name) {\n  return "Hello, " + name;\n}\ngreet("Vansh"); // "Hello, Vansh"`,
      },
      {
        heading: "Arrow functions",
        text: "A shorter modern syntax, especially handy for small callback functions.",
        code: `const add = (a, b) => a + b;\nadd(2, 3); // 5`,
      },
      {
        heading: "Default parameters",
        text: "Give a parameter a fallback value if none is passed in.",
        code: `function greet(name = "Guest") {\n  return "Hello, " + name;\n}\ngreet(); // "Hello, Guest"`,
      },
    ],
  },
  {
    id: "arrays",
    title: "Arrays",
    category: "Data Structures",
    definition:
      "Arrays store ordered lists of values, accessible by a zero-based numeric index.",
    sections: [
      {
        heading: "Creating and accessing",
        text: "Arrays are created with square brackets, and elements accessed by index starting at 0.",
        code: `const fruits = ["apple", "banana", "mango"];\nfruits[0]; // "apple"\nfruits.length; // 3`,
      },
      {
        heading: "Adding and removing",
        text: "push/pop work on the end; shift/unshift work on the start.",
        code: `fruits.push("kiwi");   // add to end\nfruits.pop();          // remove from end\nfruits.unshift("fig"); // add to start`,
      },
      {
        heading: "Checking membership",
        text: "includes() checks if a value exists; indexOf() returns its position (or -1).",
        code: `fruits.includes("banana"); // true\nfruits.indexOf("mango");   // 2`,
      },
    ],
  },
  {
    id: "objects",
    title: "Objects",
    category: "Data Structures",
    definition:
      "Objects store data as key-value pairs, letting you group related information together under one variable.",
    sections: [
      {
        heading: "Creating and accessing",
        text: "Access properties with dot notation or bracket notation (bracket notation is required for dynamic keys).",
        code: `const user = { name: "Vansh", age: 22 };\nuser.name;       // "Vansh"\nuser["age"];     // 22`,
      },
      {
        heading: "Adding and updating",
        text: "Just assign to a new or existing key.",
        code: `user.city = "Delhi"; // adds a new property\nuser.age = 23;       // updates existing`,
      },
      {
        heading: "Object methods",
        text: "Object.keys/values/entries are handy for looping over an object's contents.",
        code: `Object.keys(user);   // ["name","age","city"]\nObject.values(user); // ["Vansh",23,"Delhi"]`,
      },
    ],
  },
  {
    id: "strings",
    title: "Strings",
    category: "Data Structures",
    definition:
      "Strings represent text. JavaScript provides many built-in methods for searching, transforming, and formatting them.",
    sections: [
      {
        heading: "Common methods",
        text: "Some of the most frequently used string methods.",
        code: `"hello".toUpperCase();     // "HELLO"\n"  hi  ".trim();           // "hi"\n"hello world".split(" ");  // ["hello","world"]`,
      },
      {
        heading: "Template literals",
        text: "Backtick strings let you embed expressions directly using \${} — no more messy concatenation.",
        code: `const name = "Vansh";\nconsole.log(\`Hello, \${name}!\`);`,
      },
      {
        heading: "Searching",
        text: "includes(), startsWith(), and endsWith() check for substrings.",
        code: `"JavaScript".includes("Script"); // true`,
      },
    ],
  },
  {
    id: "array-methods",
    title: "Array Methods (map, filter, reduce)",
    category: "Intermediate",
    definition:
      "map, filter, and reduce are higher-order array methods that replace most manual for-loops with cleaner, more expressive code.",
    sections: [
      {
        heading: "map — transform every item",
        text: "Returns a new array with a function applied to every element.",
        code: `const nums = [1, 2, 3];\nconst doubled = nums.map((n) => n * 2);\n// [2, 4, 6]`,
      },
      {
        heading: "filter — keep some items",
        text: "Returns a new array containing only elements that pass a test.",
        code: `const evens = nums.filter((n) => n % 2 === 0);\n// [2]`,
      },
      {
        heading: "reduce — combine into one value",
        text: "Reduces the whole array down to a single accumulated value.",
        code: `const sum = nums.reduce((total, n) => total + n, 0);\n// 6`,
      },
    ],
  },
  {
    id: "destructuring",
    title: "Destructuring & Spread/Rest",
    category: "Intermediate",
    definition:
      "Destructuring unpacks values from arrays/objects into variables; spread and rest use the ... syntax to expand or collect values.",
    sections: [
      {
        heading: "Array destructuring",
        text: "Pull values out of an array by position.",
        code: `const [first, second] = ["a", "b"];\n// first = "a", second = "b"`,
      },
      {
        heading: "Object destructuring",
        text: "Pull values out of an object by key name.",
        code: `const { name, age } = { name: "Vansh", age: 22 };`,
      },
      {
        heading: "Spread and rest",
        text: "Spread expands a collection; rest gathers remaining items into one.",
        code: `const arr = [1, 2, 3];\nconst copy = [...arr, 4]; // [1,2,3,4]\n\nfunction sum(...nums) {\n  return nums.reduce((a, b) => a + b, 0);\n}`,
      },
    ],
  },
  {
    id: "dom",
    title: "DOM Manipulation",
    category: "Browser",
    definition:
      "The DOM (Document Object Model) is how JavaScript sees and interacts with an HTML page — selecting, reading, and updating elements.",
    sections: [
      {
        heading: "Selecting elements",
        text: "querySelector finds the first matching element; querySelectorAll finds all matches.",
        code: `const heading = document.querySelector("h1");\nconst items = document.querySelectorAll(".item");`,
      },
      {
        heading: "Changing content",
        text: "textContent updates plain text; innerHTML updates markup (use carefully — it can introduce XSS risks with untrusted input).",
        code: `heading.textContent = "Welcome!";`,
      },
      {
        heading: "Changing styles/classes",
        text: "classList lets you add, remove, or toggle CSS classes cleanly.",
        code: `heading.classList.add("highlight");\nheading.classList.toggle("active");`,
      },
    ],
  },
  {
    id: "events",
    title: "Events",
    category: "Browser",
    definition:
      "Events let your code respond to user actions — clicks, key presses, form submissions, and more — using event listeners.",
    sections: [
      {
        heading: "Adding a listener",
        text: "addEventListener attaches a function that runs when the event fires.",
        code: `button.addEventListener("click", () => {\n  console.log("Clicked!");\n});`,
      },
      {
        heading: "The event object",
        text: "The listener receives an event object with useful details, like which key was pressed.",
        code: `input.addEventListener("keydown", (e) => {\n  console.log(e.key);\n});`,
      },
      {
        heading: "Preventing default behavior",
        text: "Useful for stopping a form from reloading the page on submit.",
        code: `form.addEventListener("submit", (e) => {\n  e.preventDefault();\n});`,
      },
    ],
  },
  {
    id: "closures",
    title: "Closures",
    category: "Advanced",
    definition:
      "A closure is a function that remembers the variables from the scope it was created in, even after that outer function has finished running.",
    sections: [
      {
        heading: "Basic example",
        text: "The inner function keeps access to 'count' even after outer() has already returned.",
        code: `function outer() {\n  let count = 0;\n  return function () {\n    count++;\n    return count;\n  };\n}\nconst counter = outer();\ncounter(); // 1\ncounter(); // 2`,
      },
      {
        heading: "Why it's useful",
        text: "Closures are the foundation behind private variables, memoization, and function factories in JavaScript.",
      },
    ],
  },
  {
    id: "promises-async",
    title: "Promises & Async/Await",
    category: "Advanced",
    definition:
      "Promises represent a value that will be available in the future (like data from a network request). async/await is modern, cleaner syntax built on top of promises.",
    sections: [
      {
        heading: "A basic Promise",
        text: "A Promise is either pending, resolved (success), or rejected (failure).",
        code: `const wait = new Promise((resolve) => {\n  setTimeout(() => resolve("Done!"), 1000);\n});\nwait.then((result) => console.log(result));`,
      },
      {
        heading: "async/await",
        text: "await pauses execution inside an async function until the promise resolves, making async code read like normal synchronous code.",
        code: `async function getData() {\n  const res = await fetch("/api/users");\n  const data = await res.json();\n  return data;\n}`,
      },
      {
        heading: "Error handling",
        text: "Wrap awaited calls in try/catch to handle rejections gracefully.",
        code: `async function getData() {\n  try {\n    const res = await fetch("/api/users");\n    return await res.json();\n  } catch (err) {\n    console.error("Failed:", err);\n  }\n}`,
      },
    ],
  },
];

export default jsDocs;