import React, { useState, useEffect } from 'react';

function NutritionInfo() {
  const [query, setQuery] = useState('');
  const [foodData, setFoodData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
  
      try {
        const apiKey = "oiaXKrfrwzVvHSf78QLAfvdZlIHjeuttGehRrSus";
        const response = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=${query}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data);
        setFoodData(data.foods); 
       
      } catch (error) {
     
      }
    };

   
      fetchData();
  }, []); // Changed from [foodData, query] to [query] because it caused an infinite loop.

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const apiKey = "oiaXKrfrwzVvHSf78QLAfvdZlIHjeuttGehRrSus";
      const response = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=${query}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log(data);
      setFoodData(data.foods); 
     
    } catch (error) {
   
    }
    
    // This will trigger the useEffect hook again with the updated query value.
  };

  return (
    <div>
      <h1>Calorie Adherence App Frontend</h1>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Food Here"
        value={query}
        onChange={handleInputChange}
      />
       <button type="submit">Search</button>
      </form>
      {foodData && (
        <div>
          <h4>Total Calories Per Serving Size: {foodData[0].foodNutrients[3]?.value} KCal</h4>
          <h4>Serving Size: {foodData[0].servingSize} grams</h4>
          <table>
            <thead>
              <tr>
                <th>Nutrient</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {foodData[0].foodNutrients
                .filter(nutrient => (
                  // nutrient.nutrientName === 'Energy' ||
                  nutrient.nutrientName === 'Protein' ||
                  nutrient.nutrientName === 'Carbohydrate, by difference'||
                  nutrient.nutrientName === 'Total lipid (fat)' 
                ))
                .map((nutrient, index) => (
                  <tr key={index}>
                    <td>{nutrient?.nutrientName}</td>
                    <td>{nutrient?.value} grams</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
     
    </div>
  );
}

export default NutritionInfo;
