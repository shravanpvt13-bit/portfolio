/**
 * Portfolio Configuration File
 * 
 * Customize your personal details, links, skills, projects, and education here.
 * Any updates made here will automatically reflect across the entire website!
 */

export const personalInfo = {
  name: "Shravan S Neeralagi",
  shortName: "Shravan",
  title: "BTech CSE Student | Aspiring Software & Web Developer",
  status: "Available for Internships & Projects",
  tagline: "I build modern web applications, Python systems, and explore software development. Focused on practical problem solving and learning through real-world projects.",
  location: "India",
  email: "your-email@gmail.com", // Replace with your actual email
  github: "https://github.com", // Replace with your GitHub URL (e.g. https://github.com/shravan-sn)
  githubUsername: "shravan-sn", // Replace with your GitHub handle
  linkedin: "https://linkedin.com", // Replace with your LinkedIn profile
  twitter: "https://twitter.com", // Optional
  resumeUrl: "#", // Add link to your PDF resume when ready
};

export const aboutData = {
  title: "About Me",
  subtitle: "A Computer Science student who believes in learning by building.",
  paragraphs: [
    "I am currently pursuing my Bachelor of Technology (BTech) in Computer Science & Engineering. My passion lies in software development, web engineering, and Python-powered applications.",
    "Rather than solely focusing on textbook definitions, I thrive on practical problem-solving. I spend my time building projects, dissecting developer documentation, and turning conceptual programming challenges into clean, functioning code.",
    "I'm eager to contribute to collaborative developer teams, undertake internship opportunities, and build solutions that create meaningful real-world impact."
  ],
  pillars: [
    {
      id: "programming",
      title: "Core Programming & Logic",
      desc: "Grounded in foundational languages like C, C++, and Python. Focused on understanding memory, algorithms, and writing readable, maintainable logic.",
      badge: "DSA & Logic"
    },
    {
      id: "web-dev",
      title: "Web Development",
      desc: "Designing and building responsive, accessible web interfaces using semantic HTML5, modern CSS3 layouts, and vanilla JavaScript (ES6+).",
      badge: "Frontend & UI"
    },
    {
      id: "practical-software",
      title: "Software & APIs",
      desc: "Developing backend utilities, interacting with REST APIs, and automating repetitive tasks using Python scripts and modern toolchains.",
      badge: "Backend & Tools"
    },
    {
      id: "iot-systems",
      title: "IoT & Hardware Exploration",
      desc: "Hands-on curiosity with microcontrollers like the ESP32, exploring embedded logic, sensor telemetry, and basic home/lab automation.",
      badge: "Hardware & IoT"
    }
  ]
};

export const skillCategories = [
  {
    category: "Programming Languages",
    icon: "code",
    skills: [
      { name: "Python", status: "Active & Preferred", desc: "Scripting, Automation, Backend Logic" },
      { name: "C", status: "Core Foundation", desc: "Pointers, Memory, Structured Programming" },
      { name: "C++", status: "Intermediate", desc: "Object-Oriented Programming, STL, DSA" },
      { name: "JavaScript", status: "Active", desc: "ES6+, Async, DOM Manipulation" }
    ]
  },
  {
    category: "Web Technologies",
    icon: "globe",
    skills: [
      { name: "HTML5", status: "Proficient", desc: "Semantic Structure, Accessibility (a11y), SEO" },
      { name: "CSS3", status: "Proficient", desc: "Flexbox, Grid, Custom Properties, Animations" },
      { name: "Responsive Design", status: "Proficient", desc: "Mobile-First Layouts, Media Queries" },
      { name: "Vite & Tooling", status: "Familiar", desc: "Modern Bundling, Fast HMR Workflow" }
    ]
  },
  {
    category: "Developer Tools",
    icon: "terminal",
    skills: [
      { name: "Git", status: "Daily Use", desc: "Branching, Merging, Version Control" },
      { name: "GitHub", status: "Daily Use", desc: "Repositories, Pull Requests, Code Reviews" },
      { name: "VS Code", status: "Primary IDE", desc: "Configured Extensions, Debugging, Terminal" },
      { name: "Postman", status: "Learning", desc: "API Endpoint Testing, Request Payloads" }
    ]
  },
  {
    category: "Other & CS Fundamentals",
    icon: "cpu",
    skills: [
      { name: "RESTful APIs", status: "Active", desc: "Client-Server Architecture, JSON APIs" },
      { name: "IoT & ESP32", status: "Exploratory", desc: "Microcontrollers, Sensors, GPIO, MQTT" },
      { name: "Data Structures", status: "Coursework", desc: "Arrays, Linked Lists, Trees, Stacks, Queues" },
      { name: "Problem Solving", status: "Continuous", desc: "Logical reasoning and algorithmic thinking" }
    ]
  }
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "python", label: "Python & APIs" },
  { id: "web", label: "Web Development" },
  { id: "iot", label: "IoT & Hardware" }
];

