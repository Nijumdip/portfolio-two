import React from "react";
import SocialMedia from "./socialMedia";

function Hero() {
    return (
        <div className=" ">
            <div className="hero-main">
                <img
                    src="https://i.ibb.co/4VRSWvV/nijum-pic-removebg-preview.png"
                    alt
                    className="h-full w-full rounded-full overflow-hidden shadow"
                />

                <div className="flex flex-col items-center justify-center">
                   
                        <h1 className=" text-2xl font-bold mt-6"> Shamima Akter </h1>
                        <h1 className="text-gray-400 mt-2 "> Front-End Developer </h1>
                        <SocialMedia />
                        <h1 className=" mt-6"> Shamima Akter </h1>
                    
                </div>
            </div>
        </div>
    );
}

export default Hero;
