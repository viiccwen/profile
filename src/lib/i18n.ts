import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 翻譯資源
const enTranslations = {
  "Kiwis Security": "Kiwis Security",
  ABOUT: "About",
  SKILLS: "Skills",
  EXPERIENCE: "Experience",
  PROJECT: "Projects",
  EDUCATION: "Education",
  HONOR: "Honors",
  COMMUNITY: "Community",
  PRESENTATION: "Presentations",
  "OPEN SOURCE": "Open Source",
  "I am Vic, a passionate Software Engineer who loves open source contribution and community building.":
    "I am Vic, a passionate Software Engineer who loves open source contribution and community building.",
  "I am always open to new opportunities and collaborations. Feel free to reach out—let's connect and grow together! 🚀":
    "I am always open to new opportunities and collaborations. Feel free to reach out—let's connect and grow together! 🚀",
  "National Taiwan University of Science and Technology":
    "National Taiwan University of Science and Technology",
  "Software Engineering Practice Award": "Software Engineering Practice Award",
  "2025 Coding 101": "2025 Coding 101",
  "5th": "5th Place",
  "2023 ITSA National Software Development Contest":
    "2023 ITSA National Software Development Contest",
  "Outstanding Youth": "Outstanding Youth",
  "Bachelor of Science in Computer Science":
    "Bachelor of Science in Computer Science",
  "Computer Science Student Association":
    "Computer Science Student Association",
  PartyTimes: "PartyTimes",
  "NeoAcademy AI": "NeoAcademy AI",
  "GPA Calculator": "GPA Calculator",
  "Emoji Store": "Emoji Store",
  "A web application that helps users to arrange their meeting, party schedules.":
    "A web application that helps users to arrange their meeting, party schedules.",
  "An AI-powered platform that helps students to learn knowledge more effectively.":
    "An AI-powered platform that helps students to learn knowledge more effectively.",
  "A web application that helps students to calculate their GPA easily.":
    "A web application that helps students to calculate their GPA easily.",
  "A NFT marketplace that allows users to buy and sell emojis based on Ethereum.":
    "A NFT marketplace that allows users to buy and sell emojis based on Ethereum.",
  "Click to view": "Click to view",
  "CV (Mandarin)": "CV (Mandarin)",
  "CV (English)": "CV (English)",
  "Utilized PHP, JavaScript, MySQL, and Burp Suite to design real-world web application vulnerabilities. Created attack scenarios to showcase how these vulnerabilities are exploited.":
    "Utilized PHP, JavaScript, MySQL, and Burp Suite to design real-world web application vulnerabilities. Created attack scenarios to showcase how these vulnerabilities are exploited.",
  "Developed over five entry-to-intermediate level web penetration testing courses. Each course included handson labs that covered key topics such as network security, session management flaws, and web application firewall bypass techniques, ensuring students received practical exposure to web security challenges.":
    "Developed over five entry-to-intermediate level web penetration testing courses. Each course included handson labs that covered key topics such as network security, session management flaws, and web application firewall bypass techniques, ensuring students received practical exposure to web security challenges.",
  "Currently pursuing a third year in the Department of Computer Science and Information Engineering, with a GPA of 4.20/4.30, ranking third in the department (Top 5%).":
    "Currently pursuing a third year in the Department of Computer Science and Information Engineering, with a GPA of 4.20/4.30, ranking third in the department (Top 4%).",
  "Organized a BoF session at DevFest Taipei 2025, discussing the leadership skills and experience.":
    "Organized a BoF session at DevFest Taipei 2025, discussing the leadership skills and experience.",
  "Delivered an AI-Workshop at DevFest Taipei 2024, teaching LIT to analyze gemma model in keras.":
    "Delivered an AI-Workshop at DevFest Taipei 2024, teaching LIT to analyze gemma model in keras.",
  "Sharing fundamental knowledge and applications of ML/DL, Frontend, Backend, Google Cloud, Linux, Git.":
    "Sharing fundamental knowledge and applications of ML/DL, Frontend, Backend, Google Cloud, Linux, Git.",
  "Developed an AI-powered full-stack learning platform using React.js, TypeScript, TailwindCSS, Express.js, MongoDB, and Langchain, enabling personalized quizzes and adaptive learning recommendations.":
    "Developed an AI-powered full-stack learning platform using React.js, TypeScript, TailwindCSS, Express.js, MongoDB, and Langchain, enabling personalized quizzes and adaptive learning recommendations.",
  "Implemented CI/CD pipelines with GitHub Actions and Docker, integrating and deploying the application as Docker image on Zeabur for seamless and scalable hosting.":
    "Implemented CI/CD pipelines with GitHub Actions and Docker, integrating and deploying the application as Docker image on Zeabur for seamless and scalable hosting.",
  "Collaborated with a team using Git and GitHub for version control, ensuring efficient code management and smooth project coordination throughout the development lifecycle.":
    "Collaborated with a team using Git and GitHub for version control, ensuring efficient code management and smooth project coordination throughout the development lifecycle.",
  "Leading a team of 10+ members to organize events and activities for the Computer Science Department.":
    "Leading a team of 10+ members to organize events and activities for the Computer Science Department.",
  "Organizing events such as hackathons, workshops with GDG On Campus NTUST to promote technical skills and teamwork.":
    "Organizing events such as hackathons, workshops with GDG On Campus NTUST to promote technical skills and teamwork.",
  "Backend Engineer Internship": "Backend Engineer Internship",
  "A real-time AI detection game powered by Vue.js and ASP.NET.":
    "A real-time AI detection game powered by Vue.js and ASP.NET.",
  "Help Dream Scholarship Notify Bot": "Help Dream Scholarship Notify Bot",
  "A Telegram bot that helps students to get the latest scholarship information.":
    "A Telegram bot that helps students to get the latest scholarship information.",
  "Integrated internal tools into a unified system using React, TypeScript, Golang, PostgreSQL to improve internal workflow efficiency.":
    "Integrated internal tools into a unified system using React, TypeScript, Golang, PostgreSQL to improve internal workflow efficiency.",
  "Built an automated ETL pipeline using Apache Airflow to streamline data processing and analytics workflows.":
    "Built an automated ETL pipeline using Apache Airflow to streamline data processing and analytics workflows.",
  "Implemented ClickHouse database solutions for data compression and cold storage migration strategies.":
    "Implemented ClickHouse database solutions for data compression and cold storage migration strategies.",
  "Database Bottom-Level Architecture to Application Practice":
    "Database Bottom-Level Architecture to Application Practice",
  "2025 iThome Ironman Challnge": "2025 iThome Ironman Challnge",
  "Completed 30 days of writing articles on ClickHouse, covering from the bottom of the database to the application layer.":
    "Completed 30 days of writing articles on ClickHouse, covering from the bottom of the database to the application layer.",
  "Breaking down why ClickHouse chose column-based storage and how it differs from traditional OLTP/OLAP databases.":
    "Breaking down why ClickHouse chose column-based storage and how it differs from traditional OLTP/OLAP databases.",
  "Exploring MergeTree family engines and their real-world use cases.":
    "Exploring MergeTree family engines and their real-world use cases.",
  "Walking through streaming integrations with Kafka and batch ingestion best practices.":
    "Walking through streaming integrations with Kafka and batch ingestion best practices.",
  "Deploying ClickHouse in a Kubernetes environment and even digging into MergeTree internals from the source code to understand its 6 core mechanisms.":
    "Deploying ClickHouse in a Kubernetes environment and even digging into MergeTree internals from the source code to understand its 6 core mechanisms.",
  "applied these learnings at work, achieving 10x storage savings (400GB → 40GB) by optimizing schema design and leveraging ClickHouse’s compression and engine capabilities.":
    "applied these learnings at work, achieving 10x storage savings (400GB → 40GB) by optimizing schema design and leveraging ClickHouse’s compression and engine capabilities.",
};

