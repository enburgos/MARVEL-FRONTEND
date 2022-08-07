import "./CSS/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Characters from "./components/Characters";
import Comics from "./components/Comics";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export const BASE_URL = process.env.REACT_APP_BASE_URL;

function App() {
  return (
    <div className="Marvel-entire-page">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/comics" element={<Comics />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
