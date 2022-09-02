import React, { useEffect, useState } from "react";
import { Bounce, Slide } from "react-reveal";
import Header from "../Header/Header";
import CountLegendary from "./CountLegendary";
import LegendaryImage from "./images/2496-1536x1536.webp";
import { useMoralis } from "react-moralis";
import { CONFIG } from "./../../config";
import { SHMMABI } from "./artifacts/SuperheroMooseABI";

const Legendary = () => {
  const { account, Moralis } = useMoralis();
  const [burnedNum, setBurnedNum] = useState(null);
  useEffect(() => {
    const run = async () => {
      // burned number
      const readOptionsBurned = {
        contractAddress: CONFIG.smart_contract_superHeroMutantMoose,
        functionName: "getNextId",
        chain: CONFIG.chainID,
        abi: SHMMABI,
        params: {
          _type: 2,
        },
      };
      let valBur = await Moralis.executeFunction(readOptionsBurned);
      let burned = parseInt(valBur._hex, 16);

      burned = (burned - 1251) * 2;
      setBurnedNum(burned);
    };
    if (account) run();
  }, [account]);

  return (
    <div className="bg">
      <Header></Header>

      <hr className="border-custom" />
      <div className="hero  min-h-screen  lg:px-28 sm:px-0 text-white">
        <div className="flex justify-center max-w-8xl gap-x-10 p-4 flex-col md:flex-row-reverse mt-10">
          <Bounce>
            <div className="moose-Card">
              <Slide bottom>
                <img
                  alt="hero alpha"
                  src={LegendaryImage}
                  className=" lg:max-w-sm   rounded-lg shadow-2xl moose-image"
                />
              </Slide>
            </div>
          </Bounce>

          <div className="sm:w-full lg:w-3/5">
            <div>
              <h1 className="text-4xl lg:text-7xl font-bold ">
                Sacrifice 2 Epics Get 1 Legendary!{" "}
              </h1>
              <div className="h-8 w-28 bg-warning  particle"></div>
            </div>

            <p className="py-6 pr-10 text-xl text-gray-400 font-medium">
              Here you can sacrifice 2 Epic Heroes to Get 1 Legendary! Choose
              wisely, some epics can be more powerful with training & upgrades.
            </p>

            <div>
              <CountLegendary
                Count1={626}
                Count2={313}
                Count3={burnedNum}
              ></CountLegendary>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legendary;
