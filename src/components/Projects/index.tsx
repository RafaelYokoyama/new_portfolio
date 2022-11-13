import { useEffect, useState } from "react";
import Title from "../Title";
import {
  featuredList,
  webList,
  appList,
  designList,
  brandingList,
} from "../../data";

import { Container } from "./styles";
import PortfolioList from "./PortfolioList";
import { list } from "./list";

const MyProjects = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredList);
        break;
      case "web":
        setData(webList);
        break;
      case "mobile":
        setData(appList);
        break;
      case "design":
        setData(designList);
        break;
      case "branding":
        setData(brandingList);
        break;

      default:
        setData(featuredList);
    }
  }, [selected]);
  return (
    <Container id="projects">
      <div data-title="Meus" className="title">
        <Title font={"30px"} text={"Projetos"} Color={"#1a7f81"} />
      </div>

      <div id="portfolio" className="portfolio">
        <ul>
          {list.map((item, index) => (
            <PortfolioList
              key={index}
              id={item.id}
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
            />
          ))}
        </ul>

        <div className="container">
          {data.map((d, index) => (
            <a href={d.link} key={index} target="_blank" rel="noreferrer">
              <div className="item">
                <img src={d.img} alt="imagem" />
                <h3>{d.title} </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default MyProjects;
