import React, { useState, useEffect } from "react";
import "./Header.css";
import { FaConnectdevelop } from "react-icons/fa";
import { useMoralis } from "react-moralis";
import Web3 from "web3/dist/web3.min.js";

const Header = () => {
  const [buttonText, setButtonText] = useState("Connect");

  const { authenticate, isAuthenticated, account, Moralis } = useMoralis();
  useEffect(() => {
    if (account) {
      let str = account;
      setButtonText(`${str.substring(0, 6)}..${str.slice(-2)}`);
    }
    if (isAuthenticated && account) {
      let str = account;
      console.log(account);
      setButtonText(`${str.substring(0, 6)}..${str.slice(-2)}`);
    }
    if (!account) {
      setButtonText("Connect");
    }
  }, [isAuthenticated, account]);

  const login = async () => {
    let flag = 0;
    if (!account) {
      await Moralis.enableWeb3();
      new Web3(Moralis.provider);
      flag = 1;
    }

    if (!isAuthenticated && !account && flag === 0) {
      await authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user?.get("ethAddress"));
          let str = account;
          setButtonText(`${str.substring(0, 6)}..${str.slice(-2)}`);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      if (account) {
        let str = account;
        setButtonText(`${str.substring(0, 6)}..${str.slice(-2)}`);
      }
    }
  };

  return (
    <div className="navbar header  px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 uppercase text-white"
          >
            <li>
              <a href="https://moosesocietynft.io/">Home</a>
            </li>
          </ul>
        </div>
        <a
          href="https://moosesocietynft.io/"
          className="btn btn-ghost normal-case text-xl max-w-full"
        >
          <img
            className="header-logo"
            width={200}
            height={28}
            src="https://moosesocietynft.io/wp-content/uploads/2022/03/Website-Logo-2-300x28.png"
            alt=""
            srcSet=""
          />
        </a>
      </div>
      <div className="navbar-end">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal p-0 uppercase text-white">
            <li>
              <a href="https://moosesocietynft.io/">Home</a>
            </li>
          </ul>
        </div>
        <div className="btn-header px-6">
          <button
            onClick={login}
            className="dashboard uppercase flex items-center gap-x-1 dashboardbtn"
          >
            {buttonText}
            <FaConnectdevelop />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
