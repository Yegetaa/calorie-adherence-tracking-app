// yegume001: const apiKey = 'RDItaVjq2Jo8hpVHYYdbST3b1aI8cPRT9OARXdgA';

//yegetaeshetu: const apiKey = "9dcPwuCyUVXcaccYu5NU1kzq8t6a4keMNZ85S9Rh";

//tins: const apiKey = "u9NAhx6scCQ4RI4g9mudKyNt003dhaDdN4zteBEY";

//const apiKey = "AYk2KQqKxqck8qURepMzOgwYMoUFy2W2ClW2KP2P";

//React & react-dom-router Hook Imports
// import React, { useState } from 'react';
// import BrowserRouter from'react-router-dom';
import {Routes, Route} from 'react-router-dom';

//Component Imports
// import NutritionInfo from './pages/NutritionInfo.js';
// import Calendar from "./Components/Calendar.js"
import Navbar from './Components/NavBar.js';

//Page Imports
import SignInOrUpPage from './pages/SignInOrUpPage';
// import Home from './pages/LandingPage.js';
import NutritionInfo from './pages/NutritionInfo.js';
import LandingPage from './pages/LandingPage.js';
import Calendar from './Components/Calendar.js';

//Context Imports
import { UserContext } from "./context/UserContext"

import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  return(
    <UserContext.Provider value={{ user, setUser}}>
    {user? (
      <> 
      <Navbar />
      <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/NutritionInfo' element={<NutritionInfo />} />
          {/* <Route path='/SignInOrUpPage' element={<SignInOrUpPage />} /> */}
          <Route path='/calendar' element={< Calendar />} />
      </Routes>
      </>
    ): (
      <div>
      <Navbar />
      <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/NutritionInfo' element={<NutritionInfo />} />
          <Route path='/SignInOrUpPage' element={<SignInOrUpPage />} />
          {/* <Route path='/calendar' element={< Calendar />} /> */}
      </Routes>
      </div>
    )}
    </UserContext.Provider>

  )}

export default App;


