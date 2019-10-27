import React from "react";

import Card from "../components/Card/Card";

import "./Homepage.scss";

const Homepage = () => (
  <div className="homepage">
    <Card section="event-info">Event info</Card>
    <Card section="calendar">Calendar</Card>
  </div>
);

export default Homepage;
