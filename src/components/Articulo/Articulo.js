import React from "react";
import "./Articulo.css";

const Articulo = ({ article, setOpen, setContentInfo }) => (
  <>
    <div className="article">
      <div>
        <strong>Autor:</strong>
        <span>{article.author}</span>
      </div>
      <div>
        <strong>Titulo:</strong>
        <span>{article.title}</span>
      </div>
    </div>
    <div className="article-img">
      <img src={article.urlToImage} alt="img-article" />
      <div>
        <strong>Descripcion:</strong>
        <span>{article.description}</span>
      </div>
    </div>
    <div className="more-details">
      <span
        onClick={() => {
          setOpen(true);
          setContentInfo(article);
        }}
      >
        More Details...
      </span>
    </div>
  </>
);

export default Articulo;
