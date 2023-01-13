//IMPORTS REACT
import { useEffect } from "react";
import { Link } from "react-router-dom";

//SVGS E IMGS
import heroImg from "svg/blog.svg";
import iconArrow from "svg/icon-arrowdiagonalright.svg";
import bgHero from "svg/bg-hero.svg";
import bgHeroMobile from "svg/bg-heromobile.svg";

//IMPORT SVGINJECT
import SVGInject from "@iconfu/svg-inject";

//IMPORT AOS
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      easing: "easy-out-quart",
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <section className="container flex-center mb-9">
        <img
          src={bgHero}
          className="bg-hero absolute"
          alt=""
          onLoad={(e) => {
            SVGInject(e.target);
          }}
        />
        <img src={bgHeroMobile} className="bg-heroMobile" alt="" />
        <div className="row mt-8">
          <div className="flex-center" data-aos="fade-down" data-aos-delay="200">
            <img src={heroImg} className="ilustration" alt="" />
          </div>
          <div className="flex-center" data-aos="fade-down" data-aos-delay="200">
            <h1 className="h0">
              blog<span>.</span>
            </h1>
          </div>
          <div className="row">
            <div className="grid-2 disappear"></div>
            <div className="grid-8" data-aos="fade-down" data-aos-delay="300">
              <h6 className="text-center color-gray">
                Um blog para todos. Escrever. Ler. Comentar. Contribuir.
                Aprender. Conectar.
              </h6>
            </div>
            <div className="grid-2 disappear"></div>
          </div>
          <div className="flex-center" data-aos="fade-down" data-aos-delay="400">
            <Link href="" className="btn btn-start">
              Começar a escrever
              <img
                src={iconArrow}
                className="icon-arrowDiagonalRight ml-1"
                alt=""
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