const zhTWTranslations = {
  "Kiwis Security": "七維思資安",
  ABOUT: "關於",
  SKILLS: "技能",
  EXPERIENCE: "經驗",
  PROJECT: "專案",
  EDUCATION: "教育背景",
  HONOR: "榮譽",
  COMMUNITY: "社群",
  PRESENTATION: "演講",
  "OPEN SOURCE": "開源專案",
  "I am Vic, a passionate Software Engineer who loves open source contribution and community building.":
    "我是 Vic，一位對開源貢獻和社群經營有熱忱的軟體工程師。",
  "I am always open to new opportunities and collaborations. Feel free to reach out—let's connect and grow together! 🚀":
    "我一直對新機會和合作機會持開放態度。歡迎與我 connect！🚀",
  "National Taiwan University of Science and Technology": "國立臺灣科技大學",
  "Software Engineering Practice Award": "軟體工程實踐獎",
  "2025 Coding 101": "2025 Coding 101 大學軟體創作競賽",
  "5th": "第五名",
  "2023 ITSA National Software Development Contest":
    "2023 ITSA 全國大專程式設計極客挑戰賽",
  "Outstanding Youth": "第十九屆校園傑出青年",
  "Bachelor of Science in Computer Science": "資訊工程系學士",
  "Computer Science Student Association": "資訊工程學系學生會",
  PartyTimes: "PartyTimes 都不揪？",
  "NeoAcademy AI": "NeoAcademy AI",
  "GPA Calculator": "GPA 計算機",
  "Emoji Store": "Emoji Store",
  "A web application that helps users to arrange their meeting, party schedules.":
    "幫助使用者輕鬆安排多人會議、派對行程，讓你不再為找不到時間、溝通成本而煩惱！",
  "An AI-powered platform that helps students to learn knowledge more effectively.":
    "一個 AI 驅動的學習平台，幫助學生更有效率地學習知識以及分析學習狀況。",
  "A web application that helps students to calculate their GPA easily.":
    "提供 GPA 計分方式以及幫助學生輕鬆計算自己的 GPA，目前僅支援 GPA 4.3 制。",
  "A NFT marketplace that allows users to buy and sell emojis based on Ethereum.":
    "基於 Ethereum 的 NFT 基礎買賣網站，讓使用者可以買賣自己的 Emoji。",
  "Click to view": "查看",
  "CV (Mandarin)": "履歷 (中文)",
  "CV (English)": "履歷 (英文)",
  "Utilized PHP, JavaScript, MySQL, and Burp Suite to design real-world web application vulnerabilities. Created attack scenarios to showcase how these vulnerabilities are exploited.":
    "運用 PHP、JavaScript、MySQL 與 Burp Suite 等工具設計網頁安全漏洞。",
  "Developed over five entry-to-intermediate level web penetration testing courses. Each course included handson labs that covered key topics such as network security, session management flaws, and web application firewall bypass techniques, ensuring students received practical exposure to web security challenges.":
    "協助開發並測試網頁滲透測試課程，涵蓋網頁安全、資料庫漏洞主題知識和攻擊環境。",
  "Currently pursuing a third year in the Department of Computer Science and Information Engineering, with a GPA of 4.20/4.30, ranking third in the department (Top 4%).":
    "就讀於資訊工程學系三年級，GPA 為 4.20/4.30，為系上第三名（Top 4%）。",
  "Organized a BoF session at DevFest Taipei 2025, discussing the leadership skills and experience.":
    "組織 BoF meetup，和各校 Lead 討論社群領導和經驗。",
  "Delivered an AI-Workshop at DevFest Taipei 2024, teaching LIT to analyze gemma model in keras.":
    "擔任 2024 DevFest Taipei AI 工作坊講者，主題為：「Using LIT to analyze gemma models in keras」。",
  "Sharing fundamental knowledge and applications of ML/DL, Frontend, Backend, Google Cloud, Linux, Git.":
    "帶領社員學習 ML/DL、前後端開發、Google Cloud、Linux 與 Git 等知識及應用。",
  "Developed an AI-powered full-stack learning platform using React.js, TypeScript, TailwindCSS, Express.js, MongoDB, and Langchain, enabling personalized quizzes and adaptive learning recommendations.":
    "開發結合 AI 應用的全端學習平台，使用 React.js、TypeScript、TailwindCSS、Express.js、MongoDB 和 Langchain 等技術，實現個性化測驗和適應性學習建議。",
  "Implemented CI/CD pipelines with GitHub Actions and Docker, integrating and deploying the application as Docker image on Zeabur for seamless and scalable hosting.":
    "使用 GitHub Actions 和 Docker 實現 CI/CD Pipeline，將應用程序部署為 Docker 映像，實現無縫且可擴展的部署。",
  "Collaborated with a team using Git and GitHub for version control, ensuring efficient code management and smooth project coordination throughout the development lifecycle.":
    "與團隊使用 Git 和 GitHub 進行版本控制，確保程式碼管理及專案開發過程順利進行。",
  "Leading a team of 10+ members to organize events and activities for the Computer Science Department.":
    "帶領超過 10 位系學會幹部籌備跨系、跨校之中小型活動。",
  "Organizing events such as hackathons, workshops with GDG On Campus NTUST to promote technical skills and teamwork.":
    "與 GDG On Campus NTUST 合作，籌辦黑客松、工作坊等活動，推廣技術知識。",
  "Cyber Security Internship": "Cyber Security Internship",
  "A real-time AI detection game powered by Vue.js and ASP.NET.":
    "一款基於 Vue.js 和 ASP.NET 的即時 AI 物體偵測遊戲",
  "Help Dream Scholarship Notify Bot": "圓夢助學網獎學金通知機器人",
  "A Telegram bot that helps students to get the latest scholarship information.":
    "幫助學生獲取最新的獎學金資訊",
  "Optimized backend transaction merging with Kafka, achieving 3× throughput improvement and resolving transaction ordering issues.":
    "優化後端交易合併，使用 Kafka 實現 3 倍吞吐量提升，解決交易排序問題。",
  "Eliminated N+1 queries in the alerting system, improving system response time from 30s to 10s.":
    "消除告警系統的 N+1 查詢，將系統回應時間從 30 秒降至 10 秒。",
  "Migrated data storage to ClickHouse, cutting storage costs by 90% (from 400GB to 40GB).":
    "遷移資料儲存至 ClickHouse，降低 90% 的儲存成本（從 400GB 降至 40GB）。",
  "Designed 20+ ETL pipeline using Apache Airflow, reducing the data team’s preprocessing workload by 20 hours per month.":
    "設計 20 個以上的 ETL 管線，使用 Apache Airflow 減少資料團隊的預處理工作負載，每月減少 20 小時。",
  "2025 iThome Ironman Challnge": "2025 iThome 鐵人賽",
  "Database Bottom-Level Architecture to Application Practice":
    "ClickHouse 系列：從資料庫底層架構到軟體應用實踐",
  "Completed 30 days of writing articles on ClickHouse, covering from the bottom of the database to the application layer.":
    "撰寫 30 天的 ClickHouse 系列文章，涵蓋從資料庫底層架構到軟體應用實踐。",
  "Breaking down why ClickHouse chose column-based storage and how it differs from traditional OLTP/OLAP databases.":
    "探討 ClickHouse 為何選擇列式儲存，以及與傳統 OLTP/OLAP 資料庫的差異。",
  "Exploring MergeTree family engines and their real-world use cases.":
    "探索 MergeTree 系列引擎及其實際應用案例。",
  "Walking through streaming integrations with Kafka and batch ingestion best practices.":
    "探討串流整合 Kafka 和批次資料導入的最佳實踐。",
  "Deploying ClickHouse in a Kubernetes environment and even digging into MergeTree internals from the source code to understand its 6 core mechanisms.":
    "在 Kubernetes 部署 ClickHouse，並從開源程式碼中理解 MergeTree 其 6 大核心機制。",
  "applied these learnings at work, achieving 10x storage savings (400GB → 40GB) by optimizing schema design and leveraging ClickHouse’s compression and engine capabilities.":
    "將這些學習應用於實習中，利用 ClickHouse 的壓縮和引擎功能，節省 10 倍儲存空間（400GB→40GB）。",
  "NTU AI Club": "臺大人工智慧應用社",
  "GDG on Campus NTUST": "台科 Google 學生開發者社群",
};

// 資源配置
const resources = {
  en: {
    translation: enTranslations,
  },
  "zh-TW": {
    translation: zhTWTranslations,
  },
};

// i18n initialization configuration
const i18nConfig = {
  resources,
  lng: "zh-TW", // default language
  fallbackLng: "en", // fallback language
  interpolation: {
    escapeValue: false, // React already handles XSS protection
  },
  // detect browser language
  detection: {
    order: ["localStorage", "navigator"],
    caches: ["localStorage"],
  },
};

// initialize i18n instance (avoid type issues on default import)
const i18nInstance = i18n.createInstance();
i18nInstance.use(initReactI18next).init(i18nConfig);

export default i18nInstance;
