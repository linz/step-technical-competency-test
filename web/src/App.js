import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import TitleSearch from "./TitleSearch";
import {TitlePage} from "./components/TitlePage";


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

export function Home() {
    return (
        <div style={{position: "relative"}}>
            <div style={{position: "fixed", top: "40%", left: "50%", transform: "translate(-50%, -50%)", border: "1px solid #dee2e6", padding: "50px"}}>
                <h3>Welcome to LandOnLite</h3>
                <p>You can enter a title number (e.g. "1") to view it.</p>
                <TitleSearch />
            </div>
        </div>
    );
}

export function TitlePageWrapper() {
    return (
        <div>
            <div>
                <Link style={{marginRight: "10px"}} to="/">&lt; Home</Link>
                <TitleSearch />
            </div>
            <hr />
            <TitlePage />
        </div>
    );
}

export default App;