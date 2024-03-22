import logo from "../assets/logo.svg";

function Logo() {
  return (
    <img
      src={logo}
      alt="Whimsical Comics Logo"
      className="h-32 pt-6 object-fit"
    />
  );
}

export default Logo;
