import React from "react";
import { FiSmartphone } from "react-icons/fi";

function About() {
    return (
        <>
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-5 xl:gap-0 lg:py-16 lg:grid-cols-12 bg-white rounded-3xl m-5">
                <div class="w-80 lg:mt-0 lg:col-span-5 lg:flex ml-0 sm:ml-14">
                    <img
                        src="https://i.ibb.co/4VRSWvV/nijum-pic-removebg-preview.png"
                        alt="mockup"
                    />
                </div>

                <div class="mr-auto ml:0 sm:-ml-16 place-self-center lg:col-span-7">
                    <h5 class="mb-2 text-3xl font-normal text-gray-900">Who am i?</h5>
                    <p class="mb-3 text-base text-gray-500 dark:text-gray-400">
                        I'm Front-end Developer from Dhaka, Bangladesh, working in web development.{" "}
                        <br />
                        I enjoy turning complex problems into simple, beautiful, and intuitive
                        designs. My aim is <br /> to bring across your message and identity in the
                        most creative way. I created a lot of web projects <br /> and I am a
                        beginner in this sector
                    </p>
                    <div class="flex justify-center items-center">
                        <FiSmartphone className="h-12 w-12 p-2 mr-2 rounded-lg shadow bg-white" />

                        <h3 class="font-semibold text-gray-800">Phone</h3>
                    </div>
                </div>
            </div>

            
        </>
    );
}

export default About;
