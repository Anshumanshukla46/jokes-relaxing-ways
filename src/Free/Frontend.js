import React from "react";
import "./style.css";

function Frontend(props) {
    return (
        <div class="buttons-container">
            <button class="button-arounder">{props.text}</button>
        </div>
    );
}

export default Frontend;