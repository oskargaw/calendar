import React from "react";

import { daysInSeptember, daysNames } from "../../data/data";

import "./CalendarGrid.scss";

const CalendarGrid = () => (
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
          <div key={day} className="card__calendar-content-days-grid--day">
            {day}
          </div>
        ))
      : null}
  </div>
);

export default CalendarGrid;
