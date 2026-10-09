export const portfolioData = {
    personal: {
        name: "Mohammed Ejaz K.A",
        shortName: "EJAZ",
        role: "MERN Stack Developer",
        email: "mejaz8355@gmail.com",

        // Shown on the Contact button
        phone: "+91 89431 40430",
        // Digits only, with country code, used for the wa.me link
        whatsapp: "918943140430",

        location: "Kerala, India",
        availability: "Open to opportunities",

        // Put real URLs here. While these are empty the links stay hidden.
        github: "https://github.com/Mohammed-Ejaz",
        linkedin: "https://www.linkedin.com/in/mohammed-ejaz-k-a-b35513300/",
    },

    hero: {
        eyebrow: "MERN STACK DEVELOPER",
        titleLines: ["BUILDING", "MODERN DIGITAL", "EXPERIENCES."],
        description:
            "I build polished, maintainable web applications with React, Node.js, MongoDB and modern component architecture.",
    },

    about: {
        kicker: "ABOUT",
        title: "Turning complex applications into clean, scalable experiences.",
        description:
            "Specialized MERN Stack Developer with a focus on architectural refactoring and codebase modernization. Experienced in moving legacy global state toward lightweight, modular custom-hook architectures, building high-performance interfaces with enterprise design systems, and keeping code reliable with Jest-driven unit testing.",
    },

    metrics: [
        {
            value: "30%",
            label: "LESS BOILERPLATE",
            description:
                "Reported reduction across multiple enterprise-grade modules.",
        },
        {
            value: "5+",
            label: "MASTER MODULES",
            description:
                "Data-intensive modules standardized with a design system.",
        },
        {
            value: "95%",
            label: "TEST COVERAGE",
            description:
                "Achieved across critical business logic services with Jest.",
        },
    ],

    experience: [
        {
            period: "10/2025 — 04/2026",
            role: "React Developer Intern",
            company: "MassimoPro",
            location: "Bangalore, India (Remote)",
            highlights: [
                "Migrated legacy Redux global state to modular custom hooks, achieving a 30% reduction in boilerplate code across enterprise modules.",
                "Standardized 5+ data-intensive master modules using the Innovaccer Design System (MDS), ensuring UI consistency.",
                "Developed unit test suites with Jest and React Testing Library, achieving 95% test coverage on critical business logic.",
                "Decoupled complex form handling and modal logic into reusable custom hooks, accelerating developer feature turnaround.",
            ],
        },
        {
            period: "05/2024 — 12/2024",
            role: "MEARN Stack Intern",
            company: "Luminar Techno Lab",
            location: "Ernakulam, India",
            highlights: [
                "Developed responsive full-stack applications utilizing MongoDB, Express.js, React, and Node.js (MERN).",
                "Integrated third-party REST APIs and authentication workflows, optimizing data fetching and rendering efficiency.",
                "Performed cross-browser testing and debugging, improving overall UI responsiveness and user experience.",
            ],
        },
    ],

    projects: [
        {
            number: "01",
            title: "College OLX",
            category: "Campus Marketplace Application",
            description:
                "An Android app for buying and selling goods and study materials within the campus community, with user authentication, item categories and search.",
            technologies: ["Android", "Authentication", "Search", "Categories"],
            features: [
                "Peer-to-peer marketplace application enabling campus-wide commerce",
                "User authentication and profile management",
                "Item categorization and filtering",
                "Real-time search functionality",
            ],
        },
        {
            number: "02",
            title: "ClientSync",
            category: "Client Onboarding SaaS Platform",
            description:
                "A full-stack platform that lets freelancers send secure, branded onboarding links to clients and collect structured project data — replacing scattered email threads with one clean intake flow.",
            technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "Framer Motion"],
            features: [
                "Dynamic multi-step client intake forms and real-time dashboard with auto-saving and Framer Motion animations",
                "REST API built with Node.js & Express integrated with MongoDB (Mongoose) for schema-driven data persistence",
                "Secured with JWT authentication, bcrypt password hashing, CORS protection, and API rate limiting",
                "Client-specific expiring intake links and structured data export",
            ],
            github: "https://github.com/Mohammed-Ejaz/ClientSync",
            live: "https://client-sync-pi.vercel.app/",
        },
        {
            number: "03",
            title: "EquiShare",
            category: "Group Expense Settlement Platform",
            description:
                "A full-stack web application to automate shared expense tracking and roommate settlements, replacing manual math with a secure ledger, smart debt simplification, and OCR receipt scanning.",
            technologies: [
                "React",
                "Vite",
                "Tailwind CSS",
                "Node.js",
                "Express.js",
                "JWT",
                "Tesseract.js",
                "Framer Motion",
            ],
            features: [
                "Interactive React & Tailwind dashboard to manage group members, log shared expenses, and track real-time balances",
                "REST API built with Node.js and Express.js featuring JWT authentication and bcrypt encryption",
                "Custom debt simplification algorithm programmed in JavaScript to minimize transaction count",
                "Optical character recognition (OCR) with Tesseract.js for automatic receipt parsing and bill splitting",
            ],
            github: "https://github.com/Mohammed-Ejaz/equishare",
            live: "https://equishare-livid.vercel.app/",
        },
    ],

    skills: {
        frontend: [
            "React.js",
            "JavaScript",
            "HTML5",
            "CSS",
            "Tailwind CSS",
            "Framer Motion",
            "Bootstrap",
            "Custom Hooks",
        ],
        backend: ["Node.js", "Express.js", "MongoDB"],
        testing: ["Jest", "React Testing Library"],
        tools: ["Git", "GitHub", "GitFlow", "Trello"],
        soft: [
            "Communication",
            "Creativity",
            "Time Management",
            "Team Collaboration",
        ],
    },

    education: [
        {
            period: "2021 — 2024",
            title: "Bachelor of Computer Application [B.C.A]",
            institution: "Calicut University",
            location: "Thrissur, India",
            description:
                "Foundation in computer science, software development and information technology, with exposure to programming languages, data structures and software engineering principles.",
        },
        {
            period: "05/2024 — 12/2024",
            title: "MEARN Stack Web Development (Certification)",
            institution: "Luminar Techno Lab",
            location: "Ernakulam, India",
            description:
                "Hands-on training and certification in MongoDB, Express.js, React.js and Node.js with emphasis on scalable, secure and user-friendly web applications.",
        },
    ],

    languages: ["Malayalam", "English"],
};