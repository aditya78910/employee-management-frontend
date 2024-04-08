import React, { useRef, useEffect } from "react";
import bulmaCalendar from "bulma-calendar";
import moment from "moment";

function CustomCalendar({ name, value }) {
  const calendarRef = useRef(null);

  const startDate = moment(value).format("DD/MM/YYYY");

  useEffect(() => {
    bulmaCalendar.attach(calendarRef.current, {
      type: "date",
      dateFormat: "dd/MM/yyyy",
      startDate: startDate,
      showFooter: false,
      showHeader: false,
      timePicker: false,
    });
  }, []);

  return (
    <div>
      <input
        name={name}
        ref={calendarRef}
        type="text"
        placeholder="Select a date"
      />
    </div>
  );
}

export default CustomCalendar;
