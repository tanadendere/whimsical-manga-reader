import Navigation from "./elements/Navigation";
import "./styles/App.css";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <>
        <Navigation />
      </>
    </NextUIProvider>
  );
}

export default App;
