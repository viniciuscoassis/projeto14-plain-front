import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../assets/globalStyles";
import AuthScreen from "./authPage/AuthScreen";
import Home from "./Home/Home";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
