import React from "react";
import "./Cards.css";
import Painting1 from "./assets/painting1.jpg";
import Painting2 from "./assets/painting2.jpg";
import Photography1 from "./assets/photography1.jpg";
import Chart from "./Chart";

const Cards = () => {
  return (
    <div>
      <section class=" dark:bg-gray-900  w-max h-auto ">
        <div class="bg-black/50 relative  container px-6 py-2 mx-auto">
          <div class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
            {/* <LineChart
              width={600}
              height={300}
              data={data}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
            </LineChart> */}

            <div
              id="card"
              class="bg-indigo-600/50 p-4 scale-75 bottom-52 relative max-w-xs mx-auto overflow-hidden  w-full rounded-lg shadow-lg dark:bg-gray-800"
            >
              <img
                id="productimage"
                class="rounded-lg object-cover w-full h-48"
                src={Painting1}
                alt="NIKE AIR"
              />

              <div class="py-2">
                <h1
                  id="productname"
                  class="text-xl font-bold text-white dark:text-white pb-12"
                >
                  Installation Art #09
                </h1>
              </div>

              <div class="flex flex-row items-center justify-between py-2">
                <h1 class="flex flex-row text-lg font-bold text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="fill-emerald-500 stroke-black rounded-full mr-2 bg-violet-400/50 icon icon-tabler icon-tabler-currency-ethereum"
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
                    <path d="M6 12l6 -9l6 9l-6 9z" />
                    <path d="M6 12l6 -3l6 3l-6 2z" />
                  </svg>
                  0312
                </h1>
                <button class="text-white px-2 py-1 text-lg font-semibold uppercase transition-colors duration-200 transform  rounded flex flex-row ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="fill-white icon icon-tabler icon-tabler-heart mr-2"
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
                    <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                  </svg>
                  55
                </button>
              </div>
            </div>

            <div
              id="card"
              class="bg-indigo-600/50 p-4 scale-75 bottom-52 relative max-w-xs mx-auto overflow-hidden  w-full rounded-lg shadow-lg dark:bg-gray-800"
            >
              <img
                id="productimage"
                class="rounded-lg object-cover w-full h-48"
                src={Painting2}
                alt="NIKE AIR"
              />

              <div class="py-2">
                <h1
                  id="productname"
                  class="text-xl font-bold text-white dark:text-white pb-12"
                >
                  Painting #991
                </h1>
              </div>

              <div class="flex flex-row items-center justify-between py-2">
                <h1 class="flex flex-row text-lg font-bold text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="fill-emerald-500 stroke-black rounded-full mr-2 bg-violet-400/50 icon icon-tabler icon-tabler-currency-ethereum"
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
                    <path d="M6 12l6 -9l6 9l-6 9z" />
                    <path d="M6 12l6 -3l6 3l-6 2z" />
                  </svg>
                  0312
                </h1>
                <button class="text-white px-2 py-1 text-lg font-semibold uppercase transition-colors duration-200 transform  rounded flex flex-row ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="fill-white icon icon-tabler icon-tabler-heart mr-2"
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
                    <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                  </svg>
                  55
                </button>
              </div>
            </div>

            <div
              id="card"
              class="bg-indigo-600/50 p-4 scale-75 bottom-52 relative max-w-xs mx-auto overflow-hidden  w-full rounded-lg shadow-lg dark:bg-gray-800"
            >
              <img
                id="productimage"
                class="rounded-lg object-cover w-full h-48"
                src={Photography1}
                alt="NIKE AIR"
              />

              <div class="py-2">
                <h1
                  id="productname"
                  class="text-xl font-bold text-white dark:text-white pb-12"
                >
                  Photography #11
                </h1>
              </div>

              <div class="flex flex-row items-center justify-between py-2">
                <h1 class="flex flex-row text-lg font-bold text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="fill-emerald-500 stroke-black rounded-full mr-2 bg-violet-400/50 icon icon-tabler icon-tabler-currency-ethereum"
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
                    <path d="M6 12l6 -9l6 9l-6 9z" />
                    <path d="M6 12l6 -3l6 3l-6 2z" />
                  </svg>
                  0312
                </h1>
                <button class="text-white px-2 py-1 text-lg font-semibold uppercase transition-colors duration-200 transform  rounded flex flex-row ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="fill-white icon icon-tabler icon-tabler-heart mr-2"
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
                    <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                  </svg>
                  55
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cards;
