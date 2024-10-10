import React from "react";


function Features ({img, title, text}) {
    return(
        <div className="feature-item"> 
            <img src={img} alt="Chat icon" className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default Features;