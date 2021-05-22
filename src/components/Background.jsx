import React from "react";
import { ReactComponent as CircleLeft } from "../assets/images/circle-left.svg";
import { ReactComponent as CircleTop } from "../assets/images/circle-top.svg";
import { ReactComponent as CircleRight } from "../assets/images/circle-right.svg";
import { ReactComponent as Dot1 } from "../assets/images/dot1.svg";
import { ReactComponent as Dot2 } from "../assets/images/dot2.svg";
import { ReactComponent as Dot3 } from "../assets/images/dot3.svg";

function Background() {
  return (
    <>
      <CircleLeft className="circle-left" />
      <CircleTop className="circle-top" />
      <CircleRight className="circle-right" />
      <Dot1 className="dot1"/>
      <Dot2 className="dot2"/>
      <Dot3 className="dot3"/>
      <Dot1 className="dot4"/>

    </>
  );
}

export default Background;
