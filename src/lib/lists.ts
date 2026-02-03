// About section content
export const about_content = {
  introduction:
    "I am Vic, a passionate Software Engineer who loves open source contribution and community building.",
  conclusion:
    "I am always open to new opportunities and collaborations. Feel free to reach out—let's connect and grow together! 🚀",
};

type experience_type = {
  title: string;
  subtitle: string;
  period: string;
  logo: string;
  description?: (string | { text: string; link?: string })[];
};

type open_source_type = experience_type & {
  repository?: {
    owner: string;
    repo: string;
  };
};

type presentation_type = experience_type & {
  text: string;
  link: string;
};

type project_type = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};

type community_type = experience_type & {
  text: string;
  link: string;
};

export const skill_list = [
  "LLM",
  "NLP",
  "AI Agent",
  "Backend",
  "Distributed System",
  "Open Source",
];

export const experience_list: experience_type[] = [
  {
    title: "Backend Engineer Internship",
    subtitle: "Fantasy X Games",
    period: "Jul 2025 - Present",
    logo: "/fxgames.png",
    description: [
      "Optimized backend transaction merging with Kafka, achieving 3× throughput improvement and resolving transaction ordering issues.",
      "Eliminated N+1 queries in the alerting system, improving system response time from 30s to 10s.",
      "Migrated data storage to ClickHouse, cutting storage costs by 90% (from 400GB to 40GB).",
      "Designed 20+ ETL pipeline using Apache Airflow, reducing the data team’s preprocessing workload by 20 hours per month.",
    ],
  },
  {
    title: "Cyber Security Internship",
    subtitle: "Kiwis Security",
    period: "Mar 2024 - July 2024",
    logo: "/kiwissec.png",
    description: [
      "Utilized PHP, JavaScript, MySQL, and Burp Suite to design real-world web application vulnerabilities. Created attack scenarios to showcase how these vulnerabilities are exploited.",
      "Developed over five entry-to-intermediate level web penetration testing courses. Each course included handson labs that covered key topics such as network security, session management flaws, and web application firewall bypass techniques, ensuring students received practical exposure to web security challenges.",
    ],
  },
];

export const education_list: experience_type[] = [
  {
    title: "National Taiwan University of Science and Technology",
    subtitle: "Bachelor of Science in Computer Science",
    period: "Sep 2023 - June 2027",
    logo: "/ntust.png",
    description: [
      "Currently pursuing a third year in the Department of Computer Science and Information Engineering, with a GPA of 4.20/4.30, ranking third in the department (Top 4%).",
    ],
  },
];

export const open_source_list: open_source_type[] = [
  {
    title: "Apache Airflow",
    subtitle: "Contributor",
    period: "July 2025 - Present",
    logo: "/airflow.png",
    repository: {
      owner: "apache",
      repo: "airflow",
    },
    description: [
      {
        text: "Contributed to Apache Airflow, including api server feature & fixes.",
        link: "https://github.com/apache/airflow/pulls?q=is%3Apr+author%3Aviiccwen",
      },
    ],
  },
  {
    title: "Apache Mahout",
    subtitle: "Contributor",
    period: "Jan 2026 - Present",
    logo: "/mahout.jpg",
    repository: {
      owner: "apache",
      repo: "mahout",
    },
    description: [
      {
        text: "Contributed 10+ PRs focused on designing & optimizing CUDA kernels.",
        link: "https://github.com/apache/mahout/pulls?q=is%3Apr+author%3Aviiccwen",
      },
    ],
  },
  {
    title: "Astronomer Dag-factory",
    subtitle: "Top 6 contributor",
    period: "July 2025 - Present",
    logo: "/astronomer.jpeg",
    repository: {
      owner: "astronomer",
      repo: "dag-factory",
    },
    description: [
      {
        text: "Contributed 5+ PRs focused on improving DAG generation & version migration.",
        link: "https://github.com/astronomer/dag-factory/pulls?q=is%3Apr+author%3Aviiccwen",
      },
    ],
  },
];

export const project_list: project_type[] = [
  {
    title: "PartyTimes",
    description:
      "A web application that helps users to arrange their meeting, party schedules.",
    imageUrl: "/partytimes.jpg",
    link: "https://partytimes.org/",
  },
  {
    title: "NeoAcademy AI",
    description:
      "An AI-powered platform that helps students to learn knowledge more effectively.",
    imageUrl: "/neoacademy.jpg",
    link: "https://github.com/viiccwen/neoAcademy/",
  },
  {
    title: "FindOne",
    description: "A real-time AI detection game powered by Vue.js and ASP.NET.",
    imageUrl: "/findone.jpg",
    link: "https://github.com/viiccwen/findone",
  },
  {
    title: "GPA Calculator",
    description:
      "A web application that helps students to calculate their GPA easily.",
    imageUrl: "/gpa-calculator.png",
    link: "https://gpa-calculator.vicwen.app/",
  },
  {
    title: "Help Dream Scholarship Notify Bot",
    description:
      "A Telegram bot that helps students to get the latest scholarship information.",
    imageUrl: "/help-dream.png",
    link: "https://github.com/viiccwen/help-dream-scholarship-notify-bot",
  },
];

