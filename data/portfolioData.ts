export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI / Multi-Agent' | 'Full-Stack Web' | 'Web Application';
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  keyHighlights: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  accentColor: string;
  badge: string;
  caseStudy: {
    problem: string;
    idea: string;
    whatIBuilt: string;
    keyFeatures: string[];
    technicalArchitecture: string[];
    challenges: string[];
    outcome: string;
  };
}

export interface Certificate {
  id: string;
  title: string;
  organization: string;
  credentialType: string;
  issueDate: string;
  imageSrc: string;
  pdfSrc: string;
  driveUrl: string;
  description: string;
  disclaimer?: string;
  tags: string[];
}

export interface Milestone {
  id: string;
  title: string;
  organization: string;
  date: string;
  category: string;
  summary: string;
  driveUrl: string;
  badge: string;
}

export interface LeadershipItem {
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: { name: string; highlight?: boolean; context?: string }[];
}

export const portfolioData = {
  personal: {
    name: "Hemant Suresh Rathod",
    shortName: "Hemant",
    headline: "Building ideas into working products.",
    identityLine: "AI & Data Science Student • Developer • Builder",
    supportingCopy:
      "I'm Hemant Suresh Rathod, an Artificial Intelligence & Data Science student who enjoys building practical software, exploring AI systems, and turning hackathon ideas into usable products.",
    statusBadge: "Open to Internship Opportunities",
    aboutP1:
      "I'm currently pursuing a B.Tech in Artificial Intelligence & Data Science at Sanjay Ghodawat University. I enjoy working at the intersection of software development and AI, with a particular interest in building useful products rather than stopping at prototypes.",
    aboutP2:
      "From college projects to hackathons, I've been experimenting with web applications, AI-powered workflows, multi-agent systems, and real-world problem solving. I'm especially interested in understanding how modern AI systems can be combined with solid software engineering to create practical products.",
    photoUrl: "/images/hemant-photo.jpg",
    resumeUrl: "/resume/Hemant_Suresh_Rathod_Resume.pdf",
    location: "Kolhapur / Maharashtra, India",
    email: "rathodhemantsuresh1983@gmail.com",
    githubUrl: "https://github.com/hemantsureshrathod-dev",
    linkedinUrl: "https://www.linkedin.com/in/hemantsureshrathod",
  },

  education: {
    degree: "B.Tech in Artificial Intelligence & Data Science",
    university: "Sanjay Ghodawat University",
    location: "Kolhapur, Maharashtra",
    year: "Second Year (2025 – 2029)",
    graduation: "2029",
    cgpa: "9.40 / 10",
    keyAreas: [
      "Artificial Intelligence & Machine Learning",
      "Data Structures & Algorithms",
      "Object-Oriented Programming (C++, Python)",
      "Database Management Systems",
      "Full-Stack Web Technologies",
    ],
  },

  statistics: [
    { label: "CGPA", value: "9.40", note: "Out of 10.0" },
    { label: "Graduation", value: "2029", note: "B.Tech AI & DS" },
    { label: "Featured Projects", value: "3+", note: "Grounded & Functional" },
    { label: "Hackathon Credentials", value: "5", note: "Verified Certifications" },
  ],

  skillCategories: [
    {
      name: "AI & GenAI",
      description: "Agent orchestration, vector stores, and generative AI integrations",
      skills: [
        { name: "Generative AI", highlight: true },
        { name: "LangChain", highlight: true },
        { name: "LangGraph (StateGraph)", highlight: true },
        { name: "AI Multi-Agents", highlight: true },
        { name: "LLM App Development", highlight: true },
        { name: "Sentence Transformers", highlight: false },
        { name: "ChromaDB Vector Store", highlight: false },
        { name: "Google Gemini API", highlight: false },
        { name: "LangSmith Tracing", highlight: false },
      ],
    },
    {
      name: "Programming Languages",
      description: "Core languages for systems, algorithms, and web logic",
      skills: [
        { name: "Python", highlight: true, context: "Primary AI & Backend" },
        { name: "C++", highlight: true, context: "DSA & Core Concepts" },
        { name: "JavaScript", highlight: true, context: "ES6+ Web Development" },
        { name: "TypeScript", highlight: true, context: "Type-Safe Full-Stack" },
      ],
    },
    {
      name: "Frontend Development",
      description: "Modern component-driven UIs and responsive design systems",
      skills: [
        { name: "React", highlight: true },
        { name: "Next.js", highlight: true },
        { name: "Tailwind CSS", highlight: true },
        { name: "HTML5", highlight: false },
        { name: "CSS3", highlight: false },
        { name: "Vite", highlight: false },
        { name: "Responsive UI/UX", highlight: false },
      ],
    },
    {
      name: "Backend & Databases",
      description: "Server runtimes, REST architectures, and data persistence",
      skills: [
        { name: "Node.js", highlight: true },
        { name: "Express.js", highlight: true },
        { name: "MongoDB", highlight: true },
        { name: "PostgreSQL", highlight: false },
        { name: "Supabase", highlight: false },
        { name: "Firebase", highlight: false },
        { name: "REST APIs", highlight: false },
        { name: "JWT Authentication", highlight: false },
      ],
    },
    {
      name: "Tools & DevOps",
      description: "Version control, deployment pipelines, and AI engineering workflows",
      skills: [
        { name: "Git", highlight: true },
        { name: "GitHub", highlight: true },
        { name: "Vercel", highlight: true },
        { name: "Streamlit", highlight: false },
        { name: "Postman", highlight: false },
        { name: "Antigravity & AI Tools", highlight: false },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "kestrel-research-os",
      title: "Kestrel ResearchOS",
      subtitle: "Autonomous Multi-Agent Research Assistant",
      category: "AI / Multi-Agent",
      badge: "LangGraph StateGraph",
      accentColor: "#6366f1", // Indigo
      featured: true,
      shortDescription:
        "An experimental multi-agent research workflow designed to break complex research tasks into coordinated agent responsibilities with strict citation grounding.",
      fullDescription:
        "Kestrel ResearchOS is a multi-agent system built on LangGraph that coordinates 4 specialized agents (Planner, Retriever, Evidence Verifier, Answer Synthesizer) over an internal technical documentation corpus. It enforces strict epistemic honesty, detecting conflicts across doc revisions and evaluating support levels without hallucinating.",
      techStack: [
        "Python",
        "LangGraph",
        "LangChain",
        "Sentence Transformers",
        "ChromaDB",
        "Streamlit",
        "LangSmith",
        "Pydantic",
      ],
      keyHighlights: [
        "4-agent LangGraph StateGraph pipeline with typed state transitions",
        "Cost-free local embeddings via sentence-transformers/all-MiniLM-L6-v2",
        "Epistemic honesty classification (SUPPORTED, PARTIALLY_SUPPORTED, CONFLICTING, UNSUPPORTED)",
        "Strict in-text chunk citation enforcement ([spec-beacons:1])",
        "Evaluated on a 20-benchmark test suite with 93.3% retrieval hit rate",
      ],
      githubUrl: "https://github.com/hemantsureshrathod-dev/Multi-Agent-Research-Assistant",
      caseStudy: {
        problem:
          "Traditional RAG pipelines frequently suffer from hallucinated answers, inability to reconcile conflicting documentation versions, and vague answers without verifiable citations back to the source text.",
        idea:
          "Decompose the research pipeline into four distinct autonomous agents coordinated through a LangGraph StateGraph, each with a single verifiable responsibility: planning queries, retrieving local embeddings, verifying evidence integrity, and synthesizing strictly grounded answers.",
        whatIBuilt:
          "A production-grade Python multi-agent system indexed over 154 deduplicated chunks across 25 technical documents. The system runs local Sentence Transformers embeddings into ChromaDB, executes multi-query decomposition, tests evidentiary support, and renders through a multi-turn Streamlit chat interface with execution trace inspection.",
        keyFeatures: [
          "Planner / Router: Decomposes complex user queries into targeted sub-queries and filters out-of-scope requests.",
          "Research Retriever: Executes sub-queries against local Chroma index and performs score-ranked deduplication.",
          "Evidence Verifier: Extracts atomic claims and audits version discrepancies (e.g., changes in retention policies).",
          "Answer Synthesizer: Generates Markdown responses exclusively from verified chunks with exact citation tags.",
          "Streamlit UI: Multi-turn chat interface with live evidence accordions and LangSmith trace observability.",
        ],
        technicalArchitecture: [
          "State Management: Strongly typed Pydantic & TypedDict state passed between LangGraph nodes.",
          "Local Vector Index: 154 chunks vectorized with all-MiniLM-L6-v2 without external API latency or fees.",
          "Citation Engine: Deterministic mapping of generated statements to source doc chunk IDs.",
        ],
        challenges: [
          "Handling contradictory information across document revisions without dropping important nuance.",
          "Preventing LLMs from fabricating citations when evidence was incomplete — solved with explicit epistemic support thresholds.",
        ],
        outcome:
          "Achieved a 93.3% retrieval hit rate and 100% citation grounding precision across the 20-item benchmark suite with zero hallucinated source documents.",
      },
    },
    {
      id: "travelmate-plus",
      title: "TravelMate+",
      subtitle: "Maharashtra-Focused AI Travel Companion",
      category: "Full-Stack Web",
      badge: "Full-Stack + Gemini AI",
      accentColor: "#0284c7", // Sky blue
      featured: true,
      shortDescription:
        "A Maharashtra-focused AI travel companion designed to help users plan journeys, discover curated destinations, locate EV charging stations, and explore travel options intelligently.",
      fullDescription:
        "TravelMate+ is a complete full-stack web application built for Maharashtra travelers. It integrates Google Gemini AI for smart local travel advice, a multi-step itinerary planner, Geolocation-based nearby search, EV charging locator, and a seamless English/Marathi bilingual toggle.",
      techStack: [
        "React 19",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Gemini API",
        "JWT",
        "Vercel",
      ],
      keyHighlights: [
        "Gemini-powered travel assistant specialized in Maharashtra tourism & culture",
        "Multi-step interactive trip planner with date & budget selection",
        "EV charging station locator & radius-based geolocation search",
        "Bilingual language toggle: Seamless English and Marathi experiences",
        "Complete user authentication with JWT and MongoDB data persistence",
      ],
      githubUrl: "https://github.com/hemantsureshrathod-dev/TravelMate-Plus",
      liveUrl: "https://travel-mate-plus.vercel.app/",
      caseStudy: {
        problem:
          "Most mainstream travel apps are generic and lack deep local context for Maharashtra, missing critical regional nuances such as regional Marathi language support, specific food preferences (Veg/Non-Veg/Jain), and EV charging route planning.",
        idea:
          "Build a full-stack, mobile-first travel web application tailored specifically to Maharashtra with bilingual localization, EV-friendly infrastructure discovery, and an AI itinerary assistant powered by Google Gemini.",
        whatIBuilt:
          "A full-stack application featuring a React 19 + TypeScript frontend and a Node.js/Express REST backend backed by MongoDB. Seeded with curated Maharashtra destinations across major hubs (Mumbai, Pune, Kolhapur, Nashik, Chhatrapati Sambhajinagar) and integrated with browser geolocation.",
        keyFeatures: [
          "AI Travel Assistant: Context-aware chatbot with Maharashtra historical and route intelligence.",
          "Trip Planner: Step-by-step travel scheduler saving itineraries to MongoDB.",
          "Bilingual Localization: Instant toggle between English and Marathi across all UI elements.",
          "EV Travel Mode: Dedicated directory and map search for EV charging points.",
          "User Dashboard: Secure JWT-authenticated profile to manage saved spots and past trips.",
        ],
        technicalArchitecture: [
          "Frontend: React 19, TypeScript, Vite, Tailwind CSS with responsive mobile-first layouts.",
          "Backend: Node.js, Express REST API with bcrypt password hashing and JWT authorization.",
          "Database: MongoDB schemas for Users, Trips, Places, SavedPlaces, and ChatHistory.",
        ],
        challenges: [
          "Ensuring high-accuracy prompt engineering for Gemini to return authentic regional recommendations.",
          "Optimizing MongoDB queries for location-based nearby filtering without third-party mapping API costs.",
        ],
        outcome:
          "Deployed to production on Vercel with a responsive UI, verified user authentication, and a working live demo used during regional buildathon evaluations.",
      },
    },
    {
      id: "primeturf",
      title: "PrimeTurf",
      subtitle: "Sports Facility & Turf Booking Platform",
      category: "Web Application",
      badge: "Responsive Booking UI",
      accentColor: "#10b981", // Emerald
      featured: true,
      shortDescription:
        "A sports facility booking platform concept focused on helping users discover and book facilities such as box cricket turfs, futsal courts, and badminton spaces.",
      fullDescription:
        "PrimeTurf delivers an intuitive, mobile-first booking experience tailored for sports enthusiasts. It allows players to browse local box cricket and futsal turfs, inspect available hourly time slots, explore amenities, and initiate direct UPI payment intent booking flows.",
      techStack: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Supabase",
        "Lucide Icons",
        "Vercel",
      ],
      keyHighlights: [
        "Mobile-first responsive UI built with reusable modular components",
        "Interactive time-slot selector with real-time availability states",
        "Facility amenity badges (floodlights, parking, locker rooms, turf quality)",
        "Integrated UPI intent payment flow and reservation confirmation view",
        "Turf owner management view concept for scheduling and slot status",
      ],
      githubUrl: "https://github.com/hemantsureshrathod-dev/PrimeTurf",
      liveUrl: "https://tanush-sports-club.vercel.app/",
      caseStudy: {
        problem:
          "Sports turf booking across Indian towns and suburban areas is largely managed manually via WhatsApp and phone calls, leading to double-booked slots, payment friction, and unclear amenity information.",
        idea:
          "Create a clean, lightweight web app where athletes can view open turf slots in real time, see transparent pricing, and trigger seamless UPI payments without complex app installs.",
        whatIBuilt:
          "A modern React application deployed on Vercel featuring an interactive calendar/slot selector, visual amenity breakdowns, sport filtering (cricket, football, badminton), and an intuitive checkout flow.",
        keyFeatures: [
          "Real-Time Slot Grid: Dynamic time-slot selector showing available, reserved, and premium hours.",
          "Mobile-First Booking Flow: Compact checkout designed for fast smartphone reservations.",
          "UPI Intent Integration: Direct payment trigger flow for quick transactions.",
          "Amenity & Ground Highlights: Clear breakdown of pitch dimensions, floodlighting, and parking.",
        ],
        technicalArchitecture: [
          "Client: React + Vite with Tailwind CSS for high performance and sub-second page loads.",
          "Data Layer: Supabase integration for backend storage and facility details.",
          "Deployment: Automated continuous delivery via Vercel.",
        ],
        challenges: [
          "Creating an effortless mobile booking flow with minimum taps from browsing to slot confirmation.",
          "Structuring UI components to handle multiple sport configurations (different durations and squad sizes).",
        ],
        outcome:
          "Delivered a fast, responsive live deployment showcasing real-world UX engineering for local sports facility operators.",
      },
    },
  ] as Project[],

  hackathons: [
    {
      id: "nasa-space-apps-2025",
      title: "NASA International Space Apps Challenge 2025",
      organization: "NASA Space Apps Challenge",
      date: "October 2025",
      category: "Global Hackathon",
      summary:
        "Awarded Certificate for outstanding participation and efforts to address real-world challenges faced on Earth and in space, collaborating on collaborative technology solutions.",
      driveUrl: "https://drive.google.com/file/d/1ZBKd3JxWgAtMCXao1zy0hz5Df3_2yDCG/view?usp=drive_link",
      badge: "Global Participation",
    },
    {
      id: "openai-nxtwave-buildathon",
      title: "OpenAI Academy × NxtWave Regional Buildathon – Maharashtra",
      organization: "NxtWave (in collaboration with OpenAI Academy)",
      date: "11 January 2026",
      category: "AI Buildathon",
      summary:
        "Certificate of Participation in the Maharashtra Regional Buildathon, exploring generative AI application development and product engineering.",
      driveUrl: "https://drive.google.com/file/d/1sSdrwfovoywtdn82Pdwxd5ngNqi04-sM/view?usp=drive_link",
      badge: "AI Product Engineering",
    },
    {
      id: "takeover-hackathon",
      title: "Takeover Hackathon",
      organization: "Takeover Community",
      date: "18 July 2026",
      category: "Engineering Sprint",
      summary:
        "Certificate of Participation for rapid software prototyping, technical collaboration, and problem-solving under competitive hackathon timelines.",
      driveUrl: "https://drive.google.com/file/d/1j90VRcs-e8GVmNHQ_lwsZ4q9I6zEZi5h/view?usp=drive_link",
      badge: "Rapid Prototyping",
    },
    {
      id: "adobe-university-hackathon",
      title: "Adobe University Hackathon",
      organization: "Adobe",
      date: "9 August 2026",
      category: "University Hackathon",
      summary:
        "Certificate of Participation representing Sanjay Ghodawat University in creative engineering and UI/UX problem-solving.",
      driveUrl: "https://drive.google.com/file/d/1a-Oytj3A9Eo7rDa1EGpAFK2ezjuoBtWO/view?usp=drive_link",
      badge: "Creative Engineering",
    },
    {
      id: "smart-india-hackathon-2026",
      title: "Smart India Hackathon 2026",
      organization: "Dept. of Computer Science & Engineering, Sanjay Ghodawat University",
      date: "12 September 2026",
      category: "National Initiative Hackathon",
      summary:
        "Certificate of Participation for building software solutions aimed at practical civic and engineering problem statements.",
      driveUrl: "https://drive.google.com/file/d/1ikrIe5YoYokGTpq1iupmh674H_dSS5se/view?usp=drive_link",
      badge: "Institutional Level",
    },
  ] as Milestone[],

  certificates: [
    {
      id: "nasa-space-apps",
      title: "NASA International Space Apps Challenge 2025",
      organization: "NASA Space Apps Challenge",
      credentialType: "Certificate of Participation",
      issueDate: "October 2025",
      imageSrc: "/certificates/nasa-space-apps.png",
      pdfSrc: "/certificates/nasa-space-apps.pdf",
      driveUrl: "https://drive.google.com/file/d/1ZBKd3JxWgAtMCXao1zy0hz5Df3_2yDCG/view?usp=drive_link",
      description:
        "Recognized for outstanding participation and dedication to addressing complex Earth and space science challenges through collaborative technology.",
      tags: ["Space Apps", "Global Hackathon", "Problem Solving"],
    },
    {
      id: "openai-nxtwave-buildathon",
      title: "OpenAI Academy × NxtWave Regional Buildathon",
      organization: "NxtWave",
      credentialType: "Certificate of Participation",
      issueDate: "11 January 2026",
      imageSrc: "/certificates/openai-nxtwave-buildathon.png",
      pdfSrc: "/certificates/openai-nxtwave-buildathon.pdf",
      driveUrl: "https://drive.google.com/file/d/1sSdrwfovoywtdn82Pdwxd5ngNqi04-sM/view?usp=drive_link",
      description:
        "Participated in the Maharashtra Regional Buildathon focused on generative AI systems, developer tooling, and product workflows.",
      disclaimer:
        "Certificates are issued by NxtWave and do not represent an official certification from OpenAI.",
      tags: ["Generative AI", "Buildathon", "Maharashtra"],
    },
    {
      id: "takeover-hackathon",
      title: "Takeover Hackathon",
      organization: "Takeover Community",
      credentialType: "Certificate of Participation",
      issueDate: "18 July 2026",
      imageSrc: "/certificates/takeover-hackathon.png",
      pdfSrc: "/certificates/takeover-hackathon.pdf",
      driveUrl: "https://drive.google.com/file/d/1j90VRcs-e8GVmNHQ_lwsZ4q9I6zEZi5h/view?usp=drive_link",
      description:
        "Certificate of Participation in a fast-paced development sprint testing technical problem solving, teamwork, and system design.",
      tags: ["Hackathon", "Rapid Development", "Full-Stack"],
    },
    {
      id: "adobe-university-hackathon",
      title: "Adobe University Hackathon",
      organization: "Adobe",
      credentialType: "Certificate of Participation",
      issueDate: "9 August 2026",
      imageSrc: "/certificates/adobe-university-hackathon.png",
      pdfSrc: "/certificates/adobe-university-hackathon.pdf",
      driveUrl: "https://drive.google.com/file/d/1a-Oytj3A9Eo7rDa1EGpAFK2ezjuoBtWO/view?usp=drive_link",
      description:
        "Awarded for participating in the university innovation hackathon conducted by Adobe at Sanjay Ghodawat University, Kolhapur.",
      tags: ["Adobe", "UI/UX", "University Hackathon"],
    },
    {
      id: "smart-india-hackathon",
      title: "Smart India Hackathon 2026",
      organization: "Dept. of CSE, Sanjay Ghodawat University",
      credentialType: "Certificate of Participation",
      issueDate: "12 September 2026",
      imageSrc: "/certificates/smart-india-hackathon.png",
      pdfSrc: "/certificates/smart-india-hackathon.pdf",
      driveUrl: "https://drive.google.com/file/d/1ikrIe5YoYokGTpq1iupmh674H_dSS5se/view?usp=drive_link",
      description:
        "Participated in the institutional internal hackathon round for Smart India Hackathon 2026, working on real-world engineering problem statements.",
      tags: ["Smart India Hackathon", "CSE Department", "Engineering"],
    },
  ] as Certificate[],

  leadership: [
    {
      role: "President",
      organization: "Entrepreneurship Club",
      period: "Current Role",
      description:
        "Leading student entrepreneurship initiatives across campus. Cultivating a culture where student developers transition from writing isolated code to designing, validating, and building real products.",
      highlights: [
        "Fosters cross-discipline collaboration between engineering, design, and management students",
        "Encourages student hackathon participation and hands-on product experimentation",
        "Organizes student tech sharing circles and builder showcases",
      ],
    },
    {
      role: "Student Leadership & Branch Involvement",
      organization: "Department of Artificial Intelligence & Data Science",
      period: "2024 – Present",
      description:
        "Actively involved in department student initiatives, technical events, peer learning sessions, and collaborative coding workshops.",
      highlights: [
        "Assists fellow students in getting started with Git, Python, and modern web tools",
        "Helps coordinate departmental technical events and hackathon teams",
        "Bridges academic theory with hands-on project building",
      ],
    },
  ] as LeadershipItem[],

  contact: {
    heading: "Let's build something useful.",
    supportingCopy:
      "I'm always interested in learning, collaborating, building products, and exploring opportunities where software and AI can solve meaningful problems.",
    email: "rathodhemantsuresh1983@gmail.com",
    githubUrl: "https://github.com/hemantsureshrathod-dev",
    linkedinUrl: "https://www.linkedin.com/in/hemantsureshrathod",
    availability: "Available for Internship Opportunities (Summer & Ongoing)",
  },
};
