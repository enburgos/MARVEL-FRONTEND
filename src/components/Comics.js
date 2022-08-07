import axios from "axios";
import "../CSS/Characters.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../IMG/logo.ad6c786b.svg";
import { BASE_URL } from "../App";

function Characters() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${BASE_URL}/comics`);
      setFilterData(response.data.validData.results);
      setData(response.data.validData.results);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  useEffect(() => {}, [data]);

  useEffect(() => {
    if (search.length === 0) {
      setFilterData(data);
      return;
    }
    const r = data.filter((d) => {
      return d.title.toLowerCase().includes(search);
    });
    setFilterData(r);
  }, [data, search]);

  return (
    <div className="App">
      {isLoading === true ? (
        <div className="loader">
          <img className="logo" src={Logo}></img>
        </div>
      ) : (
        <div className="entirePage">
          <div className="searchbar">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          <div className="content">
            {filterData.map((cat) => {
              return (
                <div className="ficheCharacters" key={cat._id}>
                  <div className="partHauteCharacters">
                    <img src={cat.thumbnail.path + ".jpg"} alt="img" />
                  </div>
                  <div className="partBasseCharacters">
                    <p>{cat.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Characters;
