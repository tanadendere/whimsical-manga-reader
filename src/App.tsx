import Navigation from "./elements/Navigation";
import LoginPage from "./pages/LoginPage";
import "./styles/App.css";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <>
        <LoginPage />
      </>
    </NextUIProvider>
  );
}

export default App;
