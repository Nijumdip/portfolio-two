import React from "react";

const AboutCard = ({card}) => {
    return (
        <div className="card w-80 bg-base-100 shadow-xl">
        
            <p></p>
            <h5 class="mb-2 text-xl font-bold">{card.name}</h5>
            <p class="font-normal text-gray-700 mb-3">{card.description}</p>
        </div>
    );
};

export default AboutCard;
