import React, { useState } from "react";
import Articulo from "../Articulo/Articulo";
import Modal from "../Modal/Modal";
import "./Articulos.css";

const Articulos = ({ articles }) => {
  const [open, setOpen] = useState(false);
  const [contentInfo, setContentInfo] = useState(false);

  const content = (
    <div className="articles-content">
      <div>
        <strong>Publicado: </strong>
        <span>{contentInfo.publishedAt}</span>
      </div>
      <img alt="img" src={contentInfo.urlToImage} />
      <div>
        <strong>Contenido: </strong>
        <span>{contentInfo.content}</span>
      </div>
      
      <a href={contentInfo.url} rel="noreferrer" target="_blank">
        Leer más...
      </a>
    </div>
  );

  return (
    <div className="articles">
      {articles.map((article, key) => (
        <Articulo
          key={key}
          article={article}
          setOpen={setOpen}
          setContentInfo={setContentInfo}
        />
      ))}
      {open && <Modal {...{ open, setOpen, content }} />}
    </div>
  );
};

export default Articulos;
