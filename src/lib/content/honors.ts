import type { ExperienceType } from "./types";

export const honor_list: ExperienceType[] = [
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
      "applied these learnings at work, achieving 10x storage savings (400GB → 40GB) by optimizing schema design and leveraging ClickHouse's compression and engine capabilities.",
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
