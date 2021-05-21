import React from "react";
import Link from "./Link";

import image1 from "../assets/images/Image1.png";
import image2 from "../assets/images/Image2.png";
import image3 from "../assets/images/Image3.png";
import image4 from "../assets/images/Image4.png";

function Links() {
  return (
    <>
      <Link
        src={image1}
        imgClassName="crew shadow"
        textClassName="text-links"
        containerClassName="crew-container"
        text="Crew"
      />
      <Link
        src={image2}
        imgClassName="rockets"
        textClassName="text-links"
        containerClassName="rockets-container"
        text="Rockets"
      />
      <Link
        src={image3}
        imgClassName="details"
        textClassName="text-links"
        containerClassName="details-container"
        text="Details"
      />
      <Link
        src={image4}
        imgClassName="capsules"
        textClassName="text-links"
        containerClassName="capsules-container"
        text="Capsules"
      />
    </>
  );
}

export default Links;