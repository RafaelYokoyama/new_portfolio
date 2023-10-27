import {
  FaAddressCard,
  FaCode,
  FaDog,
  FaGraduationCap,
  FaHome,
} from "react-icons/fa"

export const tabNavigation = [
  {
    title: "Home",
    icon: <FaHome />,
    link: "#",
  },
  {
    title: "About",
    icon: <FaAddressCard />,
    link: "#about",
  },
  {
    title: "Resume",
    icon: <FaGraduationCap />,
    link: "#experience",
  },
  {
    title: "Portifolio",
    icon: <FaCode />,
    link: "#projects",
  },
  {
    title: "Contact",
    icon: <FaDog />,
    link: "#contact",
  },
];