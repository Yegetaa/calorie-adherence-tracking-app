// yegume001: const apiKey = 'RDItaVjq2Jo8hpVHYYdbST3b1aI8cPRT9OARXdgA';

//yegetaeshetu: const apiKey = "9dcPwuCyUVXcaccYu5NU1kzq8t6a4keMNZ85S9Rh";

//tins: const apiKey = "u9NAhx6scCQ4RI4g9mudKyNt003dhaDdN4zteBEY";

//const apiKey = "AYk2KQqKxqck8qURepMzOgwYMoUFy2W2ClW2KP2P";

//React Hook Imports
import React, { useState } from 'react';

//Component Imports
import NutritionInfo from './Components/NutritionInfo';

//Page Imports
import SignInOrUpPage from './pages/SignInOrUpPage';

//Context Imports
import { UserContext } from "./context/UserContext"

function App() {
  const [user, setUser] = useState("");

  return(
    <UserContext.Provider value={{user, setUser}}>

    <div className="App">
      {
        user? (
          <>
        <h1 className="App-title"> Calorie Adherence Tracking App</h1>
        <NutritionInfo></NutritionInfo>
          </>
          ) : (
            <SignInOrUpPage/>
          )
      }

    </div>

    </UserContext.Provider>
  )
}

export default App;


