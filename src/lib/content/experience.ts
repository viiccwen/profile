import type { ExperienceType } from "./types";

export const experience_list: ExperienceType[] = [
  {
    title: "Software Engineer Internship",
    subtitle: "Fantasy X Games",
    period: "Jul 2025 - Feb 2026",
    logo: "/fxgames.png",
    description: [
      "Optimized backend transaction merging with Kafka, achieving 3× throughput improvement and resolving transaction ordering issues.",
      "Eliminated N+1 queries in the alerting system, improving system response time from 30s to 10s.",
      "Migrated data storage to ClickHouse, cutting storage costs by 90% (from 400GB to 40GB).",
      "Designed 20+ ETL pipeline using Apache Airflow, reducing the data team's preprocessing workload by 20 hours per month.",
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
