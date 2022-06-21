import React from "react";
import TitleSearch from "./components/TitleSearch";

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