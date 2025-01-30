import ProjectItem from "./ProjectItem";

const projects = [
  {
    _id: "1",
    title: "Budget Buddy",
    description:
      "Developed a user-friendly expense tracker application using React to manage and monitor personal finances effectively. Implemented features such as adding, editing, and deleting expenses with real-time updates to the UI. Utilized Redux to manage state and lifecycle methods for an optimized user experience. Implemented user authentication using Firebase, providing secure login and registration functionalities. Leveraged Firebase for real-time database management, enabling seamless data storage and retrieval.",
    image: [
      "/images/budget-buddy/1.png",
      "/images/budget-buddy/2.png",
      "/images/budget-buddy/3.png",
      "/images/budget-buddy/4.png",
      "/images/budget-buddy/5.png",
      "/images/budget-buddy/6.png",
      "/images/budget-buddy/7.png",
      "/images/budget-buddy/8.png",
      "/images/budget-buddy/9.png",
      "/images/budget-buddy/10.png",
      "/images/budget-buddy/11.png",
    ],
    link: "https://budgetbuddy-byg.web.app/",
    github: "https://github.com/gyandors/budget-buddy/",
  },
  {
    _id: "2",
    title: "Rmail - The Email Service",
    description:
      "Developed a comprehensive mail application using React to facilitate efficient email communication. Implemented features such as composing, sending, receiving, and organizing emails for enhanced user productivity. Designed a clean and intuitive UI with Tailwind CSS, improving user experience and accelerating development with utility-first styling. Ensured secure email transactions by implementing authentication and authorization mechanisms using Firebase.",
    image: [
      "/images/mail/1.png",
      "/images/mail/2.png",
      "/images/mail/3.png",
      "/images/mail/4.png",
      "/images/mail/5.png",
    ],
    link: "https://mail-box-c1237.web.app/",
    github: "https://github.com/gyandors/Rmail/",
  },
  {
    _id: "3",
    title: "E-Commerce",
    description:
      "Implemented routing with React Router, enabling seamless navigation between product pages. Utilized Context API for state management, ensuring efficient data flow and component communication. Designed a visually appealing UI with Vanilla CSS, focusing on user interface design principles and responsive layouts. Implemented shopping cart functionality, allowing users to add and remove items dynamically.",
    image: [
      "/images/e-comm/1.png",
      "/images/e-comm/2.png",
      "/images/e-comm/3.png",
    ],
    link: "https://regimie.web.app/",
    github: "https://github.com/gyandors/Regimie/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-black via-gray-950 to-cyan-950"
    >
      <div className="min-h-screen w-11/12 m-auto py-8 flex flex-col justify-center items-center">
        <h1 className="w-full text-2xl font-semibold pb-2 mb-12 border-b-2 border-b-gray-500">
          Projects
        </h1>

        <div className="w-full space-y-12">
          {projects.map((project) => (
            <ProjectItem key={project._id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
