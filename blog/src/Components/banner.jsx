//IMPORTS REACT
import React from "react";
import { Link } from "react-router-dom";

//SVGS E IMGS
import imgBanner from "img/05.png";

const Banner = () => {
  return (
    <>
      <section className="container">
        <div className="img-banner hidden">
          <img src={imgBanner} alt="" />
        </div>
        <div className="row mt-3">
          <h6 className="color-gray text-center">01 NOV 2021</h6>
          <h6 className="uppercase color-primary text-center">GAMER</h6>
          <Link href="" className="link-title">
            <h2 className="mt-1 text-center">
              Ainda vale a pena o PS4 Pro em 2021?
            </h2>
          </Link>

          <p className="my-2 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna
            pharetra ut ac, pellentesque.
          </p>
          <div className="flex-center">
            <Link href="" className="link p-0">
              Ler mais
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
