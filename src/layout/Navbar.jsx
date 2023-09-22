/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Button from "../components/Button";
import Container from "../components/Container";

export default function Navbar({ className, buttonType }) {

    return (
      <Container>
        <nav
          className={`${
            className ?? ""
          } w-full pt-6 py-10 lg:py-10 flex items-center justify-between`}
        >
          <figure>
            <Link to="/">
              <img
                src="/getlinked.svg"
                alt="GetLinked logo"
                className="w-[72px] h-[18px] lg:w-[171px] lg:h-[44px]"
              />
            </Link>
          </figure>
          <div className="hidden lg:flex items-center gap-20">
            <div className="flex items-center gap-10">
              <span className="text-white">
                <a href="/#timeline" className="hover:text-primary">
                  Timeline
                </a>
              </span>
              <span className="text-white">
                <a href="/#overview" className="hover:text-primary">
                  Overview
                </a>
              </span>
              <span className="text-white">
                <a href="/#faqs" className="hover:text-primary">
                  Faqs
                </a>
              </span>
              <Link
                to="/contact"
                className="text-white bg-clip-text hover:text-primary"
              >
                Contact
              </Link>
            </div>
            {buttonType === "gradient" ? (
              <Link to="/register">
                <button className="h-[53px] w-[172px] p-[2px] bg-primary-gradient rounded-[4px]">
                  <div className="bg-bgdark w-full h-full grid place-items-center text-white">
                    Register
                  </div>
                </button>
              </Link>
            ) : (
              <Link to="/register">
                <Button>Register</Button>
              </Link>
            )}
          </div>
          <div className="lg:hidden">
            <svg
              width="19"
              height="14"
              viewBox="0 0 19 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.35714 0H8.14286C8.50279 0 8.84799 0.1475 9.1025 0.410051C9.35701 0.672601 9.5 1.0287 9.5 1.4C9.5 1.7713 9.35701 2.1274 9.1025 2.38995C8.84799 2.6525 8.50279 2.8 8.14286 2.8H1.35714C0.997206 2.8 0.652012 2.6525 0.397498 2.38995C0.142984 2.1274 0 1.7713 0 1.4C0 1.0287 0.142984 0.672601 0.397498 0.410051C0.652012 0.1475 0.997206 0 1.35714 0ZM10.8571 11.2H17.6429C18.0028 11.2 18.348 11.3475 18.6025 11.6101C18.857 11.8726 19 12.2287 19 12.6C19 12.9713 18.857 13.3274 18.6025 13.5899C18.348 13.8525 18.0028 14 17.6429 14H10.8571C10.4972 14 10.152 13.8525 9.8975 13.5899C9.64298 13.3274 9.5 12.9713 9.5 12.6C9.5 12.2287 9.64298 11.8726 9.8975 11.6101C10.152 11.3475 10.4972 11.2 10.8571 11.2ZM1.35714 5.6H17.6429C18.0028 5.6 18.348 5.7475 18.6025 6.01005C18.857 6.2726 19 6.6287 19 7C19 7.3713 18.857 7.7274 18.6025 7.98995C18.348 8.2525 18.0028 8.4 17.6429 8.4H1.35714C0.997206 8.4 0.652012 8.2525 0.397498 7.98995C0.142984 7.7274 0 7.3713 0 7C0 6.6287 0.142984 6.2726 0.397498 6.01005C0.652012 5.7475 0.997206 5.6 1.35714 5.6Z"
                fill="white"
              />
            </svg>
          </div>
        </nav>
      </Container>
    );
}