// ✅ This file only stores your notes data — no JSX rendering here
import IntroductionOfDm from '/IntroOfDM.jpg';
const DataMiningNotes = {
  title: "Data Mining",
  topics: [
    "Introduction to Data Mining",
    "Related technologies - Machine Learning",
    "Stages of the Data Mining Process",
    "Data Mining Techniques",
    "Knowledge Representation Methods",
    "Discretization and generating concept hierarchies ",
    "Frequent item sets and association rules",
    "Market basket analysis",
    "Apriori algorithm",
    "FP growth algorithm",
    "Classification",
    "Introduction of Decision tree,",
    "tree induction algorithm ",
    "Split algorithm based on information theory",
    "Split algorithm based on gini index",
    "Naive based methods.",
    "Introduction of Clustering",
    "Types of data in cluster analysis",
    "Categorizations of major clustering methods ",
    "Introduction of Web Data Mining",
    "Type of web mining",
    "Text mining,",
    "Temporal and Spatial data mining ",
  ],
  notes: {
    "Introduction to Data Mining": [
      {
        sections: [
          {
            heading: "What is Data Mining?",
            content:
            "Data Mining is the process of discovering meaningful patterns, correlations, anomalies, and insights from large volumes of data using statistical, mathematical, and machine learning techniques.The goal is to uncover hidden patterns and relationships to support informed decision-making and predictions using methods like clustering, classification, regression and anomaly detection.",
          },
          {
            subheading: "Workflow of Data Mining:",
            image: IntroductionOfDm,

          },
        ],
      },
      {
        sections: [
          {
            heading: "Application Of Data mining",
            subheading:"1. Business and Marketing",
            content:
              "Businesses use data mining to analyze customer behavior, preferences, and buying patterns to make strategic decisions, increase profit, and improve customer satisfaction.",
          },
          {
            subheading:"2. Banking and Finance",
            content:
              "Banks and financial institutions apply data mining to detect fraud, analyze credit risk, and improve investment decisions.",
          },
          {
            subheading: "3. Healthcare and Medicine",
            content:
              "Data mining is the process of discovering useful patterns from large datasets.",
          },
          {
            subheading: "4. Education",
            content:"Educational institutions use data mining to enhance learning outcomes, analyze student performance, and improve administrative decisions.",
          },
          {
            subheading: "5. E-commerce and Retail",
            content:"E-commerce companies rely heavily on data mining to understand customer behavior,and increase sales.",
          },
          
        ],
      },
      {
        sections: [
          {
            subheading: "6. Telecommunication Industry",
            content:
              "Telecom companies use data mining to analyze usage patterns, reduce churn, and improve network performance.",
          },
          {
            subheading: "7. Government and Public Sector",
            content:
              "Governments use data mining for policy planning, crime prevention, fraud detection, and social welfare analysis.",
          },
          {
            subheading: "8. Manufacturing and Industry",
            content:
              "Data mining helps industries improve product quality, reduce costs, and increase efficiency.",
          },
          {
            heading: "Advantages of Data Mining",
          },
          {
            content:"● Helps in making informed decisions"
          },
          {
            content:"● Predictive analysis for future trends"
          },
          {
            content:"● Improves customer satisfaction"
          },
          {
            content:"● Detects fraud or anomalies"
          },
          {
            content:"● Provides competitive advantage"
          },
        ],
      },
      {
        sections: [
          {
            heading: "Major Challenges in Data Mining",
          },
          {
            subheading:"1. Data Quality Issues",
            content:"Real-world data is often incomplete, inconsistent, or noisy.",
          },
          {
            subheading:"2. Handling Large and Complex Data",
            content:"The volume of data generated today (Big Data) is massive.",
          },
          {
            subheading:"3. Scalability and Performance",
            content:"Algorithms that work on small datasets may fail or slow down on large ones.",
          },
          {
            subheading:"4. Privacy and Security Concerns",
            content:"Mining personal data can raise privacy violations and ethical issues.",
          },
          {
            subheading:"5. Data Dimensionality",
            content:"Many datasets have hundreds or thousands of attributes (high-dimensional data).",
          },
        ],
      },
    ],
    "Unit III - Classification": [
      {
        sections: [
          {
            heading: "Decision Tree",
            content:
              "A tree-like model used for classifying data into categories based on input features.",
          },
        ],
      },
    ],
    "Unit IV - Clustering": [
      {
        sections: [
          {
            heading: "K-Means Clustering",
            content:
              "An unsupervised algorithm that partitions data into k clusters based on similarity.",
          },
        ],
      },
    ],
    "Unit V - Web Data Mining": [
      {
        sections: [
          {
            heading: "Web Usage Mining",
            content: "Analyzes user behavior through web logs and clickstream data.",
          },
        ],
      },
    ],
  },
};

export default DataMiningNotes;
