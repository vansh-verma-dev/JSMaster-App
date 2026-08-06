import { useState, useRef } from "react";
import Navbar from "../componentes/navbar";
import Sidebar from "../componentes/sidebar";
import BottomNav from "../componentes/Bottomnav";
import {
  IoArrowForward,
  IoSparkles,
  IoFlame,
  IoClose,
  IoChevronBack,
  IoBookOutline,
  IoCodeSlashOutline,
  IoListOutline,
  IoConstructOutline,
  IoChatbubbleEllipsesOutline,
  IoRibbonOutline,
  IoRocketOutline,
  IoCubeOutline,
  IoCalculatorOutline,
  IoGitBranchOutline,
  IoRepeatOutline,
  IoCodeSlash,
  IoLayersOutline,
  IoGlobeOutline,
  IoFlashOutline,
  IoTimeOutline,
  IoTrophyOutline,
  IoHelpCircle,
} from "react-icons/io5";

/* ------------------------------------------------------------------ */
/*  COLOR THEMES — cycled across levels (same system as HomePage)      */
/* ------------------------------------------------------------------ */

const THEMES = [
  { bg: "bg-gradient-to-br from-teal-500 to-emerald-600", solid: "bg-teal-400", lightBg: "bg-teal-50", text: "text-teal-700", border: "border-teal-200", shadow: "shadow-teal-500/15", accent: "text-teal-400", accentBg: "bg-teal-400/10", accentBorder: "border-teal-400/20", glow: "hover:shadow-teal-500/30", hoverTitle: "group-hover:text-teal-400" },
  { bg: "bg-gradient-to-br from-purple-600 to-indigo-600", solid: "bg-indigo-500", lightBg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200", shadow: "shadow-purple-500/15", accent: "text-purple-400", accentBg: "bg-purple-400/10", accentBorder: "border-purple-400/20", glow: "hover:shadow-indigo-500/30", hoverTitle: "group-hover:text-purple-400" },
  { bg: "bg-gradient-to-br from-blue-600 to-cyan-600", solid: "bg-blue-500", lightBg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200", shadow: "shadow-blue-500/15", accent: "text-blue-400", accentBg: "bg-blue-400/10", accentBorder: "border-blue-400/20", glow: "hover:shadow-blue-500/30", hoverTitle: "group-hover:text-blue-400" },
  { bg: "bg-gradient-to-br from-amber-500 to-orange-600", solid: "bg-amber-400", lightBg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200", shadow: "shadow-amber-500/15", accent: "text-amber-400", accentBg: "bg-amber-400/10", accentBorder: "border-amber-400/20", glow: "hover:shadow-amber-500/30", hoverTitle: "group-hover:text-amber-400" },
  { bg: "bg-gradient-to-br from-rose-500 to-pink-600", solid: "bg-pink-500", lightBg: "bg-rose-50", text: "text-rose-700", border: "border-rose-200", shadow: "shadow-rose-500/15", accent: "text-rose-400", accentBg: "bg-rose-400/10", accentBorder: "border-rose-400/20", glow: "hover:shadow-pink-500/30", hoverTitle: "group-hover:text-rose-400" },
  { bg: "bg-gradient-to-br from-fuchsia-600 to-purple-600", solid: "bg-violet-400", lightBg: "bg-fuchsia-50", text: "text-fuchsia-700", border: "border-fuchsia-200", shadow: "shadow-fuchsia-500/15", accent: "text-fuchsia-400", accentBg: "bg-fuchsia-400/10", accentBorder: "border-fuchsia-400/20", glow: "hover:shadow-violet-500/30", hoverTitle: "group-hover:text-fuchsia-400" },
  { bg: "bg-gradient-to-br from-sky-500 to-blue-600", solid: "bg-sky-400", lightBg: "bg-sky-50", text: "text-sky-700", border: "border-sky-200", shadow: "shadow-sky-500/15", accent: "text-sky-400", accentBg: "bg-sky-400/10", accentBorder: "border-sky-400/20", glow: "hover:shadow-sky-500/30", hoverTitle: "group-hover:text-sky-400" },
  { bg: "bg-gradient-to-br from-emerald-500 to-green-600", solid: "bg-emerald-400", lightBg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200", shadow: "shadow-emerald-500/15", accent: "text-emerald-400", accentBg: "bg-emerald-400/10", accentBorder: "border-emerald-400/20", glow: "hover:shadow-emerald-500/30", hoverTitle: "group-hover:text-emerald-400" },
];

/* ------------------------------------------------------------------ */
/*  DATA — 12 levels, basic → advance                                  */
/* ------------------------------------------------------------------ */

const RAW_TOPICS = [
  {
    title: "Introduction to JS",
    tag: "Getting Started",
    icon: IoRocketOutline,
    definition:
      "JavaScript ek high-level, interpreted programming language hai jo web pages ko interactive banane ke liye use hoti hai. Ye browser ke andar aur server par (Node.js) dono jagah chal sakti hai.",
    example: `console.log("Hello, JavaScript!");
// Output: Hello, JavaScript!`,
    practice: [
      "Browser console open karke apna naam console.log() se print karo.",
      "Ek string aur ek number, dono ko alag-alag console.log se print karo.",
      "// aur /* */ dono tarike ke comments likh kar practice karo.",
    ],
    task: "Ek simple HTML file banao jisme <script> tag ke andar JS likh kar 'Welcome to JS Master' ka alert() dikhao.",
    interview: [
      { q: "JavaScript kya hai?", a: "Ek lightweight, interpreted scripting language hai jo web pages ko dynamic banati hai aur ECMAScript standard follow karti hai." },
      { q: "JS client-side aur server-side dono chal sakti hai?", a: "Haan — browser ke andar client-side, aur Node.js runtime ke through server-side bhi chalti hai." },
      { q: "JS compiled hai ya interpreted?", a: "Traditionally interpreted mani jaati hai, lekin modern engines (jaise V8) JIT compilation use karke performance improve karte hain." },
    ],
  },
  {
    title: "Variables & Data Types",
    tag: "Fundamentals",
    icon: IoCubeOutline,
    definition:
      "Variables data ko store karne ke containers hain. JS me inhe var, let ya const se declare karte hain. Data types Primitive (Number, String, Boolean, Undefined, Null, Symbol, BigInt) aur Non-primitive (Object, Array, Function) hote hain.",
    example: `let name = "Rahul";
const age = 25;
var isStudent = true;

console.log(typeof name, typeof age);
// string number`,
    practice: [
      "let aur const ka difference dikhane wala chota sa code likho.",
      "Ek variable me object store karo aur uska typeof check karo.",
      "typeof operator se 5 alag-alag data types check karke print karo.",
    ],
    task: "Ek 'profile' object banao (name, age, city) aur uska har field console.log se print karo.",
    interview: [
      { q: "let, const, var me kya difference hai?", a: "var function-scoped hota hai aur re-declare ho sakta hai; let block-scoped aur reassignable; const block-scoped par reassign nahi ho sakta." },
      { q: "null aur undefined me difference?", a: "undefined ka matlab value assign hi nahi hui; null ek intentional 'empty value' hoti hai jo developer khud set karta hai." },
      { q: "JS me kitne primitive data types hote hain?", a: "Saat — Number, String, Boolean, Undefined, Null, Symbol aur BigInt." },
    ],
  },
  {
    title: "Operators",
    tag: "Fundamentals",
    icon: IoCalculatorOutline,
    definition:
      "Operators values par operations perform karte hain. Types: Arithmetic (+, -, *, /, %), Comparison (==, ===, >, <), Logical (&&, ||, !), aur Assignment (=, +=, -=).",
    example: `let a = 10, b = 3;
console.log(a % b);         // 1
console.log(a === "10");    // false
console.log(a > b && b > 0);// true`,
    practice: [
      "Modulus operator (%) use karke ek number even hai ya odd, check karo.",
      "== aur === ka difference dikhane wale 3 alag examples likho.",
      "Ternary operator use karke pass/fail condition likho.",
    ],
    task: "Ek chota calculator banao jo do numbers le kar unka +, -, *, / result console me print kare.",
    interview: [
      { q: "== aur === me kya difference hai?", a: "== type coercion karke compare karta hai; === strict comparison karta hai — type aur value dono match hone chahiye." },
      { q: "Ternary operator kya hota hai?", a: "condition ? value1 : value2 syntax hai — chhoti if-else statement ko ek line me likhne ka tarika." },
      { q: "Logical operators ki short-circuiting kya hoti hai?", a: "&& aur || evaluation ko beech me hi rok dete hain jab result pehle operand se hi decide ho jaata hai." },
    ],
  },
  {
    title: "Conditional Statements",
    tag: "Control Flow",
    icon: IoGitBranchOutline,
    definition:
      "Conditionals decide karte hain ki kaunsa code block run hoga, based on ek condition true hai ya false — if, else if, else aur switch ke through.",
    example: `let marks = 85;
if (marks >= 90) console.log("A+");
else if (marks >= 75) console.log("A");
else console.log("B");`,
    practice: [
      "switch statement use karke weekday ka naam print karo (1 = Monday).",
      "Nested if-else se ek grading system banao.",
      "Ek number positive, negative ya zero hai — check karo.",
    ],
    task: "Ek simple login check banao jo if-else use karke username/password verify kare aur sahi message dikhaye.",
    interview: [
      { q: "switch aur if-else kab use karna chahiye?", a: "Multiple discrete values compare karni ho to switch cleaner hai; complex/range-based conditions ke liye if-else better hai." },
      { q: "switch me har case ke baad break kyu zaruri hai?", a: "Warna 'fall-through' ho jata hai — matching case ke baad ke sabhi cases bhi execute ho jaate hain." },
      { q: "Truthy aur falsy values kya hoti hain?", a: "Boolean context me true/false ki tarah behave karne wali values. Falsy: 0, '', null, undefined, NaN, false — baaki truthy." },
    ],
  },
  {
    title: "Loops",
    tag: "Control Flow",
    icon: IoRepeatOutline,
    definition:
      "Loops ek code block ko baar-baar repeat karte hain jab tak condition true rahe — for, while, do-while, for...of aur for...in.",
    example: `for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}`,
    practice: [
      "while loop use karke 1 se 10 tak numbers ka sum nikalo.",
      "for...of loop se ek array ke sabhi elements print karo.",
      "Nested loop se multiplication table print karo (1 se 5 tak).",
    ],
    task: "For loop use karke 1 se 100 tak ke sabhi prime numbers console me print karo.",
    interview: [
      { q: "for aur while loop me kya difference hai?", a: "for loop me initialization, condition aur increment ek hi line me hote hain; while sirf condition check karta hai." },
      { q: "break aur continue me difference?", a: "break loop ko turant terminate karta hai; continue current iteration skip karke agli iteration par jaata hai." },
      { q: "for...in aur for...of me difference?", a: "for...in keys/indexes par iterate karta hai; for...of actual values par iterate karta hai (array, string, etc)." },
    ],
  },
  {
    title: "Functions",
    tag: "Core Concept",
    icon: IoCodeSlash,
    definition:
      "Functions reusable code blocks hain jo ek specific task perform karte hain — function declaration, function expression aur arrow function.",
    example: `function greet(name) {
  return \`Hello, \${name}!\`;
}
const add = (a, b) => a + b;`,
    practice: [
      "Ek function banao jo kisi number ka factorial calculate kare.",
      "Default parameters use karke ek function likho.",
      "Arrow function use karke ek array ko filter karo.",
    ],
    task: "Ek function banao jo check kare diya gaya string palindrome hai ya nahi.",
    interview: [
      { q: "Function declaration aur function expression me difference?", a: "Declaration hoisted hoti hai (call se pehle bhi use ho sakti hai); expression hoisted nahi hoti." },
      { q: "Arrow function normal function se kaise alag hai?", a: "Apna khud ka 'this' create nahi karti, lexical scope se leti hai, aur implicit return support karti hai." },
      { q: "Callback function kise kehte hain?", a: "Ek function jo doosre function ko argument ki tarah pass kiya jaata hai aur baad me call hota hai." },
    ],
  },
  {
    title: "Arrays",
    tag: "Data Structures",
    icon: IoListOutline,
    definition:
      "Array values ka ek ordered collection hai. JS arrays me built-in methods hote hain jaise push, pop, map, filter, reduce jo data manipulate karna aasan banate hain.",
    example: `const nums = [1, 2, 3, 4, 5];
const doubled = nums.map(n => n * 2);
const evens = nums.filter(n => n % 2 === 0);`,
    practice: [
      "Array.filter() se ek array me se sirf even numbers nikalo.",
      "reduce() use karke ek array ke sabhi numbers ka sum nikalo.",
      "sort() se ek array ko descending order me arrange karo.",
    ],
    task: "Ek shopping cart array banao (items with price) aur reduce() se total price calculate karo.",
    interview: [
      { q: "map() aur forEach() me difference?", a: "map() naya array return karta hai; forEach() kuch return nahi karta, sirf loop chalata hai." },
      { q: "slice() aur splice() me difference?", a: "slice() original ko change nahi karta (copy return karta hai); splice() original array ko directly modify karta hai." },
      { q: "reduce() kya kaam karta hai?", a: "Array ke sabhi elements ko accumulator ke through combine karke single value me reduce karta hai." },
    ],
  },
  {
    title: "Objects",
    tag: "Data Structures",
    icon: IoLayersOutline,
    definition:
      "Object key-value pairs me data store karta hai aur real-world entities ko represent karne ke liye use hota hai. Objects me properties aur methods dono ho sakte hain.",
    example: `const user = {
  name: "Neha",
  greet() { return "Hi, " + this.name; },
};
console.log(user.greet());`,
    practice: [
      "Object destructuring use karke kisi object se properties extract karo.",
      "Object.keys() aur Object.values() try karke unka output dekho.",
      "Ek nested object banao — jisme address ke andar city aur pincode ho.",
    ],
    task: "Ek 'Student' object banao jisme methods ho jo grades add kare aur average nikale.",
    interview: [
      { q: "Object destructuring kya hai?", a: "Object ki properties ko directly variables me extract karne ka shorthand syntax — const { name } = obj." },
      { q: "'this' keyword object ke andar kya represent karta hai?", a: "Us object ko jo currently function ko call kar raha hai." },
      { q: "Object.freeze() kya karta hai?", a: "Object ko immutable bana deta hai — uske baad properties add/remove/change nahi ho sakti." },
    ],
  },
  {
    title: "DOM Manipulation",
    tag: "Browser & Web",
    icon: IoGlobeOutline,
    definition:
      "DOM (Document Object Model) browser ka tree-structure representation hai jisme pura HTML page hota hai. JavaScript is DOM ko access aur modify kar sakti hai.",
    example: `document.getElementById("title").innerText = "Updated!";
document.querySelector(".btn")
  .addEventListener("click", () => alert("Clicked!"));`,
    practice: [
      "querySelector se ek element select karke uska style change karo.",
      "createElement() se ek naya <div> banao aur page me add karo.",
      "classList.add() aur remove() use karke ek class ko toggle karo.",
    ],
    task: "Ek chhota to-do list banao jisme input box se naya item add ho aur list me dikhe.",
    interview: [
      { q: "getElementById aur querySelector me difference?", a: "querySelector CSS selectors support karta hai; getElementById sirf id se select karta hai." },
      { q: "DOM kya hota hai?", a: "Browser ka tree-based representation of HTML document, jise JS access aur manipulate kar sakti hai." },
      { q: "innerHTML aur innerText me difference?", a: "innerHTML HTML tags ko parse karta hai; innerText sirf plain text deta/leta hai." },
    ],
  },
  {
    title: "Events",
    tag: "Browser & Web",
    icon: IoFlashOutline,
    definition:
      "Events user interactions hote hain — click, hover, keypress, submit etc. JavaScript inhe event listeners ke through 'listen' aur 'handle' karti hai.",
    example: `button.addEventListener("click", function (e) {
  console.log("Clicked:", e.target);
});`,
    practice: [
      "Keyboard event use karke input value ko real-time print karo.",
      "mouseover/mouseout event se kisi element ka color change karo.",
      "Event delegation ka ek example likho.",
    ],
    task: "Ek form banao jo submit hone par validate ho aur preventDefault() se page reload rokta ho.",
    interview: [
      { q: "Event bubbling kya hai?", a: "Jab ek event child element se shuru hokar upar parent elements tak propagate hoti hai." },
      { q: "preventDefault() kab use karte hain?", a: "Jab kisi element ka default browser behaviour rokna ho — jaise form submit ya link navigation." },
      { q: "Event delegation kya hota hai?", a: "Parent element par ek hi listener laga kar uske child elements ke events handle karna." },
    ],
  },
  {
    title: "ES6+ Features",
    tag: "Modern JS",
    icon: IoFlashOutline,
    definition:
      "ES6 (aur uske baad) ne JS me kai modern features add kiye — let/const, arrow functions, template literals, destructuring, spread/rest operators aur modules.",
    example: `const user = { name: "Sam", age: 30 };
const { name, ...rest } = user;
const arr = [...[1, 2], ...[3, 4]];`,
    practice: [
      "Template literals use karke ek multi-line string banao.",
      "Spread operator se do arrays ko merge karo.",
      "Rest parameters use karke ek function banao jo unlimited arguments le sake.",
    ],
    task: "Destructuring aur default values use karke ek 'user settings' function banao.",
    interview: [
      { q: "Spread aur rest operator me kya difference hai?", a: "Syntax same (...), lekin spread expand karta hai, rest values ko collect karta hai." },
      { q: "Template literals ka fayda kya hai?", a: "String concatenation ki jagah backticks aur ${} se readable interpolation milta hai." },
      { q: "let/const block scope kyu important hai?", a: "var ke hoisting/re-declaration bugs avoid karke predictable code milta hai." },
    ],
  },
  {
    title: "Asynchronous JS",
    tag: "Advanced",
    icon: IoTimeOutline,
    definition:
      "Asynchronous JavaScript woh operations hote hain jo main thread ko block kiye bina background me chalte hain — callbacks, Promises aur async/await ke through handle hote hain.",
    example: `async function getData() {
  const res = await fetch("/api/data");
  const data = await res.json();
  console.log(data);
}`,
    practice: [
      "setTimeout() use karke 2 second baad ek message print karo.",
      "Ek Promise banao jo randomly resolve ya reject ho.",
      "async/await use karke do sequential operations simulate karo.",
    ],
    task: "fetch() use karke kisi public API se data lao aur console me print karo.",
    interview: [
      { q: "Promise ki 3 states kya hoti hain?", a: "Pending, Fulfilled aur Rejected." },
      { q: "async/await ka fayda callbacks ke comparison me?", a: "Code synchronous jaisa readable hota hai, aur callback hell avoid ho jaata hai." },
      { q: "Event loop kya hota hai?", a: "Call stack aur callback/microtask queue manage karne wala mechanism jo async operations non-blocking rakhta hai." },
    ],
  },
];

const TOPICS = RAW_TOPICS.map((t, i) => ({
  ...t,
  level: i + 1,
  theme: THEMES[i % THEMES.length],
}));

const TABS = [
  { key: "definition", label: "Definition", icon: IoBookOutline },
  { key: "example", label: "Example", icon: IoCodeSlashOutline },
  { key: "practice", label: "Practice", icon: IoListOutline },
  { key: "task", label: "Task", icon: IoConstructOutline },
  { key: "interview", label: "Interview", icon: IoChatbubbleEllipsesOutline },
];

/* ------------------------------------------------------------------ */
/*  PAGE                                                                */
/* ------------------------------------------------------------------ */

function TopicsPage() {
  const [selected, setSelected] = useState(null);
  const [tab, setTab] = useState("definition");
  const roadmapRef = useRef(null);

  const totalPractice = TOPICS.reduce((s, t) => s + t.practice.length, 0);
  const totalInterview = TOPICS.reduce((s, t) => s + t.interview.length, 0);

  const openTopic = (topic) => {
    setTab("definition");
    setSelected(topic);
  };

  const scrollToRoadmap = () => {
    roadmapRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20 sm:pb-0">
      <Navbar />

      <div className="flex w-full">
        <Sidebar className="hidden md:block shrink-0" />

        <div className="flex-1 p-4 sm:p-6 lg:p-8 w-full h-[90vh] overflow-hidden overflow-y-scroll">
          {/* HERO */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200 border border-slate-200 flex flex-row items-center justify-between gap-4 sm:gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-200 text-indigo-700 text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
                <IoSparkles className="text-indigo-600" /> Structured Learning Path
              </div>
              <h1 className="text-xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                JavaScript <span className="text-indigo-600">Roadmap</span>
              </h1>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed font-medium">
                Basic se advance tak, 12 levels ka structured path. Har topic
                me definition, code example, practice questions, ek task aur
                interview questions — kuch bhi miss nahi.
              </p>

              <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-3">
                <button
                  onClick={scrollToRoadmap}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl shadow-lg shadow-indigo-600/25 transition-all flex items-center gap-2 active:scale-95"
                >
                  View Roadmap <IoArrowForward />
                </button>
                <div className="flex items-center gap-1.5 sm:gap-2 bg-amber-50 border border-amber-200 px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl text-amber-800 text-xs font-bold shadow-sm">
                  <IoFlame className="text-amber-600 text-base animate-pulse" />
                  <span>Start from Level 1</span>
                </div>
              </div>
            </div>

            <div className="w-20 h-20 sm:w-36 sm:h-36 shrink-0 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-xl shadow-indigo-500/20">
              <IoCodeSlash className="text-white text-4xl sm:text-6xl" />
            </div>
          </div>

          {/* QUICK STATS */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              Roadmap at a Glance
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {[
                { label: "Total Levels", value: TOPICS.length, sub: "Basic to advance", icon: IoLayersOutline, bg: "bg-indigo-50", border: "border-indigo-200", text: "text-indigo-700" },
                { label: "Practice Qs", value: totalPractice, sub: "Hands-on drills", icon: IoListOutline, bg: "bg-teal-50", border: "border-teal-200", text: "text-teal-700" },
                { label: "Interview Qs", value: totalInterview, sub: "Crack the round", icon: IoHelpCircle, bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-700" },
                { label: "Real Tasks", value: TOPICS.length, sub: "Build & apply", icon: IoConstructOutline, bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700" },
              ].map(({ label, value, sub, icon: Icon, bg, border, text }) => (
                <div key={label} className={`${bg} border ${border} rounded-3xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all`}>
                  <div className="flex items-start justify-between gap-2">
                    <p className={`text-xs sm:text-sm font-bold ${text} leading-tight`}>{label}</p>
                    <div className={`w-10 h-10 shrink-0 rounded-2xl bg-white shadow-sm flex items-center justify-center ${text}`}>
                      <Icon className="text-xl" />
                    </div>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-3">{value}</h2>
                  <p className="text-[11px] sm:text-xs font-medium text-slate-600 mt-0.5">{sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ROADMAP */}
          <div ref={roadmapRef} className="mt-10 scroll-mt-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Your Learning Roadmap
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Level by level — click any topic to start learning
                </p>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-400 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
                <IoLayersOutline /> {TOPICS.length} levels
              </span>
            </div>

            <div className="relative bg-white rounded-[2rem] p-5 sm:p-10 border border-slate-100 shadow-sm overflow-hidden">
              {/* connecting line — desktop only */}
              <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent" />

              <div className="relative flex flex-col gap-5 sm:gap-8">
                {TOPICS.map((topic, i) => (
                  <RoadmapCard
                    key={topic.level}
                    topic={topic}
                    align={i % 2 === 0 ? "left" : "right"}
                    onOpen={openTopic}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM BANNER */}
          <div className="mt-10 bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border border-indigo-900/50">
            <div className="relative z-10 max-w-2xl">
              <span className="bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-bold px-3.5 py-1.5 rounded-full inline-block mb-3">
                <IoTrophyOutline className="inline -mt-0.5 mr-1" /> Consistency Tip
              </span>
              <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                One Level a Day Keeps the Bugs Away
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                Roz ek level complete karo — definition padho, example try karo,
                practice questions solve karo aur task banao. 12 din me pura JS
                roadmap khatam.
              </p>
            </div>
          </div>
        </div>
      </div>

      {selected && (
        <TopicModal topic={selected} tab={tab} setTab={setTab} onClose={() => setSelected(null)} />
      )}

      <BottomNav className="block sm:hidden" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  ROADMAP CARD                                                       */
/* ------------------------------------------------------------------ */

function RoadmapCard({ topic, align, onOpen }) {
  const { solid, glow } = topic.theme;
  const isLeft = align === "left";
  const Icon = topic.icon;

  const card = (
    <button
      onClick={() => onOpen(topic)}
      className={`group w-full sm:w-[45%] text-left ${solid} rounded-3xl p-5 shadow-lg shadow-slate-200 ${glow} hover:-translate-y-1 transition-all duration-300 relative overflow-hidden`}
    >
      {/* decorative soft circle, Pitch.io style */}
      <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/10 rounded-full" />
      <div className="absolute -bottom-10 -left-6 w-20 h-20 bg-white/10 rounded-full" />

      <div className="relative flex items-center justify-between mb-4">
        <div className="w-11 h-11 rounded-2xl bg-white/25 backdrop-blur-sm flex items-center justify-center text-white">
          <Icon className="text-xl" />
        </div>
        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/20 text-white tracking-wide">
          {topic.tag}
        </span>
      </div>

      <h4 className="relative text-base font-bold text-white">
        {topic.title}
      </h4>
      <p className="relative text-xs text-white/80 mt-1.5 leading-relaxed line-clamp-2">
        {topic.definition}
      </p>

      <div className="relative mt-4 pt-3 border-t border-white/20 flex items-center justify-between">
        <span className="text-[11px] font-bold text-white bg-white/15 px-2.5 py-1 rounded-lg font-mono">
          LVL {String(topic.level).padStart(2, "0")}
        </span>
        <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-slate-900 group-hover:translate-x-1 transition-transform">
          <IoArrowForward className="text-sm" />
        </span>
      </div>
    </button>
  );

  const node = (
    <div className={`relative z-10 shrink-0 hidden sm:flex w-11 h-11 rounded-full ${solid} ring-4 ring-white items-center justify-center font-bold text-xs text-white shadow-md`}>
      {String(topic.level).padStart(2, "0")}
    </div>
  );

  return (
    <div className="flex items-center gap-4">
      {/* mobile: simple stacked card */}
      <div className="sm:hidden w-full">{card}</div>

      {/* desktop: zigzag */}
      <div className="hidden sm:flex w-full items-center gap-4">
        {isLeft ? (
          <>
            {card}
            {node}
            <div className="flex-1" />
          </>
        ) : (
          <>
            <div className="flex-1" />
            {node}
            {card}
          </>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  TOPIC DETAIL MODAL                                                  */
/* ------------------------------------------------------------------ */

function TopicModal({ topic, tab, setTab, onClose }) {
  const { bg, lightBg, text, border } = topic.theme;
  const Icon = topic.icon;

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full sm:max-w-xl sm:rounded-3xl rounded-t-3xl shadow-2xl max-h-[88vh] sm:max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* header */}
        <div className="sticky top-0 bg-white z-10 px-5 sm:px-6 pt-5 pb-4 border-b border-slate-100">
          <div className="flex items-start justify-between gap-3">
            <button
              onClick={onClose}
              className="flex items-center gap-1 text-slate-500 hover:text-indigo-600 text-xs font-bold transition-colors"
            >
              <IoChevronBack /> Back
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors"
            >
              <IoClose />
            </button>
          </div>

          <div className="flex items-center gap-3 mt-4">
            <div className={`w-12 h-12 rounded-2xl ${bg} flex items-center justify-center text-white shadow-md shrink-0`}>
              <Icon className="text-xl" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${lightBg} ${text} border ${border}`}>
                  <IoRibbonOutline className="inline -mt-0.5 mr-0.5" />
                  Level {String(topic.level).padStart(2, "0")}
                </span>
                <span className="text-[10px] font-bold text-slate-400">{topic.tag}</span>
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-0.5">
                {topic.title}
              </h2>
            </div>
          </div>

          {/* tabs */}
          <div className="mt-4 flex gap-1.5 overflow-x-auto -mx-5 sm:-mx-6 px-5 sm:px-6 pb-1">
            {TABS.map((t) => {
              const TIcon = t.icon;
              const active = t.key === tab;
              return (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={`flex items-center gap-1.5 shrink-0 px-3 py-1.5 rounded-full text-[11px] font-bold border transition-colors ${
                    active
                      ? `${bg} text-white border-transparent shadow-sm`
                      : "bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <TIcon className="text-sm" />
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* body */}
        <div className="px-5 sm:px-6 py-6">
          {tab === "definition" && (
            <Section icon={IoBookOutline} title="Definition" theme={topic.theme}>
              <p className="text-sm text-slate-700 leading-relaxed">{topic.definition}</p>
            </Section>
          )}

          {tab === "example" && (
            <Section icon={IoCodeSlashOutline} title="Example" theme={topic.theme}>
              <pre className="bg-slate-900 rounded-2xl p-4 overflow-x-auto">
                <code className="text-[12px] text-emerald-400 font-mono whitespace-pre">
                  {topic.example}
                </code>
              </pre>
            </Section>
          )}

          {tab === "practice" && (
            <Section icon={IoListOutline} title="Practice Questions" theme={topic.theme}>
              <ul className="space-y-2.5">
                {topic.practice.map((q, i) => (
                  <li key={i} className={`flex gap-3 ${lightBg} border ${border} rounded-2xl p-3.5`}>
                    <span className={`text-[11px] font-bold ${text} shrink-0`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-slate-700 leading-relaxed">{q}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {tab === "task" && (
            <Section icon={IoConstructOutline} title="Task" theme={topic.theme}>
              <div className={`${lightBg} border ${border} rounded-2xl p-4`}>
                <span className={`text-[10px] font-bold ${text} tracking-wider`}>BUILD THIS</span>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">{topic.task}</p>
              </div>
            </Section>
          )}

          {tab === "interview" && (
            <Section icon={IoChatbubbleEllipsesOutline} title="Interview Questions" theme={topic.theme}>
              <div className="space-y-2.5">
                {topic.interview.map((item, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5">
                    <p className="text-sm font-bold text-slate-900 mb-1">
                      Q{i + 1}. {item.q}
                    </p>
                    <p className="text-[13px] text-slate-600 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </Section>
          )}
        </div>
      </div>
    </div>
  );
}

function Section({ icon: Icon, title, theme, children }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3.5">
        <Icon className={`text-lg ${theme.text}`} />
        <h3 className="font-bold text-sm text-slate-800">{title}</h3>
      </div>
      {children}
    </div>
  );
}

export default TopicsPage;