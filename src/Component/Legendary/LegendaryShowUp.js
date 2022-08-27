import React from 'react';
import { Bounce, Slide } from 'react-reveal';
import Image from './images/promo-1.webp'
import Image2 from './images/promo-2 (1).webp'
import Image3 from './images/promo-2.webp'
const LegendaryShowUp = () => {
    const LegendaryShowUpData = [
        {
            image: Image,
            buttonText: "Choose 1st Epic"
        },
        {
            image: Image2,
            buttonText: "Choose 1st Epic"
        },
        {
            image: Image3,
            buttonText: "Get A Legendary"
        }
    ]
    return (
        <div className='flex justify-center mt-20 mb-20'>
            <div className="lg:grid lg:grid-cols-3  gap-x-12 lg:px-20">
                {
                    LegendaryShowUpData.map((data) => {
                        return <div><Bounce><div className="moose-Card1 w-full lg:w-80 mt-9" >
                            <Slide bottom>
                                <img
                                    alt="hero alpha"
                                    src={data.image}
                                    className="  rounded-lg shadow-2xl moose-image"
                                />
                            </Slide>


                        </div>
                            <button className='dashboard px-12 py-3 font-semibold'>{data.buttonText} </button>
                        </Bounce></div>




                    })
                }
            </div>
        </div>
    );
};

export default LegendaryShowUp;