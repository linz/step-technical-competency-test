import {Link} from "react-router-dom";
import React from "react";
import TitleSearch from "./components/TitleSearch";
import {TPJ} from "./components/TPJ";

export function TitlePageWrapper() {
    return (
        <div>
            <div>
                <Link style={{marginRight: "10px"}} to="/">&lt; Home</Link>
                <TitleSearch />
            </div>
            <hr />
            <TPJ />
        </div>
    );
}
