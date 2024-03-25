import HomePage from "./pages/HomePage";
import "./styles/App.css";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <>
        <HomePage />
      </>
    </NextUIProvider>
  );
}

export default App;
