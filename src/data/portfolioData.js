import { Terminal } from 'lucide-react';
import phishingImg from '../assets/Project/phishing.jpeg';
import nycdashboardImg from '../assets/Project/nycdashboard.jpeg';
import sleepdetoxImg from '../assets/Project/sleepdetox.jpeg';
import covidImg from '../assets/Project/Covid.png';
import loksabhaImg from '../assets/Project/Loksabhadashboard.jpeg';
import {
    CPlusPlusIcon,
    PythonIcon,
    DataStructuresIcon,
    AlgorithmsIcon,
    SQLIcon,
    GitIcon,
    GitHubIcon,
    FlaskIcon,
    PowerBIIcon,
    ExcelIcon,
    NumpyIcon,
    PandasIcon,
    MatplotlibIcon,
    SeabornIcon,
    ScikitLearnIcon,
} from '../components/common/TechIcons';

export const portfolioData = {
    personal: {
        name: "Samarth Garg",
        headline: "Software Engineer • C++ • Python • Data Science",
        location: "Ghaziabad, Uttar Pradesh",
        email: "samarthgarg14@gmail.com",
        phone: "+91 9650984465",
        github: "https://github.com/Samarthgarg14",
        linkedin: "https://www.linkedin.com/in/samarth-garg-997235240/",
        instagram: "https://www.instagram.com/samarth_garg14/",
        whatsapp: "https://wa.me/919650984465",
        leetcode: "https://leetcode.com/u/Samarth_1426/",
        resume: "https://drive.google.com/file/d/1yMOQYL0qNeKDYjs5JrtAT3Xf3DfDIL9L/view?usp=drive_link",
        stats: {
            cgpa: "8.55",
            projects: "4+",
            Certificates: "3+",
            skills: "C++ | Python | Power BI | DSA"
        }
    },
    hero: {
        title: "Hi, I'm Samarth Garg",
        subtitle: "B.Tech CSE | 3rd Year | Software Engineer",
        rotatingText: [
            "AI-backed tools",
            "Data dashboards",
            "Scalable systems",
            "Real-world products",
        ]
    },
    about: "I’m a software engineer and data scientist building practical, real-world solutions. I develop scalable applications, extract insights from data, train machine learning models with focus on simplicity, efficiency, and impact. I work at the intersection of engineering and analytics, creating solutions driven by clean architecture and data-informed decisions.",
    skills: {
        technical: [
            // Row 1 — Languages & Core CS
            { name: "C / C++", icon: CPlusPlusIcon, category: "Languages" },
            { name: "Python", icon: PythonIcon, category: "Languages" },
            { name: "Data Structures", icon: DataStructuresIcon, category: "Core" },
            { name: "Algorithms", icon: AlgorithmsIcon, category: "Core" },
            { name: "SQL", icon: SQLIcon, category: "Languages" },
            // Row 2 — Tools & Frameworks
            { name: "Git", icon: GitIcon, category: "Tools" },
            { name: "GitHub", icon: GitHubIcon, category: "Tools" },
            { name: "Flask", icon: FlaskIcon, category: "Tools" },
            { name: "Power BI", icon: PowerBIIcon, category: "Tools" },
            { name: "Excel", icon: ExcelIcon, category: "Tools" },
            // Row 3 — Data Science Libraries
            { name: "NumPy", icon: NumpyIcon, category: "Libraries" },
            { name: "Pandas", icon: PandasIcon, category: "Libraries" },
            { name: "Matplotlib", icon: MatplotlibIcon, category: "Libraries" },
            { name: "Seaborn", icon: SeabornIcon, category: "Libraries" },
            { name: "Scikit-learn", icon: ScikitLearnIcon, category: "Libraries" },
        ],
        soft: [
            "Problem-Solving", "Strategic Thinking", "Team Collaboration", "Leadership", "Communication"
        ]
    },
    projects: [
        {
            id: 1,
            title: "Phishing Detection AI System",
            category: "ML/Security",
            image: phishingImg, // Placeholder or add new asset
            date: "Mar’ 26",
            summary: "Real-time phishing detection system using supervised learning on 30+ URL & HTML features.",
            details: [
                "Built a real-time phishing detection system using supervised learning on 30+ URL & HTML features and dataset with 11055 records.",
                "Developed an end-to-end ML pipeline with preprocessing and benchmarking across 6 models.",
                "Achieved ~96% accuracy and built a diagnostic URL scanner for instant security analysis."
            ],
            tech: ["Python", "FastAPI", "Scikit-learn", "MLflow", "HTML", "CSS", "JavaScript", "Chart.js"],
            links: {
                github: "https://github.com/Samarthgarg14/Phishing_Detection_AI",
                live: null
            }
        },
        {
            id: 2,
            title: "NYC Real Estate Market Intelligence Dashboard",
            category: "Dashboards",
            image: nycdashboardImg,
            date: "Dec 2025",
            summary: "Interactive Power BI dashboard analyzing NYC real estate sales across boroughs.",
            details: [
                "Built an interactive Power BI dashboard to analyze NYC real estate sales across boroughs, tracking sales value, median prices, and transaction trends.",
                "Cleaned and transformed the dataset with feature engineering like Price/SqFt, building age groups, and price bands for better insights.",
                "Designed KPI cards, trend charts, maps, tree maps, and slicers to highlight borough performance and ZIP-level hotspots."
            ],
            tech: ["Microsoft Excel", "Power Query", "Pivot Tables & Charts"],
            links: {
                github: "https://github.com/Samarthgarg14/NYC-Real-estate-market-analytics-dashboard",
                live: "https://app.powerbi.com/links/eFhcLq41sx?ctid=e14e73eb-5251-4388-8d67-8f9f2e2d5a46&pbi_source=linkShare"
            }
        },
        {
            id: 3,
            title: "Sleep Detox Optimizer",
            category: "AI/Web",
            image: sleepdetoxImg,
            date: "May 2025",
            summary: "AI-driven sleep detox insights with secure data intake, featuring personalized adaptive suggestions.",
            details: [
                "Improved sleep quality through personalized AI-driven detox insights.",
                "Built a real-time sleep wellness system with secure data intake and smart recommendation logic.",
                "Delivered adaptive suggestions and alerts that evolve with user behavior to enhance rest patterns."
            ],
            tech: ["Python", "Flask", "JavaScript", "HTML", "CSS", "Gemini AI Models"],
            links: {
                github: "https://github.com/Samarthgarg14/Sleep-Detox-Optimizer",
                live: "https://sleep-detox-optimizer.onrender.com/"
            }
        },
        {
            id: 4,
            title: "COVID-19 Data Analysis",
            category: "Data Analysis",
            image: covidImg,
            date: "Apr 2025",
            summary: "ZIP-level COVID analysis with preprocessing and geo-mapping.",
            details: [
                "Analyzed ZIP-level COVID-19 data using preprocessing, statistical methods, and visual trend evaluation.",
                "Built a full workflow including cleaning, normalization, geo-mapping, correlation analysis, and outlier detection.",
                "Revealed spatial hotspots, temporal spikes, and data inconsistencies for deeper public-health insights."
            ],
            tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "GitHub"],
            links: {
                github: "https://github.com/Samarthgarg14/covid-data-analysis",
                live: null
            }
        },
        {
            id: 5,
            title: "Lok Sabha Elections 2024 Dashboard",
            category: "Dashboards",
            image: loksabhaImg,
            date: "2024",
            summary: "Interactive Excel dashboard with KPIs and constituency insights.",
            details: [
                "Built an interactive Excel dashboard showcasing party performance, turnout, and demographics across 543 constituencies.",
                "Designed dynamic KPI cards, geo-maps, and filterable visuals using Pivot Tables and advanced charts.",
                "Highlighted key insights including dominant regions, turnout gaps, and closely contested seats."
            ],
            tech: ["Microsoft Excel", "Power Query", "Pivot Tables & Charts"],
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
            grade: "CGPA: 8.55",
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
    Certificates: [
        { title: "Cloud Computing", issuer: "NPTEL (IIT Kharagpur)", date: "Apr 2025", link: "https://drive.google.com/file/d/1QF-EI1W9cOsALd2lAQwPAs0-uGLE7rYG/view?usp=drive_link" },
        { title: "Data Structures and Algorithms", issuer: "Neocolab", date: "Dec 2024", link: "https://drive.google.com/file/d/1kkHQM61K-8MLY62zUgnujAiHa3dM7myN/view" },
        { title: "Object Oriented Programming", issuer: "Neocolab", date: "Dec 2024", link: "https://drive.google.com/file/d/1VvzvlzJZHf9WvhBhdfKcc9x8QrX3CgK4/view" }
    ],
    training: [
        {
            title: "AI-Powered NLP",
            company: "AlgoTutor",
            date: "Jun 2025 – Jul 2025",
            desc: [
                "NLP fundamentals — tokenization, embeddings & sentiment analysis on Google Colab.",
                "Python & Generative AI models for real-world text-processing workflows.",
                "Built a News Summarizer with summarization logic & sentiment evaluation.",
            ],
            link: "https://drive.google.com/file/d/1dem8cMqeJ3VKRUY-2ahOYp_mSOj7dUy5/view?usp=drive_link"
        }
    ],

};
