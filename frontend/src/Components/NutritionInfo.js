
function NutritionInfo({ foodData }) {
  return (
    <div>
      <h2>Serving Size: {foodData[0].servingSize}</h2>
      <h2>Total Calories: {foodData[0].foodNutrients[3].value}</h2>
      <h2>{foodData[0].foodNutrients[0].nutrientName}: <h2>{foodData[0].foodNutrients[0].value} </h2> </h2>
      <h2>{foodData[0].foodNutrients[2].nutrientName}: <h2>{foodData[0].foodNutrients[2].value} </h2> </h2>
      <h2>{foodData[0].foodNutrients[1].nutrientName}: <h2>{foodData[0].foodNutrients[1].value} </h2> </h2>
    </div>
  );
}

export default NutritionInfo;
