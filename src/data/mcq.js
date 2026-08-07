export const MCQ = {
  Easy: [
    { q: "What does `typeof []` return?", options: ["array", "object", "list", "undefined"], answer: 1 },
    { q: "Which keyword declares a block-scoped, reassignable variable?", options: ["var", "const", "let", "static"], answer: 2 },
    { q: "What is the output of `console.log(1 + '1')`?", options: ["2", "'11'", "NaN", "Error"], answer: 1 },
    { q: "Which method adds an item to the end of an array?", options: ["push()", "pop()", "shift()", "unshift()"], answer: 0 },
    { q: "What does `===` check that `==` doesn't?", options: ["Nothing", "Type", "Existence", "Scope"], answer: 1 },
  ],
  Medium: [
    { q: "What will `[1,2,3].map(String)` return?", options: ["[1,2,3]", "['1','2','3']", "'123'", "Error"], answer: 1 },
    { q: "Which of these creates a closure?", options: ["A for loop", "A function returning a function", "An if statement", "A try/catch"], answer: 1 },
    { q: "What does `Object.freeze(obj)` do?", options: ["Deletes obj", "Deep clones obj", "Prevents adding/removing/changing top-level properties", "Converts obj to JSON"], answer: 2 },
    { q: "What is event bubbling?", options: ["Events fire on the innermost element first, then parents", "Events fire on parents first", "Events never propagate", "A memory leak"], answer: 0 },
    { q: "What does the spread operator do in `{...obj, x: 1}`?", options: ["Deletes obj", "Copies obj's own enumerable props then overrides x", "Throws an error", "Freezes obj"], answer: 1 },
  ],
  Hard: [
    { q: "What is the output of `console.log(typeof NaN)`?", options: ["'NaN'", "'number'", "'undefined'", "'object'"], answer: 1 },
    { q: "Which queue runs first: microtasks or macrotasks?", options: ["Macrotasks", "Microtasks", "They run simultaneously", "Depends on the browser"], answer: 1 },
    { q: "What does `Function.prototype.bind` return?", options: ["The result of calling the function", "A new function with `this` permanently set", "undefined", "The original function"], answer: 1 },
    { q: "What is a memory leak commonly caused by in JS apps?", options: ["Using const", "Forgotten timers/listeners keeping references alive", "Using arrow functions", "Using template literals"], answer: 1 },
    { q: "What does `Promise.race` resolve/reject with?", options: ["All results as an array", "Only rejected promises", "The first settled promise's outcome", "Nothing, it never settles"], answer: 2 },
  ],
};
