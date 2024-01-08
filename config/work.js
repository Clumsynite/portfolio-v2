import { arrayOf, objectOf, shape, string } from "prop-types";

const workProjects = {
  fefifo: {
    label: "DDFN - FEFIFO",
    description: "A system built to help with the goal of making farming easier for farmers.",
    tech_stack: { frontend: ["react", "reactNative"], backend: ["koa"], database: ["arangodb", "couchdb", "pouchdb"] },
    experience: [
      "Designed and implemented an intuitive web-based admin console using ReactJS, allowing administrators to manage and monitor multiple farms efficiently",
      "Developed a cross-platform mobile application using React Native to provide farmers with a user-friendly interface for farm-related activities.",
      "Implemented a robust crop management module allowing farmers to track and monitor the entire crop lifecycle, from planting to harvesting.",
      "Created an inventory management feature enabling farmers to keep track of agricultural inputs, such as seeds, fertilizers, and pesticides, ensuring efficient resource utilization.",
      "Adopted an offline-first development approach, prioritizing the design and functionality of the system to cater to offline scenarios, recognizing the importance of reliable operation in agricultural environments with unpredictable connectivity.",
    ],
  },
  erp: {
    label: "ERP",
    description: "Enterprise Resource Planning (ERP) Web Application",
    tech_stack: {
      frontend: ["react"],
      backend: ["express", "ts"],
      database: ["postgresql", "mongodb"],
    },
    experience: [
      "Implemented a robust real-time transaction processing system capable of efficiently managing high-volume financial transactions while maintaining a detailed transaction history and logs",
      "Implemented stringent security measures, including role-based access controls, to protect sensitive internal transaction data and ensure compliance with industry standards.",
      "Established robust data validation mechanisms to uphold data integrity, minimizing discrepancies in internal transactional data.",
      "Developed reporting modules to generate insightful reports on internal transactions, aiding in data-driven decision-making for the organization.",
      "Designed and integrated a comprehensive logging system to capture and store transaction details, enabling thorough audit trails and compliance with regulatory requirements.",
      "mplemented automation features within the ERP system to streamline routine internal transactions, reducing manual effort and minimizing errors.",
      "Conducted regular reviews of internal transaction processes, identifying areas for improvement and implementing optimizations to enhance overall system performance.",
      "Queue up transactions to ensure that they are processed in the order they are received. This can help prevent bottlenecks and maintain the integrity of internal transactions.",
      "Developed a modular and extensible architecture, allowing seamless integration of new payment gateways without requiring significant changes to the core codebase.",
      "Reduced developer dependency by creating a userfriendly configuration interface, enabling non-technical users to manage and prioritize payment gateway preferences.",
      "Collaborated with cross-functional teams to gather requirements and ensure the system met the diverse needs of different projects and business scenarios",
    ],
  },
};

const work = [
  {
    start: "Jan 2021",
    end: "Aug 2022",
    company: "Tidal Wave Technologies",
    designation: "Software Developer",
    projects: [workProjects.fefifo],
  },
  {
    start: "Sept 2022",
    end: "Ongoing",
    company: "Server Lane Technologies",
    designation: "Software Engineer (Backend Developer)",
    projects: [workProjects.erp],
  },
];

export default work;

export const workProject = shape({
  label: string.isRequired,
  description: string.isRequired,
  tech_stack: objectOf(arrayOf(string.isRequired)).isRequired,
  experience: arrayOf(string),
});

export const workType = shape({
  start: string.isRequired,
  end: string.isRequired,
  company: string.isRequired,
  designation: string.isRequired,
  projects: arrayOf(workProject),
});
