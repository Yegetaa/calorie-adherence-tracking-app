import { useState } from "react";

const Calendar = () => {
    const [values, setValues] = useState(Array(31).fill(null)); // Assuming 31 days in a month
    const [colors, setColors] = useState(Array(31).fill('white')); // Default color is white
    
    // Function to handle value change for a specific day
    const handleValueChange = (dayIndex, value) => {
      const newValues = [...values];
      newValues[dayIndex] = value;
      setValues(newValues);
  
      // Assign colors based on values (you can define your own logic)
      const newColors = newValues.map(value => {
        if (value > 0 && value < 5) {
          return 'green';
        } else if (value >= 5 && value < 10) {
          return 'yellow';
        } else if (value >= 10 && value < 15) {
          return 'orange';
        } else if (value >= 15) {
          return 'red';
        } else {
          return 'white';
        }
      });
      setColors(newColors);
    };
  
    return (
      <div className="calendar">
        {values.map((value, index) => (
          <div key={index} className="day" style={{ backgroundColor: colors[index] }}>
            <span>{index + 1}</span>
            <input
              type="number"
              min="0"
              max="24"
              value={value !== null ? value : ''}
              onChange={(e) => handleValueChange(index, parseInt(e.target.value))}
            />
          </div>
        ))}
      </div>
    );
  };

  export default Calendar;

