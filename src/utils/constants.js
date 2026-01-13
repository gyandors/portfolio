import { BiSolidMessageSquareEdit } from "react-icons/bi";
import {
  FaFacebookSquare,
  FaGithub,
  FaLaptopCode,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosApps, IoMdHome } from "react-icons/io";
import { IoReader } from "react-icons/io5";

export const socialLinks = [
  {
    id: 1,
    title: "GitHub",
    link: "https://github.com/gyandors",
    icon: FaGithub,
  },
  {
    id: 2,
    title: "LinkedIn",
    link: "https://linkedin.com/in/gyandors",
    icon: FaLinkedin,
  },
  {
    id: 3,
    title: "Facebook",
    link: "https://facebook.com/gyandors",
    icon: FaFacebookSquare,
  },
  {
    id: 4,
    title: "X",
    link: "https://x.com/gyandors",
    icon: FaSquareXTwitter,
  },
];

export const navLinks = [
  { id: 1, title: "Home", link: "home", icon: IoMdHome },
  { id: 2, title: "Skills", link: "skills", icon: FaLaptopCode },
  { id: 3, title: "Projects", link: "projects", icon: IoIosApps },
  { id: 4, title: "Notes", link: "notes", icon: IoReader },
  { id: 5, title: "Contact", link: "contact", icon: BiSolidMessageSquareEdit },
];

export const skills = [
  {
    id: 1,
    title: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    icon: "/images/icons/html.png",
  },
  {
    id: 2,
    title: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    icon: "/images/icons/css.png",
  },
  {
    id: 3,
    title: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: "/images/icons/javascript.png",
  },
  {
    id: 4,
    title: "React",
    link: "https://react.dev",
    icon: "/images/icons/react.png",
  },
  {
    id: 5,
    title: "Router",
    link: "https://reactrouter.com/home",
    icon: "/images/icons/router.png",
  },
  {
    id: 6,
    title: "Redux",
    link: "https://redux-toolkit.js.org",
    icon: "/images/icons/redux.png",
  },
  {
    id: 7,
    title: "Next.js",
    link: "https://nextjs.org",
    icon: "/images/icons/nextjs.png",
  },
  {
    id: 8,
    title: "Tailwind CSS",
    link: "https://tailwindcss.com",
    icon: "/images/icons/tailwind.png",
  },
  {
    id: 9,
    title: "Bootstrap",
    link: "https://getbootstrap.com",
    icon: "/images/icons/bootstrap.png",
  },
  {
    id: 10,
    title: "NodeJS",
    link: "https://nodejs.org",
    icon: "/images/icons/nodejs.png",
  },
  {
    id: 11,
    title: "Express",
    link: "https://expressjs.com",
    icon: "/images/icons/expressjs.png",
  },
  {
    id: 12,
    title: "Git",
    link: "https://git-scm.com",
    icon: "/images/icons/git.png",
  },
  {
    id: 13,
    title: "GitHub",
    link: "https://github.com",
    icon: "/images/icons/github.png",
  },
];

export const notes = [
  {
    id: 1,
    title: "DSA using JavaScript",
    link: "https://1drv.ms/o/s!AjoJL_6fTsC7oW0-xugSU4jnUCRN",
    icon: "/images/icons/dsa.png",
  },
  {
    id: 2,
    title: "HTML, CSS, and JavaScript",
    link: "https://1drv.ms/o/s!AjoJL_6fTsC7gYZEEgmWEQanNy3r6w",
    icon: "/images/icons/html.png",
  },
  {
    id: 3,
    title: "Advanced JavaScript and Git",
    link: "https://1drv.ms/o/s!AjoJL_6fTsC7s3_vN1Gsv3vbL8d6",
    icon: "/images/icons/javascript.png",
  },
  {
    id: 4,
    title: "React and Next",
    link: "https://1drv.ms/o/s!AjoJL_6fTsC7gYZSvhNl_SRmfVNJag",
    icon: "/images/icons/react.png",
  },
  {
    id: 5,
    title: "Node, Express, and Database",
    link: "https://1drv.ms/o/s!AjoJL_6fTsC7pwEZKJP4Ae8EglX_",
    icon: "/images/icons/nodejs.png",
  },
];

export const projects = [
  {
    id: 1,
    title: "Budget Buddy — Your money, managed with ease.",
    description:
      "Developed a user-friendly expense tracker application using React to manage and monitor personal finances effectively. Implemented features such as adding, editing, and deleting expenses with real-time updates to the UI. Utilized Redux to manage state and lifecycle methods for an optimized user experience. Implemented user authentication using Firebase, providing secure login and registration functionalities. Leveraged Firebase for real-time database management, enabling seamless data storage and retrieval.",
    link: "https://budgetbuddy-byg.web.app",
    github: "https://github.com/gyandors/budget-buddy",
    images: [
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
  },
  {
    id: 2,
    title: "MailNest — A safe place for all your messages.",
    description:
      "Developed a comprehensive mail application using React to facilitate efficient email communication. Implemented features such as composing, sending, receiving, and organizing emails for enhanced user productivity. Designed a clean and intuitive UI with Tailwind CSS, improving user experience and accelerating development with utility-first styling. Ensured secure email transactions by implementing authentication and authorization mechanisms using Firebase.",
    link: "https://mailnest-byg.web.app",
    github: "https://github.com/gyandors/mailnest",
    images: [
      "/images/mailnest/1.png",
      "/images/mailnest/2.png",
      "/images/mailnest/3.png",
      "/images/mailnest/4.png",
      "/images/mailnest/5.png",
      "/images/mailnest/6.png",
      "/images/mailnest/7.png",
      "/images/mailnest/8.png",
    ],
  },
];
