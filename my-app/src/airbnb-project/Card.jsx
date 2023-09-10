import React from "react";
import star from "./img/star.png";

function Card(props){
    return(
            <div className="first-card">
                 <img src={props.img} alt="" className="first-img"/>
                    <div className="card-stats">
                        <img src={star} alt="" className="star-img"/>
                        <span className="gray">{props.rating}({props.reviewCount})</span>
                        <span className="gray">•</span>
                        <span className="gray">{props.country}</span>
                    </div>
                <p>{props.title}</p>
                <p><span className="bold">From ${props.price}</span > /  Person</p>
            </div>
    )
}

export default Card;  