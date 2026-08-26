const projectsData = [
  {
    id: 1,
    title: "Calculator App",
    level: "Beginner",
    description: "Build a functional calculator using JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    tips: [
      "Create the calculator UI with number and operator buttons.",
      "Handle button clicks using JavaScript.",
      "Perform addition, subtraction, multiplication and division.",
      "Add clear and delete functionality.",
      "Display the calculation result dynamically."
    ],
    sourceUrl: "#",
    githubUrl: "#",
    liveUrl: "#"
  },

  {
    id: 2,
    title: "Weather App",
    level: "Intermediate",
    description: "Build a weather application that displays real-time weather information.",
    technologies: ["HTML", "CSS", "JavaScript", "Weather API"],
    tips: [
      "Create a city search input.",
      "Connect the application with a weather API.",
      "Fetch weather data using fetch().",
      "Display temperature, humidity and weather condition.",
      "Handle invalid city names and API errors."
    ],
    sourceUrl: "#",
    githubUrl: "#",
    liveUrl: "#"
  },

  {
    id: 3,
    title: "Movie Search App",
    level: "Intermediate",
    description: "Create a movie search application using a movie API.",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
    tips: [
      "Create a movie search input.",
      "Fetch movie data from an API.",
      "Display movie posters, titles and ratings.",
      "Add loading and error states.",
      "Create a clean movie details section."
    ],
    sourceUrl: "#",
    githubUrl: "#",
    liveUrl: "#"
  },

  {
    id: 4,
    title: "Music Player",
    level: "Intermediate",
    description: "Build a simple music player with playback controls.",
    technologies: ["HTML", "CSS", "JavaScript"],
    tips: [
      "Create a music player interface.",
      "Use the HTML Audio API.",
      "Add play, pause, next and previous controls.",
      "Create a progress bar.",
      "Display song title and duration."
    ],
    sourceUrl: "#",
    githubUrl: "#",
    liveUrl: "#"
  },

  {
    id: 5,
    title: "Todo List App",
    level: "Beginner",
    description: "Create a todo application for managing daily tasks.",
    technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    tips: [
      "Create an input for adding tasks.",
      "Add and remove tasks dynamically.",
      "Implement task completion functionality.",
      "Store todos in localStorage.",
      "Add filtering for completed and pending tasks."
    ],
    sourceUrl: "#",
    githubUrl: "#",
    liveUrl: "#"
  },

  {
    id: 6,
    title: "Digital Clock",
    level: "Beginner",
    description: "Build a real-time digital clock using JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    tips: [
      "Create the clock UI.",
      "Use the Date object.",
      "Update the time every second.",
      "Display hours, minutes and seconds.",
      "Add AM and PM support."
    ],
    sourceUrl: "#",
    githubUrl: "#",
    liveUrl: "#"
  },

  {
    id: 7,
    title: "MCQ Quiz App",
    level: "Intermediate",
    description: "Build an interactive multiple-choice quiz application.",
    technologies: ["HTML", "CSS", "JavaScript"],
    tips: [
      "Create an array containing quiz questions.",
      "Display one question at a time.",
      "Add multiple answer options.",
      "Calculate the user's score.",
      "Show the final result after completing the quiz."
    ],
    sourceUrl: "#",
    githubUrl: "#",
    liveUrl: "#"
  },

  {
    id: 8,
    title: "BMI Calculator",
    level: "Beginner",
    description: "Create a BMI calculator that calculates and categorizes body mass index.",
    technologies: ["HTML", "CSS", "JavaScript"],
    tips: [
      "Create height and weight inputs.",
      "Calculate BMI using JavaScript.",
      "Display the calculated BMI.",
      "Create BMI categories.",
      "Validate user input before calculation."
    ],
    sourceUrl: "#",
    githubUrl: "#",
    liveUrl: "#"
  },

  {
    id: 9,
    title: "Rock Paper Scissors",
    level: "Beginner",
    description: "Build a Rock Paper Scissors game against the computer.",
    technologies: ["HTML", "CSS", "JavaScript"],
    tips: [
      "Create buttons for rock, paper and scissors.",
      "Generate a random computer choice.",
      "Compare player and computer choices.",
      "Display the winner.",
      "Add score tracking."
    ],
    sourceUrl: "#",
    githubUrl: "#",
    liveUrl: "#"
  },

  {
    id: 10,
    title: "Password Generator",
    level: "Beginner",
    description: "Create a secure random password generator.",
    technologies: ["HTML", "CSS", "JavaScript"],
    tips: [
      "Create a password length selector.",
      "Generate random characters.",
      "Include uppercase, lowercase, numbers and symbols.",
      "Add copy-to-clipboard functionality.",
      "Validate the selected password length."
    ],
    sourceUrl: "#",
    githubUrl: "#",
    liveUrl: "#"
  },

  {
    id: 11,
    title: "Age Calculator",
    level: "Beginner",
    description: "Build an application that calculates a user's exact age.",
    technologies: ["HTML", "CSS", "JavaScript"],
    tips: [
      "Create a date of birth input.",
      "Use the Date object for calculations.",
      "Calculate years, months and days.",
      "Validate future dates.",
      "Display the result clearly."
    ],
    sourceUrl: "#",
    githubUrl: "#",
    liveUrl: "#"
  },

  {
    id: 12,
    title: "Expense Tracker",
    level: "Intermediate",
    description: "Build an application for tracking income and expenses.",
    technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    tips: [
      "Create income and expense forms.",
      "Store transaction data in an array.",
      "Calculate total income and expenses.",
      "Display the remaining balance.",
      "Persist transactions using localStorage."
    ],
    sourceUrl: "#",
    githubUrl: "#",
    liveUrl: "#"
  },

  {
    id: 13,
    title: "Notes App",
    level: "Intermediate",
    description: "Create a notes application for creating and managing notes.",
    technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    tips: [
      "Create a note creation interface.",
      "Add, edit and delete notes.",
      "Store notes in localStorage.",
      "Add note search functionality.",
      "Display notes in a clean card layout."
    ],
    sourceUrl: "#",
    githubUrl: "#",
    liveUrl: "#"
  },

  {
    id: 14,
    title: "Image Slider",
    level: "Beginner",
    description: "Build an interactive image slider with navigation controls.",
    technologies: ["HTML", "CSS", "JavaScript"],
    tips: [
      "Create an array of image URLs.",
      "Display one image at a time.",
      "Add previous and next buttons.",
      "Add automatic sliding.",
      "Add indicator dots for navigation."
    ],
    sourceUrl: "#",
    githubUrl: "#",
    liveUrl: "#"
  },

  {
    id: 15,
    title: "Random Quote Generator",
    level: "Beginner",
    description: "Create an application that displays random inspirational quotes.",
    technologies: ["HTML", "CSS", "JavaScript"],
    tips: [
      "Create an array of quotes.",
      "Generate a random quote.",
      "Display the quote dynamically.",
      "Add a new quote button.",
      "Add copy or share functionality."
    ],
    sourceUrl: "#",
    githubUrl: "#",
    liveUrl: "#"
  },

  {
    id: 16,
    title: "Typing Speed Test",
    level: "Intermediate",
    description: "Build a typing speed test that measures typing performance.",
    technologies: ["HTML", "CSS", "JavaScript"],
    tips: [
      "Generate a random paragraph.",
      "Start the timer when the user starts typing.",
      "Compare typed text with the original text.",
      "Calculate typing speed in WPM.",
      "Calculate accuracy and display the final result."
    ],
    sourceUrl: "#",
    githubUrl: "#",
    liveUrl: "#"
  },

  {
    id: 17,
    title: "Stopwatch",
    level: "Beginner",
    description: "Build a stopwatch with start, pause and reset functionality.",
    technologies: ["HTML", "CSS", "JavaScript"],
    tips: [
      "Create the stopwatch interface.",
      "Use setInterval() for the timer.",
      "Add start and pause buttons.",
      "Add reset functionality.",
      "Display minutes, seconds and milliseconds."
    ],
    sourceUrl: "#",
    githubUrl: "#",
    liveUrl: "#"
  },

  {
    id: 18,
    title: "Tic Tac Toe",
    level: "Intermediate",
    description: "Create a two-player Tic Tac Toe game.",
    technologies: ["HTML", "CSS", "JavaScript"],
    tips: [
      "Create a 3x3 game board.",
      "Track the current player.",
      "Handle player moves.",
      "Check all winning combinations.",
      "Add restart game functionality."
    ],
    sourceUrl: "#",
    githubUrl: "#",
    liveUrl: "#"
  },

  {
    id: 19,
    title: "QR Code Generator",
    level: "Intermediate",
    description: "Build a QR code generator from user-provided text or URLs.",
    technologies: ["HTML", "CSS", "JavaScript", "QR API"],
    tips: [
      "Create an input for text or URLs.",
      "Connect a QR code generation library or API.",
      "Generate the QR code dynamically.",
      "Add download functionality.",
      "Validate empty input."
    ],
    sourceUrl: "#",
    githubUrl: "#",
    liveUrl: "#"
  },

  {
    id: 20,
    title: "GitHub Profile Finder",
    level: "Intermediate",
    description: "Create an application that searches and displays GitHub profiles.",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub API"],
    tips: [
      "Create a username search input.",
      "Fetch profile data using the GitHub API.",
      "Display avatar, name and bio.",
      "Show repositories and follower information.",
      "Handle users that do not exist."
    ],
    sourceUrl: "#",
    githubUrl: "#",
    liveUrl: "#"
  }
];

export default projectsData;