export const TASKS = {
  Easy: [
    { id: "e1", title: "FizzBuzz", desc: "Print numbers 1–100. Multiples of 3 print 'Fizz', multiples of 5 print 'Buzz', both print 'FizzBuzz'." },
    { id: "e2", title: "Reverse a String", desc: "Write a function that reverses a string without using .reverse()." },
    { id: "e3", title: "Find the Largest Number", desc: "Given an array of numbers, return the largest one without using Math.max." },
    { id: "e4", title: "Palindrome Check", desc: "Write a function that checks whether a given string reads the same forwards and backwards." },
    { id: "e5", title: "Sum of Digits", desc: "Given a number, return the sum of its digits." },
  ],
  Medium: [
    { id: "m1", title: "Debounce Function", desc: "Implement a debounce(fn, delay) utility from scratch." },
    { id: "m2", title: "Flatten Nested Array", desc: "Flatten an array nested to an arbitrary depth without using Array.flat()." },
    { id: "m3", title: "Group By Key", desc: "Write groupBy(array, key) that groups an array of objects by a given property." },
    { id: "m4", title: "Custom Event Emitter", desc: "Build a small class with .on, .off and .emit methods." },
    { id: "m5", title: "Deep Clone an Object", desc: "Write a function that deep clones a nested object without using structuredClone." },
  ],
  Hard: [
    { id: "h1", title: "Promise.all from Scratch", desc: "Re-implement Promise.all using only native Promises." },
    { id: "h2", title: "Throttle + Debounce Hybrid", desc: "Build a rate limiter that supports both leading and trailing calls." },
    { id: "h3", title: "LRU Cache", desc: "Implement a Least Recently Used cache with get/put in O(1)." },
    { id: "h4", title: "Curry Function", desc: "Write a curry(fn) helper that supports partial application for any arity." },
    { id: "h5", title: "Virtual DOM Diff (mini)", desc: "Write a simplified diff function that compares two plain-object trees and returns a patch list." },
  ],
};
