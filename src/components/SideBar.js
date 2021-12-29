import React from "react";
import Home from "./assets/home.svg";
import Pricing from "./Pricing";
import Hero from "./Hero";
const SideBar = () => {
  return (
    <div class="flex flex-nowrap">
      <div class="flex flex-col w-24 h-auto py-8 bg-gradient-to-b from-indigo-900/75 to-black/75  dark:bg-gray-800 dark:border-gray-600">
        <div class="flex flex-col items-center mt-6 pt-4 pb-4 hover:bg-gray-200 p-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="p-2 w-16 h-16 rounded-full bg-black/50 icon icon-tabler icon-tabler-chart-donut"
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
            <path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-3.8a4.1 4.1 0 1 1 -5 -5v-4a0.9 .9 0 0 0 -1 -.8" />
            <path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a9 9 0 0 0 -1 -1v-4.5" />
          </svg>
        </div>

        <div class="flex flex-col items-center mt-6 pt-4 pb-4 p-0"></div>

        <div class="flex flex-col items-center mt-6 pt-4 pb-4 hover:bg-gray-200 p-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="p-2 w-16 h-16 rounded-full bg-violet-400/50 icon icon-tabler icon-tabler-home"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="5 12 3 12 12 3 21 12 19 12" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
          </svg>
        </div>

        <div class="flex flex-col items-center mt-6 pt-4 pb-4 hover:bg-gray-200 p-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-camera p-2 w-16 h-16 rounded-full bg-violet-400/50"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
            <circle cx="12" cy="13" r="3" />
          </svg>
        </div>

        <div class="flex flex-col items-center mt-6 pt-4 pb-4 hover:bg-gray-200 p-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="p-2 w-16 h-16 rounded-full bg-violet-400/50 icon icon-tabler icon-tabler-chart-bar"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="3" y="12" width="6" height="8" rx="1" />
            <rect x="9" y="8" width="6" height="12" rx="1" />
            <rect x="15" y="4" width="6" height="16" rx="1" />
            <line x1="4" y1="20" x2="18" y2="20" />
          </svg>
        </div>

        <div class="flex flex-col items-center mt-6 pt-4 pb-4 hover:bg-gray-200 p-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class=" p-2 w-16 h-16 rounded-full bg-violet-400/50 icon icon-tabler icon-tabler-settings"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>

        <div class="flex flex-col items-center mt-6 pt-4 pb-4 p-0"></div>

        <div class="flex flex-col items-center mt-40 pt-4 pb-4 hover:bg-gray-200 p-0">
          <img
            class=" w-16 h-16 rounded-full bg-violet-400/50 object-cover mx-2"
            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="avatar"
          />
        </div>
      </div>
      {/* <div className="container mx-auto h-auto md:w-4/5 w-11/12 ">
        <Hero />
        <Pricing />
      </div> */}
    </div>
  );
};

export default SideBar;
