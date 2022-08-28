import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
const CountLegendary = ({ Count1, Count2, Count3 }) => {
  return (
    <div className="count lg:mt-0 mt-20">
      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {(isVisible) => (
          <div className="lg:flex flex flex-col lg:flex-row justify-center lg:justify-start gap-x-5 items-center h-28 text-5xl cutomCount">
            <div
              className="lg:p-0 py-5 flex lg:justify-start justify-center borderLiner  w-full lg:w-3/12"
              style={{ color: "white" }}
            >
              <div>
                <p className="text-center lg:text-start">
                  {isVisible ? <CountUp end={Count1} /> : null}
                  <p className="uppercase text-sm text-center md:text-start lg:text-start">
                    EPICS
                  </p>
                </p>
              </div>
            </div>
            <div
              className=" flex justify-center  w-full lg:w-3/12 borderLine "
              style={{ color: "white" }}
            >
              <div>
                <p className=" text-center lg:text-start">
                  {isVisible ? <CountUp end={Count2} /> : null}
                  <p className="uppercase text-sm text-center md:text-start lg:text-start">
                    AVAILABLE
                  </p>
                </p>
              </div>
            </div>
            <div
              className="lg:p-0 py-5 flex justify-center  w-full lg:w-3/12 borderLinel "
              style={{ color: "white" }}
            >
              <div>
                <p className="lg:p-0 pt-5 text-center lg:text-start">
                  {isVisible ? <CountUp end={Count3} /> : null}
                  <p className="uppercase text-sm text-center md:text-start lg:text-start">
                    Sacrificed
                  </p>
                </p>
              </div>
            </div>
          </div>
        )}
      </VisibilitySensor>
    </div>
  );
};

export default CountLegendary;
