import logoWithName from "../assets/longWithName.png";
import logoNoName from "../assets/logoNoName.png";
import { useEffect, useState } from "react";
import React from "react";

function Logo() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  return screenWidth < 640 ? (
    <img
      src={logoWithName}
      alt="Whimsical Comics Logo"
      className="h-32 object-fit"
    />
  ) : (
    <img
      src={logoNoName}
      alt="Whimsical Comics Logo"
      className="h-32 object-fit"
    />
  );
}

export default Logo;
