import {Link} from "react-router-dom";
import React from "react";
import {TitlePage} from "./components/TitlePage";
import TitleSearch from "./TitleSearch";

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
