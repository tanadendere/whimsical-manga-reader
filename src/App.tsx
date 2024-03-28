import { NextUIProvider } from "@nextui-org/react";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <NextUIProvider>
      <>
        <HomePage></HomePage>
      </>
    </NextUIProvider>
  );
}

export default App;
