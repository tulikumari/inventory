import React, { Component } from "react";
import { BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams } from "react-router-dom";
import Home from "../../Screens/home";
import ManageTypes from "../../Screens/manageTypes";

class Routermain extends Component {
    render() {
        return (
            
                <Router>
                     <Route exact path="/" component={Home} />
                     <Route exact path="/manageTypes" component={ManageTypes} />  
                </Router>
                
            
        )
    }
}
export default Routermain; 