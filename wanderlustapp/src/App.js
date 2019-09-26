import React from 'react';
import './App.css';
import Nav from "./components/navbar/nav-guest";
// import Router from "./Router";
import ExperiencesCard from "./components/experiences/experience-card";
import SignIn from "./components/Signup-login/login-guide";
import SignUp from "./components/Signup-login/signup-guide";


function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Router /> */}
      <ExperiencesCard />
      <SignIn />
      <SignUp />
    </div>
  );
}

export default App;
