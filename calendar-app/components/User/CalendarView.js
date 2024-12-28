import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarView() {
  return (
    <div className="calendar-view p-4">
      <h2 className="text-2xl font-bold mb-4">Calendar View</h2>
      <Calendar />
    </div>
  );
}

export default CalendarView;