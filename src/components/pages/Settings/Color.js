import React, { useState, useEffect} from "react";
import "./settings"

export default function Color({setBackground, background}) {
    const colors = [
        "#9253a1",
        "#f063a4",
        "#ec015a"
    ];

    // const [background, setBackground] = useState("#fdfdfd");
    const [current, setCurrent] = useState(null);

    return (
        <div className = "Color" style = {{ background: background }}>
            {current !== null && <h9>copied {current}</h9>}
            <div className="container">
                {colors.map((color, index) => (
                     <div key= {index} className = "card">
                         <div style={{
                             background: color,
                             filter: "brightness(85%)",
                             boxShadow: color === background
                         }} className="box" onClick={() => setBackground(color)} />

                     </div>))}
            </div>
        </div>
    );
}


