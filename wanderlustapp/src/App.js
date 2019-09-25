import React from 'react';
import './App.css';
import Nav from "./components/navbar/nav-guest";
import ExperiencesCard from "./components/experiences/experience-card";
import SignIn from "./components/Signup-login/login-guide";
import SignUp from "./components/Signup-login/signup-guide";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Nav />
      </header>
      <ExperiencesCard />
      <SignIn />
      <SignUp />
    </div>
  );
}

export default App;