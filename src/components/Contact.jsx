import React from "react";
import photo1 from "../Images/photo1.png";

const Contact = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <h3 className="text-center fw-bolder">Restons en Contact</h3>
      </div>
      <div className="row pt-5">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <form>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Prenom"
              />
            </div>
            <div className="mb-3">
              <input className="form-control" type="text" placeholder="Nom" />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                name="msg"
                id=""
                cols="60"
                rows="15"
                placeholder="Votre Message"
              ></textarea>
            </div>
          </form>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img src={photo1} alt="img" />
        </div>
        <button className="btn btn-primary mx-3 w-25">Envoyer</button>
      </div>
    </div>
  );
};

export default Contact;
