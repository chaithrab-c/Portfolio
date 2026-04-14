// src/data/portfolioData.js
// ── Edit all your content here — components update automatically ──

export const personal = {
  name: 'Chaithra B',
  title: 'Frontend & Full Stack Developer',
  subtitle: 'React.js · Redux Toolkit · Node.js · MongoDB',
  email: 'chaithramb21@gmail.com',
  phone: '+919945100762',
  phoneDisplay: '+91 9945100762',
  linkedin: 'https://www.linkedin.com/in/chaithra-b-9a98a1250',
  github: 'https://github.com/chaithrab-c',
  summary:
    'Results-driven Frontend and Full Stack Developer with hands-on internship experience at TekPyramid and a strong foundation in React.js, Redux Toolkit (RTK), Node.js, Express.js, MongoDB, and RESTful API development. Proven ability to build scalable, responsive, and user-friendly web applications end-to-end — covering JWT authentication, state management with Redux RTK, CRUD operations, form validation, API integration, and MVC architecture.',
}

export const skills = [
  {
    category: 'Frontend',
    icon: '🖥️',
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'React Router DOM', 'React Context API', 'Custom Hooks'],
  },
  {
    category: 'State Management',
    icon: '⚙️',
    items: ['Redux Toolkit (RTK)', 'Redux Slices', 'createAsyncThunk', 'RTK Query', 'React Context API'],
  },
  {
    category: 'Backend',
    icon: '🔧',
    items: ['Node.js', 'Express.js', 'RESTful APIs', 'MVC Architecture', 'JWT Authentication', 'bcrypt', 'CORS Handling'],
  },
  {
    category: 'Database',
    icon: '🗄️',
    items: ['MongoDB', 'JSON File Storage'],
  },
  {
    category: 'UI Frameworks',
    icon: '🎨',
    items: ['Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Tools & Libraries',
    icon: '🛠️',
    items: ['Axios (with Interceptors)', 'Git', 'GitHub', 'VS Code'],
  },
]

export const experience = [
  {
    role: 'Frontend Developer Intern',
    company: 'TekPyramid',
    duration: '6 Months',
    highlights: [
      'Developed reusable and modular React.js UI components following component-based architecture best practices',
      'Managed application state using Redux Toolkit (RTK) — created slices, reducers, and async thunks for API calls',
      'Built fully responsive layouts using Tailwind CSS and Bootstrap for consistent cross-device rendering',
      'Integrated frontend applications with Node.js/Express.js REST APIs using Axios with interceptors for error handling',
      'Implemented client-side form validation and robust API response/error handling flows',
      'Collaborated with team members using Git & GitHub for version control and code reviews',
      'Debugged UI issues and applied performance optimization techniques to improve application responsiveness',
    ],
  },
]

export const projects = [
  {
    name: 'Event Management System',
    type: 'Full Stack Application',
    github: 'https://github.com/chaithrab-c',
    technologies: ['React.js', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Axios', 'JWT', 'React Router DOM'],
    description:
      'A complete full-stack event management platform built end-to-end — covering UI to database, with JWT auth, Redux state management, and full CRUD operations.',
    highlights: [
      'Architected and built a complete full-stack event management platform end-to-end, independently handling all layers from UI to database',
      'Implemented secure user registration and JWT-based login with bcrypt password hashing and protected backend routes',
      'Managed global application state using Redux Toolkit — structured Redux slices for auth, events, and participants with createAsyncThunk',
      'Built full event CRUD operations on the React.js frontend and Express.js backend following a clean MVC structure',
      'Configured Axios with interceptors for API communication and centralized error/loading state handling via RTK',
      'Implemented React Router DOM with protected routes, restricting access to authenticated users only',
      'Designed a fully responsive UI using Tailwind CSS, including participant registration with capacity validation',
    ],
  },
  {
    name: 'Contact Manager',
    type: 'Full Stack Application',
    github: 'https://github.com/chaithrab-c',
    technologies: ['React.js', 'Redux Toolkit', 'Node.js', 'Axios', 'Bootstrap', 'REST APIs', 'React Router DOM'],
    description:
      'A full-stack CRUD web application to add, view, edit, and delete contacts with Redux state management and a responsive interface.',
    highlights: [
      'Used Redux Toolkit to manage contacts state globally — implemented slices and thunks for async CRUD operations',
      'Built reusable React components for forms and contact cards; used React Router DOM for dynamic navigation',
      'Designed a lightweight Node.js backend using the HTTP module with file-based JSON storage for data persistence',
      'Integrated frontend with backend APIs via Axios and implemented CORS handling for smooth communication',
      'Ensured fully responsive UI using Bootstrap for consistent experience across all screen sizes',
    ],
  },
]

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'National Institute of Engineering, Mysore',
    duration: '2021 - 2022',
    cgpa: '8.26',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Bapuji Institute of Hi-Tech Education, Davangere',
    duration: '2017 - 2020',
    cgpa: '8.31',
  },
]

export const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
]
