import { Terminal } from 'lucide-react';
import nycdashboardImg from '../assets/Project/nycdashboard.jpeg';
import sleepdetoxImg from '../assets/Project/sleepdetox.jpeg';
import covidImg from '../assets/Project/Covid.png';
import loksabhaImg from '../assets/Project/Loksabhadashboard.jpeg';
import {
    CPlusPlusIcon,
    PythonIcon,
    HtmlCssIcon,
    GitGithubIcon,
    PowerBIExcelIcon,
    NumpyPandasIcon,
    MatplotlibSeabornIcon,
    ScikitLearnIcon,
    DataStructuresIcon,
    AlgorithmsIcon
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
    about: "Hi, I’m a Computer Science student who enjoys turning ideas into real-world projects.\n\nI like building things that are actually useful and solving problems in a simple and practical way. For me, it’s not just about creating something, but making sure it has real value.\n\nCurrently, I’m focused on learning, improving, and pushing myself to build better and more meaningful work every day.",
    skills: {
        technical: [
            { name: "C / C++", icon: CPlusPlusIcon, category: "Languages" },
            { name: "Python", icon: PythonIcon, category: "Languages" },
            { name: "HTML / CSS", icon: HtmlCssIcon, category: "Tools" },
            { name: "Git / GitHub", icon: GitGithubIcon, category: "Tools" },
            { name: "Power BI / Excel", icon: PowerBIExcelIcon, category: "Tools" },
            { name: "NumPy / Pandas", icon: NumpyPandasIcon, category: "Libraries" },
            { name: "Matplotlib / Seaborn", icon: MatplotlibSeabornIcon, category: "Libraries" },
            { name: "Scikit-learn", icon: ScikitLearnIcon, category: "Libraries" },
            { name: "Data Structures", icon: DataStructuresIcon, category: "Core" },
            { name: "Algorithms", icon: AlgorithmsIcon, category: "Core" }
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
            id: 2,
            title: "Sleep Detox Optimizer",
            category: "AI/Web",
            image: sleepdetoxImg,
            date: "May 2025",
            summary: "AI-driven sleep detox insights with secure data intake, featuring personalized adaptive suggestions that evolve with user behavior patterns.",
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
            id: 3,
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
            id: 4,
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
        { title: "Adobe India Hackathon", issuer: "Unstop", date: "Jul 2025", link: "https://drive.google.com/file/d/19Sj3vV7C1uzBKbYKTV5Hnn2_SbiifNBH/view?usp=drive_link" },
        { title: "Cloud Computing", issuer: "NPTEL (IIT Kharagpur)", date: "Apr 2025", link: "https://drive.google.com/file/d/1QF-EI1W9cOsALd2lAQwPAs0-uGLE7rYG/view?usp=drive_link" },
        { title: "CyberSleuth Ethical Hacking", issuer: "ETA Club LPU", date: "Sep 2023", link: "https://drive.google.com/file/d/1JBEyUyjnI9vFRj6W7jkfsHI2W-uobdgX/view?usp=drive_link" }
    ],
    training: [
        {
            title: "AI-Powered NLP",
            company: "AlgoTutor",
            date: "Jun 2025 – Jul 2025",
            desc: [
                "Practiced NLP fundamentals on Google Colab, including text cleaning, tokenization, stemming/lemmatization, embeddings, and sentiment analysis.",
                "Worked on hands-on NLP exercises using Python and Generative AI models to understand real-world text-processing workflows.",
                "Built a functional News Summarizer project applying summarization logic and sentiment evaluation."
            ],
            link: "https://drive.google.com/file/d/1dem8cMqeJ3VKRUY-2ahOYp_mSOj7dUy5/view?usp=drive_link"
        }
    ],

};
