import React, { createContext, useState } from "react";
import SignInOrUpPage from '../pages/SignInOrUpPage.js';
import Calendar from "../Components/Calendar.js"


// Create UserContext
const UserContext = createContext(null);

// Define UserProvider component
function UserProvider() {
  // Initialize user state
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        {user ? (
          <>
            <h1 className="App-title">Calorie Adherence Tracking App</h1>
            <Calendar> </Calendar>
          </>
        ) : (
          <SignInOrUpPage />
        )}
      </div>
    </UserContext.Provider>
  );
}

export default UserProvider;
