import "./styles/App.css";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <>
        <h1 className="text-3xl font-bold">Whimsical Manga Reader</h1>
      </>
    </NextUIProvider>
  );
}

export default App;
