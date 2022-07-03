import {Link} from "react-router-dom";
import React from "react";
import TitleSearch from "./components/TitleSearch";
import {TitlePage} from "./components/TitlePage";

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
