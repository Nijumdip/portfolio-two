import React from "react";
import { FiSmartphone } from "react-icons/fi";

function About() {
    return (
        <>
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-5 xl:gap-0 lg:py-16 lg:grid-cols-12 bg-white rounded-3xl m-5">
                <div class="w-80 lg:mt-0 lg:col-span-5 lg:flex flex-col ml-0 sm:ml-14 rounded-2xl">
                    <div className="flex flex-row">
                        <h1 className="text-4xl font-bold">About Me </h1>
                        <p>
                            <hr className="border w-32 mt-5 ml-2 border-pink-500" /> <br />
                        </p>
                    </div>
                    <img
                        src="https://i.ibb.co/4VRSWvV/nijum-pic-removebg-preview.png"
                        alt="mockup"
                        className="rounded-3xl "
                    />
                </div>

                <div class="mr-auto ml:0 sm:-ml-16 mt-20 lg:col-span-7">
                    <h5 class="mb-2 text-2xl font-normal text-gray-900">Who am i?</h5>
                    <p class="mb-3 text-base text-gray-500 dark:text-gray-400">
                        I'm Front-end Developer from Dhaka, Bangladesh, working in web <br />
                        development. I enjoy turning complex problems into simple, beautiful, and
                        intuitive designs. <br /> <br /> My aim is to bring across your message and
                        identity in the most creative way. <br /> I created a lot of web projects
                        and I am a beginner in this sector
                    </p>

                    <h5 class="mb-2 text-2xl font-normal text-gray-900">Personal Info</h5>
                    <div class="grid grid-cols-2 gap-4">
                        <div className="flex flex-row">
                            <div>
                                <FiSmartphone className="h-12 w-12 p-2 mr-2 rounded-lg shadow bg-white" />
                            </div>
                            <div>
                                <h3 class="font-normal text-gray-500">Phone</h3>
                                <h3 class="font-normal "> 01944-901141 </h3>
                            </div>
                        </div>

                        <div className="flex flex-row">
                            <div>
                                <FiSmartphone className="h-12 w-12 p-2 mr-2 rounded-lg shadow bg-white" />
                            </div>
                            <div>
                                <h3 class="font-normal text-gray-500">Location</h3>
                                <h3 class="font-normal"> Location </h3>
                            </div>
                        </div>

                        <div className="flex flex-row">
                            <div>
                                <FiSmartphone className="h-12 w-12 p-2 mr-2 rounded-lg shadow bg-white" />
                            </div>
                            <div>
                                <h3 class="font-normal text-gray-500">Email</h3>
                                <h3 class="font-normal"> Email </h3>
                            </div>
                        </div>

                        <div className="flex flex-row">
                            <div>
                                <FiSmartphone className="h-12 w-12 p-2 mr-2 rounded-lg shadow bg-white" />
                            </div>
                            <div>
                                <h3 class="font-normal text-gray-500">Birthday</h3>
                                <h3 class="font-normal"> Birthday </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
