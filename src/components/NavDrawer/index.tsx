import React, { useState } from "react";
import { Container, List } from "./styles";
import {
  FaPlus,
  FaMinus,
  FaAddressCard,
  FaCode,
  FaDog,
  FaGraduationCap,
  FaHome,
} from "react-icons/fa";
import MediaMatch from "../MediaMatch";

const NavDrawer: React.FC = () => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  const activeMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const teste = [
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

  return (
    <Container>
      <div className="navigation">
        <List menuActive={isMenuActive}>
          <ul>
            {teste?.map(({ icon, title, link }) => (
              <li key={title}>
                <a href={link}>
                  <span className="icon">{icon}</span>
                  <MediaMatch hideOnMobileLessIpad>
                    <span className="title">{title}</span>
                  </MediaMatch>
                </a>
              </li>
            ))}
          </ul>
        </List>
        <MediaMatch hideOnMobile>
          <div className="toggle" onClick={activeMenu}>
            {isMenuActive === false ? <FaPlus /> : <FaMinus />}
          </div>
        </MediaMatch>
      </div>
    </Container>
  );
};

export default NavDrawer;
