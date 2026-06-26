const MachineLearningNotes = {
  title: "Machine Learning",

  topics: [
    "Unit I - Introduction to ML",
    "Unit II - Supervised Learning",
    "Unit III - Unsupervised Learning",
    "Unit IV - Ensemble Learning",
    "Unit V - Applications of ML"
  ],

  notes: {
    "Unit I - Introduction to ML": [
      {
        sections: [
          {
            heading: "Introduction to Machine Learning",
            content:
              "Machine Learning is a field of Artificial Intelligence that enables systems to learn patterns from data and improve their performance over time without being explicitly programmed."
          },
          {
            subheading: "Why ML is Important?",
            content:
              "ML helps automate decision-making, improve accuracy, handle large data, and detect complex patterns that humans may miss."
          },
          {
            heading: "Types of Machine Learning",
            content:
              "1. Supervised Learning\n2. Unsupervised Learning\n3. Reinforcement Learning\n4. Semi-supervised Learning\n5. Deep Learning"
          }
        ]
      },
      {
        sections: [
          {
            heading: "Supervised Learning",
            subheading: "Definition",
            content:
              "Supervised Learning uses labeled data to train models. The goal is to learn a mapping from input (X) to output (Y)."
          },
          {
            subheading: "Examples",
            content:
              "• Email Spam Detection\n• Weather Prediction\n• House Price Prediction"
          }
        ]
      },
      {
        sections: [
          {
            heading: "Unsupervised Learning",
            content:
              "Unsupervised Learning finds hidden patterns from unlabeled data. There is no target output variable."
          },
          {
            subheading: "Examples",
            content:
              "• Customer Segmentation\n• Anomaly Detection\n• Data Compression"
          }
        ]
      },
      {
        sections: [
          {
            heading: "Reinforcement Learning",
            content:
              "Reinforcement Learning trains an agent to interact with the environment and maximize reward. Used in robotics, gaming, automation."
          }
        ]
      }
    ],

    // -------------------------------------------------------
    // ✅ UNIT II — SUPERVISED LEARNING
    // -------------------------------------------------------
    "Unit II - Supervised Learning": [
      {
        sections: [
          {
            heading: "Regression Techniques",
            content:
              "Regression predicts continuous values.\nExamples:\n• Linear Regression\n• Polynomial Regression\n• Ridge & Lasso Regression"
          },
          {
            subheading: "Linear Regression Theory",
            content:
              "Linear Regression finds the best-fit line using the formula: Y = mX + C\nIt minimizes the cost function using Gradient Descent."
          }
        ]
      },
      {
        sections: [
          {
            heading: "Classification Techniques",
            content:
              "Classification predicts discrete categories.\nExamples:\n• Logistic Regression\n• Decision Tree\n• Random Forest\n• SVM"
          },
          {
            subheading: "Logistic Regression Theory",
            content:
              "Logistic Regression uses sigmoid function to classify data. It outputs probability between 0 and 1."
          }
        ]
      },
      {
        sections: [
          {
            heading: "Decision Tree",
            content:
              "Decision Trees split data using information gain, Gini index, or entropy. They are easy to visualize but prone to overfitting."
          }
        ]
      },
      {
        sections: [
          {
            heading: "Support Vector Machine (SVM)",
            content:
              "SVM finds the best separating hyperplane. It works well in high-dimensional data and uses kernel trick."
          }
        ]
      }
    ],

    // -------------------------------------------------------
    // ✅ UNIT III — UNSUPERVISED LEARNING
    // -------------------------------------------------------
    "Unit III - Unsupervised Learning": [
      {
        sections: [
          {
            heading: "Clustering",
            content:
              "Clustering groups similar objects together. It is used in customer segmentation, grouping news articles, image compression."
          },
          {
            subheading: "K-Means Algorithm Theory",
            content:
              "Steps:\n1. Choose number of clusters K\n2. Initialize centroids\n3. Assign data points to nearest centroid\n4. Recalculate centroids\n5. Repeat until convergence"
          }
        ]
      },
      {
        sections: [
          {
            heading: "Hierarchical Clustering",
            content:
              "Builds a hierarchy of clusters using either Agglomerative or Divisive approach."
          },
          {
            subheading: "Applications",
            content:
              "• DNA sequencing\n• Social network analysis\n• Document clustering"
          }
        ]
      },
      {
        sections: [
          {
            heading: "Dimensionality Reduction",
            content:
              "High-dimensional data increases complexity. Dimensionality reduction reduces features while keeping max variance."
          },
          {
            subheading: "PCA Theory",
            content:
              "PCA transforms features into principal components based on eigenvalues and covariance matrix."
          }
        ]
      }
    ],

    // -------------------------------------------------------
    // ✅ UNIT IV — ENSEMBLE LEARNING
    // -------------------------------------------------------
    "Unit IV - Ensemble Learning": [
      {
        sections: [
          {
            heading: "What is Ensemble Learning?",
            content:
              "Ensemble Learning combines multiple models to improve accuracy. It reduces overfitting and increases reliability."
          }
        ]
      },
      {
        sections: [
          {
            heading: "Bagging",
            content:
              "Bagging (Bootstrap Aggregating) trains models on random subsets of data and averages predictions.\nExample: Random Forest"
          }
        ]
      },
      {
        sections: [
          {
            heading: "Boosting",
            content:
              "Boosting trains models sequentially and focuses on misclassified samples.\nExamples:\n• AdaBoost\n• Gradient Boosting\n• XGBoost"
          }
        ]
      },
      {
        sections: [
          {
            heading: "Stacking",
            content:
              "Stacking combines predictions of multiple models using a meta-classifier."
          }
        ]
      }
    ],

    // -------------------------------------------------------
    // ✅ UNIT V — APPLICATIONS OF ML
    // -------------------------------------------------------
    "Unit V - Applications of ML": [
      {
        sections: [
          {
            heading: "Image Processing",
            content:
              "Used in face detection, handwriting recognition, object detection, medical image analysis."
          },
          {
            heading: "Natural Language Processing (NLP)",
            content:
              "ML helps in text classification, chatbots, language translation, sentiment analysis."
          }
        ]
      },
      {
        sections: [
          {
            heading: "Recommendation Systems",
            content:
              "Used by YouTube, Netflix, Amazon. Types:\n• Collaborative Filtering\n• Content-based Filtering\n• Hybrid Methods"
          }
        ]
      },
      {
        sections: [
          {
            heading: "Fraud Detection",
            content:
              "ML identifies unusual transaction patterns in banking, insurance, and e-commerce."
          }
        ]
      },
      {
        sections: [
          {
            heading: "Healthcare",
            content:
              "Used for disease prediction, drug discovery, and medical diagnosis."
          }
        ]
      }
    ]
  }
};

export default MachineLearningNotes;
