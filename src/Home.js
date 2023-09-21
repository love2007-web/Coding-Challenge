import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="body">
      <nav class="flex justify-between p-3 items-center">
        <div class="w-28 sm:w-full">
          <img src={require("./images/logo.png")} alt="" />
        </div>
        <div>
          <span class="material-symbols-rounded">menu_open</span>
        </div>
      </nav>
      <hr />
      <main className="text-white flex justify-center">
        {/* first text */}
        <div>
          <div className="relative text-white text-center">
            <h2>Igniting a Revolution in HR Innovation</h2>
            <img
              className="absolute left-56"
              src={require("./images/Vector 4.png")}
              alt=""
            />
          </div>
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
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
          </div>
          {/* register */}
          <div className="flex justify-center mt-5">
            <button className="btn register px-5 py-2 rounded">Register</button>
          </div>

          {/* countdown */}
          <div className="countdown flex justify-center mt-5">
            <div className="flex">
              <h1 className="tracking-widest">
                00<small>H</small>
              </h1>{" "}
              &nbsp;&nbsp;&nbsp;
              <h1 className="tracking-widest">
                00<small>M</small>
              </h1>{" "}
              &nbsp;&nbsp;&nbsp;
              <h1 className="tracking-widest">
                00<small>S</small>
              </h1>
              &nbsp;
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
