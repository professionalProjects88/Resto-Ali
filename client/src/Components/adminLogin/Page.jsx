import React, { useState } from "react";
import "./page.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "../../reducers/signIn";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";


const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [login, setLogin] = useState({
    name: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const navigate=useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const  result = await dispatch(signIn(login));
      const token = result.payload.token;
      localStorage.setItem("token", token);
      console.log("Token set successfully",to);
      isAuthenticated()
    } catch (error) {
      console.log("An unexpected error occurred:", error);
    }
  };

  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    
    const decodedToken = jwtDecode(token);
    if(decodedToken.role==="admin"){
        navigate("/admin-controller")
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <form onSubmit={handleLogin} className="login-form">
        <h1 className="welcome">Bienvenue, Monsieur l'Admin</h1>
        <h4 className="login-labels">Nom :</h4>
        <input
          className="login-inputs"
          type="text"
          value={login.name}
          onChange={handleChange}
          name="name"
          required
        />

        <h4 className="login-labels">Mot de passe :</h4>
        <div style={{ display: "flex"}}>
          <input
            className="login-inputs"
            type={showPassword ? "text" : "password"}
            value={login.password}
            onChange={handleChange}
            name="password"
            required
          />
          {showPassword ? (
            <FaEyeSlash
              color="red"
              className="eye"
              size={20}
              onClick={() => setShowPassword(false)}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <FaEye
              color="red"
              className="eye"
              size={20}
              onClick={() => setShowPassword(true)}
              style={{ cursor: "pointer" }}
            />
          )}
        </div>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <button type="submit" className="login-btn">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
