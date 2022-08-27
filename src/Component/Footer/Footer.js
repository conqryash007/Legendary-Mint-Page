import React from "react";
import {
  FaArrowRight,
  FaDiscord,
  FaInstagram,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";
import { Slide, Zoom } from "react-reveal";

import "./Footer.css";

const Footer = () => {
  return (
    <Zoom>
      <div className="footer-main-div lg:px-28 sm:px-5 pt-16">
        <footer className="footer lg:p-20 sm:p-10  footer-bg  text-base-content">
          <Slide bottom>
            <div className="text-white">
              <span className=" text-lg text-white">Newsletter</span>
              <div className="footer-text form-control w-96">
                <h1 className="text-4xl font-bold">Join Our Newsletter</h1>
                <p className="text-lg mt-3 ">
                  You never know what you might get from us. We probably won't
                  send you anything to crazy!
                </p>
                <div className="footer-subs flex gap-x-2 mt-5 ">
                  <input
                    style={{ color: "black" }}
                    type="text"
                    placeholder="username@site.com"
                    className="input bg-white input-bordered w-full pr-16"
                  />
                  <a
                    href="#"
                    className="dashboard uppercase flex items-center gap-x-1 dashboardbtn"
                  >
                    Subscribe
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </Slide>
          <Slide bottom>
            {" "}
            <div>
              <span>
                <img
                  width={200}
                  src="https://moosesocietynft.io/wp-content/uploads/2022/03/Website-Logo-2-300x28.png"
                  alt=""
                />
              </span>
              <p className=" w-72 text-white text-lg">
                Thank you for checking out our site! We would love for you to
                become part of our herd!
              </p>
              <div className="flex gap-x-3">
                <a
                  href="https://twitter.com/moosesocietynft"
                  className="text-2xl link link-hover"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com/moosesocietynft/"
                  className="text-2xl link link-hover"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://discord.com/invite/zXtyA6F6KP"
                  className="text-2xl link link-hover "
                >
                  <FaDiscord />
                </a>
                <a
                  href="https://www.twitch.tv/moosesociety"
                  className="text-2xl link link-hover"
                >
                  <FaTwitch />
                </a>
              </div>
            </div>
          </Slide>
          <Slide bottom>
            {" "}
            <div className="text-white links-footer">
              <span className="text-lg text-white">Quick Menu</span>
              <a
                href="https://moosesocietynft.io/"
                className="link link-hover "
              >
                Home
              </a>
              <a
                href="https://moosesocietynft.io/terms-conditions/"
                className="link link-hover"
              >
                Terms & Conditions
              </a>
              <a
                href="https://moosesocietynft.io/contact-us/"
                className="link link-hover"
              >
                Contact Us
              </a>
              <a
                href="https://moosesocietynft.io/story/"
                className="link link-hover"
              >
                Story
              </a>
            </div>
          </Slide>
        </footer>

        <footer className="footer px-10 py-10 border-t text-base-content border-base-300 ">
          <div className="items-center grid-flow-col">
            <p>Copyright © NiFTy | All rights reserved</p>
          </div>
          <div className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col  gap-4 text-warning">
              <a
                href="https://moosesocietynft.io/"
                className="link link-hover "
              >
                Home
              </a>
              <a
                href="https://moosesocietynft.io/terms-conditions/"
                className="link link-hover"
              >
                Terms & Conditions
              </a>
              <a
                href="https://moosesocietynft.io/contact-us/"
                className="link link-hover"
              >
                Contact Us
              </a>
              <a
                href="https://moosesocietynft.io/story/"
                className="link link-hover"
              >
                Story
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Zoom>
  );
};

export default Footer;
