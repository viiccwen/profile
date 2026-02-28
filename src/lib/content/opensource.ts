import type { OpenSourceType } from "./types";

export const open_source_list: OpenSourceType[] = [
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
        text: "Optimized UI API requests performance by selective auto-refresh strategy, reducing requests by up to 78%",
      },
      {
        text: "Contributed to Apache Airflow, including API server feature & fixes.",
        link: "https://github.com/apache/airflow/pulls?q=is%3Apr+author%3Aviiccwen",
      },
    ],
  },
  {
    title: "Apache Mahout",
    subtitle: "Top 24 Contributor",
    period: "Jan 2026 - Present",
    logo: "/mahout.jpg",
    repository: {
      owner: "apache",
      repo: "mahout",
    },
    description: [
      {
        text: "Optimized GPU amplitude encoding for CUDA tensors in zero-copy, and reducing encoding time by 33%.",
      },
      {
        text: "Designed automated Python, Rust API documentations and CI/CD pipeline for QuMat and QDP.",
      },
      {
        text: "Established a multi-language testing infrastructure to monitor Rust and Python code coverage.",
      },
      {
        text: "Extended Mahout's QDP Python and Rust APIs to support float32 GPU pipelines.",
      },
      {
        text: "Contributed 20+ PRs focusing on designing & optimizing QDP performance.",
        link: "https://github.com/apache/mahout/pulls?q=is%3Apr+author%3Aviiccwen",
      },
      {
        text: "Helped review 45+ PRs focusing on code quality and performance.",
        link: "https://github.com/apache/mahout/pulls?q=is%3Apr+reviewed-by%3Aviiccwen",
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
        text: "Simplified scheduling by removing deprecated settings, improving compatibility with newer Airflow versions.",
      },
      {
        text: "Contributed 5+ PRs focused on improving DAG generation & version migration.",
        link: "https://github.com/astronomer/dag-factory/pulls?q=is%3Apr+author%3Aviiccwen",
      },
    ],
  },
];
