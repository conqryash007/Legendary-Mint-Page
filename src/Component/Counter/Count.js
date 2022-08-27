import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
const Count = ({ Count1, Count2, Count3 }) => {
  return (
    <div className="count">
      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {(isVisible) => (
          <div className="lg:flex sm:flex gap-x-5 items-center h-28 text-5xl cutomCount">
            <div className=" flex justify-center" style={{ height: 80, color: "white" }}>
              <div>
                <p>{isVisible ? <CountUp end={Count1} /> : null}/100</p>

                <p className="uppercase text-sm text-center md:text-start lg:text-start">Available</p>
              </div>
            </div>
          </div>
        )}
      </VisibilitySensor>
    </div>
  );
};

export default Count;
