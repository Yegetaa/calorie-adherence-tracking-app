
//Context Imports
import { UserContext } from "./context/UserContext"

function App() {
  const [user, setUser] = useState({});

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