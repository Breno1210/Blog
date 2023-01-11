//IMPORT REACT
import React from "react";
import { Link } from "react-router-dom";

//SVGS E IMG
import iconEmail from "svg/icon-email.svg";

const Newletters = () => {
  return (
    <>
      <section className="container">
        <div className="row">
          <div className="grid-5 p-0">
            <div className="flex-start-row">
              <img src={iconEmail} className="icon" alt="" />
              <h4>Participe da nossa <span>newsletter.</span></h4>
            </div>
          </div>
          <div className="grid-5 p-0">
            <input type="text" placeholder="Digite seu email aqui" />
            <p className="p5 mt-1">No spam, notifications, only about new products and updates. You can always unsubscribe.</p>
          </div>
          <div className="grid-2 p-0">
            <Link className="btn">Cadastrar</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newletters;
