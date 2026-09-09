 
const jsDocs = [
  // ===================== BASICS =====================
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
        text: "In the browser, JavaScript runs in the console (open DevTools with F12) — a great place to experiment with small snippets. It can also run outside the browser using Node.js.",
      },
      {
        heading: "Case sensitivity",
        text: "JavaScript is case-sensitive — myVar and myvar are two completely different variables. Statements are usually written one per line and typically end with a semicolon.",
        code: `let myVar = 1;\nlet myvar = 2;\nconsole.log(myVar, myvar); // 1 2 — different variables`,
      },
    ],
  },
  {
    id: "hello-world",
    title: "Hello World & Comments",
    category: "Basics",
    definition:
      "The classic first program in any language, plus comments — notes in your code that JavaScript ignores when running.",
    sections: [
      {
        heading: "Printing output",
        text: "console.log() prints values to the browser console, which is the most common way to check what your code is doing.",
        code: `console.log("Hello, World!");`,
      },
      {
        heading: "Single-line comments",
        text: "Use // for a comment that runs to the end of the line. Comments explain your code without affecting how it runs.",
        code: `// This calculates the total price\nconst total = 100 + 20;`,
      },
      {
        heading: "Multi-line comments",
        text: "Use /* ... */ to comment out a block spanning several lines.",
        code: `/*\n  This function greets a user\n  by their first name.\n*/\nfunction greet(name) {\n  return "Hi " + name;\n}`,
      },
      {
        heading: "Good practice",
        text: "Use comments to explain *why* something is done, not *what* the code obviously already says — over-commenting clutters code just as much as under-commenting.",
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
        code: `const name = "Vansh";\n// name = "Rahul"; // ❌ TypeError\n\nconst user = { age: 22 };\nuser.age = 23; // ✅ allowed — object contents can change`,
      },
      {
        heading: "Why avoid var",
        text: "var is function-scoped (not block-scoped) and can be redeclared, which leads to confusing bugs — let and const fix both issues.",
        code: `if (true) {\n  var x = 1;\n}\nconsole.log(x); // 1 — leaks outside the block!`,
      },
      {
        heading: "Choosing between them",
        text: "A common rule of thumb: use const by default, switch to let only when you know the value will change, and avoid var entirely in new code.",
      },
    ],
  },
  {
    id: "variable-naming",
    title: "Variable Naming Rules",
    category: "Basics",
    definition:
      "JavaScript has strict rules for what a variable name can contain, plus popular conventions the community follows for readability.",
    sections: [
      {
        heading: "The rules",
        text: "Names can contain letters, digits, underscores, and dollar signs, but can't start with a digit and can't be a reserved word like 'let' or 'function'.",
        code: `let userName = "ok";   // ✅\nlet _private = "ok";   // ✅\nlet $price = "ok";     // ✅\n// let 1st = "no";     // ❌ can't start with a number`,
      },
      {
        heading: "camelCase convention",
        text: "JavaScript convention is camelCase for variables and functions — the first word lowercase, each following word capitalized.",
        code: `let firstName = "Vansh";\nfunction getUserData() {}`,
      },
      {
        heading: "Naming for readability",
        text: "Prefer descriptive names over short cryptic ones. 'daysUntilExpiry' is far clearer than 'd' or 'temp'.",
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
        heading: "null vs undefined",
        text: "undefined means a variable has been declared but not given a value. null is a value you assign deliberately to represent 'nothing here on purpose'.",
        code: `let a;\nconsole.log(a); // undefined\n\nlet b = null;\nconsole.log(b); // null`,
      },
      {
        heading: "Symbol and BigInt",
        text: "Symbol() creates a guaranteed-unique value, often used as a hidden object key. BigInt (written with an 'n' suffix) represents integers larger than Number can safely hold.",
        code: `const id = Symbol("id");\nconst big = 9007199254740993n;`,
      },
      {
        heading: "typeof operator",
        text: "Use typeof to check a value's type at runtime.",
        code: `typeof "hello";  // "string"\ntypeof 42;       // "number"\ntypeof true;     // "boolean"\ntypeof undefined;// "undefined"\ntypeof null;     // "object" (a well-known historical bug)`,
      },
      {
        heading: "Objects and arrays",
        text: "Everything that isn't a primitive is an object — including arrays, which are technically a special kind of object.",
        code: `let user = { name: "Vansh", age: 22 };\nlet fruits = ["apple", "banana"];`,
      },
    ],
  },
  {
    id: "type-conversion",
    title: "Type Conversion & Coercion",
    category: "Basics",
    definition:
      "Type conversion is manually changing a value's type; type coercion is JavaScript doing it automatically behind the scenes.",
    sections: [
      {
        heading: "Manual conversion",
        text: "Use built-in functions to explicitly convert between types.",
        code: `String(123);     // "123"\nNumber("123");   // 123\nBoolean(0);      // false\nBoolean("hi");   // true`,
      },
      {
        heading: "Automatic coercion",
        text: "JavaScript silently converts types when operators mix different types — this is a common source of bugs.",
        code: `"5" + 1;   // "51" (number turned into a string)\n"5" - 1;   // 4   (string turned into a number)\ntrue + 1;  // 2`,
      },
      {
        heading: "Common mistake",
        text: "The + operator prefers string concatenation if either side is a string, but - and * always try to convert to numbers. Use Number() explicitly when reading user input to avoid surprises.",
        code: `const input = "10"; // from a form field\nconst total = Number(input) + 5; // 15, not "105"`,
      },
    ],
  },
  {
    id: "truthy-falsy",
    title: "Truthy and Falsy Values",
    category: "Basics",
    definition:
      "Every value in JavaScript is 'truthy' or 'falsy' when used in a boolean context, like an if condition — even if it isn't a real boolean.",
    sections: [
      {
        heading: "The falsy values",
        text: "There are only a handful of falsy values in JavaScript — everything else is truthy.",
        code: `// Falsy: false, 0, -0, "", null, undefined, NaN\nif (0) console.log("never runs");\nif ("") console.log("never runs");`,
      },
      {
        heading: "Everything else is truthy",
        text: "This includes non-empty strings, any object or array (even an empty one!), and any non-zero number.",
        code: `if ([]) console.log("runs — empty array is truthy");\nif ("0") console.log("runs — non-empty string is truthy");`,
      },
      {
        heading: "Practical use",
        text: "This is why you can write 'if (value)' to check for missing data instead of a longer comparison.",
        code: `function greet(name) {\n  if (!name) {\n    return "Hello, Guest";\n  }\n  return "Hello, " + name;\n}`,
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
        heading: "Assignment",
        text: "Beyond the basic =, shorthand operators update a variable based on its current value.",
        code: `let x = 10;\nx += 5;  // x = x + 5  → 15\nx -= 3;  // x = x - 3  → 12\nx *= 2;  // x = x * 2  → 24`,
      },
      {
        heading: "Comparison & strict equality",
        text: "=== checks value AND type (strict equality) — always prefer it over == which allows type coercion.",
        code: `5 === "5";  // false (different types)\n5 == "5";   // true (coerced — avoid this)\n5 !== "5";  // true`,
      },
      {
        heading: "Logical operators",
        text: "&& (and), || (or), and ! (not) combine boolean expressions.",
        code: `let age = 20;\nage >= 18 && age <= 65; // true\nage < 13 || age > 60;   // false`,
      },
      {
        heading: "Nullish coalescing (??) and optional chaining (?.)",
        text: "?? returns the right side only when the left is null or undefined (unlike || which also triggers on 0 or ''). ?. safely accesses a nested property without throwing if something along the way is missing.",
        code: `const count = 0;\ncount ?? 10;    // 0  (?? ignores 0, it's not null/undefined)\ncount || 10;    // 10 (|| treats 0 as falsy — different result!)\n\nconst user = {};\nuser.address?.city; // undefined, no error`,
      },
      {
        heading: "Increment/decrement & precedence",
        text: "++ and -- add or subtract 1. Operator precedence determines evaluation order — multiplication runs before addition, just like in math, and parentheses always override precedence.",
        code: `let i = 5;\ni++; // 6\ni--; // back to 5\n\n2 + 3 * 4;   // 14, not 20\n(2 + 3) * 4; // 20`,
      },
    ],
  },
  {
    id: "template-literals",
    title: "Template Literals & Expressions",
    category: "Basics",
    definition:
      "Template literals use backticks to build strings with embedded expressions and multi-line text, replacing older concatenation with +.",
    sections: [
      {
        heading: "String interpolation",
        text: "Anything inside \${} is evaluated as a JavaScript expression and inserted into the string.",
        code: `const name = "Vansh";\nconst age = 22;\nconsole.log(\`\${name} is \${age} years old.\`);`,
      },
      {
        heading: "Multi-line strings",
        text: "Template literals can span multiple lines without needing \\n.",
        code: `const message = \`Line one\nLine two\`;`,
      },
      {
        heading: "Expressions, not just variables",
        text: "You can put any expression inside \${} — including function calls and math.",
        code: `const price = 100;\nconst tax = 0.18;\nconsole.log(\`Total: $\${(price + price * tax).toFixed(2)}\`);`,
      },
    ],
  },

  // ===================== CONTROL FLOW =====================
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
        text: "Cleaner than long if/else chains when comparing one value against many possibilities. Don't forget break, or execution 'falls through' into the next case.",
        code: `switch (day) {\n  case "Mon":\n    console.log("Start of week");\n    break;\n  case "Fri":\n    console.log("Almost weekend");\n    break;\n  default:\n    console.log("Another day");\n}`,
      },
      {
        heading: "Ternary operator",
        text: "A compact one-line if/else for simple conditions. condition ? valueIfTrue : valueIfFalse.",
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
        heading: "while and do...while",
        text: "while checks the condition before each run; do...while always runs at least once because it checks the condition after.",
        code: `let count = 0;\nwhile (count < 3) {\n  console.log(count);\n  count++;\n}\n\ndo {\n  console.log("runs at least once");\n} while (false);`,
      },
      {
        heading: "for...of (values) and for...in (keys)",
        text: "for...of loops over the values of an iterable like an array or string. for...in loops over the enumerable keys of an object (avoid using it on arrays).",
        code: `const fruits = ["apple", "banana"];\nfor (const fruit of fruits) {\n  console.log(fruit); // "apple", "banana"\n}\n\nconst user = { name: "Vansh", age: 22 };\nfor (const key in user) {\n  console.log(key, user[key]);\n}`,
      },
      {
        heading: "break, continue, and nested loops",
        text: "break exits a loop entirely; continue skips to the next iteration. In nested loops, break/continue only affect the innermost loop by default.",
        code: `for (let i = 0; i < 5; i++) {\n  if (i === 3) break;    // stops the loop at 3\n  if (i === 1) continue; // skips printing 1\n  console.log(i);\n}\n\nfor (let i = 0; i < 2; i++) {\n  for (let j = 0; j < 2; j++) {\n    console.log(i, j);\n  }\n}`,
      },
    ],
  },

  // ===================== STRINGS =====================
  {
    id: "strings",
    title: "Strings",
    category: "Strings",
    definition:
      "Strings represent text. They are immutable — string methods always return a new string rather than changing the original.",
    sections: [
      {
        heading: "Creating strings and length",
        text: "Strings can use single quotes, double quotes, or backticks. length tells you how many characters it contains.",
        code: `const greeting = "Hello";\ngreeting.length; // 5`,
      },
      {
        heading: "charAt and at",
        text: "Both return the character at a given position. at() also accepts negative indexes to count from the end, which charAt does not.",
        code: `"Hello".charAt(0); // "H"\n"Hello".at(-1);     // "o" — last character`,
      },
      {
        heading: "Strings are immutable",
        text: "You can't change a character in place — every 'modifying' method actually returns a brand-new string.",
        code: `let word = "cat";\n// word[0] = "b"; // ❌ does nothing\nword = "b" + word.slice(1); // "bat" — reassign instead`,
      },
    ],
  },
  {
    id: "string-methods",
    title: "String Methods",
    category: "Strings",
    definition:
      "A toolkit of built-in methods for changing case, trimming whitespace, searching, extracting pieces, and rebuilding strings.",
    sections: [
      {
        heading: "Case and whitespace",
        text: "Change letter case or remove surrounding whitespace.",
        code: `"Hello".toUpperCase();   // "HELLO"\n"Hello".toLowerCase();   // "hello"\n"  hi  ".trim();         // "hi"\n"  hi  ".trimStart();    // "hi  "\n"  hi  ".trimEnd();      // "  hi"`,
      },
      {
        heading: "Searching",
        text: "Check for the presence or position of a substring.",
        code: `"JavaScript".includes("Script");   // true\n"JavaScript".startsWith("Java");   // true\n"JavaScript".endsWith("Script");   // true\n"banana".indexOf("a");             // 1 (first match)\n"banana".lastIndexOf("a");         // 5 (last match)`,
      },
      {
        heading: "Extracting pieces",
        text: "slice() and substring() both extract a portion of a string. slice() accepts negative indexes (counting from the end); substring() does not. substr() does the same job but is legacy/deprecated — prefer slice().",
        code: `"JavaScript".slice(0, 4);     // "Java"\n"JavaScript".slice(-6);       // "Script"\n"JavaScript".substring(0, 4); // "Java"`,
      },
      {
        heading: "Replacing and splitting",
        text: "replace() swaps the first match; replaceAll() swaps every match. split() breaks a string into an array using a separator.",
        code: `"2024-01-01".replace("-", "/");     // "2024/01-01" (only first)\n"2024-01-01".replaceAll("-", "/");  // "2024/01/01"\n"a,b,c".split(",");                 // ["a","b","c"]`,
      },
      {
        heading: "Building and padding",
        text: "concat() joins strings, padStart()/padEnd() add characters until a target length is reached, and repeat() duplicates a string.",
        code: `"Hi".concat(" there");     // "Hi there"\n"5".padStart(3, "0");      // "005"\n"5".padEnd(3, "0");        // "500"\n"ab".repeat(3);            // "ababab"`,
      },
    ],
  },

  // ===================== ARRAYS =====================
  {
    id: "arrays",
    title: "Arrays",
    category: "Arrays",
    definition:
      "Arrays store ordered lists of values, accessible by a zero-based numeric index.",
    sections: [
      {
        heading: "Creating and accessing",
        text: "Arrays are created with square brackets, and elements accessed by index starting at 0.",
        code: `const fruits = ["apple", "banana", "mango"];\nfruits[0];     // "apple"\nfruits.length; // 3`,
      },
      {
        heading: "Adding and removing",
        text: "push/pop work on the end of the array; shift/unshift work on the start. All four modify the original array.",
        code: `fruits.push("kiwi");   // add to end   → ["apple","banana","mango","kiwi"]\nfruits.pop();          // remove from end\nfruits.unshift("fig"); // add to start\nfruits.shift();        // remove from start`,
      },
      {
        heading: "slice vs splice",
        text: "slice() copies a portion without changing the original. splice() edits the array in place — it can remove, replace, or insert items.",
        code: `const nums = [1, 2, 3, 4, 5];\nnums.slice(1, 3);      // [2, 3] — original unchanged\nnums.splice(1, 2);     // removes 2 items starting at index 1\n// nums is now [1, 4, 5]`,
      },
      {
        heading: "Searching and joining",
        text: "includes() checks if a value exists; indexOf()/lastIndexOf() return its position (or -1); join() turns an array back into a string.",
        code: `fruits.includes("banana"); // true\nfruits.indexOf("mango");   // position, or -1 if missing\nfruits.join(", ");          // "apple, banana, mango"`,
      },
      {
        heading: "reverse and sort",
        text: "reverse() flips the order in place. sort() sorts in place too — by default alphabetically, so numbers need a compare function.",
        code: `[3, 1, 2].sort();               // [1, 2, 3] works here...\n[10, 2, 1].sort();              // [1, 10, 2] ❌ sorted as strings!\n[10, 2, 1].sort((a, b) => a - b); // [1, 2, 10] ✅ correct`,
      },
    ],
  },
  {
    id: "array-methods",
    title: "Array Iteration Methods (map, filter, reduce)",
    category: "Arrays",
    definition:
      "map, filter, and reduce are higher-order array methods that replace most manual for-loops with cleaner, more expressive code. None of them mutate the original array.",
    sections: [
      {
        heading: "forEach — just loop",
        text: "Runs a function on every item but returns undefined — use it when you only need side effects, like logging.",
        code: `[1, 2, 3].forEach((n) => console.log(n));`,
      },
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
        text: "Reduces the whole array down to a single accumulated value, like a sum or an object.",
        code: `const sum = nums.reduce((total, n) => total + n, 0);\n// 6`,
      },
      {
        heading: "find, findIndex, some, every",
        text: "find() returns the first matching item (or undefined); findIndex() returns its position. some() checks if any item passes a test; every() checks if all do.",
        code: `nums.find((n) => n > 1);      // 2\nnums.findIndex((n) => n > 1); // 1\nnums.some((n) => n > 2);      // true\nnums.every((n) => n > 0);     // true`,
      },
      {
        heading: "flat and flatMap",
        text: "flat() flattens nested arrays by a given depth (default 1). flatMap() maps then flattens one level — useful for splitting items into multiple results.",
        code: `[1, [2, 3], [4, [5]]].flat();       // [1, 2, 3, 4, [5]]\n[1, [2, 3], [4, [5]]].flat(2);      // [1, 2, 3, 4, 5]\n["hi there", "bye"].flatMap((s) => s.split(" "));\n// ["hi", "there", "bye"]`,
      },
    ],
  },
  {
    id: "array-static",
    title: "Array Static Methods",
    category: "Arrays",
    definition:
      "Static methods live on the Array constructor itself (like Array.from), rather than on individual array instances, and are typically used to create arrays.",
    sections: [
      {
        heading: "Array.from",
        text: "Creates a real array from an array-like or iterable value, such as a string or a NodeList.",
        code: `Array.from("abc");        // ["a", "b", "c"]\nArray.from({ length: 3 }, (_, i) => i * 2); // [0, 2, 4]`,
      },
      {
        heading: "Array.isArray",
        text: "The reliable way to check if a value is an array, since typeof returns 'object' for arrays too.",
        code: `Array.isArray([1, 2]); // true\nArray.isArray("hi");   // false`,
      },
      {
        heading: "Array.of",
        text: "Creates an array from its arguments — mainly useful because 'new Array(7)' creates an empty array of length 7, while Array.of(7) creates [7].",
        code: `Array.of(7);      // [7]\nnew Array(7);     // empty array with length 7`,
      },
    ],
  },
  {
    id: "destructuring",
    title: "Destructuring & Spread/Rest",
    category: "Arrays",
    definition:
      "Destructuring unpacks values from arrays/objects into variables; spread and rest use the same ... syntax for opposite jobs — expanding vs collecting.",
    sections: [
      {
        heading: "Array destructuring",
        text: "Pull values out of an array by position. You can skip items and provide default values.",
        code: `const [first, second] = ["a", "b"];\nconst [, , third = "z"] = ["a", "b"]; // skips two, defaults to "z"`,
      },
      {
        heading: "Object destructuring",
        text: "Pull values out of an object by key name, optionally renaming them.",
        code: `const { name, age } = { name: "Vansh", age: 22 };\nconst { name: userName } = { name: "Vansh" }; // renamed to userName`,
      },
      {
        heading: "Spread — expand a collection",
        text: "The ... operator expands an array or object into individual elements, often used to copy or merge them.",
        code: `const arr = [1, 2, 3];\nconst copy = [...arr, 4]; // [1, 2, 3, 4]\n\nconst base = { a: 1 };\nconst merged = { ...base, b: 2 }; // { a: 1, b: 2 }`,
      },
      {
        heading: "Rest — collect the remainder",
        text: "In a function signature or destructuring pattern, ... gathers the remaining items into one array.",
        code: `function sum(...nums) {\n  return nums.reduce((a, b) => a + b, 0);\n}\nsum(1, 2, 3); // 6\n\nconst [first, ...rest] = [1, 2, 3, 4];\n// first = 1, rest = [2, 3, 4]`,
      },
    ],
  },

  // ===================== OBJECTS =====================
  {
    id: "objects",
    title: "Objects",
    category: "Objects",
    definition:
      "Objects store data as key-value pairs, letting you group related information together under one variable.",
    sections: [
      {
        heading: "Creating and accessing",
        text: "Access properties with dot notation or bracket notation. Bracket notation is required when the key is dynamic or not a valid identifier.",
        code: `const user = { name: "Vansh", age: 22 };\nuser.name;         // "Vansh"\nuser["age"];       // 22\n\nconst key = "name";\nuser[key];         // "Vansh" — dynamic access`,
      },
      {
        heading: "Adding, updating, and deleting",
        text: "Just assign to a new or existing key to add/update. Use the delete operator to remove a property entirely.",
        code: `user.city = "Delhi"; // adds a new property\nuser.age = 23;       // updates existing\ndelete user.city;    // removes it`,
      },
      {
        heading: "Nested objects",
        text: "Objects can contain other objects and arrays, and you chain dot/bracket notation to reach deeper values.",
        code: `const person = {\n  name: "Vansh",\n  address: { city: "Delhi", pin: 110001 },\n};\nperson.address.city; // "Delhi"`,
      },
      {
        heading: "Computed property names",
        text: "Wrap an expression in square brackets inside an object literal to use it as the key.",
        code: `const field = "email";\nconst user2 = { [field]: "vansh@example.com" };\n// { email: "vansh@example.com" }`,
      },
    ],
  },
  {
    id: "object-methods",
    title: "Object Methods (keys, values, entries, freeze)",
    category: "Objects",
    definition:
      "Built-in Object methods for inspecting, copying, and locking down objects — most commonly used when looping over an object's data.",
    sections: [
      {
        heading: "Object.keys / values / entries",
        text: "keys() returns an array of property names, values() returns their values, and entries() returns [key, value] pairs — handy for looping.",
        code: `const user = { name: "Vansh", age: 22 };\nObject.keys(user);    // ["name", "age"]\nObject.values(user);  // ["Vansh", 22]\nObject.entries(user); // [["name","Vansh"], ["age",22]]\n\nfor (const [key, value] of Object.entries(user)) {\n  console.log(key, value);\n}`,
      },
      {
        heading: "Object.assign",
        text: "Copies properties from one or more source objects into a target object — often used to merge or clone objects (shallowly).",
        code: `const defaults = { theme: "light" };\nconst settings = Object.assign({}, defaults, { theme: "dark" });\n// { theme: "dark" }`,
      },
      {
        heading: "Object.freeze and Object.seal",
        text: "freeze() locks an object completely — no adding, removing, or changing properties. seal() allows changing existing properties but blocks adding or removing any.",
        code: `const config = Object.freeze({ apiUrl: "/api" });\nconfig.apiUrl = "/new"; // silently fails (throws in strict mode)`,
      },
    ],
  },

  // ===================== FUNCTIONS =====================
  {
    id: "functions",
    title: "Functions",
    category: "Functions",
    definition:
      "Functions are reusable blocks of code that take inputs (parameters) and can return an output. They're the core building block of any JS program.",
    sections: [
      {
        heading: "Function declaration",
        text: "The classic way to define a named function. Declarations are hoisted, meaning they can be called before they appear in the file.",
        code: `function greet(name) {\n  return "Hello, " + name;\n}\ngreet("Vansh"); // "Hello, Vansh"`,
      },
      {
        heading: "Function expression",
        text: "A function stored in a variable. Unlike declarations, expressions are not hoisted — they can only be used after the line where they're defined.",
        code: `const greet = function (name) {\n  return "Hello, " + name;\n};`,
      },
      {
        heading: "Arrow functions",
        text: "A shorter modern syntax, especially handy for small callback functions. Arrow functions don't have their own 'this'.",
        code: `const add = (a, b) => a + b;\nadd(2, 3); // 5`,
      },
      {
        heading: "Parameters, arguments, and return",
        text: "Parameters are the named placeholders in the function definition; arguments are the actual values passed in when calling it. return sends a value back to the caller and ends the function.",
        code: `function multiply(a, b) { // a, b = parameters\n  return a * b;\n}\nmultiply(3, 4); // 3, 4 = arguments → returns 12`,
      },
      {
        heading: "Default and rest parameters",
        text: "Default parameters give a fallback value if none (or undefined) is passed. Rest parameters collect any extra arguments into an array.",
        code: `function greet(name = "Guest") {\n  return "Hello, " + name;\n}\ngreet(); // "Hello, Guest"\n\nfunction total(...prices) {\n  return prices.reduce((a, b) => a + b, 0);\n}`,
      },
    ],
  },
  {
    id: "callback-hof",
    title: "Callbacks & Higher-Order Functions",
    category: "Functions",
    definition:
      "A callback is a function passed into another function to be run later. A higher-order function is any function that takes a function as an argument or returns one.",
    sections: [
      {
        heading: "Callback functions",
        text: "Passing a function as an argument lets you plug in custom behavior at the right moment.",
        code: `function processUser(name, callback) {\n  const greeting = "Hi, " + name;\n  callback(greeting);\n}\nprocessUser("Vansh", (msg) => console.log(msg));`,
      },
      {
        heading: "Higher-order functions",
        text: "map, filter, and reduce are all higher-order functions — they accept a function as an argument to customize their behavior.",
        code: `function repeat(n, action) {\n  for (let i = 0; i < n; i++) action(i);\n}\nrepeat(3, (i) => console.log("Run " + i));`,
      },
      {
        heading: "IIFE (Immediately Invoked Function Expression)",
        text: "A function that runs the moment it's defined, often used to create an isolated scope.",
        code: `(function () {\n  console.log("Runs immediately!");\n})();`,
      },
      {
        heading: "Anonymous and nested functions",
        text: "Anonymous functions have no name — common as callbacks. Nested functions are defined inside another function and can access its variables (this is the basis of closures).",
        code: `setTimeout(function () { // anonymous\n  console.log("done");\n}, 1000);\n\nfunction outer() {\n  function inner() { return "nested"; }\n  return inner();\n}`,
      },
      {
        heading: "First-class functions",
        text: "In JavaScript, functions are values — you can store them in variables, put them in arrays, or pass them around just like numbers or strings.",
        code: `const operations = [\n  (a, b) => a + b,\n  (a, b) => a - b,\n];\noperations[0](5, 3); // 8`,
      },
    ],
  },
  {
    id: "recursion-pure",
    title: "Recursion & Pure Functions",
    category: "Functions",
    definition:
      "Recursion is a function calling itself to solve smaller pieces of a problem. A pure function always returns the same output for the same input and has no side effects.",
    sections: [
      {
        heading: "Recursion",
        text: "Every recursive function needs a base case to stop it from calling itself forever.",
        code: `function factorial(n) {\n  if (n <= 1) return 1; // base case\n  return n * factorial(n - 1);\n}\nfactorial(5); // 120`,
      },
      {
        heading: "Pure functions",
        text: "A pure function doesn't rely on or change anything outside itself — no reading/writing outer variables, no console.log, no network calls.",
        code: `// Pure\nfunction add(a, b) { return a + b; }\n\n// Impure — depends on external state\nlet tax = 0.1;\nfunction addTax(price) { return price + price * tax; }`,
      },
      {
        heading: "Why pure functions matter",
        text: "They're predictable and easy to test, since calling them never has surprising side effects elsewhere in your program.",
      },
    ],
  },

  // ===================== SCOPE & EXECUTION =====================
  {
    id: "scope",
    title: "Scope (Global, Function, Block, Lexical)",
    category: "Scope & Execution",
    definition:
      "Scope determines where in your code a variable is accessible. JavaScript has global, function, and block scope, and uses lexical scoping to resolve variable names.",
    sections: [
      {
        heading: "Global scope",
        text: "Variables declared outside any function or block are accessible everywhere in the file.",
        code: `const appName = "JSMaster"; // global\nfunction show() {\n  console.log(appName); // accessible here too\n}`,
      },
      {
        heading: "Function and block scope",
        text: "var is function-scoped — visible anywhere inside the function. let/const are block-scoped — only visible inside the {} they were declared in.",
        code: `function demo() {\n  if (true) {\n    let a = 1;   // block-scoped\n    var b = 2;   // function-scoped\n  }\n  // console.log(a); ❌ not defined here\n  console.log(b); // 2 — still accessible\n}`,
      },
      {
        heading: "Lexical scope",
        text: "A function can access variables from the scope it was physically written in, even nested several levels deep — this is what makes closures possible.",
        code: `function outer() {\n  const message = "hi";\n  function inner() {\n    console.log(message); // accesses outer's variable\n  }\n  inner();\n}`,
      },
    ],
  },
  {
    id: "hoisting-tdz",
    title: "Hoisting & Temporal Dead Zone",
    category: "Scope & Execution",
    definition:
      "Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code runs. let and const are hoisted too, but stay in a 'temporal dead zone' until their line executes.",
    sections: [
      {
        heading: "Function and var hoisting",
        text: "Function declarations are fully hoisted (usable before their definition). var declarations are hoisted but initialized as undefined.",
        code: `greet(); // works — "Hi!"\nfunction greet() { console.log("Hi!"); }\n\nconsole.log(x); // undefined, not an error\nvar x = 5;`,
      },
      {
        heading: "The Temporal Dead Zone",
        text: "let and const exist in the TDZ from the start of the block until their declaration line — accessing them earlier throws an error, unlike var.",
        code: `console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization\nlet y = 5;`,
      },
      {
        heading: "Why it matters",
        text: "The TDZ is actually helpful — it catches bugs early by preventing you from accidentally using a variable before it's ready.",
      },
    ],
  },
  {
    id: "closures",
    title: "Closures",
    category: "Scope & Execution",
    definition:
      "A closure is a function that remembers the variables from the scope it was created in, even after that outer function has finished running.",
    sections: [
      {
        heading: "Basic example",
        text: "The inner function keeps access to 'count' even after outer() has already returned.",
        code: `function outer() {\n  let count = 0;\n  return function () {\n    count++;\n    return count;\n  };\n}\nconst counter = outer();\ncounter(); // 1\ncounter(); // 2`,
      },
      {
        heading: "Private variables",
        text: "Closures let you create variables that can't be accessed directly from outside — only through functions you expose.",
        code: `function createBankAccount(balance) {\n  return {\n    deposit: (amount) => (balance += amount),\n    getBalance: () => balance,\n  };\n}\nconst account = createBankAccount(100);\naccount.deposit(50);\naccount.getBalance(); // 150 — balance itself is untouchable directly`,
      },
      {
        heading: "Why it's useful",
        text: "Closures are the foundation behind private variables, memoization, function factories, and event handlers that remember data in JavaScript.",
      },
    ],
  },
  {
    id: "execution-context",
    title: "Execution Context & Call Stack",
    category: "Scope & Execution",
    definition:
      "The execution context is the environment JavaScript creates to run code (tracking variables and scope). The call stack tracks which functions are currently running.",
    sections: [
      {
        heading: "How the call stack works",
        text: "Every time a function is called, it's pushed onto the call stack. When it returns, it's popped off. JavaScript runs one thing at a time.",
        code: `function first() { second(); }\nfunction second() { third(); }\nfunction third() { console.log("here"); }\nfirst();\n// Stack grows: first → second → third, then unwinds`,
      },
      {
        heading: "Stack overflow",
        text: "If functions keep calling each other without stopping (like recursion missing a base case), the call stack fills up and throws an error.",
        code: `function loop() { return loop(); }\n// loop(); // ❌ RangeError: Maximum call stack size exceeded`,
      },
    ],
  },
  {
    id: "this-keyword",
    title: "this, call, apply, and bind",
    category: "Scope & Execution",
    definition:
      "'this' refers to the object a function is executing on. Its value depends on how the function is called, and call/apply/bind let you control it explicitly.",
    sections: [
      {
        heading: "this in a method",
        text: "When a function is called as a method (obj.method()), 'this' refers to the object it was called on.",
        code: `const user = {\n  name: "Vansh",\n  greet() {\n    return "Hi, I'm " + this.name;\n  },\n};\nuser.greet(); // "Hi, I'm Vansh"`,
      },
      {
        heading: "this in arrow functions",
        text: "Arrow functions don't have their own 'this' — they use 'this' from the surrounding (lexical) scope, which is often what you want inside callbacks.",
        code: `const timer = {\n  seconds: 0,\n  start() {\n    setInterval(() => {\n      this.seconds++; // 'this' correctly refers to timer\n    }, 1000);\n  },\n};`,
      },
      {
        heading: "call and apply",
        text: "Both immediately invoke a function with a specific 'this' value. call() takes arguments individually; apply() takes them as an array.",
        code: `function introduce(greeting) {\n  return \`\${greeting}, I'm \${this.name}\`;\n}\nconst person = { name: "Vansh" };\nintroduce.call(person, "Hi");        // "Hi, I'm Vansh"\nintroduce.apply(person, ["Hello"]);  // "Hello, I'm Vansh"`,
      },
      {
        heading: "bind",
        text: "bind() returns a new function with 'this' permanently locked to a given value, useful for passing a method as a callback.",
        code: `const boundIntroduce = introduce.bind(person);\nboundIntroduce("Hey"); // "Hey, I'm Vansh"`,
      },
    ],
  },
  {
    id: "strict-mode",
    title: "Strict Mode",
    category: "Scope & Execution",
    definition:
      "'use strict' turns on a stricter variant of JavaScript that catches common mistakes and throws errors instead of failing silently.",
    sections: [
      {
        heading: "Enabling strict mode",
        text: "Place the directive at the top of a file or function.",
        code: `"use strict";\n\nx = 5; // ❌ ReferenceError: x is not defined (would silently create a global otherwise)`,
      },
      {
        heading: "What it changes",
        text: "It disallows accidental globals, makes assignment to read-only properties throw, and disallows duplicate parameter names, among other safety improvements.",
      },
      {
        heading: "Modern JS is strict by default",
        text: "Code inside ES6 classes and JavaScript modules automatically runs in strict mode, so you often don't need to add it manually in modern projects.",
      },
    ],
  },

  // ===================== OOP =====================
  {
    id: "oop-intro",
    title: "OOP Introduction & Constructor Functions",
    category: "OOP",
    definition:
      "Object-oriented programming organizes code around objects that bundle data and behavior together. Constructor functions were the original way to create similar objects before classes existed.",
    sections: [
      {
        heading: "Why OOP",
        text: "Instead of writing separate variables for every user, OOP lets you define a blueprint (like a User) and create many objects from it.",
      },
      {
        heading: "Constructor functions",
        text: "Called with 'new', a constructor function creates a new object, sets 'this' to it, and returns it automatically.",
        code: `function User(name, age) {\n  this.name = name;\n  this.age = age;\n}\nconst u1 = new User("Vansh", 22);\nu1.name; // "Vansh"`,
      },
      {
        heading: "Constructor functions vs classes",
        text: "Classes (covered next) are modern syntax that does the same job as constructor functions, but with cleaner syntax for methods and inheritance.",
      },
    ],
  },
  {
    id: "classes",
    title: "Classes",
    category: "OOP",
    definition:
      "Classes are the modern syntax for creating blueprints for objects, including a constructor, instance methods, static methods, and getters/setters.",
    sections: [
      {
        heading: "Defining a class",
        text: "The constructor method runs automatically when a new instance is created with 'new'.",
        code: `class User {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n}\nconst u1 = new User("Vansh", 22);`,
      },
      {
        heading: "Instance methods",
        text: "Methods defined in a class are shared by every instance and can use 'this' to access that instance's own data.",
        code: `class User {\n  constructor(name) { this.name = name; }\n  greet() { return "Hi, I'm " + this.name; }\n}\nnew User("Vansh").greet(); // "Hi, I'm Vansh"`,
      },
      {
        heading: "Static methods",
        text: "Static methods belong to the class itself, not to instances — used for utility functions related to the class.",
        code: `class MathHelper {\n  static square(n) { return n * n; }\n}\nMathHelper.square(4); // 16 — no instance needed`,
      },
      {
        heading: "Getters and setters",
        text: "Getters/setters let you run code when a property is read or written, while still using normal property syntax.",
        code: `class Circle {\n  constructor(radius) { this.radius = radius; }\n  get area() { return Math.PI * this.radius ** 2; }\n  set diameter(d) { this.radius = d / 2; }\n}\nconst c = new Circle(5);\nc.area;        // reads like a property, runs code\nc.diameter = 10; // sets radius to 5`,
      },
    ],
  },
  {
    id: "encapsulation-abstraction",
    title: "Encapsulation & Abstraction",
    category: "OOP",
    definition:
      "Encapsulation bundles data with the methods that operate on it and hides internal details. Abstraction exposes only what's necessary, hiding complexity behind a simple interface.",
    sections: [
      {
        heading: "Encapsulation with private fields",
        text: "A # prefix makes a class field truly private — inaccessible from outside the class.",
        code: `class BankAccount {\n  #balance = 0;\n  deposit(amount) { this.#balance += amount; }\n  getBalance() { return this.#balance; }\n}\nconst acc = new BankAccount();\nacc.deposit(100);\nacc.getBalance(); // 100\n// acc.#balance; ❌ SyntaxError — not accessible outside the class`,
      },
      {
        heading: "Abstraction",
        text: "Users of a class only need to know what a method does (e.g. deposit()), not how it's implemented internally — that complexity is hidden away.",
      },
    ],
  },
  {
    id: "inheritance",
    title: "Inheritance (extends, super, Polymorphism)",
    category: "OOP",
    definition:
      "Inheritance lets one class reuse and extend the behavior of another. Polymorphism means different classes can respond differently to the same method call.",
    sections: [
      {
        heading: "extends and super",
        text: "extends creates a subclass that inherits from a parent. super() calls the parent's constructor and must be called before using 'this' in the subclass.",
        code: `class Animal {\n  constructor(name) { this.name = name; }\n  speak() { return this.name + " makes a sound."; }\n}\nclass Dog extends Animal {\n  constructor(name) {\n    super(name); // calls Animal's constructor\n  }\n  speak() { return this.name + " barks."; }\n}\nnew Dog("Rex").speak(); // "Rex barks."`,
      },
      {
        heading: "Polymorphism",
        text: "Different subclasses can override the same method with their own behavior, and calling code doesn't need to know which specific class it's dealing with.",
        code: `class Cat extends Animal {\n  speak() { return this.name + " meows."; }\n}\nconst animals = [new Dog("Rex"), new Cat("Milo")];\nanimals.forEach((a) => console.log(a.speak()));\n// "Rex barks." then "Milo meows."`,
      },
    ],
  },
  {
    id: "prototypes",
    title: "Prototypes & Prototype Chain",
    category: "OOP",
    definition:
      "Every JavaScript object has a hidden link to another object called its prototype. Classes are actually syntax built on top of this prototype system.",
    sections: [
      {
        heading: "How methods are shared",
        text: "Methods you define in a class actually live on the prototype, not on each individual instance — this saves memory since every instance shares one copy.",
        code: `class User {\n  greet() { return "Hi"; }\n}\nconst u1 = new User();\nconst u2 = new User();\nu1.greet === u2.greet; // true — same function on the prototype`,
      },
      {
        heading: "The prototype chain",
        text: "When you access a property, JavaScript looks on the object itself first, then walks up the chain of prototypes until it finds it (or reaches the end).",
        code: `const arr = [1, 2, 3];\narr.hasOwnProperty("push"); // false — push comes from Array.prototype, not arr itself`,
      },
    ],
  },

  // ===================== ASYNCHRONOUS JAVASCRIPT =====================
  {
    id: "sync-async",
    title: "Synchronous vs Asynchronous JavaScript",
    category: "Asynchronous JavaScript",
    definition:
      "Synchronous code runs line by line, each waiting for the previous one to finish. Asynchronous code lets slow operations (like network requests) run in the background without blocking everything else.",
    sections: [
      {
        heading: "Synchronous example",
        text: "Each line waits for the one before it — nothing else can happen until it's done.",
        code: `console.log("1");\nconsole.log("2");\nconsole.log("3");\n// Always prints 1, 2, 3 in order`,
      },
      {
        heading: "Asynchronous example",
        text: "setTimeout schedules code to run later without freezing the rest of the program in the meantime.",
        code: `console.log("1");\nsetTimeout(() => console.log("2"), 1000);\nconsole.log("3");\n// Prints 1, 3, then 2 — because "2" waits for the timer`,
      },
      {
        heading: "Why it matters",
        text: "JavaScript is single-threaded — if a slow task (like a network request) blocked everything, the whole page would freeze. Async code keeps things responsive.",
      },
    ],
  },
  {
    id: "callback-hell",
    title: "Callback Hell",
    category: "Asynchronous JavaScript",
    definition:
      "Callback hell is what happens when many asynchronous callbacks are nested inside each other, making code hard to read and maintain.",
    sections: [
      {
        heading: "What it looks like",
        text: "Each step depends on the previous one finishing, forcing deeper and deeper nesting.",
        code: `getUser(1, (user) => {\n  getPosts(user.id, (posts) => {\n    getComments(posts[0].id, (comments) => {\n      console.log(comments); // deeply nested — hard to follow\n    });\n  });\n});`,
      },
      {
        heading: "The fix",
        text: "Promises, and later async/await, were introduced specifically to flatten this kind of nested structure into readable, sequential-looking code.",
      },
    ],
  },
  {
    id: "promises",
    title: "Promises",
    category: "Asynchronous JavaScript",
    definition:
      "A Promise represents a value that will be available in the future — either successfully (resolved) or with an error (rejected).",
    sections: [
      {
        heading: "Promise states",
        text: "A promise starts pending, then settles into either fulfilled (resolved) or rejected — and it can only settle once.",
        code: `const wait = new Promise((resolve, reject) => {\n  setTimeout(() => resolve("Done!"), 1000);\n});`,
      },
      {
        heading: "then, catch, finally",
        text: "then() runs on success, catch() runs on failure, and finally() always runs regardless of the outcome.",
        code: `wait\n  .then((result) => console.log(result))\n  .catch((err) => console.error(err))\n  .finally(() => console.log("Done either way"));`,
      },
      {
        heading: "Promise.resolve and Promise.reject",
        text: "Shortcuts for creating an already-settled promise, often used in tests or to normalize a value into a promise.",
        code: `Promise.resolve(5).then((v) => console.log(v)); // 5\nPromise.reject("error").catch((e) => console.log(e));`,
      },
    ],
  },
  {
    id: "promise-combinators",
    title: "Promise.all, allSettled, race, any",
    category: "Asynchronous JavaScript",
    definition:
      "These static methods let you run multiple promises together and combine their results in different ways.",
    sections: [
      {
        heading: "Promise.all",
        text: "Waits for every promise to resolve, or rejects immediately if any one of them fails.",
        code: `Promise.all([fetch("/a"), fetch("/b")])\n  .then(([resA, resB]) => console.log("both done"));`,
      },
      {
        heading: "Promise.allSettled",
        text: "Waits for every promise to finish (success or failure) and returns the outcome of each — nothing short-circuits.",
        code: `Promise.allSettled([\n  Promise.resolve(1),\n  Promise.reject("fail"),\n]).then((results) => console.log(results));\n// [{status:"fulfilled",value:1}, {status:"rejected",reason:"fail"}]`,
      },
      {
        heading: "Promise.race and Promise.any",
        text: "race() settles as soon as the first promise settles (win or lose). any() resolves as soon as the first one succeeds, ignoring failures unless all fail.",
        code: `Promise.race([slowFetch(), fastFetch()]); // whichever finishes first\nPromise.any([mayFail(), willSucceed()]);  // first success`,
      },
    ],
  },
  {
    id: "async-await",
    title: "async/await",
    category: "Asynchronous JavaScript",
    definition:
      "async/await is modern, cleaner syntax built on top of promises that lets asynchronous code read like ordinary synchronous code.",
    sections: [
      {
        heading: "Declaring an async function",
        text: "An async function always returns a promise, even if you return a plain value inside it.",
        code: `async function getGreeting() {\n  return "Hello!";\n}\ngetGreeting().then((msg) => console.log(msg)); // "Hello!"`,
      },
      {
        heading: "await pauses for a result",
        text: "await pauses execution inside an async function until the promise resolves, without blocking the rest of the page.",
        code: `async function getData() {\n  const res = await fetch("/api/users");\n  const data = await res.json();\n  return data;\n}`,
      },
      {
        heading: "Rewriting callback hell",
        text: "The same nested logic from callback hell becomes flat and readable with async/await.",
        code: `async function loadComments() {\n  const user = await getUser(1);\n  const posts = await getPosts(user.id);\n  const comments = await getComments(posts[0].id);\n  return comments;\n}`,
      },
    ],
  },
  {
    id: "error-handling",
    title: "try/catch & Error Handling",
    category: "Asynchronous JavaScript",
    definition:
      "try/catch lets you run code that might fail and handle the error gracefully instead of crashing the whole program.",
    sections: [
      {
        heading: "Basic try/catch",
        text: "Code in try runs first; if it throws, execution jumps straight to catch.",
        code: `try {\n  JSON.parse("not valid json");\n} catch (err) {\n  console.error("Parsing failed:", err.message);\n}`,
      },
      {
        heading: "try/catch with async/await",
        text: "Wrap awaited calls in try/catch to handle rejected promises the same way you'd handle a thrown error.",
        code: `async function getData() {\n  try {\n    const res = await fetch("/api/users");\n    return await res.json();\n  } catch (err) {\n    console.error("Failed:", err.message);\n  }\n}`,
      },
      {
        heading: "finally",
        text: "A finally block runs whether or not an error occurred — useful for cleanup like hiding a loading spinner.",
        code: `try {\n  riskyOperation();\n} finally {\n  console.log("Always runs");\n}`,
      },
    ],
  },
  {
    id: "fetch-json",
    title: "Fetch API, JSON & HTTP Requests",
    category: "Asynchronous JavaScript",
    definition:
      "fetch() is the built-in browser API for making HTTP requests. JSON (JavaScript Object Notation) is the text format most APIs use to send data.",
    sections: [
      {
        heading: "Making a GET request",
        text: "fetch() returns a promise that resolves with a Response object — call .json() on it to parse the body.",
        code: `async function loadUsers() {\n  const res = await fetch("https://api.example.com/users");\n  const users = await res.json();\n  return users;\n}`,
      },
      {
        heading: "Making a POST request",
        text: "Pass an options object as the second argument to send data, set headers, or change the HTTP method.",
        code: `fetch("https://api.example.com/users", {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({ name: "Vansh" }),\n});`,
      },
      {
        heading: "JSON.stringify and JSON.parse",
        text: "JSON.stringify() converts a JS value into a JSON string (to send it); JSON.parse() converts a JSON string back into a JS value (to read it).",
        code: `const obj = { name: "Vansh" };\nconst json = JSON.stringify(obj); // '{"name":"Vansh"}'\nJSON.parse(json);                 // { name: "Vansh" }`,
      },
      {
        heading: "Checking for failed responses",
        text: "fetch() only rejects on network failure — a 404 or 500 response still 'succeeds' as far as the promise is concerned, so check res.ok manually.",
        code: `const res = await fetch("/api/users");\nif (!res.ok) {\n  throw new Error("Request failed: " + res.status);\n}`,
      },
    ],
  },
  {
    id: "event-loop",
    title: "Event Loop, Microtasks & Macrotasks",
    category: "Asynchronous JavaScript",
    definition:
      "The event loop is how JavaScript handles asynchronous code on a single thread — running the call stack first, then microtasks, then macrotasks.",
    sections: [
      {
        heading: "The basic idea",
        text: "JavaScript runs all synchronous code first. Only once the call stack is empty does it start processing queued async callbacks.",
        code: `console.log("1");\nsetTimeout(() => console.log("2"), 0);\nconsole.log("3");\n// Output: 1, 3, 2 — even with a 0ms delay!`,
      },
      {
        heading: "Microtasks vs macrotasks",
        text: "Promise callbacks (.then, async/await) are microtasks and run before macrotasks like setTimeout, even if the timer is set to 0ms.",
        code: `console.log("1");\nsetTimeout(() => console.log("2 (macrotask)"), 0);\nPromise.resolve().then(() => console.log("3 (microtask)"));\nconsole.log("4");\n// Output: 1, 4, 3, 2`,
      },
      {
        heading: "Why this matters",
        text: "Understanding the event loop explains surprising output ordering and helps you reason about when your async code will actually run.",
      },
    ],
  },

  // ===================== DOM =====================
  {
    id: "dom",
    title: "DOM Introduction & Selecting Elements",
    category: "DOM",
    definition:
      "The DOM (Document Object Model) is how JavaScript sees and interacts with an HTML page — selecting, reading, and updating elements.",
    sections: [
      {
        heading: "The document object",
        text: "'document' is the entry point to the whole page — every selection method starts from it.",
      },
      {
        heading: "Selecting by ID, class, or tag",
        text: "These older methods are still common: getElementById returns one element, the others return a live collection.",
        code: `document.getElementById("title");\ndocument.getElementsByClassName("item");\ndocument.getElementsByTagName("li");`,
      },
      {
        heading: "querySelector and querySelectorAll",
        text: "The modern, more flexible way to select elements using any CSS selector. querySelector returns the first match; querySelectorAll returns all matches (as a static NodeList).",
        code: `const heading = document.querySelector("h1");\nconst items = document.querySelectorAll(".item");\nconst firstOfMany = document.querySelector(".card:first-child");`,
      },
    ],
  },
  {
    id: "dom-content",
    title: "Changing Content (textContent, innerHTML)",
    category: "DOM",
    definition:
      "Once you've selected an element, these properties let you read or replace what's inside it.",
    sections: [
      {
        heading: "textContent",
        text: "Sets or reads the plain text inside an element — safe against injecting HTML/scripts.",
        code: `heading.textContent = "Welcome!";`,
      },
      {
        heading: "innerHTML",
        text: "Sets or reads the HTML markup inside an element. Use carefully — inserting untrusted user input with innerHTML can introduce XSS security risks.",
        code: `list.innerHTML = "<li>Item 1</li><li>Item 2</li>";`,
      },
      {
        heading: "innerText",
        text: "Similar to textContent but respects CSS styling (e.g. it won't return text hidden with display:none) and is slightly slower since it triggers layout calculations.",
      },
    ],
  },
  {
    id: "dom-attributes-classes",
    title: "Attributes, classList & Styles",
    category: "DOM",
    definition:
      "Methods and properties for reading/writing HTML attributes, toggling CSS classes, and changing inline styles directly from JavaScript.",
    sections: [
      {
        heading: "Attributes",
        text: "getAttribute/setAttribute/removeAttribute work with any HTML attribute, like src, href, or custom data- attributes.",
        code: `img.getAttribute("src");\nimg.setAttribute("alt", "A cat");\nimg.removeAttribute("alt");`,
      },
      {
        heading: "classList",
        text: "The modern way to add, remove, or toggle CSS classes without manually editing the whole className string.",
        code: `heading.classList.add("highlight");\nheading.classList.remove("hidden");\nheading.classList.toggle("active"); // adds if missing, removes if present`,
      },
      {
        heading: "className and style",
        text: "className sets the whole class string at once (overwriting existing classes). style lets you set individual CSS properties directly.",
        code: `heading.className = "title bold"; // replaces all classes\nheading.style.color = "blue";\nheading.style.fontSize = "20px";`,
      },
    ],
  },
  {
    id: "dom-create-modify",
    title: "Creating & Modifying Elements",
    category: "DOM",
    definition:
      "Methods for building new elements from scratch and inserting, moving, or removing them in the page.",
    sections: [
      {
        heading: "createElement",
        text: "Builds a new element in memory — it won't appear on the page until you insert it somewhere.",
        code: `const li = document.createElement("li");\nli.textContent = "New item";`,
      },
      {
        heading: "append, appendChild, and prepend",
        text: "appendChild adds one node to the end of a parent (the original way). append is more flexible — it accepts multiple nodes or plain text. prepend adds to the beginning instead.",
        code: `list.appendChild(li);\nlist.append("plain text", li);\nlist.prepend(li); // adds to the start`,
      },
      {
        heading: "remove and replaceWith",
        text: "remove() deletes an element from the page. replaceWith() swaps it out for a different element.",
        code: `li.remove();\nold.replaceWith(newElement);`,
      },
    ],
  },
  {
    id: "dom-traversal",
    title: "DOM Traversal",
    category: "DOM",
    definition:
      "Once you have one element, traversal properties let you navigate to its relatives — parents, children, and siblings — in the DOM tree.",
    sections: [
      {
        heading: "Going up: parentElement",
        text: "Returns the direct parent of an element.",
        code: `const item = document.querySelector(".item");\nitem.parentElement; // the containing <ul> or <div>`,
      },
      {
        heading: "Going down: children",
        text: "Returns a live collection of an element's direct child elements (ignoring text nodes).",
        code: `list.children;             // HTMLCollection of <li> elements\nlist.firstElementChild;    // the first <li>\nlist.lastElementChild;     // the last <li>`,
      },
    ],
  },

  // ===================== EVENTS =====================
  {
    id: "events",
    title: "Events & addEventListener",
    category: "Events",
    definition:
      "Events let your code respond to user actions — clicks, key presses, form submissions, and more — using event listeners.",
    sections: [
      {
        heading: "Adding a listener",
        text: "addEventListener attaches a function that runs when the event fires. You can attach multiple listeners to the same element.",
        code: `button.addEventListener("click", () => {\n  console.log("Clicked!");\n});`,
      },
      {
        heading: "The event object",
        text: "The listener receives an event object with useful details about what happened, like which key was pressed.",
        code: `input.addEventListener("keydown", (e) => {\n  console.log(e.key);\n});`,
      },
      {
        heading: "Common event types",
        text: "Different elements and interactions fire different events — click and mouse events on buttons/links, input/change on form fields, submit on forms, keydown/keyup for the keyboard.",
        code: `form.addEventListener("submit", handleSubmit);\ninput.addEventListener("input", handleTyping);   // fires on every keystroke\nselect.addEventListener("change", handleSelect); // fires when value changes\nbutton.addEventListener("mouseover", handleHover);`,
      },
    ],
  },
  {
    id: "event-defaults",
    title: "preventDefault & stopPropagation",
    category: "Events",
    definition:
      "Two methods on the event object that control default browser behavior and how the event travels through the DOM.",
    sections: [
      {
        heading: "preventDefault",
        text: "Stops the browser's default action for an event — most commonly used to stop a form from reloading the page on submit, or a link from navigating.",
        code: `form.addEventListener("submit", (e) => {\n  e.preventDefault();\n  console.log("Handled manually instead of reloading");\n});`,
      },
      {
        heading: "stopPropagation",
        text: "Stops the event from continuing to bubble up (or capture down) to parent elements, isolating it to just the element it fired on.",
        code: `child.addEventListener("click", (e) => {\n  e.stopPropagation(); // parent's click handler won't run\n});`,
      },
    ],
  },
  {
    id: "event-bubbling-delegation",
    title: "Event Bubbling, Capturing & Delegation",
    category: "Events",
    definition:
      "Events travel through the DOM in two phases — capturing down, then bubbling up — and delegation uses this to handle events efficiently on many elements at once.",
    sections: [
      {
        heading: "Bubbling",
        text: "By default, an event fires on the target element first, then 'bubbles' up through each ancestor, triggering their listeners too.",
        code: `parent.addEventListener("click", () => console.log("parent"));\nchild.addEventListener("click", () => console.log("child"));\n// Clicking child logs: "child" then "parent"`,
      },
      {
        heading: "Capturing",
        text: "The opposite phase, from the outermost ancestor down to the target — enabled by passing { capture: true } as the third argument.",
        code: `parent.addEventListener(\n  "click",\n  () => console.log("parent (capture)"),\n  { capture: true }\n);`,
      },
      {
        heading: "Event delegation",
        text: "Instead of adding a listener to every child element, attach one listener to a shared parent and check e.target — much more efficient for long or dynamic lists.",
        code: `list.addEventListener("click", (e) => {\n  if (e.target.matches("li")) {\n    console.log("Clicked:", e.target.textContent);\n  }\n});`,
      },
    ],
  },

  // ===================== BROWSER APIs =====================
  {
    id: "timers",
    title: "setTimeout & setInterval",
    category: "Browser APIs",
    definition:
      "Timer functions schedule code to run once after a delay (setTimeout) or repeatedly on an interval (setInterval).",
    sections: [
      {
        heading: "setTimeout",
        text: "Runs a function once, after a given delay in milliseconds.",
        code: `setTimeout(() => {\n  console.log("Runs after 2 seconds");\n}, 2000);`,
      },
      {
        heading: "setInterval",
        text: "Repeats a function every given interval until stopped.",
        code: `const id = setInterval(() => {\n  console.log("Tick");\n}, 1000);`,
      },
      {
        heading: "Clearing timers",
        text: "Both functions return an ID that can be passed to clearTimeout/clearInterval to cancel them.",
        code: `clearTimeout(timeoutId);\nclearInterval(id);`,
      },
    ],
  },
  {
    id: "storage",
    title: "LocalStorage, SessionStorage & Cookies",
    category: "Browser APIs",
    definition:
      "Browser storage options for saving data on the user's device between page visits, each with different lifespans and use cases.",
    sections: [
      {
        heading: "LocalStorage",
        text: "Stores string data with no expiration — it persists even after the browser is closed, until explicitly cleared.",
        code: `localStorage.setItem("theme", "dark");\nlocalStorage.getItem("theme");   // "dark"\nlocalStorage.removeItem("theme");`,
      },
      {
        heading: "SessionStorage",
        text: "Same API as localStorage, but data is cleared automatically when the browser tab is closed.",
        code: `sessionStorage.setItem("draft", "hello");\nsessionStorage.getItem("draft");`,
      },
      {
        heading: "Cookies",
        text: "Small pieces of data sent with every HTTP request to the server, unlike storage which stays purely client-side. Useful for things a server needs to read, like session IDs.",
        code: `document.cookie = "username=Vansh; max-age=3600";`,
      },
      {
        heading: "Storing objects",
        text: "Storage only holds strings, so use JSON.stringify/parse to save and retrieve objects or arrays.",
        code: `localStorage.setItem("user", JSON.stringify({ name: "Vansh" }));\nconst user = JSON.parse(localStorage.getItem("user"));`,
      },
    ],
  },
  {
    id: "url-api",
    title: "URL & URLSearchParams",
    category: "Browser APIs",
    definition:
      "Built-in classes for parsing and building URLs, and for reading/modifying query string parameters without manual string manipulation.",
    sections: [
      {
        heading: "The URL class",
        text: "Parses a URL string into its individual parts.",
        code: `const url = new URL("https://example.com/search?q=js&page=2");\nurl.hostname; // "example.com"\nurl.pathname; // "/search"`,
      },
      {
        heading: "URLSearchParams",
        text: "Reads and modifies query parameters easily.",
        code: `url.searchParams.get("q");     // "js"\nurl.searchParams.set("page", "3");\nurl.searchParams.has("q");     // true`,
      },
    ],
  },
  {
    id: "browser-misc-apis",
    title: "History, Location, Navigator & Clipboard APIs",
    category: "Browser APIs",
    definition:
      "A collection of built-in browser objects for controlling navigation, reading page/browser info, and interacting with system features like the clipboard and geolocation.",
    sections: [
      {
        heading: "Location",
        text: "Represents the current page's URL and provides methods to navigate to a new one.",
        code: `location.href;        // full current URL\nlocation.reload();    // refresh the page\nlocation.href = "https://example.com"; // navigate away`,
      },
      {
        heading: "History API",
        text: "Lets you move through the browser's session history or add new entries without a full page reload (used heavily by single-page apps).",
        code: `history.back();\nhistory.forward();\nhistory.pushState({}, "", "/new-path");`,
      },
      {
        heading: "Navigator",
        text: "Exposes information about the browser and device, such as whether the user is online.",
        code: `navigator.userAgent;\nnavigator.onLine; // true/false`,
      },
      {
        heading: "Clipboard and Geolocation",
        text: "Clipboard API copies/reads text (with permission); Geolocation API asks the user for their location.",
        code: `navigator.clipboard.writeText("Copied text!");\n\nnavigator.geolocation.getCurrentPosition((pos) => {\n  console.log(pos.coords.latitude, pos.coords.longitude);\n});`,
      },
    ],
  },

  // ===================== MODERN JAVASCRIPT / ES6+ =====================
  {
    id: "es6-modules",
    title: "JavaScript Modules (import/export)",
    category: "Modern JavaScript",
    definition:
      "Modules let you split code across multiple files, exporting values from one file and importing them into another.",
    sections: [
      {
        heading: "Named exports",
        text: "Export multiple named values from a file, and import exactly the ones you need using the same names.",
        code: `// math.js\nexport const add = (a, b) => a + b;\nexport const PI = 3.14;\n\n// main.js\nimport { add, PI } from "./math.js";`,
      },
      {
        heading: "Default export",
        text: "Each file can have one default export, imported without curly braces and under any name you choose.",
        code: `// user.js\nexport default function User(name) { this.name = name; }\n\n// main.js\nimport User from "./user.js";`,
      },
      {
        heading: "Import aliases",
        text: "Rename an import with 'as' to avoid naming conflicts.",
        code: `import { add as sum } from "./math.js";\nsum(2, 3); // 5`,
      },
      {
        heading: "Dynamic import",
        text: "import() loads a module on demand and returns a promise — useful for splitting code and loading it only when needed.",
        code: `button.addEventListener("click", async () => {\n  const { add } = await import("./math.js");\n  console.log(add(2, 3));\n});`,
      },
    ],
  },
  {
    id: "set-map",
    title: "Set & Map",
    category: "Modern JavaScript",
    definition:
      "Set stores a collection of unique values. Map stores key-value pairs where keys can be any type, unlike plain objects which only allow string/symbol keys.",
    sections: [
      {
        heading: "Set — unique values",
        text: "Automatically removes duplicates, making it a quick way to de-duplicate an array.",
        code: `const unique = new Set([1, 2, 2, 3, 3]);\nunique.size;             // 3\n[...unique];             // [1, 2, 3]\nunique.has(2);           // true`,
      },
      {
        heading: "Map — flexible keys",
        text: "Unlike an object, a Map's keys can be objects, functions, or any value, and it keeps insertion order.",
        code: `const scores = new Map();\nscores.set("Vansh", 90);\nscores.set("Riya", 85);\nscores.get("Vansh"); // 90\nscores.has("Riya");  // true\nfor (const [name, score] of scores) {\n  console.log(name, score);\n}`,
      },
    ],
  },
  {
    id: "weakset-weakmap",
    title: "WeakSet & WeakMap",
    category: "Modern JavaScript",
    definition:
      "Weaker versions of Set/Map that only hold objects (not primitives) and allow those objects to be garbage-collected when nothing else references them.",
    sections: [
      {
        heading: "WeakMap",
        text: "Useful for attaching private, memory-safe metadata to an object without preventing it from being cleaned up when it's no longer used elsewhere.",
        code: `const cache = new WeakMap();\nlet obj = { id: 1 };\ncache.set(obj, "some metadata");\ncache.get(obj); // "some metadata"`,
      },
      {
        heading: "Why 'weak'",
        text: "Neither WeakSet nor WeakMap can be looped over or checked for size — this restriction is what allows the garbage collector to clean up unused entries automatically.",
      },
    ],
  },
  {
    id: "symbol-bigint",
    title: "Symbol & BigInt",
    category: "Modern JavaScript",
    definition:
      "Two less-common primitive types: Symbol creates guaranteed-unique values, and BigInt represents integers beyond what Number can safely handle.",
    sections: [
      {
        heading: "Symbol",
        text: "Every call to Symbol() creates a brand-new, unique value — even with the same description — often used as a hidden/non-colliding object key.",
        code: `const id1 = Symbol("id");\nconst id2 = Symbol("id");\nid1 === id2; // false — always unique`,
      },
      {
        heading: "BigInt",
        text: "Regular numbers lose precision above 2^53. Append 'n' to a number literal (or use BigInt()) to work with arbitrarily large integers safely.",
        code: `const big = 9007199254740993n;\nconst big2 = BigInt(9007199254740993);\n// big + 1n; // works — but can't mix BigInt and Number directly`,
      },
    ],
  },

  // ===================== DATA STRUCTURES =====================
  {
    id: "stack-queue",
    title: "Stack & Queue",
    category: "Data Structures",
    definition:
      "Stack and Queue are simple data structures for ordering items — a Stack is Last-In-First-Out, a Queue is First-In-First-Out. JavaScript arrays can implement both.",
    sections: [
      {
        heading: "Stack (LIFO)",
        text: "The last item added is the first one removed — push/pop on the end of an array behave exactly like a stack.",
        code: `const stack = [];\nstack.push(1); stack.push(2); stack.push(3);\nstack.pop(); // 3 — removes the most recently added item`,
      },
      {
        heading: "Queue (FIFO)",
        text: "The first item added is the first one removed — push to the end, shift from the start.",
        code: `const queue = [];\nqueue.push("a"); queue.push("b");\nqueue.shift(); // "a" — removes the earliest added item`,
      },
    ],
  },
  {
    id: "linked-list",
    title: "Linked List Basics",
    category: "Data Structures",
    definition:
      "A linked list is a chain of nodes, where each node holds a value and a reference to the next node — unlike arrays, items aren't stored in one contiguous block of memory.",
    sections: [
      {
        heading: "Building a simple node chain",
        text: "Each node points to the next, and the list is traversed by following those pointers from the head.",
        code: `const node3 = { value: 3, next: null };\nconst node2 = { value: 2, next: node3 };\nconst node1 = { value: 1, next: node2 }; // head\n\nlet current = node1;\nwhile (current) {\n  console.log(current.value);\n  current = current.next;\n}\n// 1, 2, 3`,
      },
      {
        heading: "Why use one",
        text: "Inserting or removing at the start/middle of a linked list can be faster than an array, since there's no need to shift every following element.",
      },
    ],
  },
  {
    id: "tree-graph",
    title: "Tree & Graph Basics",
    category: "Data Structures",
    definition:
      "A tree is a hierarchical structure where each node has one parent (except the root) and any number of children. A graph is a more general structure of nodes connected by edges, which may form cycles.",
    sections: [
      {
        heading: "A simple tree",
        text: "Common examples include the DOM itself, file systems, and category hierarchies.",
        code: `const tree = {\n  value: "CEO",\n  children: [\n    { value: "Manager A", children: [] },\n    { value: "Manager B", children: [] },\n  ],\n};`,
      },
      {
        heading: "A simple graph",
        text: "Graphs represent many-to-many relationships, like a social network or a road map, often stored as an adjacency list.",
        code: `const graph = {\n  A: ["B", "C"],\n  B: ["A", "D"],\n  C: ["A"],\n  D: ["B"],\n};`,
      },
    ],
  },
  {
    id: "hashing",
    title: "Hashing Concepts",
    category: "Data Structures",
    definition:
      "Hashing converts data into a fixed-size value (a hash), used to look things up in constant time — it's the idea behind how objects and Maps achieve fast key lookups.",
    sections: [
      {
        heading: "The core idea",
        text: "A hash function turns a key into an index/bucket, so checking whether something exists doesn't require scanning every item — this is why Map/Set lookups are so fast.",
      },
      {
        heading: "Objects as hash maps",
        text: "A plain object used purely for fast key lookups (rather than order or iteration) is effectively acting as a hash map.",
        code: `const seen = {};\nfor (const word of ["a", "b", "a"]) {\n  if (seen[word]) {\n    console.log(word, "is a duplicate");\n  }\n  seen[word] = true;\n}`,
      },
    ],
  },

  // ===================== ADVANCED =====================
  {
    id: "primitive-vs-reference",
    title: "Primitive vs Reference Values",
    category: "Advanced",
    definition:
      "Primitives (string, number, boolean, etc.) are copied by value. Objects and arrays are copied by reference — variables point to the same underlying data.",
    sections: [
      {
        heading: "Primitives copy by value",
        text: "Changing one variable doesn't affect a copy made from it.",
        code: `let a = 5;\nlet b = a;\nb = 10;\nconsole.log(a); // 5 — unaffected`,
      },
      {
        heading: "Objects copy by reference",
        text: "Both variables point to the exact same object in memory — changing one changes what the other sees too.",
        code: `let obj1 = { value: 5 };\nlet obj2 = obj1;\nobj2.value = 10;\nconsole.log(obj1.value); // 10 — same object!`,
      },
      {
        heading: "Comparing objects",
        text: "Two separately created objects with identical content are never === equal, because equality checks the reference, not the content.",
        code: `{ a: 1 } === { a: 1 }; // false — different objects in memory`,
      },
    ],
  },
  {
    id: "mutability-copying",
    title: "Mutability, Shallow vs Deep Copy",
    category: "Advanced",
    definition:
      "Mutable values can be changed after creation (objects/arrays); immutable ones can't (primitives). Copying an object 'shallowly' only copies the top level, while a 'deep' copy duplicates everything nested too.",
    sections: [
      {
        heading: "Shallow copy",
        text: "Spread and Object.assign only copy the first level — nested objects/arrays are still shared references.",
        code: `const original = { info: { age: 22 } };\nconst shallow = { ...original };\nshallow.info.age = 30;\nconsole.log(original.info.age); // 30 — nested object was shared!`,
      },
      {
        heading: "Deep copy with structuredClone",
        text: "structuredClone() (built into modern browsers) creates a true deep copy, so nested data is fully independent.",
        code: `const original = { info: { age: 22 } };\nconst deep = structuredClone(original);\ndeep.info.age = 30;\nconsole.log(original.info.age); // 22 — unaffected`,
      },
      {
        heading: "Immutable updates",
        text: "Instead of mutating an object directly, many modern patterns (like React state) create a new object with the changes — this keeps data predictable.",
        code: `const user = { name: "Vansh", age: 22 };\nconst updated = { ...user, age: 23 }; // new object, original untouched`,
      },
    ],
  },
  {
    id: "memory-gc",
    title: "Garbage Collection & Memory Management",
    category: "Advanced",
    definition:
      "JavaScript automatically manages memory — allocating it when values are created, and freeing it (garbage collection) once nothing references those values anymore.",
    sections: [
      {
        heading: "How values get collected",
        text: "When there are no remaining references to a value, the garbage collector eventually frees the memory it was using — you don't need to do this manually.",
        code: `let user = { name: "Vansh" };\nuser = null; // no references left — eligible for garbage collection`,
      },
      {
        heading: "Common memory leaks",
        text: "Forgotten timers, event listeners that are never removed, or global variables that keep growing can all prevent memory from being freed.",
        code: `// Leak: interval keeps a reference forever if never cleared\nconst id = setInterval(() => console.log("tick"), 1000);\n// clearInterval(id); — needed to let it be cleaned up`,
      },
    ],
  },
  {
    id: "memoization",
    title: "Memoization",
    category: "Advanced",
    definition:
      "Memoization caches the result of an expensive function call so repeated calls with the same input return instantly instead of recomputing.",
    sections: [
      {
        heading: "A simple memoized function",
        text: "Store past results in an object keyed by their input, and check the cache before doing the real work.",
        code: `function memoize(fn) {\n  const cache = {};\n  return function (n) {\n    if (cache[n] !== undefined) return cache[n];\n    const result = fn(n);\n    cache[n] = result;\n    return result;\n  };\n}\n\nconst slowSquare = (n) => { for (let i=0;i<1e6;i++); return n * n; };\nconst fastSquare = memoize(slowSquare);\nfastSquare(5); // computed\nfastSquare(5); // instantly returned from cache`,
      },
      {
        heading: "When to use it",
        text: "Best for pure, deterministic functions that are called repeatedly with the same inputs, like recursive calculations or expensive data transformations.",
      },
    ],
  },
  {
    id: "debounce-throttle",
    title: "Debouncing & Throttling",
    category: "Advanced",
    definition:
      "Both techniques limit how often a function runs in response to frequent events (like scrolling or typing), but in different ways.",
    sections: [
      {
        heading: "Debouncing",
        text: "Delays running a function until a pause in activity — each new call resets the timer. Great for search inputs, so you don't fire a request on every keystroke.",
        code: `function debounce(fn, delay) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n}\nconst debouncedSearch = debounce((q) => console.log("Searching:", q), 300);`,
      },
      {
        heading: "Throttling",
        text: "Guarantees a function runs at most once every fixed interval, no matter how often it's triggered. Great for scroll or resize handlers.",
        code: `function throttle(fn, limit) {\n  let waiting = false;\n  return (...args) => {\n    if (!waiting) {\n      fn(...args);\n      waiting = true;\n      setTimeout(() => (waiting = false), limit);\n    }\n  };\n}`,
      },
    ],
  },
  {
    id: "iterators-generators",
    title: "Iterators & Generators",
    category: "Advanced",
    definition:
      "An iterator is an object that produces a sequence of values one at a time. A generator function is special syntax for easily creating iterators using 'yield'.",
    sections: [
      {
        heading: "Generator functions",
        text: "Defined with function*, a generator pauses at each 'yield' and resumes from there the next time it's called.",
        code: `function* countUp() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\nconst gen = countUp();\ngen.next(); // { value: 1, done: false }\ngen.next(); // { value: 2, done: false }`,
      },
      {
        heading: "Looping over a generator",
        text: "Generators are iterable, so for...of works directly on them without manually calling next().",
        code: `for (const num of countUp()) {\n  console.log(num); // 1, 2, 3\n}`,
      },
      {
        heading: "Why they're useful",
        text: "Generators can produce infinite or lazy sequences, computing each value only when it's actually needed.",
        code: `function* infiniteIds() {\n  let id = 1;\n  while (true) yield id++;\n}\nconst ids = infiniteIds();\nids.next().value; // 1\nids.next().value; // 2`,
      },
    ],
  },
  {
    id: "regex",
    title: "Regular Expressions",
    category: "Advanced",
    definition:
      "Regular expressions (regex) describe patterns of text, used for validating, searching, and replacing strings.",
    sections: [
      {
        heading: "Creating a regex",
        text: "Written between slashes, with optional flags like 'g' (global) or 'i' (case-insensitive).",
        code: `const pattern = /hello/i;\npattern.test("Hello World"); // true`,
      },
      {
        heading: "Common patterns",
        text: "Special characters build up more powerful patterns: \\d for digits, \\w for word characters, + for one-or-more, * for zero-or-more.",
        code: `const emailPattern = /^[\\w.]+@[\\w]+\\.[a-z]{2,}$/i;\nemailPattern.test("vansh@example.com"); // true`,
      },
      {
        heading: "Using regex with strings",
        text: "String methods like match(), replace(), and split() all accept a regex pattern instead of plain text.",
        code: `"2024-01-15".match(/\\d+/g);          // ["2024", "01", "15"]\n"hello world".replace(/o/g, "0");     // "hell0 w0rld"`,
      },
    ],
  },
  {
    id: "custom-errors",
    title: "Custom Errors",
    category: "Advanced",
    definition:
      "Custom error classes extend the built-in Error class to create more specific, descriptive error types for your application.",
    sections: [
      {
        heading: "Creating a custom error",
        text: "Extend Error and call super() to set the message — this keeps the standard error behavior (like .message and .stack) while adding your own type.",
        code: `class ValidationError extends Error {\n  constructor(message) {\n    super(message);\n    this.name = "ValidationError";\n  }\n}`,
      },
      {
        heading: "Throwing and catching it",
        text: "You can check the error's type in a catch block to handle different failures differently.",
        code: `function validateAge(age) {\n  if (age < 0) throw new ValidationError("Age can't be negative");\n  return age;\n}\ntry {\n  validateAge(-5);\n} catch (err) {\n  if (err instanceof ValidationError) {\n    console.log("Validation issue:", err.message);\n  }\n}`,
      },
    ],
  },

  // ===================== PRACTICAL JAVASCRIPT =====================
  {
    id: "form-validation",
    title: "Form Validation",
    category: "Practical JavaScript",
    definition:
      "Checking user input before it's submitted or processed, to catch mistakes early and give immediate feedback.",
    sections: [
      {
        heading: "Basic required-field check",
        text: "Reading form values and validating them on submit, preventing the default page reload.",
        code: `form.addEventListener("submit", (e) => {\n  e.preventDefault();\n  const email = form.email.value.trim();\n  if (!email) {\n    showError("Email is required");\n    return;\n  }\n  submitForm({ email });\n});`,
      },
      {
        heading: "Pattern validation",
        text: "Combine regex with conditionals to validate formats like email addresses.",
        code: `function isValidEmail(email) {\n  return /^[\\w.]+@[\\w]+\\.[a-z]{2,}$/i.test(email);\n}`,
      },
    ],
  },
  {
    id: "search-filter-sort",
    title: "Search Filter & Sorting Data",
    category: "Practical JavaScript",
    definition:
      "A common UI pattern: filtering a list based on user input, and sorting results by a chosen field.",
    sections: [
      {
        heading: "Filtering by search text",
        text: "filter() combined with a case-insensitive includes() check builds a live search.",
        code: `const products = [{ name: "Laptop" }, { name: "Lamp" }, { name: "Table" }];\nfunction search(query) {\n  return products.filter((p) =>\n    p.name.toLowerCase().includes(query.toLowerCase())\n  );\n}\nsearch("la"); // [{name:"Laptop"}, {name:"Lamp"}]`,
      },
      {
        heading: "Sorting by field",
        text: "sort() with a compare function lets you sort by any object property, ascending or descending.",
        code: `const byPriceAsc = [...products].sort((a, b) => a.price - b.price);\nconst byNameDesc = [...products].sort((a, b) => b.name.localeCompare(a.name));`,
      },
    ],
  },
  {
    id: "pagination",
    title: "Pagination",
    category: "Practical JavaScript",
    definition:
      "Splitting a large list of data into smaller pages, showing only a slice of items at a time.",
    sections: [
      {
        heading: "Slicing data into pages",
        text: "Combine slice() with the current page number and page size to get just the items for that page.",
        code: `function getPage(items, pageNumber, pageSize) {\n  const start = (pageNumber - 1) * pageSize;\n  return items.slice(start, start + pageSize);\n}\ngetPage([1,2,3,4,5,6,7,8,9], 2, 3); // [4, 5, 6]`,
      },
      {
        heading: "Calculating total pages",
        text: "Math.ceil ensures a partially-filled last page still counts as a full page.",
        code: `const totalPages = Math.ceil(items.length / pageSize);`,
      },
    ],
  },
  {
    id: "api-fetching-crud",
    title: "API Fetching & CRUD with Fetch",
    category: "Practical JavaScript",
    definition:
      "CRUD stands for Create, Read, Update, Delete — the four basic operations most apps perform against an API, each mapped to an HTTP method.",
    sections: [
      {
        heading: "Read (GET) and Create (POST)",
        text: "GET retrieves data; POST sends new data to be created.",
        code: `// Read\nconst users = await (await fetch("/api/users")).json();\n\n// Create\nawait fetch("/api/users", {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({ name: "Vansh" }),\n});`,
      },
      {
        heading: "Update (PUT/PATCH) and Delete",
        text: "PUT/PATCH update an existing resource; DELETE removes one, usually identified by an ID in the URL.",
        code: `// Update\nawait fetch("/api/users/1", {\n  method: "PATCH",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({ name: "Updated Name" }),\n});\n\n// Delete\nawait fetch("/api/users/1", { method: "DELETE" });`,
      },
    ],
  },
  {
    id: "loading-error-states",
    title: "Loading State & Error State",
    category: "Practical JavaScript",
    definition:
      "Tracking whether data is currently loading, loaded, or failed, so the UI can show a spinner, the data, or an error message accordingly.",
    sections: [
      {
        heading: "Tracking the three states",
        text: "A simple pattern using a state object updated at each stage of an async request.",
        code: `let state = { loading: false, data: null, error: null };\n\nasync function loadUsers() {\n  state = { loading: true, data: null, error: null };\n  try {\n    const res = await fetch("/api/users");\n    state = { loading: false, data: await res.json(), error: null };\n  } catch (err) {\n    state = { loading: false, data: null, error: err.message };\n  }\n}`,
      },
      {
        heading: "Why it matters",
        text: "Without explicit states, users see a blank or frozen screen with no feedback while data loads or if something goes wrong.",
      },
    ],
  },
  {
    id: "debounced-search",
    title: "Debounced Search",
    category: "Practical JavaScript",
    definition:
      "Combining debouncing with an API call so a search request only fires after the user pauses typing, instead of on every keystroke.",
    sections: [
      {
        heading: "Putting it together",
        text: "Wrap the actual search/fetch logic in a debounced function and call it from the input's event listener.",
        code: `function debounce(fn, delay) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n}\n\nasync function searchUsers(query) {\n  const res = await fetch("/api/users?q=" + query);\n  console.log(await res.json());\n}\n\nconst debouncedSearch = debounce(searchUsers, 400);\nsearchInput.addEventListener("input", (e) => {\n  debouncedSearch(e.target.value);\n});`,
      },
      {
        heading: "Handling empty input",
        text: "Guard against firing a request for an empty query, so clearing the input doesn't trigger an unnecessary API call.",
        code: `async function searchUsers(query) {\n  if (!query.trim()) {\n    renderResults([]); // just clear the results instead\n    return;\n  }\n  const res = await fetch("/api/users?q=" + query);\n  renderResults(await res.json());\n}`,
      },
    ],
  },
  {
    id: "localstorage-project",
    title: "LocalStorage Project (Todo Logic)",
    category: "Practical JavaScript",
    definition:
      "A common beginner project pattern: storing a list of todos in memory, and persisting it to localStorage so it survives a page refresh.",
    sections: [
      {
        heading: "Saving and loading the list",
        text: "Convert the array to a JSON string to save it, and parse it back when the page loads.",
        code: `function saveTodos(todos) {\n  localStorage.setItem("todos", JSON.stringify(todos));\n}\nfunction loadTodos() {\n  return JSON.parse(localStorage.getItem("todos")) || [];\n}`,
      },
      {
        heading: "Adding and removing todos",
        text: "Update the array, then re-save it to localStorage so the change persists.",
        code: `let todos = loadTodos();\nfunction addTodo(text) {\n  todos.push({ text, done: false });\n  saveTodos(todos);\n}\nfunction removeTodo(index) {\n  todos = todos.filter((_, i) => i !== index);\n  saveTodos(todos);\n}`,
      },
    ],
  },
  {
    id: "shopping-cart-logic",
    title: "Shopping Cart Logic",
    category: "Practical JavaScript",
    definition:
      "The core logic behind an e-commerce cart: adding items, updating quantities, removing items, and calculating totals.",
    sections: [
      {
        heading: "Adding items and updating quantity",
        text: "Check if the item already exists in the cart before deciding whether to add it fresh or just bump its quantity.",
        code: `let cart = [];\nfunction addToCart(product) {\n  const existing = cart.find((item) => item.id === product.id);\n  if (existing) {\n    existing.quantity += 1;\n  } else {\n    cart.push({ ...product, quantity: 1 });\n  }\n}`,
      },
      {
        heading: "Calculating the total",
        text: "reduce() combines each item's price × quantity into a single running total.",
        code: `function getTotal(cart) {\n  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);\n}`,
      },
    ],
  },
  {
    id: "dark-mode-logic",
    title: "Dark Mode Logic",
    category: "Practical JavaScript",
    definition:
      "Toggling a light/dark theme and remembering the user's choice across visits using classList and localStorage.",
    sections: [
      {
        heading: "Toggling the theme",
        text: "Add or remove a class on the root element, and let CSS handle the actual color changes.",
        code: `function toggleTheme() {\n  document.documentElement.classList.toggle("dark");\n}`,
      },
      {
        heading: "Persisting the choice",
        text: "Save the preference to localStorage and apply it as soon as the page loads, before the user even clicks anything.",
        code: `function toggleTheme() {\n  const isDark = document.documentElement.classList.toggle("dark");\n  localStorage.setItem("theme", isDark ? "dark" : "light");\n}\n\n// On page load:\nif (localStorage.getItem("theme") === "dark") {\n  document.documentElement.classList.add("dark");\n}`,
      },
    ],
  },
];

export default jsDocs;