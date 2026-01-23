import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code2, Database, Layout, Terminal } from 'lucide-react';

export const portfolioData = {
    personal: {
        name: "Samarth Garg",
        headline: "Aspiring Software Development Engineer • C++ • Python • Data Science",
        location: "Ghaziabad, Uttar Pradesh",
        email: "samarthgarg14@gmail.com",
        phone: "+91 9650984465",
        github: "https://github.com/Samarthgarg14",
        linkedin: "https://www.linkedin.com/in/samarth-garg-997235240/",
        instagram: "https://www.instagram.com/samarth_garg14/",
        whatsapp: "https://wa.me/919650984465",
        leetcode: "https://leetcode.com/u/KfBemvPfpA/",
        resume: "https://drive.google.com/file/d/1yMOQYL0qNeKDYjs5JrtAT3Xf3DfDIL9L/view?usp=drive_link",
        stats: {
            cgpa: "8.62",
            projects: "4+",
            skills: "C++ | Python | Power BI | DSA"
        }
    },
    hero: {
        title: "Hi, I'm Samarth Garg",
        subtitle: "B.Tech CSE | 3rd Year | Aspiring SDE",
        rotatingText: [
            "AI-backed tools",
            "Data dashboards",
            "Scalable systems",
            "Real-world products",
            "Power BI insights"
        ]
    },
    about: "Strong in C/C++, Python, DSA, and OOPS. Builds AI tools, dashboards, and data-powered applications. Interested in scalable systems and internships. Loves problem-solving and real-world impact.",
    skills: {
        technical: [
            { name: "C / C++", icon: Code2, category: "Languages" },
            { name: "Python", icon: Terminal, category: "Languages" },
            { name: "HTML / CSS", icon: Layout, category: "Tools" },
            { name: "Git / GitHub", icon: Github, category: "Tools" },
            { name: "Power BI / Excel", icon: Database, category: "Tools" },
            { name: "NumPy / Pandas", icon: Database, category: "Libraries" },
            { name: "Matplotlib / Seaborn", icon: Layout, category: "Libraries" },
            { name: "Scikit-learn", icon: Code2, category: "Libraries" },
            { name: "DSA / OOP", icon: Terminal, category: "Core" }
        ],
        soft: [
            "Problem-Solving", "Strategic Thinking", "Team Collaboration", "Leadership", "Communication"
        ]
    },
    projects: [
        {
            id: 1,
            title: "NYC Real Estate Market Intelligence Dashboard",
            category: "Dashboards",
            date: "Dec 2025",
            summary: "Interactive Power BI dashboard analyzing NYC real estate sales across boroughs.",
            details: "Built an interactive Power BI dashboard analyzing NYC real estate sales across boroughs with sales value, median prices, transaction trends. Feature engineering: Price/SqFt, building age groups, price bands. Visuals: KPI cards, trend charts, maps, tree maps, slicers, ZIP-level hotspots.",
            tech: ["Excel", "Power Query", "Power BI"],
            links: {
                github: "https://github.com/Samarthgarg14/NYC-Real-estate-market-analytics-dashboard",
                live: "https://app.powerbi.com/links/eFhcLq41sx?ctid=e14e73eb-5251-4388-8d67-8f9f2e2d5a46&pbi_source=linkShare"
            }
        },
        {
            id: 2,
            title: "Sleep Detox Optimizer",
            category: "AI/Web",
            date: "May 2025",
            summary: "AI-driven sleep detox insights with secure data intake, featuring personalized adaptive suggestions that evolve with user behavior patterns.",
            details: "AI-driven sleep detox insights with secure data intake and adaptive suggestions evolving with user behavior. Deployed on Render.",
            tech: ["Python", "Flask", "Gemini AI", "JS"],
            links: {
                github: "https://github.com/Samarthgarg14/Sleep-Detox-Optimizer",
                live: "https://sleep-detox-optimizer.onrender.com/"
            }
        },
        {
            id: 3,
            title: "COVID-19 Data Analysis",
            category: "Data Analysis",
            date: "Apr 2025",
            summary: "ZIP-level COVID analysis with preprocessing and geo-mapping.",
            details: "ZIP-level COVID analysis with preprocessing, normalization, correlation, outlier detection, geo-mapping, trend insights.",
            tech: ["Python", "Pandas", "Seaborn"],
            links: {
                github: "https://github.com/Samarthgarg14/covid-data-analysis",
                live: null
            }
        },
        {
            id: 4,
            title: "Lok Sabha Elections 2024 Dashboard",
            category: "Dashboards",
            date: "2024",
            summary: "Interactive Excel dashboard with KPIs and constituency insights.",
            details: "Interactive Excel dashboard with KPIs, filters, constituency insights.",
            tech: ["Excel", "Power Query"],
            links: {
                github: "https://github.com/Samarthgarg14/Lok-Sabha-Election-2024-Excel-Dashboard",
                live: null
            }
        }
    ],
    education: [
        {
            school: "Lovely Professional University",
            degree: "B.Tech CSE",
            grade: "CGPA: 8.62",
            year: "Aug 2023 – Present"
        },
        {
            school: "Bharat National Public School",
            degree: "Class 12th",
            grade: "77.6%",
            year: "Apr 2022 – Mar 2023"
        },
        {
            school: "Happy English School",
            degree: "Class 10th",
            grade: "94.2%",
            year: "Apr 2020 – Mar 2021"
        }
    ],
    certifications: [
        { title: "Adobe India Hackathon", issuer: "Unstop", date: "Jul 2025", link: "https://drive.google.com/file/d/19Sj3vV7C1uzBKbYKTV5Hnn2_SbiifNBH/view?usp=drive_link" },
        { title: "Cloud Computing", issuer: "NPTEL (IIT Kharagpur)", date: "Apr 2025", link: "https://drive.google.com/file/d/1QF-EI1W9cOsALd2lAQwPAs0-uGLE7rYG/view?usp=drive_link" },
        { title: "CyberSleuth Ethical Hacking", issuer: "ETA Club LPU", date: "Sep 2023", link: "https://drive.google.com/file/d/1JBEyUyjnI9vFRj6W7jkfsHI2W-uobdgX/view?usp=drive_link" }
    ],
    training: [
        {
            title: "AI-Powered NLP",
            company: "AlgoTutor",
            date: "Jun 2025 – Jul 2025",
            desc: "NLP fundamentals: cleaning, tokenization, stemming/lemmatization, embeddings, sentiment analysis. Built a News Summarizer project using Python + Generative AI models.",
            link: "https://drive.google.com/file/d/1dem8cMqeJ3VKRUY-2ahOYp_mSOj7dUy5/view?usp=drive_link"
        }
    ],
    extracurricular: [
        {
            role: "Awareness Program Coordinator",
            org: "Sparsh Society",
            desc: "Led awareness drives + volunteer initiatives."
        },
        {
            role: "Participant",
            org: "Hack Quest 24-Hour CTF",
            desc: "Solved cybersecurity CTF challenges (Concoction 2024)."
        }
    ]
};
