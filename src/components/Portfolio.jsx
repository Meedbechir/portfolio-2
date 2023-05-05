import React from "react";
import photo9 from '../Images/photo9.png'
import photo16 from '../Images/photo16.png'
import photo17 from '../Images/photo17.png'
import photo18 from '../Images/photo18.png'
import photo19 from '../Images/photo19.png'
import photo20 from '../Images/photo20.png'

const Portfolio = () => {
  const cards = [
    {
      img : photo9,
      titre : "Volkeno",
      paragraphe : "Creer un equivalent Netflix de Disney. Pour l'anecdote ce site a été fait avant la création de Disney+ #React #Api #Redux",
      button : "Voir le projet sur github",
    },
    {
      img : photo16,
      titre : "Volkeno",
      paragraphe : "Creer un equivalent Netflix de Disney. Pour l'anecdote ce site a été fait avant la création de Disney+ #React #Api #Redux",
      button : "Voir le projet sur github",
    },
    {
      img : photo17,
      titre : "Volkeno",
      paragraphe : "Creer un equivalent Netflix de Disney. Pour l'anecdote ce site a été fait avant la création de Disney+ #React #Api #Redux #React #Api #Redux",
      button : "Voir le projet sur github",
    },
    {
      img : photo18,
      titre : "Volkeno",
      paragraphe : "Creer un equivalent Netflix de Disney. Pour l'anecdote ce site a été fait avant la création de Disney+ #React #Api #Redux",
      button : "Voir le projet sur github",
    },
    {
      img : photo19,
      titre : "Volkeno",
      paragraphe : "Creer un equivalent Netflix de Disney. Pour l'anecdote ce site a été fait avant la création de Disney+ #React #Api #Redux",
      button : "Voir le projet sur github",
    },
    {
      img : photo20,
      titre : "Volkeno",
      paragraphe : "Creer un equivalent Netflix de Disney. Pour l'anecdote ce site a été fait avant la création de Disney+ #React #Api #Redux",
      button : "Voir le projet sur github",
    },
  ]
  return (
    <div className="container py-5">
      <div className="row">
        <h1 className="text-center fw-bolder">Mon Portfolio</h1>
        <div className="row">
          {cards.map((cards) => (
              <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
              <div className="card">
                <img src={cards.img} className="card-img-top" alt="Img" /> 
              <div class="card-body">
                <h5 className="card-title text-secondary">{cards.titre}</h5>
                <p className="card-text lead">{cards.paragraphe}</p>
                <button className="btn border-primary btn-outline-primary">{cards.button}</button>
              </div>
            </div>
              </div>
          ))}
          
       
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
