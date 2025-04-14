import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Home.css";

const Home: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    localStorage.setItem("userEmail", email);

    console.log("Email enviado:", email);

    navigate("/inicial");
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome</h1>
      <form className="home-form" onSubmit={handleSubmit}>
        <label className="home-label" htmlFor="email">
          Enter your e-mail:
        </label>
        <input
          className="home-input"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="example@email.com"
        />
        <button className="home-button" type="submit">
          Entrar
        </button>
        <div className="explain-dialog">
          <p>Just to keep a process control over the application.</p>
        </div>
      </form>
    </div>
  );
};

export default Home;
