import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Home} from "./Home";
import {TitlePageWrapper} from "./TitlePageWrapper";


function App () {
    return (
        <Router>
            <div style={{margin: "15px"}}>
                <Route exact path="/" component={Home} />
                <Route path="/titles/:titleNo" component={TitlePageWrapper} />
            </div>
        </Router>
    );
}
export default App;