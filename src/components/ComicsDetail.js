import axios from "axios";
import "../CSS/Characters.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../IMG/logo.ad6c786b.svg";
import { BASE_URL } from "../App";

const ComicsDetail = () => {
  let { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${BASE_URL}/comics/${id}`);
      setData(response.data.validData.results);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  console.log("hello my man", id);
  return <div style={{ color: "white" }}>{id}</div>;
};

export default ComicsDetail;
