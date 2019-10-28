import React from "react";

import { hours } from "../../data/data";

import "./HoursList.scss";

const HoursList = () => (
  <div className="card__calendar-content-hours">
    <div className="card__calendar-content-title">Friday, September 20</div>
    <div className="card__calendar-content-hours-container">
      {hours
        ? hours.map(hour => (
            <div key={hour} className="card__calendar-content-hours-item">
              {hour}
            </div>
          ))
        : null}
    </div>
  </div>
);

export default HoursList;
