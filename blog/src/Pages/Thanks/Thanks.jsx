//IMPORTS REACT
import React from "react";
import { Link } from "react-router-dom";

//IMPORT COMPONENTS
import Header from "Components/header";
import Footer from "Components/footer";

//SVGS E IMGS
import heroImg from "svg/blog.svg";
import bgHero from "svg/bg-hero.svg";
import bgHeroMobile from "svg/bg-heromobile.svg";

//IMPORT SVGINJECT
import SVGInject from "@iconfu/svg-inject";


const Thanks = () => {
  return (
    <>
        <Header />
      <section className="container">
        <div className="flex-center">
          <img
            src={bgHero}
            className="bg-hero absolute"
            alt=""
            onLoad={(e) => {
              SVGInject(e.target);
            }}
            data-aos="fade-up"
            data-aos-delay="200"
          />
          <img src={bgHeroMobile} className="bg-heroMobile" alt="" />
          <div className="row mt-9">
            <div className="flex-center">
              <img src={heroImg} className="icon" alt="" />
            </div>
            <div className="flex-center">
              <h3 className="">
                blog<span>.</span>
              </h3>
            </div>
          </div>
        </div>

        <div className="row mb-9" data-aos="fade-down" data-aos-delay="400">
          <div className="grid-3 disappear"></div>
          <div className="grid-6 mb-7">
            <h2 className=" text-center color-gradient">Muito Obrigado!</h2>
            {/* <h5 className="text-center">Pela Mensagem</h5> */}
            <p className="text-center mt-3">
              Agradeco o seu contato e fico muito feliz em saber do seu
              interesse em meus serviços.
            </p>
            <Link to="/" className="btn w-100 mt-3 text-center">
              Voltar p/ home
            </Link>
          </div>
          <div className="grid-3 disappear"></div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Thanks;
