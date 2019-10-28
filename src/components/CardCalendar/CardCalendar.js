import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";

import Card from "../Card/Card";
import CalendarGrid from "../CalendarGrid/CalendarGrid";
import HoursList from "../HoursList/HoursList";

import "./CardCalendar.scss";

const CardCalendar = () => {
  const [timezone, setTimezone] = useState("Pacific Time - US & Canada 9:00am");

  const handleChange = event => {
    const { name, value } = event.target;

    if (name === "timezone") setTimezone(value);
  };
  return (
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

          <CalendarGrid />

          <div className="card__calendar-content-timezone">
            <div className="card__calendar-content-icon-container">
              <FontAwesomeIcon
                icon={faGlobeAmericas}
                className="card__calendar-content-icon"
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

        <HoursList />
      </div>
    </Card>
  );
};

export default CardCalendar;
