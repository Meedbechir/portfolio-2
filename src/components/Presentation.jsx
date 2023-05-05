import React from "react";

const Presentation = () => {
  return (
    <div className="container-fluid presentation">
      <div className="row ">
        <h1 className="text-center pt-4 fw-bolder">Présentation</h1>
        <div className="col-md-6 col-sm-6 col-12 pt-5">
          <p className="fw-bolder fs-4">Capacité d'apprentissage</p>
          <p className="fw-bolder fs-4">Collaboration</p>
          <p className="fw-bolder fs-4">Responsabilité</p>
          <p className="fw-bolder fs-4">Prise de décision</p>
          <p className="fw-bolder fs-4">Gestion du temps</p>
        </div>
        <div className="col-md-6 col-sm-6 col-12 pt-3">
          <h4 className="text-start text-info">Triforce !</h4>
          <p className="fw-bolder ">
            À l'écoute, je suis FORCE de proposition, j'aime chercher des
            solutions et ainsi rendre services. Passionné par l'apprentissage et
            la découverte intellectuelle, j'ai développé une FORCE de travail
            afin de toujours progresser au quotidien. FORCE tranquille, j'ai
            toujours su collaborer et pleinement m'intégrer au sein du
            collectif. <br />
            <br />
            <br />
            Besoin d'un collaborateur flexible et persévérant ? Je vous propose
            mes services par le biais d'une ALTERNANCE. Avec 4 jours dans votre
            société et 1 jour en formation, le tout modulable comme vous le
            souhaitez, je pourrais facilement répondre à vos besoins.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
