import React from "react";
import { BrowswerRouter as Router, Route } from "react-router-dom";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ExperiencesCard from './components/ExperiencesCard';
import CTA from './components/CTA';

export function Router() {
    return (
        <BrowserRouter>
            <Route exact path='/' component={WelcomePage} />
            <Route path='/experiences' component={ExperiencesCard} />
            <Route path='/SignUp' component={SignUp} />
            <Route path='/SignIn' component={SignIn} />
        </BrowserRouter>
    );
}