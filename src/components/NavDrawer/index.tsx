import React, { useState } from "react";
import { Container, List } from "./styles";
import { FaPlus, FaMinus } from "react-icons/fa";
import MediaMatch from "../MediaMatch";
import { tabNavigation } from "../../lib/tabNavigation";

const NavDrawer: React.FC = () => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  const activeMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <Container>
      <div className="navigation">
        <List menuActive={isMenuActive}>
          <ul>
            {tabNavigation?.map(({ icon, title, link }) => (
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
