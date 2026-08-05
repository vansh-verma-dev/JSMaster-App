import React from "react";
import { 
  IoTimeOutline, IoTextOutline, IoColorPaletteOutline, IoCalculatorOutline, 
  IoLockClosedOutline, IoMoonOutline, IoListOutline, IoImageOutline,
  IoCheckmarkCircleOutline, IoPartlySunnyOutline, IoStopwatchOutline, 
  IoWalletOutline, IoTimerOutline, IoSearchOutline, IoChatbubblesOutline,
  IoFastFoodOutline, IoCartOutline, IoDocumentTextOutline, IoCodeSlashOutline,
  IoShieldCheckmarkOutline, /* <--- Ye naam theek kar diya hai */
  IoHardwareChipOutline, IoPricetagOutline, IoGlobeOutline,
  IoMusicalNotesOutline, IoMapOutline, IoCameraOutline, IoCalendarOutline,
  IoGameControllerOutline, IoCloudUploadOutline, IoExtensionPuzzleOutline
} from "react-icons/io5";

const TASKS = {
  easy: [
    { icon: <IoTimeOutline />, title: "Live Digital Clock", blurb: "Render a ticking clock using Date() and setInterval.", topics: ["Date", "setInterval", "DOM"], xp: 60, time: "25 min" },
    { icon: <IoTextOutline />, title: "Live Character Counter", blurb: "Count characters, words and remaining limit as user types.", topics: ["Events", "Strings", "DOM"], xp: 55, time: "20 min" },
    { icon: <IoColorPaletteOutline />, title: "Random Color Generator", blurb: "Generate random HEX colors and copy to clipboard.", topics: ["Math.random", "Clipboard API"], xp: 65, time: "25 min" },
    { icon: <IoCalculatorOutline />, title: "Tip & Split Calculator", blurb: "Calculate tip and per-person split with validation.", topics: ["Forms", "Math", "Validation"], xp: 70, time: "30 min" },
    { icon: <IoLockClosedOutline />, title: "Password Generator", blurb: "Create strong passwords with custom length & character sets.", topics: ["Strings", "Loops", "Math"], xp: 80, time: "35 min" },
    { icon: <IoMoonOutline />, title: "Dark Mode Toggle", blurb: "Implement a theme switcher that saves to localStorage.", topics: ["DOM", "localStorage", "CSS Classes"], xp: 50, time: "20 min" },
    { icon: <IoListOutline />, title: "FAQ Accordion", blurb: "Build collapsible UI panels for FAQs.", topics: ["DOM Traversal", "Events"], xp: 60, time: "25 min" },
    { icon: <IoImageOutline />, title: "Image Carousel", blurb: "Simple slider with next/prev buttons and auto-play.", topics: ["Arrays", "setInterval", "DOM"], xp: 90, time: "40 min" },
    { icon: <IoCalculatorOutline />, title: "BMI Calculator", blurb: "Take height/weight inputs and calculate Body Mass Index.", topics: ["Math", "Forms"], xp: 50, time: "20 min" },
    { icon: <IoDocumentTextOutline />, title: "Vowel Counter", blurb: "Count the number of vowels in a user-provided string.", topics: ["Strings", "Regex"], xp: 40, time: "15 min" },
    { icon: <IoMapOutline />, title: "Hex to RGB Converter", blurb: "Convert color formats back and forth.", topics: ["Math", "Strings", "Algorithms"], xp: 70, time: "30 min" },
    { icon: <IoTimerOutline />, title: "Simple Countdown", blurb: "Countdown to a specific future date (like New Year).", topics: ["Date", "setInterval"], xp: 65, time: "25 min" },
    { icon: <IoChatbubblesOutline />, title: "Random Quote Generator", blurb: "Fetch and display a random quote from an array.", topics: ["Arrays", "Math.random"], xp: 45, time: "15 min" },
    { icon: <IoCheckmarkCircleOutline />, title: "Basic Form Validation", blurb: "Check for empty fields and valid email structure before submit.", topics: ["Forms", "Regex", "Events"], xp: 75, time: "30 min" },
    { icon: <IoPricetagOutline />, title: "Tags Input Field", blurb: "Type and press enter to create tags (like YouTube tags).", topics: ["Arrays", "Keyboard Events", "DOM"], xp: 85, time: "35 min" },
  ],

  medium: [
    { icon: <IoCheckmarkCircleOutline />, title: "Todo App with Persistence", blurb: "Full CRUD todo list that survives page refresh.", topics: ["localStorage", "CRUD", "DOM"], xp: 140, time: "1 hr" },
    { icon: <IoPartlySunnyOutline />, title: "Weather Dashboard", blurb: "Fetch live weather by city using OpenWeather API.", topics: ["fetch", "async/await", "JSON"], xp: 160, time: "1.5 hr" },
    { icon: <IoStopwatchOutline />, title: "Timed Quiz App", blurb: "Multi-question quiz with a countdown timer per question.", topics: ["Objects", "State", "Intervals"], xp: 150, time: "1.5 hr" },
    { icon: <IoWalletOutline />, title: "Expense Tracker", blurb: "Add income/expenses and compute running balance.", topics: ["reduce", "filter", "map"], xp: 155, time: "1.5 hr" },
    { icon: <IoSearchOutline />, title: "Github Profile Finder", blurb: "Search Github usernames and display their profile cards.", topics: ["Fetch API", "Promises", "DOM"], xp: 130, time: "1 hr" },
    { icon: <IoTimerOutline />, title: "Pomodoro Timer", blurb: "25-min work / 5-min break timer with alarm sound.", topics: ["setInterval", "Audio API", "State"], xp: 145, time: "1.5 hr" },
    { icon: <IoDocumentTextOutline />, title: "Markdown Previewer", blurb: "Type markdown on the left, see HTML preview on the right.", topics: ["Regex", "String Parsing", "Events"], xp: 160, time: "1.5 hr" },
    { icon: <IoCalculatorOutline />, title: "Currency Converter", blurb: "Live exchange rates fetching and conversion logic.", topics: ["APIs", "Math", "State"], xp: 140, time: "1 hr" },
    { icon: <IoListOutline />, title: "Pagination Component", blurb: "Paginate a large array of data into smaller chunks.", topics: ["Arrays", "Math", "Logic"], xp: 150, time: "1 hr" },
    { icon: <IoGameControllerOutline />, title: "Memory Match Game", blurb: "Classic card flipping memory game with score.", topics: ["Arrays", "SetTimeout", "Logic"], xp: 180, time: "2 hr" },
    { icon: <IoHardwareChipOutline />, title: "Typing Speed Tester", blurb: "Calculate WPM (Words Per Minute) and accuracy live.", topics: ["Events", "Math", "Date"], xp: 170, time: "1.5 hr" },
    { icon: <IoDocumentTextOutline />, title: "Dictionary App", blurb: "Fetch word definitions and phonetics from a Dictionary API.", topics: ["Fetch", "JSON", "Audio"], xp: 135, time: "1 hr" },
    { icon: <IoImageOutline />, title: "Filterable Image Gallery", blurb: "Gallery where you can click categories to filter images.", topics: ["DOM", "filter()", "CSS classes"], xp: 120, time: "1 hr" },
    { icon: <IoMusicalNotesOutline />, title: "Drum Kit", blurb: "Play different sounds by pressing keyboard keys.", topics: ["Keyboard Events", "Audio API"], xp: 110, time: "45 min" },
    { icon: <IoCalendarOutline />, title: "Calendar Event Creator", blurb: "Select a date and add a custom event note.", topics: ["Date Object", "localStorage"], xp: 165, time: "1.5 hr" },
  ],

  hard: [
    { icon: <IoListOutline />, title: "Drag & Drop Kanban Board", blurb: "Trello-style board using native Drag & Drop API.", topics: ["Drag & Drop", "localStorage", "DOM"], xp: 260, time: "3 hr" },
    { icon: <IoSearchOutline />, title: "Movie Search with Debounce", blurb: "Live-search with debounce and skeleton loaders.", topics: ["Debounce", "fetch", "Pagination"], xp: 240, time: "2.5 hr" },
    { icon: <IoChatbubblesOutline />, title: "Chat UI with Mock Sockets", blurb: "Simulate real-time messaging with typing indicators.", topics: ["Event-driven JS", "Async queues"], xp: 280, time: "3 hr" },
    { icon: <IoFastFoodOutline />, title: "Recipe Finder + Filters", blurb: "Search recipes, filter by multiple tags/diet at once.", topics: ["Complex state", "Promise.all"], xp: 250, time: "2.5 hr" },
    { icon: <IoListOutline />, title: "Sortable Data Table", blurb: "Table that sorts by columns and supports global search.", topics: ["Sorting Algorithms", "Arrays", "DOM"], xp: 230, time: "2 hr" },
    { icon: <IoCloudUploadOutline />, title: "Infinite Scrolling", blurb: "Load more content automatically as user hits the bottom.", topics: ["Intersection Observer", "Fetch"], xp: 220, time: "2 hr" },
    { icon: <IoCloudUploadOutline />, title: "File Uploader UI", blurb: "Drag/drop area with progress bar simulation and validation.", topics: ["File API", "Drag & Drop", "Promises"], xp: 270, time: "3 hr" },
    { icon: <IoMapOutline />, title: "Interactive Map Markers", blurb: "Plot custom coordinates on a map using Leaflet/Google Maps.", topics: ["Third-party APIs", "Objects"], xp: 250, time: "2.5 hr" },
    { icon: <IoHardwareChipOutline />, title: "Multi-Step Wizard Form", blurb: "Complex form with validation at each step and progress bar.", topics: ["State Management", "Validation"], xp: 260, time: "3 hr" },
    { icon: <IoCartOutline />, title: "Product Filter & Sort", blurb: "E-commerce sidebar filtering (price range, brands, colors).", topics: ["filter()", "sort()", "Complex Logic"], xp: 280, time: "3 hr" },
    { icon: <IoMusicalNotesOutline />, title: "Custom Audio Player", blurb: "Build a music player with progress bar, volume, and playlist.", topics: ["HTML5 Audio", "Events", "Math"], xp: 290, time: "3.5 hr" },
    { icon: <IoShieldCheckmarkOutline />, title: "Auth Flow Simulation", blurb: "Login/Signup logic with JWT token storage in cookies.", topics: ["Cookies", "Security", "Routing"], xp: 250, time: "2.5 hr" },
    { icon: <IoCameraOutline />, title: "Webcam Snapshot App", blurb: "Access device camera, take a picture and download it.", topics: ["MediaDevices API", "Canvas", "Blob"], xp: 300, time: "3.5 hr" },
    { icon: <IoDocumentTextOutline />, title: "PDF Invoice Generator", blurb: "Generate a formatted invoice and export as PDF/Print.", topics: ["Window.print", "DOM Manipulation"], xp: 240, time: "2.5 hr" },
    { icon: <IoCodeSlashOutline />, title: "Syntax Highlighter", blurb: "Parse simple code strings and wrap keywords in colored spans.", topics: ["Regex", "String parsing"], xp: 280, time: "3 hr" },
  ],

  pro: [
    { icon: <IoCartOutline />, title: "E-commerce Cart Engine", blurb: "Cart logic with coupon stacking rules and tax calc.", topics: ["State machines", "Edge cases"], xp: 480, time: "5+ hr" },
    { icon: <IoDocumentTextOutline />, title: "Realtime Collaborative Notepad", blurb: "Handle conflicting edits from multiple 'users'.", topics: ["WebSocket sim", "Conflict resolution"], xp: 520, time: "6 hr" },
    { icon: <IoExtensionPuzzleOutline />, title: "Build a Mini Virtual DOM", blurb: "Write a tiny diffing engine from scratch.", topics: ["Recursion", "DOM diffing"], xp: 600, time: "8+ hr" },
    { icon: <IoHardwareChipOutline />, title: "Rate-Limited API Dashboard", blurb: "Queue, throttle, and retry requests with backoff.", topics: ["Async queues", "Caching", "Retry logic"], xp: 550, time: "6 hr" },
    { icon: <IoCodeSlashOutline />, title: "Custom Code Editor", blurb: "Build a browser IDE with auto-complete simulation.", topics: ["AST Parsing", "Complex DOM"], xp: 650, time: "8+ hr" },
    { icon: <IoListOutline />, title: "Mini Excel Clone", blurb: "Spreadsheet with basic formula support (SUM, AVG) and cell references.", topics: ["Data Structures", "Parsing"], xp: 700, time: "10+ hr" },
    { icon: <IoShieldCheckmarkOutline />, title: "Custom JWT System", blurb: "Build a mock token encoder/decoder and middleware flow.", topics: ["Cryptography basics", "Encoding"], xp: 500, time: "5 hr" },
    { icon: <IoGlobeOutline />, title: "Custom SPA Router", blurb: "Build your own React-Router equivalent using History API.", topics: ["History API", "PopState", "Regex"], xp: 480, time: "5 hr" },
    { icon: <IoGameControllerOutline />, title: "2D Physics Engine", blurb: "Simulate gravity and collision detection on HTML Canvas.", topics: ["Canvas API", "Physics Math", "RAF"], xp: 750, time: "12+ hr" },
    { icon: <IoCloudUploadOutline />, title: "Offline-First PWA", blurb: "Implement Service Workers to cache assets and allow offline usage.", topics: ["Service Workers", "Cache API"], xp: 550, time: "6 hr" },
    { icon: <IoCodeSlashOutline />, title: "Custom Promise Polyfill", blurb: "Write your own Promise implementation from scratch.", topics: ["Microtasks", "Callbacks", "Classes"], xp: 600, time: "7 hr" },
    { icon: <IoCodeSlashOutline />, title: "State Management Library", blurb: "Build a tiny Redux clone (Store, Reducers, Dispatch).", topics: ["Observer Pattern", "Immutability"], xp: 500, time: "5 hr" },
    { icon: <IoGlobeOutline />, title: "GraphQL Client Clone", blurb: "Parse custom query strings and fetch precise data shapes.", topics: ["String Parsing", "Fetch"], xp: 550, time: "6 hr" },
    { icon: <IoImageOutline />, title: "Image Compression Tool", blurb: "Read images, resize via Canvas, and output compressed Blobs.", topics: ["Blobs", "Canvas", "File API"], xp: 620, time: "7 hr" },
    { icon: <IoExtensionPuzzleOutline />, title: "Browser Extension", blurb: "Create a Chrome extension that modifies page DOM on specific sites.", topics: ["Manifest V3", "Content Scripts"], xp: 500, time: "5 hr" },
  ],
};

export default TASKS;