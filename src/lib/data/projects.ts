export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
};

export const projectsData: Project[] = [
  {
    id: "ecommerce-dashboard",
    title: "E-Commerce Dashboard",
    description: "A beautiful analytics dashboard with real-time sales data, inventory management, and chart visualizations.",
    longDescription: "This project was built to explore complex data visualization in a React environment. The dashboard pulls in mock sales data and renders it through Chart.js components. I focused heavily on making each chart responsive and ensuring the layout adapts cleanly across screen sizes. State management was handled with React's built-in context API.",
    tech: ["Next.js", "Tailwind CSS", "Chart.js"],
    features: [
      "Real-time sales chart with weekly/monthly views",
      "Inventory management table with search and sort",
      "Dark mode support with smooth transitions",
      "Fully responsive across all device sizes",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "📊"
  },
  {
    id: "kanban-board",
    title: "Dev Flow Kanban",
    description: "A drag-and-drop kanban board built for developers with local storage syncing and beautiful UI components.",
    longDescription: "Dev Flow Kanban was built to practice advanced React patterns including drag-and-drop interaction via Framer Motion. Tasks persist across browser refreshes using localStorage. The UI was designed to feel lightweight and developer-friendly, with a focus on keyboard accessibility and smooth animations.",
    tech: ["React", "Framer Motion", "Zustand"],
    features: [
      "Drag-and-drop tasks between columns",
      "Persistent data storage via localStorage",
      "Add, edit, and delete tasks inline",
      "Animated transitions powered by Framer Motion",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "📋"
  },
  {
    id: "portfolio-v1",
    title: "Portfolio V1",
    description: "My previous portfolio built with vanilla HTML, CSS, and minimal JavaScript to study layout fundamentals.",
    longDescription: "My very first portfolio was built using no frameworks or libraries — pure HTML, CSS, and a sprinkle of JavaScript. It was an important milestone that taught me the fundamentals of responsive layout, the CSS box model, and semantic HTML structure before diving into React.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Hand-coded layouts using CSS Flexbox and Grid",
      "Mobile-responsive without any framework",
      "Smooth scroll and section animations in vanilla JS",
      "Deployed to GitHub Pages",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "👨‍💻"
  },
  {
    id: "weather-app",
    title: "SkyCast Weather",
    description: "A location-based weather utility that fetches live forecasts using the OpenWeather API.",
    longDescription: "SkyCast fetches real-time weather data from the OpenWeather API based on the user's searched location. The app displays temperature, humidity, wind speed, and a 5-day forecast. This project was a great introduction to working with third-party REST APIs and managing async data fetching in React.",
    tech: ["React", "Fetch API", "Tailwind CSS"],
    features: [
      "Search weather by city name",
      "Live 5-day forecast display",
      "Displays temperature, humidity, and wind speed",
      "Dynamic background color based on weather condition",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "⛅"
  }
];
