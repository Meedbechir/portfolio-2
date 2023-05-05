import React from "react";

const Experiences = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center fw-bolder">Mes Experiences</h1>
      <div className="row">
        <div className="col-12 mb-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title fs-4">
                Développeur Front-End en alternance (RNCP niveau 6)
              </h5>
              <h6 className="card-subtitle py-3 text-warning">Janvier 2021</h6>
              <p className="card-text h6">
                Pédagogie basée sur la réalisation de projets concrets avec
                l'accompagnement d'un expert métier chaque semaine. L'alternance
                peut débuter à tout moment dans l'année avec 4 jours en
                entreprise et un jour de formation modulables dans la semaine.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 mb-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title fs-4">CS50, Harvard</h5>
              <h6 className="card-subtitle py-3 text-warning">
                Aout-octobre 2020
              </h6>
              <p className="card-text h6">
                Formation en ligne exclusivement dispensée en anglais. Les
                sujets comprennent l'abstraction, les algorithmes, les
                structures dedonnées, l'encapsulation, la gestion des
                ressources, la sécurité, l'ingénierie logicielle et le
                développement Web. L'ensemble des problèmes est inspiré des
                domaines du monde réel de la biologie, de la cryptographie, de
                la finance et des jeux.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 mb-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title fs-4">
                Développeur Junior, M2I Formaton
              </h5>
              <h6 className="card-subtitle py-3 text-warning">
                Mars-Juillet 2020
              </h6>
              <p className="card-text h6">
                Formation à raison de 35h/s à distance. Ce cursus comprend HTML,
                CSS, Bootstrap, Algorithmie, Javascript, React JS, Redux,
                LESS/SAAS, Git, Github enseigné par un expert toujours en
                activité. Cette formation m'a permis de valider ces
                enseignements par la pratique de plus d'une douzaine de projets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
