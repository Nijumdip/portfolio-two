import React from "react";
import { FiSmartphone } from "react-icons/fi";

function About() {
    return (
        <>
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 bg-white ">
                <div class=" lg:mt-0 lg:col-span-5 lg:flex">
                    <img
                        src="https://i.ibb.co/4VRSWvV/nijum-pic-removebg-preview.png"
                        alt="mockup"
                    />
                </div>

                <div class="mr-auto place-self-center lg:col-span-7">
                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                        Payments tool for software companies
                    </h1>
                    <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        From checkout to global sales tax compliance, companies around the world use
                        Flowbite to simplify their payment stack.
                    </p>
                    <a
                        href="#"
                        class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                    >
                        Get started
                        <svg
                            class="w-5 h-5 ml-2 -mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </a>
                    <a
                        href="#"
                        class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                        Speak to Sales
                    </a>
                </div>
            </div>

            {/* <div class="flex flex-row items-center px-6 mx-6 rounded-2xl py-12 md:px-12 bg-gray-50 text-gray-800 text-center lg:text-left">
                <div>
                    <h3 class="text-4xl leading-5 dark:text-white font-semibold text-gray-800 mt-8 ">
                        About Us
                    </h3>
                    <hr className="mt-5 w-80" />
                    <br />
                    <img
                        src="https://i.ibb.co/4VRSWvV/nijum-pic-removebg-preview.png"
                        class="w-80 rounded-3xl"
                        alt=""
                    />
                </div>
                <div class="flex flex-col justify-between px-10 leading-normal">
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
            </div> */}
        </>
    );
}

export default About;
