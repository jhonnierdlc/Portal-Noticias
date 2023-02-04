import React, { useState, useEffect } from "react";
import axios from "axios";
import Articulos from "../Articulos/Articulos";

const Noticias = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b4cd59bba9a0433aadec266ce62d7133"
      )
      .then((response) => setArticles(response.data.articles));
  }, []);

  return (
    <>
      <h4>Noticias Actuales</h4>
      {articles.length === 0 ? (
        <p>loading...</p>
      ) : (
        <Articulos articles={articles} />
      )}
    </>
  );
};

export default Noticias;
