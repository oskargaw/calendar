import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMapMarkerAlt,
  faGlobeAmericas
} from "@fortawesome/free-solid-svg-icons";

import Card from "../components/Card/Card";

import { daysInSeptember, daysNames } from "../data/daysInSeptember";

import webSummitLogo from "../img/web-summit-logo.png";

import "./Homepage.scss";

const Homepage = () => {
  const [timezone, setTimezone] = useState("Pacific Time - US & Canada 9:00am");

  const handleChange = event => {
    const { name, value } = event.target;

    if (name === "timezone") setTimezone(value);
  };

  return (
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

      <Card section="calendar">
        <h1 className="card__title">Select a Date & Time</h1>
        <div className="card__calendar-content-container">
          <div className="card__calendar-content-days">
            <div className="card__calendar-content-title">
              September 2019
              <div className="card__calendar-content-title-arrows">
                <div className="card__calendar-content-title-arrows--left-arrow">
                  &#8249;
                </div>
                <div className="card__calendar-content-title-arrows--right-arrow">
                  &#8250;
                </div>
              </div>
            </div>
            <div className="card__calendar-content-days-grid">
              {daysNames
                ? daysNames.map(dayName => (
                    <div
                      key={dayName}
                      className="card__calendar-content-days-grid--day-name"
                    >
                      {dayName}
                    </div>
                  ))
                : null}
              {daysInSeptember
                ? daysInSeptember.map(day => (
                    <div
                      key={day}
                      className="card__calendar-content-days-grid--day"
                    >
                      {day}
                    </div>
                  ))
                : null}
            </div>
            <div className="card__calendar-content-timezone">
              <div className="card__event-details-icon-container">
                <FontAwesomeIcon
                  icon={faGlobeAmericas}
                  className="card__event-details-icon"
                />
              </div>
              <select
                name="timezone"
                className="card__form-input--select"
                value={timezone}
                onChange={handleChange}
                label="Timezone"
              >
                <option value="Pacific Time">
                  Pacific Time - US & Canada (9:00am)
                </option>
                <option value="Mountain Time">
                  Mountain Time - US & Canada (10:00am)
                </option>
                <option value="Central Time">
                  Central Time - US & Canada (11:00am)
                </option>
                <option value="Eastern Time">
                  Eastern Time - US & Canada (12:00pm)
                </option>
                <option value="Atlantic Time">
                  Atlantic Time - US & Canada (1:00pm)
                </option>
              </select>
            </div>
          </div>
          <div className="card__calendar-content-hours">
            <div className="card__calendar-content-title">
              Friday, September 20
            </div>
            <div>
              {daysInSeptember
                ? daysInSeptember.map(day => <div key={day}>{day}</div>)
                : null}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Homepage;
