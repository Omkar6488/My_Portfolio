export interface Project {
  title: string;
  tagline: string;
  description: string[];
  techStack: string[];
  year: string;
  links: {
    live?: string;
    github?: string;
  };
  featured?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  bullets: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  score: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

export interface Achievement {
  title: string;
  organizer: string;
  scope?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    headline: string;
    subheadline: string;
    preKicker: string;
    roles: string[];
    values: string[];
    bio: string;
    location: string;
    locationBadge: string;
    email: string;
    phone: string;
    socials: {
      github: string;
      linkedin: string;
      handle: string;
    };
  };
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: {
    category: string;
    items: string[];
  }[];
  achievements: Achievement[];
  certifications: Certification[];
  leadership: {
    role: string;
    organization: string;
    period: string;
  }[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Omkar More",
    headline: "OMKAR MORE",
    preKicker: "A HUMAN PERSPECTIVE ON TECHNOLOGY",
    subheadline: "Building intelligent products and digital experiences that solve real world problems.",
    roles: ["ENGINEER", "DEVELOPER", "BUILDER"],
    values: ["TECHNOLOGY", "CREATIVITY", "REAL IMPACT"],
    bio: "Computer Science & Design undergraduate with hands-on experience in knowledge-graph systems and the MERN stack, using React, Node.js, Neo4j, GraphRAG, and LLMs. Top 10 finalist among 180+ teams at IDS Hackathon and top 30 of 200+ teams at Blockverse Hackathon.",
    location: "Nashik, Maharashtra",
    locationBadge: "BASED IN INDIA • THINKING BEYOND",
    email: "omkarmore6488@gmail.com",
    phone: "+91 9552198074",
    socials: {
      github: "https://github.com/Omkar6488",
      linkedin: "https://www.linkedin.com/in/omkarmore01",
      handle: "omkarmore_01",
    },
  },
  education: [
    {
      institution: "K.K Wagh Institute Of Engineering Education and Research, Nashik",
      degree: "BTech in Computer Science & Design",
      period: "2023 – 2027",
      score: "CGPA: 8.70",
    },
    {
      institution: "G.E.S. H.A.L. High School & Jr College, Nashik",
      degree: "Maharashtra State Board of Higher Secondary Education (12th)",
      period: "2020 – 2021",
      score: "84.67%",
    },
    {
      institution: "Santosh Shramik Madyamik Vidyalaya, Babhulgaon, Nashik",
      degree: "Maharashtra State Board (10th)",
      period: "2022 – 2023",
      score: "89.80%",
    },
  ],
  experience: [
    {
      role: "Game Developer Intern",
      company: "Anstric Games Private Limited",
      location: "Hybrid",
      period: "Feb 2026 – Aug 2027",
      type: "Internship",
      bullets: [
        "Engineered gameplay mechanics and player interaction systems in C# (Unity) as part of a development team.",
        "Built reusable UI components and optimized collision handling for consistent frame performance.",
        "Diagnosed and resolved gameplay and performance issues through systematic testing and debugging.",
      ],
    },
  ],
  projects: [
    {
      title: "LexisGraph",
      tagline: "AI Legal Compliance Platform",
      year: "2026",
      featured: true,
      description: [
        "Built a Neo4j-based legal knowledge graph using GraphRAG to model entities, obligations, and relationships for compliance analysis.",
        "Implemented NLP pipelines for named entity recognition and relation extraction, and designed a graph-powered retrieval workflow to improve contextual legal search and compliance gap analysis.",
      ],
      techStack: ["Python", "Neo4j", "GraphRAG", "LLMs", "FastAPI"],
      links: {
        live: "#",
        github: "https://github.com/Omkar6488",
      },
    },
    {
      title: "Urja Sync",
      tagline: "Renewable Energy Management Platform",
      year: "2025",
      featured: true,
      description: [
        "Built a full-stack MERN dashboard solo, consolidating monitoring for 4 renewable source types (solar, wind, hydro, biomass) into a single platform.",
        "Designed JWT-based authentication with role-based access control and a MongoDB schema/REST API supporting full CRUD plant management.",
      ],
      techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT"],
      links: {
        live: "#",
        github: "https://github.com/Omkar6488",
      },
    },
    {
      title: "NGO – Student Collaboration Platform",
      tagline: "Community Impact & Volunteer Dispatch",
      year: "2026",
      featured: true,
      description: [
        "Built a full-stack MERN platform with three distinct auth roles (student, NGO, admin), each with a dedicated dashboard.",
        "Developed the complete event lifecycle – NGOs create/manage campaigns, students discover, apply, and track application status in real time.",
      ],
      techStack: ["React.js", "Node.js", "MongoDB", "Express.js"],
      links: {
        live: "#",
        github: "https://github.com/Omkar6488",
      },
    },
    {
      title: "OrbitIQ",
      tagline: "Space News & Astronomy Mobile Application",
      year: "2026",
      featured: false,
      description: [
        "Built a space news mobile application using React Native (Expo) with a responsive, native-feel interface.",
        "Integrated multiple public space APIs (Spaceflight News API, NASA APOD) to aggregate rocket launches and mission updates into one feed.",
      ],
      techStack: ["React Native", "Expo", "React Navigation", "AsyncStorage", "Spaceflight APIs"],
      links: {
        live: "#",
        github: "https://github.com/Omkar6488",
      },
    },
  ],
  skills: [
    {
      category: "Languages",
      items: ["C++", "C#", "JavaScript", "Python"],
    },
    {
      category: "Web & Frontend",
      items: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
      category: "Backend & Systems",
      items: ["Node.js", "Express.js", "FastAPI", "REST API Design"],
    },
    {
      category: "Databases & Graph",
      items: ["Neo4j (Graph DB)", "MongoDB", "PostgreSQL", "MySQL"],
    },
    {
      category: "AI, RAG & Specialized",
      items: ["GraphRAG", "RAG Pipelines", "LLMs", "Unity Engine", "Git/GitHub"],
    },
    {
      category: "CS Fundamentals",
      items: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems"],
    },
  ],
  achievements: [
    {
      title: "Top 10 Finalist among 180+ teams",
      organizer: "IDS Hackathon organized by Yi (Young Indians), Nashik",
    },
    {
      title: "Top 30 Finalist among 200+ teams",
      organizer: "Blockverse Hackathon organized by SNJB college, Chandwad",
    },
    {
      title: "Selected twice at Institute Level",
      organizer: "Smart India Hackathon (SIH)",
    },
    {
      title: "Internship Selection via Eclipse Competition",
      organizer: "DESOC Club",
    },
    {
      title: "Team Leader, Game Arena",
      organizer: "Led team to deliver 3 complete games through project planning & task allocation",
    },
  ],
  certifications: [
    {
      title: "The Complete Full-Stack Web Development Bootcamp",
      issuer: "Udemy",
      date: "Feb 2026",
    },
    {
      title: "AWS Academy Cloud Foundations",
      issuer: "AWS Academy",
      date: "Mar 2026",
    },
    {
      title: "React Native",
      issuer: "Infosys Springboard",
      date: "Apr 2026",
    },
    {
      title: "Unity Essentials Pathway",
      issuer: "Unity Technologies",
      date: "Nov 2025",
    },
  ],
  leadership: [
    {
      role: "Core Committee Member",
      organization: "CSI KKWIEER",
      period: "Jul 2025 – Present",
    },
    {
      role: "Internshala Student Partner",
      organization: "Internshala",
      period: "Aug 2025 – Nov 2025",
    },
  ],
};

