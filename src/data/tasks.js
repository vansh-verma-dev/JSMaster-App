const tasks = [
  
  {
    id: 1,
    title: "Array Data Transformation",
    level: "Intermediate",
    category: "Arrays",
    description:
      "Given an array of user objects, create a new array containing only the user's name, age and email.",
    requirements: [
      "Use map() to transform the data.",
      "Do not modify the original array.",
      "Return a new array of objects."
    ],
    hint:
      "map() is useful when you want to transform every item into a new structure."
  },

  {
    id: 2,
    title: "Advanced Array Filtering",
    level: "Intermediate",
    category: "Arrays",
    description:
      "Filter a list of products based on price, category and stock availability.",
    requirements: [
      "Products must be in stock.",
      "Filter products below a given price.",
      "Filter products by category.",
      "Do not modify the original array."
    ],
    hint:
      "Use filter() with multiple conditions."
  },

  {
    id: 3,
    title: "Group Array Objects",
    level: "Hard",
    category: "Arrays",
    description:
      "Group an array of products based on their category.",
    requirements: [
      "Create an object where each key represents a category.",
      "Products belonging to the same category should be grouped together.",
      "Use reduce()."
    ],
    hint:
      "reduce() can be used to build an object dynamically."
  },

  {
    id: 4,
    title: "Find Top Performing Users",
    level: "Hard",
    category: "Arrays",
    description:
      "Given users with multiple purchase records, calculate the total spending of every user and find the top three users.",
    requirements: [
      "Calculate total spending for each user.",
      "Sort users by total spending.",
      "Return the top three users."
    ],
    hint:
      "Combine map(), reduce() and sort()."
  },

  {
    id: 5,
    title: "Array Chunk Utility",
    level: "Hard",
    category: "Arrays",
    description:
      "Create a reusable function that divides an array into smaller arrays of a specified size.",
    requirements: [
      "Accept an array and chunk size.",
      "Return a new nested array.",
      "Do not modify the original array.",
      "Handle invalid chunk sizes."
    ],
    hint:
      "Use slice() inside a loop."
  },
 

  {
    id: 6,
    title: "Deep Object Transformation",
    level: "Hard",
    category: "Objects",
    description:
      "Create a function that converts nested user data into a simplified object structure.",
    requirements: [
      "Extract nested properties.",
      "Create a new object.",
      "Do not mutate the original object.",
      "Handle missing properties safely."
    ],
    hint:
      "Optional chaining can help with deeply nested properties."
  },

  {
    id: 7,
    title: "Object Property Frequency",
    level: "Intermediate",
    category: "Objects",
    description:
      "Given an array of objects, count how many times each value occurs for a selected property.",
    requirements: [
      "Accept an array and property name.",
      "Count occurrences.",
      "Return an object containing the frequency."
    ],
    hint:
      "Use reduce() with a dynamic object key."
  },

  {
    id: 8,
    title: "Deep Clone Object",
    level: "Hard",
    category: "Objects",
    description:
      "Create a function that creates a deep copy of a nested object without sharing references.",
    requirements: [
      "Nested objects must also be copied.",
      "Changing the cloned object must not affect the original.",
      "Avoid direct reference assignment."
    ],
    hint:
      "Think about structuredClone() and recursive approaches."
  },
  

  {
    id: 9,
    title: "Custom Array Map",
    level: "Hard",
    category: "ES6+",
    description:
      "Implement your own version of Array.prototype.map().",
    requirements: [
      "Create a custom function.",
      "It should accept a callback.",
      "Return a new array.",
      "Do not use the built-in map()."
    ],
    hint:
      "Use a loop and call the callback for every element."
  },

  {
    id: 10,
    title: "Custom Array Filter",
    level: "Hard",
    category: "ES6+",
    description:
      "Implement your own version of Array.prototype.filter().",
    requirements: [
      "Accept a callback function.",
      "Return only elements for which callback returns true.",
      "Do not use filter()."
    ],
    hint:
      "Create an empty result array and push matching values."
  },

  {
    id: 11,
    title: "Custom Reduce",
    level: "Hard",
    category: "ES6+",
    description:
      "Implement your own reduce() function.",
    requirements: [
      "Accept an array.",
      "Accept a callback.",
      "Accept an initial value.",
      "Return the final accumulated value."
    ],
    hint:
      "Maintain an accumulator variable while looping."
  },

  {
    id: 12,
    title: "Rest and Spread Data Merger",
    level: "Intermediate",
    category: "ES6+",
    description:
      "Merge multiple user configuration objects into one final configuration.",
    requirements: [
      "Use spread syntax.",
      "Support multiple objects.",
      "Later properties should override earlier properties."
    ],
    hint:
      "Object spread is useful for configuration merging."
  },

 
  {
    id: 13,
    title: "Dynamic Table Generator",
    level: "Hard",
    category: "DOM",
    description:
      "Create a dynamic HTML table from an array of JavaScript objects.",
    requirements: [
      "Generate table headers dynamically.",
      "Generate rows dynamically.",
      "Do not hardcode table data.",
      "Add a delete button for each row."
    ],
    hint:
      "Use createElement() and append()."
  },

  {
    id: 14,
    title: "Live Search with Highlight",
    level: "Hard",
    category: "DOM",
    description:
      "Create a live search system that filters users while typing and highlights matching text.",
    requirements: [
      "Search should work without a button.",
      "Update results on every input.",
      "Highlight the matching text.",
      "Show a no-results message."
    ],
    hint:
      "Listen for the input event."
  },

  {
    id: 15,
    title: "Event Delegation Task Manager",
    level: "Hard",
    category: "DOM",
    description:
      "Build a task list where dynamically created tasks can be completed or deleted using event delegation.",
    requirements: [
      "Add tasks dynamically.",
      "Delete tasks.",
      "Mark tasks completed.",
      "Use event delegation.",
      "Do not attach individual listeners to every task."
    ],
    hint:
      "Attach one event listener to the parent container."
  },

  {
    id: 16,
    title: "Modal Manager",
    level: "Intermediate",
    category: "DOM",
    description:
      "Create a reusable modal system using JavaScript.",
    requirements: [
      "Open modal dynamically.",
      "Close using a button.",
      "Close when clicking outside.",
      "Close using the Escape key.",
      "Prevent background scrolling."
    ],
    hint:
      "Use keydown and click events."
  },
 
  {
    id: 17,
    title: "Promise Chain Data Processing",
    level: "Hard",
    category: "Promises",
    description:
      "Create multiple asynchronous functions and execute them sequentially using Promises.",
    requirements: [
      "Create at least three asynchronous operations.",
      "Pass data from one operation to the next.",
      "Handle errors using catch()."
    ],
    hint:
      "Return a Promise from every then() callback."
  },

  {
    id: 18,
    title: "Promise.all Dashboard",
    level: "Hard",
    category: "Promises",
    description:
      "Fetch multiple independent data sources simultaneously and display the combined result.",
    requirements: [
      "Create multiple asynchronous requests.",
      "Run them simultaneously.",
      "Wait for all requests.",
      "Handle failure properly."
    ],
    hint:
      "Promise.all() is designed for this situation."
  },

  {
    id: 19,
    title: "Promise Race Timeout",
    level: "Hard",
    category: "Promises",
    description:
      "Create a timeout system that rejects an asynchronous operation if it takes too long.",
    requirements: [
      "Create a timeout Promise.",
      "Create a fake API request.",
      "Race both Promises.",
      "Show timeout message when required."
    ],
    hint:
      "Use Promise.race()."
  },

 
  {
    id: 20,
    title: "Fetch API User Dashboard",
    level: "Hard",
    category: "Fetch API",
    description:
      "Fetch users from a public API and create a searchable user dashboard.",
    requirements: [
      "Fetch data using fetch().",
      "Use async/await.",
      "Render users dynamically.",
      "Add search functionality.",
      "Handle loading state.",
      "Handle API errors."
    ],
    hint:
      "Keep loading, success and error states separate."
  },

  {
    id: 21,
    title: "API Pagination",
    level: "Hard",
    category: "Fetch API",
    description:
      "Create pagination for API data and load a new page without refreshing the browser.",
    requirements: [
      "Fetch paginated data.",
      "Create Next and Previous buttons.",
      "Disable buttons when required.",
      "Show current page.",
      "Handle loading and errors."
    ],
    hint:
      "Keep the current page number in a variable."
  },

  {
    id: 22,
    title: "Search API with Debounce",
    level: "Hard",
    category: "Fetch API",
    description:
      "Create an API search system that waits until the user stops typing before making a request.",
    requirements: [
      "Listen for input.",
      "Delay the API request.",
      "Cancel the previous timer.",
      "Display search results.",
      "Handle API errors."
    ],
    hint:
      "Combine debounce logic with fetch()."
  },
 
  {
    id: 23,
    title: "Persistent State Manager",
    level: "Hard",
    category: "LocalStorage",
    description:
      "Create a small state management utility that keeps application data synchronized with localStorage.",
    requirements: [
      "Create getState().",
      "Create setState().",
      "Save data to localStorage.",
      "Load saved data when the application starts.",
      "Handle invalid stored JSON."
    ],
    hint:
      "JSON.parse() and JSON.stringify() will be required."
  },

  {
    id: 24,
    title: "Shopping Cart Persistence",
    level: "Hard",
    category: "LocalStorage",
    description:
      "Create a shopping cart that remains available after refreshing the browser.",
    requirements: [
      "Add products.",
      "Remove products.",
      "Update quantity.",
      "Calculate total.",
      "Persist cart using localStorage."
    ],
    hint:
      "Save the cart after every modification."
  },
 
  {
    id: 25,
    title: "Create a Private Counter",
    level: "Hard",
    category: "Closures",
    description:
      "Create a counter whose internal value cannot be accessed directly from outside.",
    requirements: [
      "Create a function that returns counter methods.",
      "Support increment().",
      "Support decrement().",
      "Support getValue().",
      "The counter value must remain private."
    ],
    hint:
      "Use a closure."
  },

  {
    id: 26,
    title: "Function Memoization",
    level: "Hard",
    category: "Functions",
    description:
      "Create a memoization function that caches previous function results.",
    requirements: [
      "Create a memoize() function.",
      "Store previous results.",
      "Return cached results for repeated inputs.",
      "Do not execute the original function unnecessarily."
    ],
    hint:
      "Use a closure and Map."
  },

  {
    id: 27,
    title: "Debounce Utility Function",
    level: "Hard",
    category: "Functions",
    description:
      "Create a reusable debounce() utility similar to the one used in modern applications.",
    requirements: [
      "Accept a function.",
      "Accept a delay.",
      "Return a new function.",
      "Reset the timer whenever the function is called."
    ],
    hint:
      "Use setTimeout() and clearTimeout()."
  },

  {
    id: 28,
    title: "Retry Failed API Request",
    level: "Advanced",
    category: "Async JavaScript",
    description:
      "Create a reusable function that retries a failed API request a limited number of times.",
    requirements: [
      "Accept an async function.",
      "Accept maximum retry count.",
      "Retry when the request fails.",
      "Wait before retrying.",
      "Reject after all attempts fail."
    ],
    hint:
      "Combine async/await with a loop and delay Promise."
  },

  {
    id: 29,
    title: "Concurrency Controller",
    level: "Advanced",
    category: "Async JavaScript",
    description:
      "Create a utility that runs multiple asynchronous tasks but limits the number of tasks running simultaneously.",
    requirements: [
      "Accept multiple async functions.",
      "Set a maximum concurrency limit.",
      "Run only the allowed number of tasks at once.",
      "Start the next task when one finishes.",
      "Return all results."
    ],
    hint:
      "Think about a queue and worker functions."
  },

  {
    id: 30,
    title: "Mini State Management System",
    level: "Advanced",
    category: "JavaScript Architecture",
    description:
      "Build a small state management system using closures and the observer pattern.",
    requirements: [
      "Create a central state object.",
      "Create getState().",
      "Create setState().",
      "Allow components to subscribe to changes.",
      "Notify subscribers when state changes.",
      "Prevent direct modification of the internal state."
    ],
    hint:
      "Use closures, subscribers and callbacks."
  }
];

export default tasks;