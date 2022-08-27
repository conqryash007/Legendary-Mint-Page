import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Bounce, Slide } from 'react-reveal';
import Count from '../Counter/Count';
import Header from '../Header/Header';
import CountLegendary from './CountLegendary';
import LegendaryImage from './images/2496-1536x1536.webp'
const Legendary = () => {
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

                                Sacrifice 2 Epics Get 1 Legendary!                            </h1>
                            <div className="h-8 w-28 bg-warning  particle"></div>
                        </div>

                        <p className="py-6 pr-10 text-xl text-gray-400 font-medium">
                            Here you can sacrifice 2 Epic Heroes to Get 1 Legendary! Choose wisely, some epics can be more powerful with training & upgrades.

                        </p>

                        <div>
                            <CountLegendary Count1={626} Count2={313} Count3={0}></CountLegendary>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Legendary;