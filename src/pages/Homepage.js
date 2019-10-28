import React from "react";

import CardEventInfo from "../components/CardEventInfo/CardEventInfo";
import CardCalendar from "../components/CardCalendar/CardCalendar";

import "./Homepage.scss";

const Homepage = () => (
  <div className="homepage">
    <CardEventInfo />
    <CardCalendar />
  </div>
);

export default Homepage;
