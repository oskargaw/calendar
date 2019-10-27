import React from "react";

import "./Card.scss";

const Card = ({ children, section }) => (
  <div className={`card card__${section}`}>
    <div className="card__content">{children}</div>
  </div>
);

export default Card;
