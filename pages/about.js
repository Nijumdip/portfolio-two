import React from "react";
import { FiSmartphone } from "react-icons/fi";

function About() {
    return (
        <>
            <div class="px-6 mx-6 rounded-2xl py-12 md:px-12 bg-gray-50 text-gray-800 text-center lg:text-left ">
                <div class="container mx-auto xl:px-20 ">
                    <div class="grid lg:grid-cols-2  ">
                        <div class="mb-12 lg:mb-0">
                            <h3 class="text-4xl leading-5 dark:text-white font-semibold text-gray-800 mt-8 ">
                                About Us 
                            </h3>{" "}
                            <hr className="mt-5 w-80" /><br />
                            <img
                                src="https://i.ibb.co/4VRSWvV/nijum-pic-removebg-preview.png"
                                class="w-80  rounded-lg shadow-lg"
                                alt=""
                            />
                        </div>
                        <div class="mt-20  lg:mb-0">
                            <h1>Who am i?</h1>
                            <p>
                                I'm Front-end Developer from Dhaka, Bangladesh, working in web
                                development. I enjoy turning complex problems into simple,
                                beautiful, and intuitive designs. My aim is to bring across your
                                message and identity in the most creative way. I created a lot of
                                web projects and I am a beginner in this sector
                            </p>
                            <div class="flex justify-center items-center">
                                <h1>
                                    <FiSmartphone className="h-12 w-12 p-2 rounded-lg shadow bg-white" />
                                </h1>

                                <h3 class="text-xl leading-5 dark:text-white font-semibold text-gray-800 lg:mt-10 mt-8">
                                    Delivery
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
