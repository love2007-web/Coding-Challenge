import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="body">
      <nav class="flex justify-between p-3 sm:p-4 items-center">
        <div class="w-28 sm:w-40">
          <img src={require("./images/logo.png")} alt="" />
        </div>
        <div className="hidden sm:text-white sm:w-2/5 sm:mx-24 sm:flex sm:justify-between">
          <button>Timeline</button>
          <button>Overview</button>
          <button>FAQs</button>
          <button>Contact</button>
          <button className="register px-8 py-1.5 rounded">Register</button>
        </div>
        <div className="sm:hidden">
          <span class="material-symbols-rounded">menu_open</span>
        </div>
      </nav>
      <hr />
      <main className="text-white flex justify-center sm:block">
        {/* first text */}
        <div>
          <div className="relative text-white text-center sm:text-right sm:text-3xl sm:mx-6">
            <h2>Igniting a Revolution in HR Innovation</h2>
            <img
              className="absolute left-56 sm:left-0 sm:line sm:w-40"
              src={require("./images/Vector 4.png")}
              alt=""
            />
          </div>

          {/* desktop view */}
          <div>
            <div className="relative text-center">
              <div className="w-5 absolute -top-5 left-72">
                <img src={require("./images/Creative 1.png")} alt="" />
              </div>
              <h1 className="mt-10 text-4xl main">
                <div>
                  getlinked Tech Hackathon 1.0 &nbsp; &nbsp; &nbsp;
                  &nbsp;&nbsp;&nbsp;
                  <span className="flex w-10 absolute bottom-0 right-20">
                    <img
                      src={require("./images/chain-9365116-7621444.png")}
                      alt=""
                    />
                    <img src={require("./images/1f4a5.png")} alt="" />
                  </span>
                </div>
              </h1>
            </div>
            {/* paragraph */}
            <div className="flex flex-wrap justify-center mx-auto mt-5 w-72">
              <p>
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize
              </p>
            </div>
            {/* register */}
            <div className="flex justify-center mt-5">
              <button className="btn register px-5 py-2 rounded">
                Register
              </button>
            </div>

            {/* countdown */}
            <div className="countdown flex justify-center mt-5">
              <div className="flex text-3xl">
                <h1 className="tracking-widest">
                  00<small className="text-sm">H</small>
                </h1>{" "}
                &nbsp;&nbsp;&nbsp;
                <h1 className="tracking-widest">
                  00<small className="text-sm">M</small>
                </h1>{" "}
                &nbsp;&nbsp;&nbsp;
                <h1 className="tracking-widest">
                  00<small className="text-sm">S</small>
                </h1>
                &nbsp;
              </div>
            </div>
            <div className="relative">
              <div className="mt-12">
                <img
                  src={require("./images/man-wearing-smart-glasses-touching-virtual-screen 1.png")}
                  alt=""
                />
                <img
                  className="absolute bottom-0 animate-pulse"
                  src={require("./images/Image 1.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
