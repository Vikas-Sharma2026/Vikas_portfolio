export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  bioShort: string;
  currentMission: string;
  college: string;
  course: string;
  currentYear: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface AboutPoint {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export type SkillProficiency = 'Learning' | 'Familiar' | 'Working Knowledge';

export interface SkillItem {
  name: string;
  level: SkillProficiency;
  category: 'Programming' | 'Web' | 'Database' | 'Tools';
  description: string;
  focus: string;
}

export interface WorkflowStep {
  step: number;
  label: string;
  title: string;
  description: string;
  icon: string;
  role: 'User' | 'System' | 'Admin';
}

export interface ProjectItem {
  id: string;
  missionNumber: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  technologies: string[];
  shortDescription: string;
  adminSystemFeatures?: string[];
  securityFeatures?: string[];
  workflow?: WorkflowStep[];
  image: string;
  imageAlt: string;
  links: {
    github: string;
    liveDemo: string;
  };
  featured: boolean;
}

export interface JourneyMilestone {
  id: string;
  stepNumber: number;
  title: string;
  icon: string;
  dateLabel: string;
  description: string;
  keyTakeaway: string;
  status: 'Completed' | 'In Progress' | 'Continuous';
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  subIssuer?: string;
  dateLabel: string;
  credentialCode?: string;
  grade?: string;
  team?: string;
  signatories?: string;
  skillsCovered: string[];
  description: string;
  category: 'All' | 'Internship & AI' | 'Hackathon' | 'Coursework';
  badgeColor: string;
  accentBorder: string;
}

export const PORTFOLIO_DATA: {
  profile: ProfileData;
  aboutPoints: AboutPoint[];
  skills: SkillItem[];
  projects: ProjectItem[];
  journey: JourneyMilestone[];
  certificates: CertificateItem[];
} = {
  profile: {
    name: "Vikas Sharma",
    role: "BTech CSE Student (3rd Year) | Aspiring Developer",
    tagline: "Learn. Build. Experiment. Create.",
    bioShort: "3rd-year BTech CSE student at School of Management Sciences, Lucknow. Passionate about software development, databases, and building robust campus solutions.",
    currentMission: "Building impactful software, advancing in Python & SQL engineering, and competing in hackathons.",
    college: "School of Management Sciences, Lucknow",
    course: "BTech [CSE]",
    currentYear: "3rd Year",
    email: "vikassharma22911@gmail.com",
    github: "https://github.com/Vikas-Sharma2026",
    linkedin: "https://www.linkedin.com/in/vikas-sharma-0b548b344"
  },

  aboutPoints: [
    {
      id: "academic",
      title: "3rd Year BTech CSE Student",
      description: "Pursuing Bachelor of Technology in Computer Science & Engineering at School of Management Sciences, Lucknow, focusing on data structures, algorithms, and system design.",
      iconName: "GraduationCap"
    },
    {
      id: "software-dev",
      title: "Software Development",
      description: "Dedicated to writing clean, modular, and maintainable code with a strong emphasis on solving practical challenges through software.",
      iconName: "Code2"
    },
    {
      id: "databases",
      title: "Programming & Databases",
      description: "Working knowledge of Python scripting and relational SQL databases, with expertise in schema modeling, normalization, and complex querying.",
      iconName: "Database"
    },
    {
      id: "ai-workflows",
      title: "AI & Machine Learning",
      description: "Completed an 8-week AI-ML Virtual Internship supported by Google for Developers & AICTE (Grade O Outstanding), plus Google Cloud Generative AI Studio certification.",
      iconName: "Sparkles"
    },
    {
      id: "practical-projects",
      title: "Real-World Projects",
      description: "Creator of the Lost & Found Management System — an automated campus asset recovery platform with multi-stage verification and administrative oversight.",
      iconName: "Rocket"
    },
    {
      id: "hackathons",
      title: "Hackathons & Team Leadership",
      description: "Represented Team 'CODE STORM' in the intensive 3-day Hackathon-2025 at SMS Lucknow in association with Team Parivartan and Institution's Innovation Council.",
      iconName: "Trophy"
    }
  ],

  skills: [
    // Programming
    {
      name: "Python",
      level: "Working Knowledge",
      category: "Programming",
      description: "Algorithmic logic, data structures, automation scripting, and foundational AI/ML implementations.",
      focus: "Logic, data structures, and script automation"
    },
    {
      name: "JavaScript",
      level: "Working Knowledge",
      category: "Programming",
      description: "Modern ES6+ syntax, asynchronous programming, DOM manipulation, and interactive application logic.",
      focus: "Interactive web logic and event handling"
    },
    // Web
    {
      name: "HTML",
      level: "Working Knowledge",
      category: "Web",
      description: "Semantic HTML5 structure, accessible layouts, forms, and strict document hierarchy.",
      focus: "Accessible layouts and structure"
    },
    {
      name: "CSS",
      level: "Familiar",
      category: "Web",
      description: "Responsive layouts, Flexbox, Grid, glassmorphism, and modern animated styling.",
      focus: "Responsive UI and clean styling"
    },
    // Database
    {
      name: "SQL",
      level: "Working Knowledge",
      category: "Database",
      description: "Relational database modeling, complex joins, subqueries, table indexing, and data integrity.",
      focus: "Schema design, joins, and transactional data"
    },
    // Tools
    {
      name: "Git",
      level: "Working Knowledge",
      category: "Tools",
      description: "Distributed version control, branching workflows, commit discipline, and conflict resolution.",
      focus: "Source code versioning and history tracking"
    },
    {
      name: "GitHub",
      level: "Working Knowledge",
      category: "Tools",
      description: "Remote repository management, open-source collaboration, pull requests, and project hosting.",
      focus: "Code hosting and collaborative engineering"
    }
  ],

  projects: [
    {
      id: "mission-01-lost-and-found",
      missionNumber: "MISSION #01",
      title: "Lost & Found Management System",
      tagline: "Automated Campus Asset Recovery & Verification Platform",
      shortDescription: "A secure digital Lost & Found platform for campus members to report lost and found items, discover potential matches, and verify ownership through an administrative claim protocol.",
      problem: "Students frequently lose valuable personal items across campus (ID badges, calculators, books, tech gadgets) and suffer from low recovery rates, lack of centralized reporting, and fraudulent claim risks on chaotic noticeboards.",
      solution: "A centralized, tamper-resistant platform that captures structured lost/found reports, matches reported attributes, requires multi-point security verification before release, and provides administrators with complete verification control.",
      technologies: ["Python", "SQL", "JavaScript", "HTML", "CSS"],
      adminSystemFeatures: [
        "Review all active lost and found reports with timestamp and location filtering",
        "Inspect potential match candidates and cross-reference submitted ownership proofs",
        "Approve or reject ownership claims with auditable verification comments",
        "Mark verified items as officially returned to finalize the custody chain",
        "Flag and purge inappropriate, duplicate, or spam listings immediately"
      ],
      securityFeatures: [
        "Protected administrative console with role-based access enforcement",
        "Students maintain full sovereign control over their own submissions and claims",
        "Private ownership verification prompts (serial numbers, hidden identifiers) hidden from public view"
      ],
      workflow: [
        {
          step: 1,
          label: "01",
          title: "LOST ITEM",
          description: "Student logs an item with category, timestamp, location, and identifiable marks.",
          icon: "FileQuestion",
          role: "User"
        },
        {
          step: 2,
          label: "02",
          title: "POTENTIAL MATCH",
          description: "Platform correlates newly reported found articles against active lost queries.",
          icon: "Search",
          role: "System"
        },
        {
          step: 3,
          label: "03",
          title: "CLAIM",
          description: "Owner identifies a candidate match and submits a formal recovery claim.",
          icon: "ShieldAlert",
          role: "User"
        },
        {
          step: 4,
          label: "04",
          title: "VERIFICATION",
          description: "User submits private proof (unique scratches, serial numbers, password proof).",
          icon: "Key",
          role: "User"
        },
        {
          step: 5,
          label: "05",
          title: "ADMIN REVIEW",
          description: "Administrator reviews verification data to prevent fraudulent handoffs.",
          icon: "UserCheck",
          role: "Admin"
        },
        {
          step: 6,
          label: "06",
          title: "APPROVE",
          description: "Admin approves claim, generates a secure pickup token and notifies parties.",
          icon: "CheckCircle2",
          role: "Admin"
        },
        {
          step: 7,
          label: "07",
          title: "RETURNED",
          description: "Item handed over, receipt confirmed in system, and case archived cleanly.",
          icon: "PackageCheck",
          role: "System"
        }
      ],
      image: "",
      imageAlt: "Lost and Found Management System Interface Preview",
      links: {
        github: "https://github.com/Vikas-Sharma2026",
        liveDemo: "https://github.com/Vikas-Sharma2026"
      },
      featured: true
    }
  ],

  journey: [
    {
      id: "journey-1",
      stepNumber: 1,
      title: "BTech CSE at SMS Lucknow",
      icon: "GraduationCap",
      dateLabel: "2023 - Present",
      description: "Enrolled in Bachelor of Technology in Computer Science & Engineering at School of Management Sciences, Lucknow, building solid foundations in computer architecture, discrete math, and algorithms.",
      keyTakeaway: "Understanding computing from the ground up: analytical thinking, problem abstraction, and hardware-software synergy.",
      status: "In Progress"
    },
    {
      id: "journey-2",
      stepNumber: 2,
      title: "Python Basic To Advance Course",
      icon: "Terminal",
      dateLabel: "Completed Dec 2025",
      description: "Completed rigorous coursework in Python covering core syntax, data structures, functional paradigms, and object-oriented architecture.",
      keyTakeaway: "Mastering Python algorithmic logic and writing maintainable, reusable scripts.",
      status: "Completed"
    },
    {
      id: "journey-3",
      stepNumber: 3,
      title: "Relational Databases & SQL Modeling",
      icon: "Database",
      dateLabel: "Completed 2025",
      description: "Mastered relational schema architecture, normal forms, primary/foreign key relationships, and writing structured SQL queries.",
      keyTakeaway: "Data persistence, query optimization, and structuring reliable backend data models.",
      status: "Completed"
    },
    {
      id: "journey-4",
      stepNumber: 4,
      title: "Hackathon-2025 (Team CODE STORM)",
      icon: "Trophy",
      dateLabel: "October 2025",
      description: "Represented Team CODE STORM in the 3-day Hackathon-2025 at SMS Lucknow organized by the Dept of CSE & Institution's Innovation Council.",
      keyTakeaway: "Shipping functional prototypes under intense time constraints and collaborating effectively in an engineering team.",
      status: "Completed"
    },
    {
      id: "journey-5",
      stepNumber: 5,
      title: "Google Cloud GenAI Studio & Mastermind",
      icon: "Cpu",
      dateLabel: "October 2025",
      description: "Earned certification in Google Cloud Generative AI Studio (Simplilearn code: 9222227) and completed the Outskill Generative AI Mastermind.",
      keyTakeaway: "Leveraging cutting-edge generative tools and prompt architectures as multipliers for software engineering.",
      status: "Completed"
    },
    {
      id: "journey-6",
      stepNumber: 6,
      title: "Built Lost & Found Management System",
      icon: "Rocket",
      dateLabel: "2025 - 2026",
      description: "Architected a full campus asset recovery web application with structured reporting, multi-point verification, and an administrative approval console.",
      keyTakeaway: "Building complete products: handling edge cases, state transitions, security, and intuitive UX.",
      status: "Completed"
    },
    {
      id: "journey-7",
      stepNumber: 7,
      title: "AI-ML Virtual Internship (Google for Developers)",
      icon: "Sparkles",
      dateLabel: "April - June 2026",
      description: "Successfully completed an intensive 8-week AI-ML Virtual Internship supported by Google for Developers India Edu Program & AICTE-EduSkills, awarded Outstanding Grade O.",
      keyTakeaway: "Deepening machine learning concepts, data pipelines, and developer ecosystem practices.",
      status: "Completed"
    },
    {
      id: "journey-8",
      stepNumber: 8,
      title: "3rd Year CSE: Continuous Engineering Evolution",
      icon: "Target",
      dateLabel: "Current Milestone",
      description: "Active 3rd-year BTech student expanding full-stack engineering depth, system design, and building production-ready projects.",
      keyTakeaway: "Lifelong commitment to curiosity: Learn. Build. Experiment. Create.",
      status: "Continuous"
    }
  ],

  certificates: [
    {
      id: "cert-google-aiml",
      title: "Certificate of Virtual Internship — AI-ML (8-Weeks)",
      issuer: "Ministry of Education & AICTE",
      subIssuer: "Supported By Google for Developers (India Edu Program) & EduSkills",
      dateLabel: "April - June 2026",
      grade: "Grade O (Outstanding: 90-100)",
      signatories: "Karthik Padmanabhan (Developer Ecosystem Lead MENA & India, Google), Dr. Buddha Chandrasekhar (CCO, AICTE), Shubhajit Jagadev (CEO, EduSkills)",
      skillsCovered: ["Artificial Intelligence", "Machine Learning", "Python for AI", "Data Pipelines", "Developer Ecosystem"],
      description: "Awarded to Vikas Sharma, School of Management Sciences, Lucknow for successfully completing the 8-week AI-ML Virtual Internship with highest honor Grade O (Outstanding).",
      category: "Internship & AI",
      badgeColor: "bg-emerald-950/60 text-emerald-300 border-emerald-700/50",
      accentBorder: "border-emerald-500/40"
    },
    {
      id: "cert-sms-hackathon",
      title: "Hackathon-2025 Certificate of Participation",
      issuer: "Department of CSE, School of Management Sciences, Lucknow",
      subIssuer: "In Association with Team Parivartan & Institution's Innovation Council",
      dateLabel: "9th - 11th October 2025",
      team: "Team CODE STORM",
      credentialCode: "Ref: SMS/CSE/HCK/2025/45",
      signatories: "Dr. Niyati Gaur (Coordinator), Mr. Sunit Kumar Mishra (HOD, CSE), Dr. Dharmendra Singh (Associate Director)",
      skillsCovered: ["Competitive Hackathon", "Team Code Storm", "Rapid Engineering", "Problem Solving", "Full-Stack Prototyping"],
      description: "Awarded to Vikas Sharma, B.Tech CSE, representing Team CODE STORM for actively participating in the continuous 3-day Hackathon-2025 at SMS Lucknow.",
      category: "Hackathon",
      badgeColor: "bg-amber-950/60 text-amber-300 border-amber-700/50",
      accentBorder: "border-amber-500/40"
    },
    {
      id: "cert-google-genai",
      title: "Declaration of Completion — Introduction to Generative AI Studio",
      issuer: "Powered by Google Cloud",
      subIssuer: "simplilearn SkillUP",
      dateLabel: "23rd October 2025",
      credentialCode: "Certificate Code: 9222227",
      signatories: "Krishna Kumar (CEO, Simplilearn)",
      skillsCovered: ["Generative AI Studio", "Google Cloud", "Prompt Design", "LLM Integration", "Cloud AI Workflows"],
      description: "Certified that Vikas Sharma successfully completed the Introduction to Generative AI Studio online course demonstrating initiative and dedication to deepening modern AI skills.",
      category: "Internship & AI",
      badgeColor: "bg-sky-950/60 text-sky-300 border-sky-700/50",
      accentBorder: "border-sky-500/40"
    },
    {
      id: "cert-python-saumya",
      title: "Certificate of Appreciation — Python Basic To Advance Course",
      issuer: "Saumya Singh",
      subIssuer: "Comprehensive Python Curriculum",
      dateLabel: "8th December 2025",
      signatories: "Saumya Singh (Educator)",
      skillsCovered: ["Python Fundamentals", "Object-Oriented Programming", "Data Structures", "Algorithmic Logic", "Modular Scripting"],
      description: "Awarded to Vikas Sharma in recognition of successful completion of the Python Basic To Advance Course, acknowledging hard work and dedication.",
      category: "Coursework",
      badgeColor: "bg-cyan-950/60 text-cyan-300 border-cyan-700/50",
      accentBorder: "border-cyan-500/40"
    },
    {
      id: "cert-outskill-genai",
      title: "Certificate of Completion — Generative AI Mastermind",
      issuer: "Outskill",
      subIssuer: "Generative AI Mastermind Program",
      dateLabel: "Completed 2025",
      signatories: "Vaibhav Sisinty (Founder, Outskill)",
      skillsCovered: ["Generative AI Tools", "AI Workflow Automation", "AI Productivity", "Prompt Architecture", "Modern Dev Tooling"],
      description: "Proudly presented to Vikas Sharma for successfully completing the hands-on Generative AI Mastermind program exploring next-generation artificial intelligence workflows.",
      category: "Internship & AI",
      badgeColor: "bg-emerald-950/60 text-emerald-300 border-emerald-700/50",
      accentBorder: "border-emerald-500/40"
    }
  ]
};
