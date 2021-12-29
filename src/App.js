import "./App.css";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import Hero from "./components/Hero.js";
import Pricing from "./components/Pricing";
import SideBar from "./components/SideBar";
import Playground from "./components/Playground";
import Cards from "./components/Cards";
import Chart from "./components/Chart";

function App() {
  return (
    <div className="h-auto flex">
      <SideBar />
      <div className="w-full h-auto flex flex-col">
        <Hero />
        <div className="h-auto flex flex-row">
          <Cards />
        </div>
        <div className="flex flex-col justify-center ml-4 relative bottom-48">
          <h1 id="stats" className="text-white text-xl text-center ">
            Weekly Stats
          </h1>
          <div className="flex flex-row justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="fill-emerald-500 stroke-black rounded-full mr-2 bg-violet-400/50 icon icon-tabler icon-tabler-currency-ethereum"
              width="10%"
              height="100"
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
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
