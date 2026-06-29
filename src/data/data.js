import { FaInstagram, FaLinkedinIn, FaFilePdf } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiOutlineCodeBracket, HiOutlineCommandLine, HiOutlineGlobeAlt, HiOutlineDocumentText, HiOutlineNewspaper } from "react-icons/hi2";
import { SiGithub, SiLeetcode, SiMedium } from "react-icons/si";

export const socials = [
  {
    name: "Instagram",
    link: "https://instagram.com/_vivek.nayak_/",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/vivek-nayak-manur",
    icon: FaLinkedinIn,
  },
  {
    name: "Email",
    link: "mailto:vivekhubstrt@gmail.com",
    icon: MdEmail,
  },
];

export const projects = [
  {
    title: "Project 1",
    description: "description",
    github: "https://github.com/username/student-management-system",
    icon: HiOutlineCodeBracket,
    link: "https://www.google.com"
  },
  {
    title: "Project 2",
    description: "description",
    github: "https://github.com/username/weather-app",
    icon: HiOutlineCommandLine,
    link: "https://www.google.com"
  },
  {
    title: "Project 3",
    description: "description",
    github: "https://github.com/username/portfolio",
    icon: HiOutlineGlobeAlt,
    link: "https://www.google.com"
  },
  {
    title: "Project 4",
    description: "description",
    github: "https://github.com/username/portfolio",
    icon: HiOutlineGlobeAlt,
    link: "https://www.google.com"
  },
  {
    title: "Project 5",
    description: "description",
    github: "https://github.com/username/portfolio",
    icon: HiOutlineGlobeAlt,
    link: "https://www.google.com"
  },
  {
    title: "Project 6",
    description: "description",
    github: "https://github.com/username/portfolio",
    icon: HiOutlineGlobeAlt,
    link: "https://www.google.com"
  },
];

export const skills = [
  "Python", "C++", "ReactJS", "MongoDB", "Django", "ExpressJS", "Pandas", "NumPy"
]

export const experiences = [
  {
    start: "Jun 2025",
    end: "Sep 2025",
    role: "Software Developer Intern",
    company: "Microsoft",
  },
  {
    start: "Jan 2025",
    end: "May 2025",
    role: "Frontend Developer Intern",
    company: "Infosys",
  },
  {
    start: "Aug 2024",
    end: "Dec 2024",
    role: "Web Development Intern",
    company: "TCS",
  },
  {
    start: "May 2024",
    end: "Jul 2024",
    role: "React Developer Intern",
    company: "Accenture",
  },
  {
    start: "Jan 2024",
    end: "Apr 2024",
    role: "Freelance Web Developer",
    company: "Self-Employed",
  },
];

export const stats = [
  {
    title: "GitHub",
    icon: SiGithub,
    link: "https://github.com/your-username",
    details: [
      ["25", "Repos"],
      ["120", "Stars"],
      ["350", "Commits"],
    ],
  },
  {
    title: "LeetCode",
    icon: SiLeetcode,
    link: "https://leetcode.com/u/your-username",
    details: [
      ["220", "Solved"],
      ["1650", "Rating"],
      ["50%", "Top"],
    ],
  },
  {
    title: "Medium",
    icon: HiOutlineNewspaper,
    link: "https://medium.com/@your-username",
    details: [
      ["12", "Articles"],
      ["8K", "Views"],
      ["320", "Followers"],
    ],
  },
  {
    title: "Resume",
    icon: HiOutlineDocumentText,
    link: "/resume.pdf",
    details: [
      ["MCA", "Degree"],
      ["2026", "Batch"],
      ["PDF", "Download"],
    ],
  },
];