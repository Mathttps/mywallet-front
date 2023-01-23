import GlobalStyle from "../assets/globalStyles.js";
import Login from "./Login.js";
import Signup from "./Signup.js";
import Entries from "./Entrada.js";
import Form from "./Formulario.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/entries" element={<Entries />} />
          <Route path="/submit" element={<Form />} />
        </Routes>
      </BrowserRouter>
  );
}
