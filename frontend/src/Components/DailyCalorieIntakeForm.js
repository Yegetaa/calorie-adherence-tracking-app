import { useState} from "react";
import axios from "axios";

function DailyCalorieIntakeForm() {
  const [calories, setCalories] = useState("");
  const [date, setDate] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://calotrack-calorie-adherence-tracker.onrender.com/newday", {
        calories: calories,
        date: date
      });
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="calories">Calories:</label>
      <input
        type="number"
        id="calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default DailyCalorieIntakeForm;
