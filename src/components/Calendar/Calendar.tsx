import { useState } from "react";

function generateCalendarDays(year: number, month: number) {
  const date = new Date(year, month, 1);
  const days = [];

  const firstDayOfWeek = date.getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  /*Prenche days vazios antes do primeiro dia do mês.*/
  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push(null);
  }

  /*Preenche dias reais do mês */
  for (let day = 1; day <= lastDate; day++) {
    days.push(day);
  }

  return days;
}

export function Calendar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [showMonthSelector, setShowMonthSelector] = useState(false);
  const [showYearSelector, setShowYearSelector] = useState(false);

  const todayDay = today.getDate();
  const isCurrentMonth =
    today.getMonth() === currentMonth && today.getFullYear() === currentYear;

  const days = generateCalendarDays(currentYear, currentMonth);
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  function handlePreviousMonth() {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  }

  function handleNextMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  }

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={handlePreviousMonth}>←</button>
        <button
          className="calendar-month-button"
          onClick={() => setShowMonthSelector((prev) => !prev)}
        >
          {new Date(currentYear, currentMonth).toLocaleString("default", {
            month: "long",
          })}
        </button>
        <button onClick={handleNextMonth}>→</button>
      </div>

      <button
        onClick={() => setShowYearSelector((prev) => !prev)}
        className="calendar-year-button"
      >
        {currentYear}
      </button>

      {showMonthSelector && (
        <div className="calendar-month-selector">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className={`calendar-month-option ${
                index === currentMonth ? "current" : ""
              }`}
              onClick={() => {
                setCurrentMonth(index);
                setShowMonthSelector(false);
              }}
            >
              {new Date(0, index).toLocaleString("default", { month: "long" })}
            </div>
          ))}
        </div>
      )}

      {showYearSelector && (
        <div className="calendar-year-selector">
          {Array.from({ length: 21 }, (_, i) => currentYear - 10 + i).map(
            (year) => (
              <div
                key={year}
                className={`calendar-year-option ${
                  year === currentYear ? "current" : ""
                }`}
                onClick={() => {
                  setCurrentYear(year);
                  setShowYearSelector(false);
                }}
              >
                {year}
              </div>
            )
          )}
        </div>
      )}

      <div className="calendar-grid">
        {weekdays.map((day) => (
          <div key={day} className="calendar-day-header">
            {day}
          </div>
        ))}

        {days.map((day, index) => {
          const isSelected = day === selectedDay;
          const isToday = isCurrentMonth && day == todayDay;

          return (
            <div
              key={index}
              className={`calendar-day-cell ${isSelected ? "selected" : ""}${
                isToday ? "today" : ""
              }`}
              onClick={() => day !== null && setSelectedDay(day)}
            >
              {day !== null ? day : ""}
            </div>
          );
        })}
      </div>
    </div>
  );
}
