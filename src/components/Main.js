import image from "../IMG/thumb-1920-948697.jpeg";
import ComicsImage from "../IMG/thumb-1920-218487.jpeg";
import Hulk from "../IMG/thumb-1920-341057.jpeg";
import "../CSS/Main.css";
import axios from "axios";

import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="mainPage">
      <img src={image} alt="imageMarvel" className="spiderman" />
      <div className="centralPart">
        <div className="fiche">
          <Link to="/characters">
            <div className="partHaute">
              <img src={Hulk} alt="Hulk" />
            </div>
            <div className="partBasse">Personnages</div>
          </Link>
        </div>

        <div className="fiche">
          <Link to="/comics">
            <div className="partHaute">
              <img src={ComicsImage} alt="ComicsImage" />
            </div>
            <div className="partBasse">Comics</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
