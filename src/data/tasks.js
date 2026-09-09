const tasks = [
  {
    id: 1,
    title: "Even or Odd Checker",
    level: "Beginner",
    category: "Operators",
    description: "Create a function that determines if a number is even or odd using the modulo operator.",
    requirements: [
      "Accept a single number parameter",
      "Return the string 'even' or 'odd'",
      "Handle negative numbers correctly"
    ],
    hint: "Use the modulo operator (%) to check divisibility by 2."
  },
  {
    id: 2,
    title: "Variable Types Identifier",
    level: "Beginner",
    category: "Data Types",
    description: "Write a function that returns the type of a given value as a string.",
    requirements: [
      "Handle all primitive types: string, number, boolean, undefined, null, symbol",
      "Distinguish between object and array types",
      "Return 'array' for arrays, not 'object'"
    ],
    hint: "typeof is useful, but doesn't distinguish arrays from objects. Use Array.isArray() or instanceof."
  },
  {
    id: 3,
    title: "Temperature Converter",
    level: "Beginner",
    category: "Operators",
    description: "Convert between Celsius and Fahrenheit temperatures based on a conversion type parameter.",
    requirements: [
      "Accept a temperature value and conversion type ('C-to-F' or 'F-to-C')",
      "Use correct conversion formulas",
      "Return the result rounded to 2 decimal places"
    ],
    hint: "Celsius to Fahrenheit: (C × 9/5) + 32. Use Math.round() or toFixed()."
  },
  {
    id: 4,
    title: "Reverse a String",
    level: "Beginner",
    category: "Strings",
    description: "Create a function that reverses a string without using the built-in reverse() method.",
    requirements: [
      "Accept a string parameter",
      "Return the reversed string",
      "Work with special characters and spaces"
    ],
    hint: "Convert to array, use a loop or spread operator with reverse()... wait, don't use reverse. Try split, loop, and concatenate."
  },
  {
    id: 5,
    title: "Count Vowels in String",
    level: "Beginner",
    category: "Strings",
    description: "Write a function that counts the number of vowels in a given string.",
    requirements: [
      "Count both uppercase and lowercase vowels",
      "Return the total count as a number",
      "Ignore consonants and special characters"
    ],
    hint: "Loop through the string and check if each character is a vowel (a, e, i, o, u)."
  },
  {
    id: 6,
    title: "Simple Calculator",
    level: "Beginner",
    category: "Operators",
    description: "Build a function that performs basic arithmetic operations on two numbers.",
    requirements: [
      "Accept two numbers and an operator (+, -, *, /)",
      "Perform the correct operation and return the result",
      "Handle division by zero with an error message"
    ],
    hint: "Use a switch statement to handle different operators."
  },
  {
    id: 7,
    title: "Largest of Three Numbers",
    level: "Beginner",
    category: "Operators",
    description: "Write a function that finds and returns the largest of three given numbers.",
    requirements: [
      "Accept three number parameters",
      "Compare them correctly",
      "Return the largest value"
    ],
    hint: "Use nested if-else or Math.max() function."
  },
  {
    id: 8,
    title: "Grade Calculator",
    level: "Beginner",
    category: "Control Flow",
    description: "Create a function that converts a numeric score to a letter grade.",
    requirements: [
      "Accept a score between 0-100",
      "Return letter grades: A (90+), B (80-89), C (70-79), D (60-69), F (below 60)",
      "Validate that input is within the valid range"
    ],
    hint: "Use if-else statements to check score ranges."
  },
  {
    id: 9,
    title: "Multiplication Table",
    level: "Beginner",
    category: "Control Flow",
    description: "Generate a multiplication table for a given number up to 10.",
    requirements: [
      "Accept a number parameter",
      "Return an array of results",
      "Format should be [number * 1, number * 2, ..., number * 10]"
    ],
    hint: "Use a for loop that iterates from 1 to 10."
  },
  {
    id: 10,
    title: "Find Maximum in Array",
    level: "Beginner",
    category: "Arrays",
    description: "Write a function that finds the maximum value in an array of numbers.",
    requirements: [
      "Work with arrays of any length",
      "Return the maximum number",
      "Handle negative numbers"
    ],
    hint: "Loop through the array and keep track of the largest value seen so far."
  },
  {
    id: 11,
    title: "Remove Duplicate Values",
    level: "Beginner",
    category: "Arrays",
    description: "Create a function that removes duplicate values from an array.",
    requirements: [
      "Accept an array with duplicate values",
      "Return a new array with unique values only",
      "Preserve the original array"
    ],
    hint: "Use a Set or filter with indexOf to identify unique values."
  },
  {
    id: 12,
    title: "Sum All Array Numbers",
    level: "Beginner",
    category: "Arrays",
    description: "Write a function that calculates the sum of all numbers in an array.",
    requirements: [
      "Accept an array of numbers",
      "Return the total sum",
      "Handle empty arrays"
    ],
    hint: "Use a loop or the reduce() method."
  },
  {
    id: 13,
    title: "Capitalize First Letter",
    level: "Beginner",
    category: "Strings",
    description: "Create a function that capitalizes the first letter of a string.",
    requirements: [
      "Accept a string parameter",
      "Capitalize only the first letter",
      "Keep other letters unchanged"
    ],
    hint: "Use charAt() and toUpperCase() to get and convert the first character."
  },
  {
    id: 14,
    title: "Check Number Positivity",
    level: "Beginner",
    category: "Operators",
    description: "Write a function that checks if a number is positive, negative, or zero.",
    requirements: [
      "Accept a single number",
      "Return 'positive', 'negative', or 'zero'",
      "Handle decimal numbers"
    ],
    hint: "Use simple if-else statements with comparison operators."
  },
  {
    id: 15,
    title: "Age Category Classifier",
    level: "Beginner",
    category: "Control Flow",
    description: "Create a function that classifies people into age groups.",
    requirements: [
      "Accept an age number",
      "Return category: 'child' (0-12), 'teen' (13-19), 'adult' (20-64), 'senior' (65+)",
      "Validate age is non-negative"
    ],
    hint: "Use nested if-else or ternary operators to check age ranges."
  },
  {
    id: 16,
    title: "String Length Checker",
    level: "Beginner",
    category: "Strings",
    description: "Write a function that checks if a string meets minimum length requirements.",
    requirements: [
      "Accept a string and a minimum length",
      "Return true if string meets requirement, false otherwise",
      "Use built-in length property"
    ],
    hint: "Access the length property of the string and compare it."
  },
  {
    id: 17,
    title: "Array Element Counter",
    level: "Beginner",
    category: "Arrays",
    description: "Create a function that counts how many times a value appears in an array.",
    requirements: [
      "Accept an array and a search value",
      "Return the count of occurrences",
      "Handle values that don't exist (return 0)"
    ],
    hint: "Loop through the array and increment a counter when you find matches."
  },
  {
    id: 18,
    title: "Boolean Toggle",
    level: "Beginner",
    category: "Operators",
    description: "Write a function that toggles (inverts) a boolean value.",
    requirements: [
      "Accept a boolean parameter",
      "Return the opposite boolean value",
      "Ensure it works with various truthy/falsy values"
    ],
    hint: "Use the NOT operator (!) to invert boolean values."
  },
  {
    id: 19,
    title: "Remainder Calculator",
    level: "Beginner",
    category: "Operators",
    description: "Create a function that returns the remainder of division between two numbers.",
    requirements: [
      "Accept two numbers (dividend and divisor)",
      "Return the remainder",
      "Handle edge cases like zero divisor"
    ],
    hint: "The modulo operator (%) gives you the remainder of a division."
  },
  {
    id: 20,
    title: "String Character Frequency",
    level: "Beginner",
    category: "Strings",
    description: "Write a function that finds the most frequently occurring character in a string.",
    requirements: [
      "Accept a string parameter",
      "Return the most common character",
      "Ignore spaces"
    ],
    hint: "Loop through the string, count character frequencies, then find the maximum."
  },
  {
    id: 21,
    title: "Boolean to String Converter",
    level: "Beginner",
    category: "Type Conversion",
    description: "Create a function that converts boolean values to custom strings.",
    requirements: [
      "Accept a boolean value",
      "Return 'yes' for true, 'no' for false",
      "Handle both true and false cases"
    ],
    hint: "Use a ternary operator for a concise solution."
  },
  {
    id: 22,
    title: "Number to String Concatenation",
    level: "Beginner",
    category: "Type Conversion",
    description: "Write a function that concatenates a number and a string together.",
    requirements: [
      "Accept a number and a string parameter",
      "Return the concatenated result",
      "Ensure the number is converted to a string"
    ],
    hint: "JavaScript will auto-convert when you add strings to numbers, or use String() or toString()."
  },
  {
    id: 23,
    title: "String to Number Parser",
    level: "Beginner",
    category: "Type Conversion",
    description: "Create a function that safely converts a string to a number.",
    requirements: [
      "Accept a string parameter",
      "Return the number if valid, null if invalid",
      "Handle decimal strings"
    ],
    hint: "Use parseInt(), parseFloat(), or Number(). Check if result is NaN."
  },
  {
    id: 24,
    title: "Array First and Last",
    level: "Beginner",
    category: "Arrays",
    description: "Write a function that returns the first and last elements of an array.",
    requirements: [
      "Accept an array parameter",
      "Return an object with 'first' and 'last' properties",
      "Handle single-element arrays"
    ],
    hint: "Use array indexing: 0 for first, length-1 for last."
  },
  {
    id: 25,
    title: "Range Generator",
    level: "Beginner",
    category: "Arrays",
    description: "Create a function that generates an array of numbers within a range.",
    requirements: [
      "Accept start and end parameters",
      "Return array including both start and end",
      "Handle reverse ranges (end < start)"
    ],
    hint: "Use a for loop to generate numbers from start to end."
  },
  {
    id: 26,
    title: "Leap Year Detector",
    level: "Beginner",
    category: "Operators",
    description: "Write a function that checks if a year is a leap year.",
    requirements: [
      "Accept a year number",
      "Return true for leap years, false otherwise",
      "Use proper leap year rules: divisible by 4, except centuries unless divisible by 400"
    ],
    hint: "Leap years: (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)"
  },
  {
    id: 27,
    title: "Average Calculator",
    level: "Beginner",
    category: "Arrays",
    description: "Create a function that calculates the average of an array of numbers.",
    requirements: [
      "Accept an array of numbers",
      "Return the average as a number",
      "Handle empty arrays gracefully"
    ],
    hint: "Sum all elements and divide by the array length."
  },
  {
    id: 28,
    title: "String Case Converter",
    level: "Beginner",
    category: "Strings",
    description: "Write a function that converts a string to uppercase or lowercase.",
    requirements: [
      "Accept a string and a conversion type ('upper' or 'lower')",
      "Return the converted string",
      "Use built-in case conversion methods"
    ],
    hint: "Use toUpperCase() and toLowerCase() methods."
  },
  {
    id: 29,
    title: "Number Rounding",
    level: "Beginner",
    category: "Operators",
    description: "Create a function that rounds numbers to a specified decimal place.",
    requirements: [
      "Accept a number and decimal places parameter",
      "Return the rounded number",
      "Handle negative decimal places"
    ],
    hint: "Use Math.round() with multiplication/division or toFixed()."
  },
  {
    id: 30,
    title: "Array Slice Extractor",
    level: "Beginner",
    category: "Arrays",
    description: "Write a function that extracts a portion of an array.",
    requirements: [
      "Accept an array, start index, and end index",
      "Return a new array with the extracted elements",
      "Handle negative indices correctly"
    ],
    hint: "The slice() method extracts a portion without modifying the original array."
  },
  {
    id: 31,
    title: "String Includes Checker",
    level: "Beginner",
    category: "Strings",
    description: "Create a function that checks if a string contains a substring.",
    requirements: [
      "Accept a string and substring to search for",
      "Return true if found, false otherwise",
      "Be case-sensitive by default"
    ],
    hint: "Use the includes() or indexOf() method."
  },
  {
    id: 32,
    title: "Number Comparator",
    level: "Beginner",
    category: "Comparison Operators",
    description: "Write a function that compares two numbers and returns their relationship.",
    requirements: [
      "Accept two numbers",
      "Return 'greater' if first is larger, 'less' if smaller, 'equal' if same",
      "Handle decimal numbers"
    ],
    hint: "Use if-else statements with comparison operators (<, >, ===)."
  },
  {
    id: 33,
    title: "Absolute Value Finder",
    level: "Beginner",
    category: "Operators",
    description: "Create a function that returns the absolute (positive) value of a number.",
    requirements: [
      "Accept any number parameter",
      "Return the positive value",
      "Handle negative numbers correctly"
    ],
    hint: "Use Math.abs() or manually check if negative and multiply by -1."
  },
  {
    id: 34,
    title: "Array Concatenator",
    level: "Beginner",
    category: "Arrays",
    description: "Write a function that joins two arrays into a single array.",
    requirements: [
      "Accept two array parameters",
      "Return a new combined array",
      "Preserve original arrays"
    ],
    hint: "Use the concat() method or spread operator."
  },
  {
    id: 35,
    title: "Character at Index",
    level: "Beginner",
    category: "Strings",
    description: "Create a function that returns the character at a specific index in a string.",
    requirements: [
      "Accept a string and index number",
      "Return the character at that position",
      "Handle out-of-bounds indices"
    ],
    hint: "Use bracket notation [index] or charAt(index) method."
  },
  {
    id: 36,
    title: "Ternary Grade Assigner",
    level: "Beginner",
    category: "Ternary Operator",
    description: "Use ternary operator to assign a grade based on a score.",
    requirements: [
      "Accept a numeric score",
      "Use nested ternary operators",
      "Return letter grades A, B, C, D, or F"
    ],
    hint: "Ternary syntax: condition ? trueValue : falseValue"
  },
  {
    id: 37,
    title: "Truthy or Falsy Checker",
    level: "Beginner",
    category: "Truthy / Falsy",
    description: "Write a function that determines if a value is truthy or falsy.",
    requirements: [
      "Accept any value",
      "Return 'truthy' or 'falsy'",
      "Correctly identify all falsy values (false, 0, '', null, undefined, NaN)"
    ],
    hint: "In JavaScript, certain values evaluate to false in boolean context: false, 0, '', null, undefined, NaN."
  },
  {
    id: 38,
    title: "Array Slice vs Splice",
    level: "Beginner",
    category: "Arrays",
    description: "Demonstrate understanding of slice() and splice() differences with a function.",
    requirements: [
      "Accept an array and indices",
      "Return an object showing both slice() and splice() results",
      "Explain that splice() modifies the original"
    ],
    hint: "slice() returns new array without modifying original; splice() modifies original."
  },
  {
    id: 39,
    title: "String Starts With Check",
    level: "Beginner",
    category: "Strings",
    description: "Create a function that checks if a string starts with a specific substring.",
    requirements: [
      "Accept a string and substring",
      "Return true if string starts with substring",
      "Use the startsWith() method"
    ],
    hint: "The startsWith() method checks the beginning of a string."
  },
  {
    id: 40,
    title: "Number Between Range Checker",
    level: "Beginner",
    category: "Operators",
    description: "Write a function that checks if a number is within a specified range.",
    requirements: [
      "Accept a number and min/max parameters",
      "Return true if within range (inclusive)",
      "Handle edge cases at boundaries"
    ],
    hint: "Use logical AND (&&) to check both min and max conditions."
  },
  {
    id: 41,
    title: "Array Map - Double Values",
    level: "Intermediate",
    category: "Arrays",
    description: "Use map() to create a new array with doubled values from the original.",
    requirements: [
      "Accept an array of numbers",
      "Return a new array with each value doubled",
      "Don't modify the original array"
    ],
    hint: "The map() method transforms each element and returns a new array."
  },
  {
    id: 42,
    title: "Array Filter - Even Numbers",
    level: "Intermediate",
    category: "Arrays",
    description: "Use filter() to extract only even numbers from an array.",
    requirements: [
      "Accept an array of numbers",
      "Return a new array containing only even numbers",
      "Preserve the original array"
    ],
    hint: "The filter() method returns elements that pass a test condition."
  },
  {
    id: 43,
    title: "Array Reduce - Sum Calculator",
    level: "Intermediate",
    category: "Arrays",
    description: "Use reduce() to calculate the sum of all numbers in an array.",
    requirements: [
      "Accept an array of numbers",
      "Return the total sum",
      "Handle empty arrays"
    ],
    hint: "reduce() accumulates values from an array into a single result."
  },
  {
    id: 44,
    title: "String Template Greeting",
    level: "Intermediate",
    category: "Template Literals",
    description: "Create a greeting function using template literals.",
    requirements: [
      "Accept name and age parameters",
      "Return a formatted greeting using template literals",
      "Include both variables in the message"
    ],
    hint: "Template literals use backticks and ${variable} syntax for interpolation."
  },
  {
    id: 45,
    title: "Object Property Accessor",
    level: "Intermediate",
    category: "Objects",
    description: "Write a function that accesses and returns object properties dynamically.",
    requirements: [
      "Accept an object and property name",
      "Return the property value",
      "Handle missing properties gracefully"
    ],
    hint: "Use bracket notation obj[propertyName] for dynamic property access."
  },
  {
    id: 46,
    title: "Array Find - Search Item",
    level: "Intermediate",
    category: "Arrays",
    description: "Use find() to locate the first item in an array that matches criteria.",
    requirements: [
      "Accept an array of objects and a search criteria",
      "Return the first matching object",
      "Return undefined if not found"
    ],
    hint: "The find() method returns the first element that satisfies the condition."
  },
  {
    id: 47,
    title: "String Split and Join",
    level: "Intermediate",
    category: "Strings",
    description: "Create a function that splits a string and rejoins it with a different separator.",
    requirements: [
      "Accept a string and two separators",
      "Split by first separator and join with second",
      "Handle edge cases with empty strings"
    ],
    hint: "Use split() to create an array, then join() to combine with new separator."
  },
  {
    id: 48,
    title: "Object.keys() Extractor",
    level: "Intermediate",
    category: "Objects",
    description: "Write a function that extracts all property names from an object.",
    requirements: [
      "Accept an object parameter",
      "Return an array of all property names",
      "Use Object.keys() method"
    ],
    hint: "Object.keys() returns an array of property names from an object."
  },
  {
    id: 49,
    title: "Array Sort Numbers",
    level: "Intermediate",
    category: "Arrays",
    description: "Create a function that correctly sorts an array of numbers.",
    requirements: [
      "Accept an array of numbers",
      "Return sorted array in ascending order",
      "Handle negative numbers and decimals"
    ],
    hint: "Array.sort() needs a comparison function for numbers: (a, b) => a - b"
  },
  {
    id: 50,
    title: "Employee Salary Calculator",
    level: "Intermediate",
    category: "Arrays",
    description: "Calculate total salary expense and average salary from employee data.",
    requirements: [
      "Accept an array of employee objects with salary property",
      "Return object with total and average salary",
      "Handle empty employee list"
    ],
    hint: "Use reduce() for total and divide by length for average."
  },
  {
    id: 51,
    title: "Student Grade Analyzer",
    level: "Intermediate",
    category: "Arrays",
    description: "Analyze student grades and return statistical information.",
    requirements: [
      "Accept an array of student objects with grades",
      "Return object with highest, lowest, and average grades",
      "Use array methods like map(), reduce()"
    ],
    hint: "Combine map() and reduce() or use Math.max/min on transformed data."
  },
  {
    id: 52,
    title: "Object Destructuring Basics",
    level: "Intermediate",
    category: "Objects",
    description: "Use object destructuring to extract properties into variables.",
    requirements: [
      "Accept an object with multiple properties",
      "Extract properties using destructuring syntax",
      "Return a formatted string using extracted values"
    ],
    hint: "Destructuring syntax: const { property1, property2 } = object"
  },
  {
    id: 53,
    title: "Array Destructuring",
    level: "Intermediate",
    category: "Arrays",
    description: "Use array destructuring to extract elements into variables.",
    requirements: [
      "Accept an array with multiple elements",
      "Extract elements using destructuring syntax",
      "Return values in a different order"
    ],
    hint: "Array destructuring: const [first, second, ...rest] = array"
  },
  {
    id: 54,
    title: "Spread Operator Array Copy",
    level: "Intermediate",
    category: "ES6+",
    description: "Use the spread operator to copy arrays and combine them.",
    requirements: [
      "Accept two arrays",
      "Create a new combined array using spread operator",
      "Ensure original arrays are not modified"
    ],
    hint: "Spread syntax: const combined = [...array1, ...array2]"
  },
  {
    id: 55,
    title: "Rest Parameters Function",
    level: "Intermediate",
    category: "Functions",
    description: "Create a function that accepts variable number of arguments using rest parameters.",
    requirements: [
      "Accept any number of arguments using rest parameters",
      "Return an array of all arguments",
      "Use the ... syntax properly"
    ],
    hint: "Rest parameters: function myFunc(...args) { return args; }"
  },
  {
    id: 56,
    title: "Arrow Function Array Methods",
    level: "Intermediate",
    category: "Functions",
    description: "Use arrow functions with array methods like map, filter, and reduce.",
    requirements: [
      "Use arrow function syntax with map() and filter()",
      "Create an array of objects and filter/map it",
      "Return transformed results"
    ],
    hint: "Arrow function syntax: (param) => expression"
  },
  {
    id: 57,
    title: "Callback Function Handler",
    level: "Intermediate",
    category: "Functions",
    description: "Write a function that accepts and executes a callback function.",
    requirements: [
      "Accept a value and a callback function",
      "Execute the callback with the value",
      "Return the result from callback"
    ],
    hint: "Callbacks are functions passed as arguments to other functions."
  },
  {
    id: 58,
    title: "Higher Order Function",
    level: "Intermediate",
    category: "Functions",
    description: "Create a function that returns another function.",
    requirements: [
      "Create a function that returns a function",
      "The returned function should have access to parent scope",
      "Demonstrate closure behavior"
    ],
    hint: "Higher-order functions take functions as input or return functions."
  },
  {
    id: 59,
    title: "Default Parameters",
    level: "Intermediate",
    category: "Functions",
    description: "Create a function with default parameter values.",
    requirements: [
      "Define parameters with default values",
      "Return result using provided or default values",
      "Handle undefined arguments"
    ],
    hint: "Default syntax: function myFunc(param = defaultValue)"
  },
  {
    id: 60,
    title: "Object.values() Extractor",
    level: "Intermediate",
    category: "Objects",
    description: "Write a function that extracts all values from an object.",
    requirements: [
      "Accept an object parameter",
      "Return an array of all property values",
      "Use Object.values() method"
    ],
    hint: "Object.values() returns an array of values from an object."
  },
  {
    id: 61,
    title: "Object.entries() Iterator",
    level: "Intermediate",
    category: "Objects",
    description: "Use Object.entries() to iterate over object key-value pairs.",
    requirements: [
      "Accept an object parameter",
      "Return an array of formatted key-value strings",
      "Use Object.entries() method"
    ],
    hint: "Object.entries() returns an array of [key, value] pairs."
  },
  {
    id: 62,
    title: "Array Some and Every",
    level: "Intermediate",
    category: "Arrays",
    description: "Use some() and every() methods to test array elements.",
    requirements: [
      "Accept an array and test condition",
      "Return true if some elements pass (some()) and all pass (every())",
      "Return both results in an object"
    ],
    hint: "some() checks if ANY element passes; every() checks if ALL elements pass."
  },
  {
    id: 63,
    title: "String Trim Whitespace",
    level: "Intermediate",
    category: "Strings",
    description: "Create a function that removes leading and trailing whitespace from strings.",
    requirements: [
      "Accept a string with extra spaces",
      "Return trimmed string",
      "Use the trim() method"
    ],
    hint: "The trim() method removes whitespace from both ends of a string."
  },
  {
    id: 64,
    title: "String Replace Multiple",
    level: "Intermediate",
    category: "Strings",
    description: "Create a function that replaces multiple occurrences in a string.",
    requirements: [
      "Accept a string, search term, and replacement",
      "Replace all occurrences",
      "Use replaceAll() or a loop approach"
    ],
    hint: "Use replaceAll() method for all occurrences, or replace() in a loop."
  },
  {
    id: 65,
    title: "Palindrome Checker",
    level: "Intermediate",
    category: "Strings",
    description: "Write a function that checks if a string is a palindrome.",
    requirements: [
      "Accept a string parameter",
      "Ignore spaces and capitalization",
      "Return true if palindrome, false otherwise"
    ],
    hint: "Reverse the string and compare it with the original (after normalization)."
  },
  {
    id: 66,
    title: "Anagram Checker",
    level: "Intermediate",
    category: "Strings",
    description: "Write a function that checks if two strings are anagrams.",
    requirements: [
      "Accept two strings",
      "Ignore spaces and capitalization",
      "Return true if they're anagrams"
    ],
    hint: "Sort the characters in both strings and compare them."
  },
  {
    id: 67,
    title: "Array Flatten Two Levels",
    level: "Intermediate",
    category: "Arrays",
    description: "Create a function that flattens a nested array one or two levels deep.",
    requirements: [
      "Accept a nested array",
      "Flatten specified number of levels",
      "Use flat() method or manual approach"
    ],
    hint: "The flat() method flattens arrays; flat(1) flattens one level."
  },
  {
    id: 68,
    title: "Array Flat Map",
    level: "Intermediate",
    category: "Arrays",
    description: "Use flatMap() to map and flatten results in one operation.",
    requirements: [
      "Accept an array of numbers",
      "Use flatMap to multiply each number and flatten result",
      "Return flattened transformed array"
    ],
    hint: "flatMap() combines map() and flat() in one operation."
  },
  {
    id: 69,
    title: "Group Array by Property",
    level: "Intermediate",
    category: "Arrays",
    description: "Create a function that groups array items by a property value.",
    requirements: [
      "Accept an array of objects and a property name",
      "Return object with property values as keys and arrays as values",
      "Group items by the specified property"
    ],
    hint: "Use reduce() to build groups from array items."
  },
  {
    id: 70,
    title: "Product Filter System",
    level: "Intermediate",
    category: "Arrays",
    description: "Create a filter system for products based on price and category.",
    requirements: [
      "Accept array of product objects with price and category",
      "Filter by minimum price, maximum price, and category",
      "Return filtered products"
    ],
    hint: "Use filter() method with multiple conditions combined with &&."
  },
  {
    id: 71,
    title: "User Search Function",
    level: "Intermediate",
    category: "Arrays",
    description: "Create a search function that finds users by name or email.",
    requirements: [
      "Accept array of user objects and search term",
      "Search by name OR email",
      "Return matching users (case-insensitive)"
    ],
    hint: "Use filter() with includes() and toLowerCase() for case-insensitive search."
  },
  {
    id: 72,
    title: "DOM Element Selection",
    level: "Intermediate",
    category: "DOM",
    description: "Use querySelector to select and return DOM elements.",
    requirements: [
      "Accept a CSS selector string",
      "Return the selected element",
      "Handle elements that don't exist"
    ],
    hint: "querySelector() finds the first element matching a CSS selector."
  },
  {
    id: 73,
    title: "DOM Multiple Selection",
    level: "Intermediate",
    category: "DOM",
    description: "Use querySelectorAll to select multiple DOM elements.",
    requirements: [
      "Accept a CSS selector string",
      "Return all matching elements as array",
      "Handle no matches gracefully"
    ],
    hint: "querySelectorAll() returns a NodeList of all matching elements."
  },
  {
    id: 74,
    title: "Create DOM Elements",
    level: "Intermediate",
    category: "DOM",
    description: "Write a function that creates and appends new DOM elements.",
    requirements: [
      "Create new elements dynamically",
      "Set attributes and content",
      "Append to specified parent element"
    ],
    hint: "Use createElement() to create elements and appendChild() to add them."
  },
  {
    id: 75,
    title: "Toggle CSS Class",
    level: "Intermediate",
    category: "DOM",
    description: "Create a function that toggles a CSS class on an element.",
    requirements: [
      "Accept element and class name",
      "Toggle the class (add if missing, remove if present)",
      "Use classList API"
    ],
    hint: "Element.classList.toggle() toggles a class on/off."
  },
  {
    id: 76,
    title: "Dynamic List Rendering",
    level: "Intermediate",
    category: "DOM",
    description: "Create a list of items dynamically from an array.",
    requirements: [
      "Accept array of items",
      "Create list elements for each item",
      "Append to a container element"
    ],
    hint: "Use map() to create elements and loop through to append them."
  },
  {
    id: 77,
    title: "Form Input Handler",
    level: "Intermediate",
    category: "Events",
    description: "Handle form input events and track values.",
    requirements: [
      "Listen to input change events",
      "Capture and return input values",
      "Handle multiple inputs"
    ],
    hint: "Use addEventListener() with 'input' event to track changes."
  },
  {
    id: 78,
    title: "Click Event Counter",
    level: "Intermediate",
    category: "Events",
    description: "Create a click counter that increments on button clicks.",
    requirements: [
      "Listen to click events",
      "Increment counter each click",
      "Update display with new count"
    ],
    hint: "Use addEventListener('click', callback) to track clicks."
  },
  {
    id: 79,
    title: "Event Delegation Handler",
    level: "Intermediate",
    category: "Events",
    description: "Use event delegation to handle events on dynamic elements.",
    requirements: [
      "Add event listener to parent element",
      "Use event.target to identify clicked element",
      "Handle events on dynamically added elements"
    ],
    hint: "Event delegation attaches listener to parent and checks event.target."
  },
  {
    id: 80,
    title: "Form Validation",
    level: "Intermediate",
    category: "DOM",
    description: "Create form validation that checks required fields.",
    requirements: [
      "Check that required fields are not empty",
      "Validate email format",
      "Return validation errors"
    ],
    hint: "Use regex for email validation: /^[^@]+@[^@]+\\.[^@]+$/"
  },
  {
    id: 81,
    title: "Shopping Cart Logic",
    level: "Intermediate",
    category: "Arrays",
    description: "Implement a shopping cart system with add/remove/total functions.",
    requirements: [
      "Manage array of cart items",
      "Calculate total price",
      "Handle quantity changes"
    ],
    hint: "Store items with quantity and price; use reduce() to calculate total."
  },
  {
    id: 82,
    title: "Expense Tracker Calculator",
    level: "Intermediate",
    category: "Arrays",
    description: "Create an expense tracker that categorizes and sums expenses.",
    requirements: [
      "Accept array of expense objects with amount and category",
      "Group expenses by category",
      "Return total and breakdown by category"
    ],
    hint: "Use reduce() to group by category and calculate totals."
  },
  {
    id: 83,
    title: "Array Index Finder",
    level: "Intermediate",
    category: "Arrays",
    description: "Write a function to find all indices where a value appears.",
    requirements: [
      "Accept array and search value",
      "Return array of all matching indices",
      "Handle values that don't exist"
    ],
    hint: "Use a loop or map() with indexOf() comparisons."
  },
  {
    id: 84,
    title: "Object Merge Function",
    level: "Intermediate",
    category: "Objects",
    description: "Create a function that merges two objects together.",
    requirements: [
      "Accept two objects",
      "Combine properties from both",
      "Handle property conflicts (second object wins)"
    ],
    hint: "Use spread operator or Object.assign() to merge objects."
  },
  {
    id: 85,
    title: "Object Clone Function",
    level: "Intermediate",
    category: "Objects",
    description: "Create a shallow clone of an object.",
    requirements: [
      "Accept an object",
      "Return a copy that's independent from original",
      "Use spread operator or Object.assign()"
    ],
    hint: "Shallow clone: const clone = {...obj} or Object.assign({}, obj)"
  },
  {
    id: 86,
    title: "Nested Object Access",
    level: "Intermediate",
    category: "Objects",
    description: "Write a function that safely accesses nested object properties.",
    requirements: [
      "Accept object and property path array",
      "Navigate through nested properties",
      "Return value or undefined if path invalid"
    ],
    hint: "Use optional chaining (?.) or manual null checks."
  },
  {
    id: 87,
    title: "JSON Stringify and Parse",
    level: "Intermediate",
    category: "Browser APIs",
    description: "Convert between objects and JSON strings.",
    requirements: [
      "Use JSON.stringify() to convert objects to strings",
      "Use JSON.parse() to convert strings back to objects",
      "Handle parsing errors"
    ],
    hint: "JSON.stringify() and JSON.parse() are inverse operations."
  },
  {
    id: 88,
    title: "Set to Array Conversion",
    level: "Intermediate",
    category: "ES6+",
    description: "Convert between Arrays and Sets for unique values.",
    requirements: [
      "Accept array with duplicates",
      "Convert to Set then back to array",
      "Return unique values only"
    ],
    hint: "new Set(array) removes duplicates; [...set] converts back to array."
  },
  {
    id: 89,
    title: "Map Collection Usage",
    level: "Intermediate",
    category: "ES6+",
    description: "Use Map to store key-value pairs with complex keys.",
    requirements: [
      "Create a Map collection",
      "Store and retrieve values by keys",
      "Demonstrate Map advantages over objects"
    ],
    hint: "Map can use any type as key; use .set(key, value) and .get(key)."
  },
  {
    id: 90,
    title: "Recursive Function - Factorial",
    level: "Intermediate",
    category: "Functions",
    description: "Write a recursive function to calculate factorial.",
    requirements: [
      "Accept a number parameter",
      "Use recursion to calculate factorial",
      "Include base case to prevent infinite recursion"
    ],
    hint: "Base case: if n <= 1 return 1; else return n * factorial(n-1)"
  },
  {
    id: 91,
    title: "Pure Function Example",
    level: "Intermediate",
    category: "Functions",
    description: "Create a pure function that has no side effects.",
    requirements: [
      "Function always returns same output for same input",
      "Doesn't modify external state",
      "No side effects like console.log or mutations"
    ],
    hint: "Pure functions depend only on inputs; they don't modify external variables."
  },
  {
    id: 92,
    title: "IIFE Pattern",
    level: "Intermediate",
    category: "Functions",
    description: "Create an Immediately Invoked Function Expression.",
    requirements: [
      "Write a function that executes immediately",
      "Demonstrate scope encapsulation",
      "Return a value from the IIFE"
    ],
    hint: "IIFE syntax: (function() { /* code */ })()"
  },
  {
    id: 93,
    title: "Promise Resolution",
    level: "Intermediate",
    category: "Async JavaScript",
    description: "Create and resolve a Promise.",
    requirements: [
      "Create a Promise that resolves with a value",
      "Use .then() to handle the result",
      "Handle both success cases"
    ],
    hint: "Promise syntax: new Promise((resolve, reject) => { resolve(value) })"
  },
  {
    id: 94,
    title: "Promise Rejection Handling",
    level: "Intermediate",
    category: "Async JavaScript",
    description: "Create a Promise that can reject and handle the error.",
    requirements: [
      "Create a Promise with reject condition",
      "Use .catch() to handle errors",
      "Return error message"
    ],
    hint: "Use reject(error) to reject promise; .catch() handles rejections."
  },
  {
    id: 95,
    title: "Promise Chaining",
    level: "Intermediate",
    category: "Promises",
    description: "Chain multiple async operations with .then().",
    requirements: [
      "Create multiple promises",
      "Chain them using .then()",
      "Pass results between promises"
    ],
    hint: "Each .then() passes its return value to the next .then()."
  },
  {
    id: 96,
    title: "Async/Await Basics",
    level: "Intermediate",
    category: "Async JavaScript",
    description: "Use async/await to handle asynchronous code.",
    requirements: [
      "Create an async function",
      "Use await for Promise resolution",
      "Return the awaited value"
    ],
    hint: "async/await makes async code look synchronous."
  },
  {
    id: 97,
    title: "Try/Catch Error Handling",
    level: "Intermediate",
    category: "Async JavaScript",
    description: "Use try/catch to handle errors in async code.",
    requirements: [
      "Create async function with try/catch",
      "Handle errors gracefully",
      "Return success or error message"
    ],
    hint: "Errors in try block are caught by catch block."
  },
  {
    id: 98,
    title: "Fetch API GET Request",
    level: "Intermediate",
    category: "Fetch API",
    description: "Use fetch() to make a GET request to an API.",
    requirements: [
      "Use fetch() to request data",
      "Parse JSON response",
      "Return the fetched data"
    ],
    hint: "fetch().then(res => res.json()).then(data => ...)"
  },
  {
    id: 99,
    title: "Fetch API Error Handling",
    level: "Intermediate",
    category: "Fetch API",
    description: "Handle network errors in fetch requests.",
    requirements: [
      "Use fetch with error handling",
      "Catch network errors",
      "Return error message"
    ],
    hint: "Check response.ok or use .catch() for network errors."
  },
  {
    id: 100,
    title: "LocalStorage Save and Retrieve",
    level: "Intermediate",
    category: "LocalStorage",
    description: "Save and retrieve data from localStorage.",
    requirements: [
      "Store object data in localStorage as JSON",
      "Retrieve and parse the data",
      "Handle missing data"
    ],
    hint: "Use localStorage.setItem() and localStorage.getItem()."
  },
  {
    id: 101,
    title: "Hard: Array Transformation Pipeline",
    level: "Hard",
    category: "Arrays",
    description: "Create a complex data transformation pipeline combining multiple array methods.",
    requirements: [
      "Accept array of objects with various properties",
      "Filter, map, sort, and reduce in sequence",
      "Return aggregated statistical results"
    ],
    hint: "Chain map(), filter(), sort(), and reduce() methods together."
  },
  {
    id: 102,
    title: "Hard: Memoization Pattern",
    level: "Hard",
    category: "Closures & Advanced Concepts",
    description: "Implement memoization to cache expensive function results.",
    requirements: [
      "Create a memoization wrapper function",
      "Cache results of expensive computations",
      "Return cached values on repeated calls"
    ],
    hint: "Use a closure to store cached results in an object."
  },
  {
    id: 103,
    title: "Hard: Debounce Function",
    level: "Hard",
    category: "Closures & Advanced Concepts",
    description: "Implement a debounce function to delay execution.",
    requirements: [
      "Create debounce wrapper for a function",
      "Delay execution until specified time passes",
      "Reset timer on repeated calls"
    ],
    hint: "Use setTimeout and clearTimeout to implement debouncing."
  },
  {
    id: 104,
    title: "Hard: Throttle Function",
    level: "Hard",
    category: "Closures & Advanced Concepts",
    description: "Implement a throttle function to limit execution frequency.",
    requirements: [
      "Create throttle wrapper for a function",
      "Limit execution to once per specified interval",
      "Allow execution at interval boundaries"
    ],
    hint: "Track last execution time and prevent calls within interval."
  },
  {
    id: 105,
    title: "Hard: Promise.all Implementation",
    level: "Hard",
    category: "Promises",
    description: "Create a function that waits for all promises to resolve.",
    requirements: [
      "Accept array of promises",
      "Wait for all to resolve",
      "Return array of results in order"
    ],
    hint: "Promise.all() returns promise that resolves when all input promises resolve."
  },
  {
    id: 106,
    title: "Hard: Promise.race Implementation",
    level: "Hard",
    category: "Promises",
    description: "Create a function that returns first resolved promise.",
    requirements: [
      "Accept array of promises",
      "Return result of first completed promise",
      "Ignore other promises"
    ],
    hint: "Promise.race() returns result of the first resolved promise."
  },
  {
    id: 107,
    title: "Hard: Currying Function",
    level: "Hard",
    category: "Functions",
    description: "Implement function currying to transform multi-argument functions.",
    requirements: [
      "Convert function to curried version",
      "Each call returns new function until all args provided",
      "Call original function when complete"
    ],
    hint: "Currying: f(a,b,c) becomes f(a)(b)(c)"
  },
  {
    id: 108,
    title: "Hard: Function Composition",
    level: "Hard",
    category: "Functions",
    description: "Create a compose function that combines multiple functions.",
    requirements: [
      "Accept array of functions",
      "Return new function that applies them in order",
      "Right-to-left composition (like math)"
    ],
    hint: "compose(f, g, h)(x) = f(g(h(x)))"
  },
  {
    id: 109,
    title: "Hard: Deep Clone Object",
    level: "Hard",
    category: "Objects",
    description: "Create deep clone that copies nested objects and arrays.",
    requirements: [
      "Handle nested objects and arrays",
      "Recursively clone all levels",
      "Return independent copy"
    ],
    hint: "Recursively clone each property, checking type first."
  },
  {
    id: 110,
    title: "Hard: API Retry Logic",
    level: "Hard",
    category: "Fetch API",
    description: "Implement retry logic for failed API requests.",
    requirements: [
      "Retry failed requests up to N times",
      "Use exponential backoff between retries",
      "Return success or final error"
    ],
    hint: "Use setTimeout to delay retries; increase delay each attempt."
  },
  {
    id: 111,
    title: "Hard: API Caching System",
    level: "Hard",
    category: "Fetch API",
    description: "Implement caching for API responses to avoid duplicate requests.",
    requirements: [
      "Cache responses from fetch requests",
      "Return cached data if available",
      "Implement cache expiration/invalidation"
    ],
    hint: "Use Map or object to store cached responses with timestamps."
  },
  {
    id: 112,
    title: "Hard: Event Emitter Pattern",
    level: "Hard",
    category: "Events",
    description: "Create a custom event emitter with on, off, and emit methods.",
    requirements: [
      "Implement on() to register listeners",
      "Implement emit() to trigger events",
      "Implement off() to remove listeners"
    ],
    hint: "Store listeners in object or map; call all listeners when event emits."
  },
  {
    id: 113,
    title: "Hard: State Management System",
    level: "Hard",
    category: "Advanced Real-World Tasks",
    description: "Create a simple state manager with getState, setState, and subscribe.",
    requirements: [
      "Manage application state",
      "Allow subscriptions to state changes",
      "Notify subscribers when state updates"
    ],
    hint: "Store state and listeners; call listeners on setState()."
  },
  {
    id: 114,
    title: "Hard: Modal Dialog Manager",
    level: "Hard",
    category: "DOM",
    description: "Create a modal manager that handles multiple modal dialogs.",
    requirements: [
      "Show/hide modals dynamically",
      "Manage modal stack",
      "Handle backdrop clicks and close buttons"
    ],
    hint: "Track open modals in array; toggle visibility with CSS classes."
  },
  {
    id: 115,
    title: "Hard: Tab Component System",
    level: "Hard",
    category: "DOM",
    description: "Implement a tab system that switches between content panels.",
    requirements: [
      "Switch between tab panels",
      "Mark active tab visually",
      "Handle click events on tabs"
    ],
    hint: "Store active tab index; show/hide panels based on selection."
  },
  {
    id: 116,
    title: "Hard: Accordion Component",
    level: "Hard",
    category: "DOM",
    description: "Create an accordion that opens/closes sections.",
    requirements: [
      "Toggle section visibility on click",
      "Allow multiple sections open simultaneously",
      "Add smooth animations"
    ],
    hint: "Toggle class on section content to show/hide; use CSS for animation."
  },
  {
    id: 117,
    title: "Hard: Debounced Search",
    level: "Hard",
    category: "Fetch API",
    description: "Implement search with debouncing to reduce API calls.",
    requirements: [
      "Listen to search input changes",
      "Debounce API requests",
      "Display search results"
    ],
    hint: "Combine debounce() from earlier with fetch() for search."
  },
  {
    id: 118,
    title: "Hard: Pagination System",
    level: "Hard",
    category: "DOM",
    description: "Create pagination that displays items in pages.",
    requirements: [
      "Calculate total pages from item count",
      "Display current page items",
      "Navigate between pages"
    ],
    hint: "Calculate start/end indices; slice array for current page."
  },
  {
    id: 119,
    title: "Hard: Infinite Scroll Implementation",
    level: "Hard",
    category: "Browser APIs",
    description: "Implement infinite scroll to load more items on scroll.",
    requirements: [
      "Detect scroll near bottom",
      "Load more items from API",
      "Append to existing list"
    ],
    hint: "Use scroll event listener; check scroll position vs element height."
  },
  {
    id: 120,
    title: "Hard: Form Autocomplete",
    level: "Hard",
    category: "DOM",
    description: "Create autocomplete for form input with suggestions.",
    requirements: [
      "Show suggestions as user types",
      "Filter suggestions by input",
      "Select suggestion to populate field"
    ],
    hint: "Display dropdown of matching items; select updates input."
  },
  {
    id: 121,
    title: "Hard: Shopping Cart with LocalStorage",
    level: "Hard",
    category: "LocalStorage",
    description: "Implement persistent shopping cart using localStorage.",
    requirements: [
      "Save cart to localStorage",
      "Load cart on page reload",
      "Update persistent storage on changes"
    ],
    hint: "Save cart after each modification; restore from localStorage on load."
  },
  {
    id: 122,
    title: "Hard: Todo App with Persistence",
    level: "Hard",
    category: "LocalStorage",
    description: "Create a todo app that persists to localStorage.",
    requirements: [
      "Add, complete, delete todos",
      "Save to localStorage",
      "Load todos on page reload"
    ],
    hint: "Store todos array; sync with localStorage on every change."
  },
  {
    id: 123,
    title: "Hard: Expense Tracker with Categories",
    level: "Hard",
    category: "Advanced Real-World Tasks",
    description: "Build expense tracker with category filtering and statistics.",
    requirements: [
      "Add expenses with category and amount",
      "Filter by category",
      "Calculate totals and averages"
    ],
    hint: "Use array of objects; filter and reduce for calculations."
  },
  {
    id: 124,
    title: "Hard: Quiz Application",
    level: "Hard",
    category: "Advanced Real-World Tasks",
    description: "Create a quiz with multiple choice questions and scoring.",
    requirements: [
      "Display questions one at a time",
      "Track user answers",
      "Calculate and display score"
    ],
    hint: "Store questions array; track current question index and answers."
  },
  {
    id: 125,
    title: "Hard: Timer and Stopwatch",
    level: "Hard",
    category: "Browser APIs",
    description: "Implement timer and stopwatch with start/stop/reset.",
    requirements: [
      "Count up for stopwatch, down for timer",
      "Provide start, stop, reset functionality",
      "Display formatted time"
    ],
    hint: "Use setInterval; calculate elapsed time; format minutes:seconds."
  },
  {
    id: 126,
    title: "Hard: Image Gallery with Navigation",
    level: "Hard",
    category: "DOM",
    description: "Create image gallery with previous/next navigation.",
    requirements: [
      "Display current image",
      "Navigate between images",
      "Show image counter"
    ],
    hint: "Track current index; update src on navigation."
  },
  {
    id: 127,
    title: "Hard: Product Sorting and Filtering",
    level: "Hard",
    category: "Arrays",
    description: "Implement multi-dimensional sorting and filtering for products.",
    requirements: [
      "Filter by price range and category",
      "Sort by price, name, or rating",
      "Apply multiple filters and sorts together"
    ],
    hint: "Combine filter() and sort() methods; store sorting preference."
  },
  {
    id: 128,
    title: "Hard: Class-Based Counter Component",
    level: "Hard",
    category: "OOP",
    description: "Create a counter class with increment, decrement, and reset methods.",
    requirements: [
      "Use class syntax with constructor",
      "Implement methods for operations",
      "Track counter value in property"
    ],
    hint: "Use class with methods; maintain state in this.value."
  },
  {
    id: 129,
    title: "Hard: Inheritance Example",
    level: "Hard",
    category: "OOP",
    description: "Create class hierarchy with inheritance using extends.",
    requirements: [
      "Create parent class with common properties",
      "Create child classes that extend parent",
      "Override methods in child classes"
    ],
    hint: "Use extends keyword; call super() in child constructor."
  },
  {
    id: 130,
    title: "Hard: Promise.allSettled Handling",
    level: "Hard",
    category: "Promises",
    description: "Handle multiple promises that may succeed or fail.",
    requirements: [
      "Use Promise.allSettled() for all outcomes",
      "Handle both fulfilled and rejected promises",
      "Return results and errors"
    ],
    hint: "Promise.allSettled() returns both successes and failures."
  },
  {
    id: 131,
    title: "Hard: Concurrent Request Limiter",
    level: "Hard",
    category: "Async JavaScript",
    description: "Limit concurrent requests to a maximum number.",
    requirements: [
      "Queue requests when limit reached",
      "Process queue as requests complete",
      "Maintain max concurrent count"
    ],
    hint: "Track active requests; queue pending ones; process queue on completion."
  },
  {
    id: 132,
    title: "Hard: Sequential Async Execution",
    level: "Hard",
    category: "Async JavaScript",
    description: "Execute async operations sequentially, not in parallel.",
    requirements: [
      "Execute each operation after previous completes",
      "Pass results between operations",
      "Return final result"
    ],
    hint: "Use async/await with loop or reduce for sequential execution."
  },
  {
    id: 133,
    title: "Hard: Custom Iterator",
    level: "Hard",
    category: "ES6+",
    description: "Create a custom iterable object with Symbol.iterator.",
    requirements: [
      "Implement Symbol.iterator method",
      "Return iterator with next() method",
      "Support for-of loops"
    ],
    hint: "Iterator has next() that returns {value, done}."
  },
  {
    id: 134,
    title: "Hard: Generator Function",
    level: "Hard",
    category: "ES6+",
    description: "Create a generator function using function* and yield.",
    requirements: [
      "Use function* syntax",
      "Yield values on each call",
      "Use in for-of loop"
    ],
    hint: "Generators pause at yield and resume on next()."
  },
  {
    id: 135,
    title: "Hard: Proxy Pattern Implementation",
    level: "Hard",
    category: "Advanced Real-World Tasks",
    description: "Use Proxy to intercept object operations.",
    requirements: [
      "Create proxy for object property access",
      "Log or modify accessed properties",
      "Handle get and set traps"
    ],
    hint: "new Proxy(target, handler) with get/set trap methods."
  },
  {
    id: 136,
    title: "Hard: Pub/Sub Messaging System",
    level: "Hard",
    category: "Advanced Real-World Tasks",
    description: "Implement publisher-subscriber messaging pattern.",
    requirements: [
      "Allow publishing messages to topics",
      "Subscribe to topics",
      "Deliver messages to subscribers"
    ],
    hint: "Store subscribers in object by topic; call all on publish."
  },
  {
    id: 137,
    title: "Hard: Request/Response Interceptor",
    level: "Hard",
    category: "Fetch API",
    description: "Create HTTP request/response interceptor middleware.",
    requirements: [
      "Intercept requests before sending",
      "Intercept responses before returning",
      "Add headers or modify data"
    ],
    hint: "Wrap fetch; modify request/response before passing through."
  },
  {
    id: 138,
    title: "Hard: Observer Pattern",
    level: "Hard",
    category: "OOP",
    description: "Implement the Observer design pattern.",
    requirements: [
      "Create Subject with attach/detach/notify methods",
      "Create Observer with update method",
      "Notify observers on state change"
    ],
    hint: "Subject stores observers; calls their update() when state changes."
  },
  {
    id: 139,
    title: "Hard: LRU Cache Implementation",
    level: "Hard",
    category: "Advanced Real-World Tasks",
    description: "Implement Least Recently Used cache with size limit.",
    requirements: [
      "Store key-value pairs with max size",
      "Evict least recently used item when full",
      "Track usage order"
    ],
    hint: "Track access order; remove oldest when size exceeds limit."
  },
  {
    id: 140,
    title: "Hard: Task Scheduler",
    level: "Hard",
    category: "Advanced Real-World Tasks",
    description: "Create a task scheduler that runs tasks at specified times.",
    requirements: [
      "Schedule tasks for future execution",
      "Queue tasks and execute in order",
      "Cancel scheduled tasks"
    ],
    hint: "Store tasks with timestamps; use setTimeout to execute."
  },
  {
    id: 141,
    title: "Advanced: Custom Promise Implementation",
    level: "Advanced",
    category: "Promises",
    description: "Implement a Promise-like class from scratch.",
    requirements: [
      "Support .then() and .catch() chaining",
      "Handle resolve and reject",
      "Execute callbacks asynchronously"
    ],
    hint: "Store state (pending/resolved/rejected) and callbacks."
  },
  {
    id: 142,
    title: "Advanced: Advanced State Management",
    level: "Advanced",
    category: "Advanced Real-World Tasks",
    description: "Create Redux-like state management with reducers.",
    requirements: [
      "Implement store with getState and dispatch",
      "Use reducers for state updates",
      "Support multiple subscribers"
    ],
    hint: "Store holds state; dispatch calls reducer; notify subscribers."
  },
  {
    id: 143,
    title: "Advanced: Concurrency Controller",
    level: "Advanced",
    category: "Async JavaScript",
    description: "Implement concurrency control for async tasks.",
    requirements: [
      "Execute up to N tasks concurrently",
      "Queue additional tasks",
      "Return results in order"
    ],
    hint: "Track active tasks; process queue as slots free up."
  },
  {
    id: 144,
    title: "Advanced: Custom HTTP Client",
    level: "Advanced",
    category: "Fetch API",
    description: "Build a custom HTTP client with interceptors and middleware.",
    requirements: [
      "Support GET, POST, PUT, PATCH, DELETE",
      "Add request/response interceptors",
      "Handle errors consistently"
    ],
    hint: "Create methods for each HTTP verb; support interceptor chains."
  },
  {
    id: 145,
    title: "Advanced: Async Iterator Pattern",
    level: "Advanced",
    category: "ES6+",
    description: "Implement async iterables for async data streams.",
    requirements: [
      "Implement Symbol.asyncIterator",
      "Use async/await in iterator",
      "Support for-await-of loops"
    ],
    hint: "Async iterator's next() returns Promise resolving to {value, done}."
  },
  {
    id: 146,
    title: "Advanced: Real-time Data Sync",
    level: "Advanced",
    category: "Advanced Real-World Tasks",
    description: "Implement real-time data synchronization system.",
    requirements: [
      "Sync data with local and remote states",
      "Handle offline/online transitions",
      "Queue changes when offline"
    ],
    hint: "Track local changes; sync when online; merge conflicts."
  },
  {
    id: 147,
    title: "Advanced: Batch Processing Engine",
    level: "Advanced",
    category: "Async JavaScript",
    description: "Create engine for processing large datasets in batches.",
    requirements: [
      "Process data in chunks",
      "Avoid blocking main thread",
      "Show progress updates"
    ],
    hint: "Process batch with timeout between batches for responsiveness."
  },
  {
    id: 148,
    title: "Advanced: Dynamic Module Loader",
    level: "Advanced",
    category: "ES6+",
    description: "Implement dynamic module loading and caching.",
    requirements: [
      "Dynamically import modules",
      "Cache loaded modules",
      "Handle circular dependencies"
    ],
    hint: "Use import() for dynamic loading; cache in object."
  },
  {
    id: 149,
    title: "Advanced: Performance Monitoring",
    level: "Advanced",
    category: "Browser APIs",
    description: "Create performance monitoring for code execution.",
    requirements: [
      "Measure function execution time",
      "Track memory usage",
      "Report performance metrics"
    ],
    hint: "Use performance.now() for timing; console for reporting."
  },
  {
    id: 150,
    title: "Advanced: Complete Application Framework",
    level: "Advanced",
    category: "Advanced Real-World Tasks",
    description: "Build a minimal framework combining routing, state, and components.",
    requirements: [
      "Support component registration",
      "Implement basic routing",
      "Manage application state",
      "Support nested components"
    ],
    hint: "Combine earlier concepts: state management, routing, component system."
  }
];

export default tasks;