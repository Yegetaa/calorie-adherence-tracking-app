import { useRef, useState, useContext } from "react";
import axios from "axios";
import {UserContext} from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function SignInOrUpPage() {
  const userCtx = useContext(UserContext) || {};
  const { setUser } = userCtx;
  const navigate = useNavigate();
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const caloriesInputRef = useRef(null);

  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (emailInputRef.current.value === "") {
      emailInputRef.current.focus();
      return;
    }
    if (passwordInputRef.current.value === "") {
      passwordInputRef.current.focus();
      return;
    }

    const res = await axios.post("http://localhost:3000/api/users/signin", {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    });

    console.log(res.data);
    setUser(res.data);
    navigate("/calendar");
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (emailInputRef.current.value === "") {
      emailInputRef.current.focus();
      return;
    }
    if (passwordInputRef.current.value === "") {
      passwordInputRef.current.focus();
      return;
    }

    const res = await axios.post("http://localhost:3000/api/users/signup", {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
      calorieTarget: caloriesInputRef.current.value,
    });

    console.log(res.data);
    setUser(res.data);
    navigate("/calendar");
  };

  return (
    <main 
    style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh" }}>
       <div
        style={{
          width: "25vw", 
          height: "70%", 
          border: "1px solid #ccc", 
          borderRadius: "8px", 
          padding: "10px", boxShadow: "2px 2px 2px 1px gray"  }}>
      <h1 
      style={{ 
        
        textAlign: "center", 
        textTransform: "uppercase",
        borderBottom: "2px solid #333",
        paddingBottom: "10px",
        margin: "20px "
        }}>Welcome</h1>

      {showSignUp ? (
        <div>
          <form
            onSubmit={handleSignUp}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <h3 style={{
              color: "orange",
              borderBottom: "1px solid orange",
              textTransform: "uppercase"
            }}>Sign Up</h3>
            {/* <label htmlFor="email">Email</label> */}
            <input
              ref={emailInputRef}
              name="email"
              id="email"
              type="text"
              placeholder="Enter your Email"
              style= {{ 
              marginBottom: "10px", 
              padding: "5px",
              width: "100%", 
              borderRadius: "3px", 
              border: "1px solid #ccc"}}
            />
            {/* <label htmlFor="password">Password</label> */}
            <input
              ref={passwordInputRef}
              name="password"
              id="password"
              type="password"
              style= {{ 
                marginBottom: "10px", 
                padding: "5px",
                width: "100%", 
                borderRadius: "3px", 
                border: "1px solid #ccc"}}
              placeholder="Enter your password"
            />
             <input
        ref={caloriesInputRef}
        name="calorieGoal"
        id="calorieGoal"
        type="number"
        placeholder="Enter your daily calorie goal"
        style={{
          marginBottom: "10px",
          padding: "5px",
          width: "100%",
          borderRadius: "3px",
          border: "1px solid #ccc"
        }}
      />
            <button type="submit"
            style={{ 
              padding: "5px 10px", 
              background: "#007bff", 
              color: "#fff",
              border: "none", 
              borderRadius: "3px", 
              cursor: "pointer" }}>Sign Up</button>
          </form>
          <span>
            Already have an account?{" "}
            <button onClick={() => setShowSignUp(!showSignUp)}
            style={{
              border: "none", 
              background: "none", 
              color: "#007bff", 
              cursor: "pointer"
            }}>Sign In</button>
          </span>
        </div>
      ) : (
        <div>
          <form
            onSubmit={handleSignIn}
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px",
              alignItems: "center",
            }}
          >
            <h3 style={{
              color: "orange",
              borderBottom: "1px solid orange",
              textTransform: "uppercase"
            }}>Sign In</h3>
            {/* <label htmlFor="email">Email</label> */}
            <input
              ref={emailInputRef}
              name="email"
              id="email"
              type="text"
              placeholder="Enter Your Email"
              style={{
                marginBottom: "10px",
                padding: "5px",
                width: "100%",
                borderRadius: "3px",
                border: "1px solid #ccc"
              }}
            />
            {/* <label htmlFor="password">Password</label> */}
            <input
              ref={passwordInputRef}
              name="password"
              id="password"
              type="password"
              style={{
                marginBottom: "10px",
                padding: "5px",
                width: "100%",
                borderRadius: "3px",
                border: "1px solid #ccc"
              }}
              placeholder="Enter your password"
            />
            <button 
            type="submit"
            style={{
              padding: "5px 10px",
              background: "#007bff", 
              color: "#fff",
              border: "none",
              borderRadius: "3px",
              cursor: "pointer"
            }}>Sign In</button>
          </form>
          <span>
            Don't have an account?{" "}
            <button 
            onClick={() => setShowSignUp(!showSignUp)}
            style={{
              border: "none", 
              background: "none", 
              color: "#007bff", 
              cursor: "pointer"
            }}>Sign Up</button>
          </span>
        </div>
      )}
      </div>
    </main>
  );
}

export default SignInOrUpPage;
