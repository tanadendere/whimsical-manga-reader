import logoWithName from "../assets/longWithName.png";
import logoNoName from "../assets/logoNoName.png";
import { useEffect, useState } from "react";

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

  return (
    <img
      src={screenWidth < 640 ? logoWithName : logoNoName}
      alt="Whimsical Comics Logo"
      className="h-32 object-fit"
    />
  );
}

export default Logo;
