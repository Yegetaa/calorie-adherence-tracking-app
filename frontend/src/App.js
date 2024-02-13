// yegume001: const apiKey = 'RDItaVjq2Jo8hpVHYYdbST3b1aI8cPRT9OARXdgA';

//yegetaeshetu: const apiKey = "9dcPwuCyUVXcaccYu5NU1kzq8t6a4keMNZ85S9Rh";

//tins: const apiKey = "u9NAhx6scCQ4RI4g9mudKyNt003dhaDdN4zteBEY";

//const apiKey = "AYk2KQqKxqck8qURepMzOgwYMoUFy2W2ClW2KP2P";

//React & react-dom-router Hook Imports
import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Component Imports
import NutritionInfo from './Components/NutritionInfo';
import Calendar from "./Components/Calendar.js"
import Navbar from './Components/NavBar.js';

//Page Imports
import SignInOrUpPage from './pages/SignInOrUpPage';
import Home from './pages/LandingPage.js';

//Context Imports
//import { UserContext } from "./context/UserContext"

function App() {
  return(
    <div className="App"> 
    <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} /> */}
      </Routes>
    </div>

  )}

export default App;