export const honor_list: experience_type[] = [
  {
    title: "Database Bottom-Level Architecture to Application Practice",
    subtitle: "2025 iThome Ironman Challnge",
    period: "Aug 2025",
    logo: "/clickhouse.svg",
    description: [
      {
        text: "Completed 30 days of writing articles on ClickHouse, covering from the bottom of the database to the application layer.",
        link: "https://ithelp.ithome.com.tw/users/20168031/ironman/8221",
      },
      "Breaking down why ClickHouse chose column-based storage and how it differs from traditional OLTP/OLAP databases.",
      "Exploring MergeTree family engines and their real-world use cases.",
      "Walking through streaming integrations with Kafka and batch ingestion best practices.",
      "Deploying ClickHouse in a Kubernetes environment and even digging into MergeTree internals from the source code to understand its 6 core mechanisms.",
      "applied these learnings at work, achieving 10x storage savings (400GB → 40GB) by optimizing schema design and leveraging ClickHouse’s compression and engine capabilities.",
    ],
  },
  {
    title: "Software Engineering Practice Award",
    subtitle: "2025 Coding 101",
    period: "Mar 2025",
    logo: "/coding101.png",
    description: [
      "Developed an AI-powered full-stack learning platform using React.js, TypeScript, TailwindCSS, Express.js, MongoDB, and Langchain, enabling personalized quizzes and adaptive learning recommendations.",
      "Implemented CI/CD pipelines with GitHub Actions and Docker, integrating and deploying the application as Docker image on Zeabur for seamless and scalable hosting.",
      "Collaborated with a team using Git and GitHub for version control, ensuring efficient code management and smooth project coordination throughout the development lifecycle.",
    ],
  },
  {
    title: "5th",
    subtitle: "2023 ITSA National Software Development Contest",
    period: "Dec 2023",
    logo: "/itsa.png",
  },
  {
    title: "Outstanding Youth",
    subtitle: "National Taiwan University of Science and Technology",
    period: "Dec 2024",
    logo: "/ntust.png",
  },
];

export const techstack_list = [
  { name: "Golang", logo: "/golang.png" },
  { name: "Fiber", logo: "/fiber.webp" },
  { name: "Nextjs", logo: "/nextjs.png" },
  {
    name: "TypeScript",
    logo: "/typescript.png",
  },
  {
    name: "javascript",
    logo: "/javascript.png",
  },
  {
    name: "fastapi",
    logo: "/fastapi.png",
  },
  {
    name: "prisma",
    logo: "/prisma.png",
  },
  {
    name: "k8s",
    logo: "/k8s.png",
  },
  {
    name: "clickhouse",
    logo: "/clickhouse.svg",
  },
  {
    name: "postgresql",
    logo: "/postgresql.png",
  },
  {
    name: "mongodb",
    logo: "/mongo_db.png",
  },
  {
    name: "python",
    logo: "/python.png",
  },
  {
    name: "langchain",
    logo: "/langchain.jpg",
  },
  {
    name: "redis",
    logo: "/redis.png",
  },
];

export const community_list: community_type[] = [
  {
    title: "GDG On Campus BoF",
    subtitle: "Organizer",
    text: "DevFest Taipei 2025 - Google Developer Groups",
    link: "https://gdg.community.dev/events/details/google-gdg-taipei-presents-devfest-taipei-2025/",
    period: "Nov 2025 - Dec 2025",
    logo: "/devfest-taipei-2025.webp",
    description: [
      "Organized a BoF session at DevFest Taipei 2025, discussing the leadership skills and experience.",
    ],
  },
  {
    title: "GDG on Campus NTUST",
    subtitle: "Lead",
    text: "Google Developer Groups Community",
    link: "https://gdg.community.dev/gdg-on-campus-national-taiwan-university-of-science-and-technology-taipei-taiwan/",
    period: "Sep 2024 - June 2025",
    logo: "/GDGC_NTUST.jpg",
    description: [
      "Delivered an AI-Workshop at DevFest Taipei 2024, teaching LIT to analyze gemma model in keras.",
      "Sharing fundamental knowledge and applications of ML/DL, Frontend, Backend, Google Cloud, Linux, Git.",
    ],
  },
  {
    title: "Computer Science Student Association",
    subtitle: "Lead",
    text: "Instagram",
    link: "https://instagram.com/ntustcsie/",
    period: "Sep 2024 - June 2025",
    logo: "/NTUST_CSIE.png",
    description: [
      "Leading a team of 10+ members to organize events and activities for the Computer Science Department.",
      "Organizing events such as hackathons, workshops with GDG On Campus NTUST to promote technical skills and teamwork.",
    ],
  },
];

export const presentation_list: presentation_type[] = [
  {
    title: "SITCON",
    subtitle: "Speaker",
    text: "上線是起點：觀測×重構×擴充的系統迭代術",
    link: "https://sitcon.org/2026/agenda/",
    period: "Mar 2026",
    logo: "/sitcon.jpg",
  },
  {
    title: "SITCON",
    subtitle: "Speaker",
    text: "從『經營』到『領導』：社群領導經驗分享",
    link: "https://sitcon.org/2025/agenda/62f54e/",
    period: "Mar 2025",
    logo: "/sitcon.jpg",
  },
  {
    title: "GDG DevFest Taipei",
    subtitle: "Speaker",
    text: "Using LIT to Analyze Gemma Models in Keras.",
    link: "https://www.facebook.com/photo.php?fbid=974863934668392&id=100064343845138&set=a.464222692399188",
    period: "Nov 2024",
    logo: "/devfest.webp",
  },
  {
    title: "COSCUP",
    subtitle: "Speaker",
    text: "破除教育鴻溝：透過開源，偏鄉職生也能跳脫舒適框架",
    link: "https://coscup.org/2024/zh-TW/session/RR9NV8",
    period: "Aug 2024",
    logo: "/coscup.png",
  },
];