export const projects = [
  {
    id: "python-api",
    category: "python",
    title: "Python REST API & Data Service",
    badge: "Featured Backend",
    description: "A structured, modular RESTful API built with Python to handle user records, JSON payload validation, query filtering, and automated endpoint documentation.",
    highlights: [
      "Modular controller-service routing structure",
      "Robust input validation and HTTP error handling",
      "Automated interactive Swagger/OpenAPI documentation"
    ],
    technologies: ["Python", "FastAPI / Flask", "REST API", "JSON", "SQLite"],
    githubUrl: "https://github.com", // Replace with your repository URL
    demoUrl: null, // Add demo URL if deployed
    isPlaceholder: true
  },
  {
    id: "iot-esp32",
    category: "iot",
    title: "ESP32 IoT Environmental Automation",
    badge: "Hardware Project",
    description: "A micro-controller automation node built with ESP32 and C++ that polls temperature/humidity telemetry, logs readings, and triggers GPIO relay actions via a lightweight web dashboard.",
    highlights: [
      "Hardware sensor reading (DHT11/BMP280)",
      "Lightweight embedded HTTP server for local monitoring",
      "Threshold-based automatic relay switching"
    ],
    technologies: ["C++", "ESP32", "Arduino Framework", "WebSockets", "IoT"],
    githubUrl: "https://github.com", // Replace with your repository URL
    demoUrl: null,
    isPlaceholder: true
  },
  {
    id: "modern-portfolio",
    category: "web",
    title: "Minimal Developer Portfolio",
    badge: "Live Website",
    description: "A fast, responsive, modern dark-themed portfolio built using semantic HTML5, modern CSS3 design tokens, and modular JavaScript with Vite tooling.",
    highlights: [
      "Dark OLED developer aesthetic with smooth micro-interactions",
      "Zero heavyweight UI dependencies for lightning-fast loads",
      "Fully accessible, mobile-first responsive layout"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript ES6+", "Vite"],
    githubUrl: "https://github.com",
    demoUrl: "#hero",
    isPlaceholder: false
  },
  {
    id: "algo-toolkit",
    category: "python",
    title: "Algorithm & DSA Visualizer Toolkit",
    badge: "CS Fundamentals",
    description: "A collection of core algorithms and data structures implemented in Python and C++, featuring step-by-step console tracing and performance benchmarking.",
    highlights: [
      "Implemented Sorting, Graph traversal, and Dynamic Programming",
      "Execution time & operation counter comparisons",
      "Comprehensive test cases and documentation"
    ],
    technologies: ["Python", "C++", "DSA", "Algorithms"],
    githubUrl: "https://github.com",
    demoUrl: null,
    isPlaceholder: true
  }
];

export const githubData = {
  profileUrl: "https://github.com", // Will link to personalInfo.github
  username: "shravan-sn",
  statusLine: "Actively committing, learning, and pushing new code.",
  stats: [
    { label: "Public Repositories", value: "12+" },
    { label: "Primary Languages", value: "Python, C++, JS" },
    { label: "Contributions (Year)", value: "240+" },
    { label: "Code Focus", value: "Web & Systems" }
  ],
  pinnedRepos: [
    {
      name: "python-backend-starter",
      desc: "Clean boilerplate for building REST APIs in Python with SQLite and structured routing.",
      language: "Python",
      langColor: "#3572A5",
      stars: 4,
      forks: 1
    },
    {
      name: "esp32-smart-node",
      desc: "Firmware code for ESP32 with sensor telemetry and local web controller.",
      language: "C++",
      langColor: "#F34B7D",
      stars: 3,
      forks: 0
    },
    {
      name: "personal-portfolio-web",
      desc: "Source code for this clean, responsive developer portfolio website.",
      language: "JavaScript",
      langColor: "#F7DF1E",
      stars: 5,
      forks: 2
    }
  ]
};

export const educationData = {
  degree: "Bachelor of Technology (BTech) in Computer Science & Engineering",
  institution: "Engineering College / University", // Replace with your university/college name
  period: "2023 – 2027",
  status: "Undergraduate Student",
  description: "Pursuing in-depth academic study in computer science fundamentals, software engineering methodologies, data structures, and computer systems.",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (C++ & Java)",
    "Database Management Systems (DBMS)",
    "Operating Systems (OS)",
    "Computer Organization & Architecture",
    "Computer Networks",
    "Web Application Development",
    "Discrete Mathematics"
  ],
  academicHighlights: [
    "Engaging in practical laboratory coursework and algorithmic coding",
    "Building academic mini-projects in Python, C, and Web Technologies",
    "Participating in coding clubs, developer workshops, and tech hackathons"
  ]
};
