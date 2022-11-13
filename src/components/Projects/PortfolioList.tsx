import React from "react";
import "./styles";

function PortfolioList({ id, title, link, active, setSelected }: any) {
  return (
    <div>
      <li
        className={active ? "portfolioList active" : "portfolioList"}
        onClick={() => setSelected(id)}
      >
        {title}
        {link}
      </li>
    </div>
  );
}

export default PortfolioList;
