import Logo from "./elements/Logo";
import "./styles/App.css";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <>
        <Logo />
      </>
    </NextUIProvider>
  );
}

export default App;
