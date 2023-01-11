//IMPORTS REACT
import React from "react";
import { Link } from "react-router-dom";

//SVGS E IMGS
import heroImg from "svg/blog.svg";
import iconArrow from "svg/icon-arrowdiagonalright.svg"

const Hero = () => {
  return (
    <>
      <section className="container flex-center">
        <div className="row mt-8">
          <div className="flex-center">
            <img src={heroImg} className="ilustration" alt="" />
          </div>
          <div className="flex-center">
            <h1 className="h0">
              blog<span>.</span>
            </h1>
          </div>
          <div className="row">
            <div className="grid-2 disappear"></div>
            <div className="grid-8">
              <h6 className="text-center color-gray">
                Um blog para todos. Escrever. Ler. Comentar. Contribuir.
                Aprender. Conectar.
              </h6>
            </div>
            <div className="grid-2 disappear"></div>
          </div>
          <div className="flex-center">
            <Link href="" className="btn btn-start mt-2">
              Começar a escrever
              <img src={iconArrow} className="icon-arrowDiagonalRight ml-1" alt="" />
            </Link>
          </div>
        </div>
        {/* <div className="row mt-9">
            <div className="grid-4">
                <h1 className="h0">blog<span>.</span> </h1>
                <p>
                    Um blog para todos. 
                    Escrever. Ler. Comentar. Contribuir. Aprender. Conectar.
                </p>
                <Link href="" className="btn btn-start mt-2">Começar a escrever</Link>

            </div>
            <div className="grid-1"></div>
            <div className="grid-6 flex-center">
                <img src={heroImg} className="ilustration" alt="" />
            </div>
            <div className="grid-1"></div>
        </div> */}
      </section>
    </>
  );
};

export default Hero;
