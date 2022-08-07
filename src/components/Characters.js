import axios from "axios";
import "../CSS/Characters.css";
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
      const response = await axios.get(`${BASE_URL}/characters`);
      setData(response.data.validData.results);
      setFilterData(response.data.validData.results);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (search.length === 0) {
      setFilterData(data);
      return;
    }
    const r = data.filter((d) => {
      return d.name.toLowerCase().includes(search);
    });
    setFilterData(r);
  }, [data, search]);

  return (
    <div className="App">
      {isLoading === true ? (
        <div className="loader">
          <img className="logo" src={Logo} alt="img"></img>
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
            {filterData.map((character) => {
              return (
                <div className="ficheCharacters" key={character._id}>
                  <div className="partHauteCharacters">
                    <img src={character.thumbnail.path + ".jpg"} alt="img" />
                  </div>
                  <div className="partBasseCharacters">
                    <p>{character.name}</p>
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
