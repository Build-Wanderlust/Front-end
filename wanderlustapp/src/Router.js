import React from "react";
import { BrowswerRouter as Router, Route } from "react-router-dom";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ExperiencesCard from './components/';
// import from './components/';

export function Router() {
    return (
        <BrowserRouter>
            <Route exact path='/' component={WelcomePage} />
            <Route path='/experiences' component={ExperiencesCard} />
            <Route path='/' component={SignUp} />
            <Route path='/' component={SignIn} />
        </BrowserRouter>
    );
}

// still need to set up route links and get the useeffect api barkin muchacho