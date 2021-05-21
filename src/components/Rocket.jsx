import React, { useState } from "react";

import rocket from "../assets/images/Rocket.png";
import planet from "../assets/images/Planet.png";
import landingGear from "../assets/images/landinggear.png";
import smoke1 from "../assets/images/Smoke1.png";
import smoke2 from "../assets/images/Smoke2.png";

const Rocket = () => {
  const [startRocket, setStartRocket] = useState(false);

  const RocketLaunch = () => {
    setStartRocket(true);
    setTimeout(() => {
      setStartRocket(false);
    }, 3000);
  };

  return (
    <>

        <div className="planet">
          <img src={planet} alt="planet" />
          <img className={startRocket? "smoke1 vibrate-1" : "smoke1"} src={smoke1} alt="smoke1" />
          <img className={startRocket? "smoke2 vibrate-1" : "smoke2"} src={smoke2} alt="smoke2" />

          <div className={startRocket? "rocket-container rocketAnim" : "rocket-container"}>
          <img className={startRocket? "rocket" : "rocket"} src={rocket} alt="rocket" />
          <img className={startRocket? "gear" : "gear"} src={landingGear} alt="landingGear" />
          </div>
          

          <button
            // className={startRocket ? "launch-rocket" : null}
            className="launch-rocket"
            onClick={RocketLaunch}
          >
            Launch Rocket!
          </button>
        </div>

          

    </>
  );
};

export default Rocket;
