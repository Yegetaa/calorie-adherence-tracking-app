import React, { useState, useEffect } from 'react';
// import Calendar from "../Components/Calendar.js"


function NutritionInfo() {
  const [query, setQuery] = useState('');
  const [foodData, setFoodData] = useState(null);
  const [submitted, setSubmitted] = useState(true);

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
        setSubmitted(false);
       
      } catch (error) {
     console.log(error);
      }
    };

   
      fetchData();
  }, []); // Changed from [foodData, query] to [query] because it caused an infinite loop.

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    setSubmitted(false);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);
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
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ 
  fontSize: '3rem', 
  fontWeight: 'bold', 
  marginTop: '10px',
  marginBottom: '20px' 
}}>
  Search & Learn About Any Food
</h1>

      <form onSubmit={handleSubmit} style={{ marginTop: "20px"}}>
      <input
        type="text"
        placeholder="Enter Food Here"
        value={query}
        onChange={handleInputChange}
        style={{ marginBottom: "50 px", padding: "5px", borderRadius: "3px"}}
      />
       <button 
       type="submit"
       style={{
        padding: "8px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "3px",
        cursor: "pointer",
        transition: "background-color 0.3s"
       }}>Search</button>
      </form>
      {submitted && foodData && (
        <div>
          <h4>Total Calories Per Serving Size: {foodData[0].foodNutrients[3]?.value} KCal</h4>
          <h4 style={{marginBottom: "50px" }}>Serving Size: {foodData[0].servingSize} grams</h4>
          <table style={{margin: "auto" , borderCollapse: 'collapse', border: '1px solid black', textAlign: 'center'}}>
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
                    <td style={{ border: '1px solid black', padding: '8px' }}>{nutrient?.nutrientName}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{nutrient?.value} grams</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    {/* <Calendar></Calendar> */}
    </div>
  );
}

export default NutritionInfo;
