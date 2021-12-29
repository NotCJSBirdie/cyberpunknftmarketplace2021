import React from "react";
import Etherium from "./assets/etherium.png";
import Scene from "./assets/Project.svg";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <section class="text-gray-600 body-font w-full h-auto sm:overflow-hidden">
        <div class="container mx-auto flex flex-nowrap px-5 py-24 md:flex-row flex-col items-center overflow-hidden">
          <div class="ml-4 sm:overflow-hidden lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
            <h1
              id="main"
              class="scale-100 title-font text-5xl mb-4 font-medium text-white "
            >
              SUPER RARE CYBERPUNK NFTs
            </h1>

            <div class="flex justify-center">
              <button class="rounded-3xl inline-flex text-black bg-teal-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg">
                Explore
              </button>
              <button class="ml-4 inline-flex  text-black bg-teal-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-full text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="fill-black stroke-black scale-75  icon icon-tabler icon-tabler-player-play"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 4v16l13 -8z" />
                </svg>
              </button>
            </div>
          </div>
          <div class=" lg:max-w-lg lg:w-full md:w-1/2 w-5/6 rounded-full scale-125 sm:overflow-hidden">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={Scene}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
