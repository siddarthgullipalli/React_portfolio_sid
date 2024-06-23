import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React, as well as back-end technologies like Django ,Flask, MySQL,REST API ,Postman and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with Aushadam(Healtech-Startup), where I actively worked on technologies like  React, Django, Flask, MySQL,REST API,Postman and Figma. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of Web Developemnt, I have keen intrest in the fields of Data Science and Generative AI ,I published two research papers in the International Research Journal of Engineering and Technology in Deep Learing Technologies and Natural Language Processing.`;

export const EXPERIENCES = [
  {
    year: "2022 - 2024",
    role: "Fullstack Developer",
    company: "Aushadam(Health-tech startup)",
    description: `• Designed and developed user interfaces for web applications using  React. 
                  •	Developed an API for accessing data from  ABHA  from  NDHM sandbox.
                  •	Developed and Flask web app for Digitalizing all the patient health records from the past which can be accessed by the doctor using the unique ID for a given patient
                  
.`,
    technologies: ["React", "CSS", "Flask","REST API","Postman"],
  },
  {
    year: "2022 - 2023",
    role: "Senior Full Stack Developer",
    company: "Google Developer Student Club.",
    description: `•	Led a team in developing and maintaining  a Django-based registration website for GDSC WOW fest, accommodating 5000 participants.
•	Integrated Razorpay API for secure payments and streamlined payment links.
•	Conducted comprehensive testing on local and deployment servers, resolving bugs to ensure a seamless user experience.
•	Implemented unique QR code generation and confirmation emails for registrants, efficiently managing event check-ins and handling faulty transactions.
`,
    technologies: ["Django", "HTML", "CSS", "JavaScript"],
  },
 
];

export const PUBLICATIONS = [
  {
    year: "Aug 2023 – Oct 2023",
    role: "•	A Comprehensive Evaluation of Machine Learning Approaches for Breast Cancer Categorization",
    company: "International Research Journal of Engineering and Technology",
    description: `Breast cancer is the most common disease among women. There were approximately 2,00,000 deaths from breast cancer worldwide in 2022. As we progress to 2023, an even more alarming projection looms, with an anticipated 627,000 precious lives at risk of being lost to this cancer. Early detection and accurate classification of breast cancer are imperative for effective treatment and patient outcomes. This research paper aims to compare the performance of three models—Convolutional Neural Networks (CNN), Artificial Neural Networks (ANN), and Support Vector Machines (SVM)—in the context of breast cancer classification. The study seeks to determine which model yields the highest accuracy and reliability in diagnosing breast cancer from Breast Histopathology Images. The CNN model demonstrated the highest classification accuracy at 87%, followed by SVM at 76% and ANN at 71%. CNN also exhibited superior sensitivity in detecting malignant cases, while ANN had the fastest training time. Our findings suggest that CNN is the most promising model for breast cancer classification due to its high accuracy and sensitivity.`,
    
  },
  {
    year: "March 2024 - May 2024",
    role: "SENTIMENT ANALYSIS OF COLLEGES IN INDIA",
    company: "International Research Journal of Engineering and Technology",
    description: `My published research, featured in the International Research Journal of Engineering and Technology, leverages fine-tuned BERT models for sentiment analysis of student experiences at Indian colleges. This innovative approach delves deeper than traditional rankings, capturing student perceptions on various aspects of college life. By utilizing the power of BERT, I was able to analyze student sentiment with greater accuracy and nuance. This research empowers students with informed college choices based on real student experiences, while also providing actionable insights for college administrators to improve and tailor their marketing efforts.`,
    
  },
 
];

export const PROJECTS = [
  {
    title: "Detection of COVID-19 Cases from X-ray Images Using Capsule-based Network",
    image: project1,
    description:
      "Cleaned data , by resizing(to[50,50,3]) , normalized the images.Used Computed Tomography (CT) scans and X-ray images to detect COVID-19 positive cases.Achieved the lowest loss of 0.0092, best accuracy of 0.9885, f1-score of 0.9883, precision of 0.9859, recall of 0.9908 and Area Under the Curve (AUC) of 0.9948 using Capsule Networks",
    technologies: ["Deep Learning", "Capsule Networks", "Tensorflow", "Pandas", "Numpy" ],
  },
  {
    title: "Payment integration website for online ticket generation",
    image: project2,
    description:
      "•	Used razorpay payment integration system to accept payments.Developed an automated unique QR for every successful transaction.Upon scanning of the QR the details of the USER is retrieved automatically for verification.",
    technologies: ["Django", "HTML", "CSS", "Postman"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind CSS", "React", "Framer Morion"],
  },
  {
    title: "Twitter-Based Sentiment Analysis and Classification of Top Indian Colleges using BERT and Apriori Algorithms",
    image: project4,
    description:
      "Extracted Twitter data using specific keywords for comparative analysis of AIIMS, IIT, and NIT.Evaluated colleges based on predefined metrics: 'academics,' 'faculty,' 'infrastructure,' 'placement,' 'events,' and 'reputation.'Cleaned the data by removing extraneous content like hyperlinks and retweets.Utilized BERT for sentiment analysis, categorizing tweets as positive, negative, or neutral.Employed the Apriori algorithm to identify frequent patterns, revealing valuable insights from a refined dataset.",
    technologies: ["Deep Learning", "Bidirectional Encoders Representation from Transformers", "Tensorflow", "Pandas", "Numpy"],
  },
];

export const CONTACT = {
  address: "Visakhapatnam,Andhra Pradesh",
  phoneNo: "+91 8985 373 433 ",
  email: "sgullipalli1@gmail.com",
};
