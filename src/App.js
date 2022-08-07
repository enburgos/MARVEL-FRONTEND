import "./CSS/App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Characters from "./components/Characters";
import Comics from "./components/Comics";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import CharactersDetail from "./components/CharactersDetail";
import ComicsDetail from "./components/ComicsDetail";

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
          <Route path="/comics/:id" element={<ComicsDetail />} />
          <Route path="/characters/:id" element={<CharactersDetail />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
