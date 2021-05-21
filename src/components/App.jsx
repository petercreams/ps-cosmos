import React from "react";
import Background from "./Background";
import Footer from "./Footer";
import Header from "./Header";
import Links from "./Links";
import Rocket from "./Rocket";

import { getStarlink, getRockets, getCrew, getCapsules } from "../api/getData";
import dataParser from "../api/parseData";

// const StarlinkData = getStarlink();
// const RocketsData = getRockets();
// const CrewData = getCrew();
const CapsulesData = getCapsules();

// console.log(StarlinkData);
// console.log(RocketsData);
// console.log(CrewData);
console.log(CapsulesData);

// const Crew = dataParser(CrewData, "crew");

// console.log(Crew);


// starlinkData = getStarlink();

function App() {

  

  return (
    <>
      <Header />
      <Background />
      <Links />
      <Rocket />
      <Footer />
      {/* <Links /> //a w nim linki zduplikowane
        <Rocket /> //a w nim ilustracje i launch rocket
        <Footer /> */}
    </>
  );
}

export default App;
