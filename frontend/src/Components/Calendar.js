import { useState } from "react";
import "../styles/App.css"; // CSS file for styling

const Calendar = () => {
  const [values, setValues] = useState(Array(31).fill(null)); // 31 days
  const [colors, setColors] = useState(Array(31).fill('white')); // Default color is white

  // Function to handle value change for a specific day
  // i.e., update the values state with a new newValues array
  const handleValueChange = (dayIndex, value) => {
    const newValues = [...values];
    newValues[dayIndex] = value;
    setValues(newValues);

    // Assign colors based on values 
    const newColors = newValues.map(value => {
      if (value > 0 && value < 5) {
        return 'green';
      } else if (value >= 5 && value < 15) {
        return 'yellow';
      } else if (value >= 15) {
        return 'red';
      } 
    });
    setColors(newColors);
  };

  // Create an array with the days of the month
  const daysOfMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="calendar">
      <h1 style={{width:"100%", height: "100%"}}>This Month</h1>
      {/* Days of the month */}
      {daysOfMonth.map((day, index) => (
        <div key={index} className="day" style={{ backgroundColor: colors[index] }}>
          <span>{day}</span>
          <input
            type="number"
            min="0"
            max="24"
            value={values[index] !== null ? values[index] : ''}
            onChange={(e) => handleValueChange(index, parseInt(e.target.value))}
          />
        </div>
      ))}
    </div>
  );
};

export default Calendar;