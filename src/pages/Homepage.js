import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import Card from "../components/Card/Card";

import webSummitLogo from "../img/web-summit-logo.png";

import "./Homepage.scss";

const Homepage = () => (
  <div className="homepage">
    <Card section="event-info">
      <img src={webSummitLogo} alt="Web Summit Logo" className="card__logo" />
      <div className="card__company-name">WebSummit</div>
      <h1 className="card__event-name">Local Meetup</h1>
      <div className="card__event-details">
        <div className="card__event-details-row">
          <div className="card__event-details-icon-container">
            <FontAwesomeIcon
              icon={faClock}
              className="card__event-details-icon"
            />
          </div>
          <span>1 hr</span>
        </div>
        <div className="card__event-details-row">
          <div className="card__event-details-icon-container">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="card__event-details-icon"
            />
          </div>
          <span>Lisbon, Portugal</span>
        </div>
      </div>
      <div className="card__event-description">
        Local meetup for Entrepreneurs
      </div>
    </Card>
    <Card section="calendar">Calendar</Card>
  </div>
);

export default Homepage;
