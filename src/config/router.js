import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../containers/Home'
import About from '../containers/About'
import Service from '../containers/Service'




class AppRouter extends React.Component {

    render() {
        return (

            //Compulsory parents Router Rakhna hai

            <Router>


                <Route exact path='/' component={Home} />

                <Route path='/about' component={About} />

                <Route path='/service' component={Service} />

            </Router>

        )
    }

}

export default AppRouter;