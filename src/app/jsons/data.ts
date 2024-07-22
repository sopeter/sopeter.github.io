export const experience = [
  {
    employer: "Flexcar",
    date: "January - September 2023",
    title: "Software Engineer, Risk and Viability",
    image: "flexcar.png",
    description:
      "I worked as a backend engineer for the Risk and Viability team at Flexcar, focusing on improving risk assessments for both new and existing customers in KYC and payment processing. I developed multiple microservices using Spring Boot to enhance custom scoring based on risk indices and configure pricing based on user risk scores. Additionally, I integrated third-party vendor data into Flexcar's systems and communicated extensively with stakeholders to launch Flexcar 2.0, which included implementing customer risk-based pricing using rules engines.",
    website: "https://www.flexcar.com/",
    skills: [
      "Java",
      "Spring Boot",
      "Typescript",
      "Node.js",
      "React.js",
      "GraphQL",
      "Docker",
      "Kubernetes",
      "PostgreSQL",
    ],
  },
  {
    employer: "Gilded",
    date: "January - July 2022",
    title: "Software Engineer Co-op, Integration & Mobile App",
    image: "gilded.png",
    description:
      "I primarily developed the main ETL pipeline for the Gilded tech stack, utilizing the Azure cloud ecosystem to asynchronously validate and transfer transaction data from blob storage to CosmosDB and the internal blockchain API. Additionally, I created a microservice for the Mobile App team to receive generic user data and respond with descriptive sentences for the front-end.",
    website: "https://gildedco.com/",
    skills: [
      "Java",
      "Spring Boot",
      "Azure",
      "Azure Functions",
      "Azure Event Hub",
      "Azure Cosmos DB",
    ],
  },
];

export const projects = [
  {
    name: "Tune",
    image: "tune.jpeg",
    description:
      "Developed a social web application that allows users to see trending songs, search for any song, and like songs. Additionally, the application enables users to follow other users and see which songs they liked. It utilizes the Spotify API to query songs and playlists.",
    website: "https://github.com/sopeter/tune-react",
    skills: ["React.js", "Node.js", "MongoDB", "Typescript"],
  },
  {
    name: "NBA All Star Votes",
    image: "nba-all-stars.avif",
    description:
      "Developed a regression-based machine learning model to predict the number of All-Star votes for NBA players using their box and RAPTOR scores. Applied data pre-processing and visualization techniques to ensure high-quality training data. Achieved 95.1% accuracy in predicting whether a player made the All-Star team.",
    website:
      "https://github.com/sopeter/ai_ml-projects/tree/main/NBA_All_Star_Predictor",
    skills: ["Python", "Pandas", "Sklearn", "Machine Learning"],
  },
  {
    name: "FHS Notes",
    image: "fhsNotes.png",
    description:
      "Developed an iOS application for Fremd High School students to easily make and organize notes by classes and date. Integrated with Firebase and Google Sign-In for authenticated logins and data storage.",
    website: "https://github.com/sopeter/fhsNotes",
    skills: ["Swift", "Objective C", "Firebase"],
  },
];

export const skills = {
  languages: "Java, Javascript, Typescript, Python, Swift",
  frameworks: "Spring Boot, Node.js, React.js, Next.js, Flask",
  databases: "SQL, PostgreSQL, MySQL, NoSQL, MongoDB, CosmosDB",
  tools: "Git, AWS, Azure, Tableau",
};
