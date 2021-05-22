import React, { useState, useEffect} from "react";
import Background from "./Background";
import Footer from "./Footer";
import Header from "./Header";
import Links from "./Links";
import Rocket from "./Rocket";
import Modal from "./Modal";

import { getStarlink, getRockets, getCrew, getCapsules } from "../api/getData";


function App() {

  return (
    <>
      <Header />
      <Background />
      <Links />
      <Rocket />
      <Footer />
    </>
  );
}

export default App;
