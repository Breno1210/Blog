import { useEffect } from "react";
import { Link } from "react-router-dom";

//COMPONENTS
import Header from "Components/header";
import Footer from "Components/footer";

//SVGS E IMGS
import heroImg from "svg/blog.svg";
import bgHero from "svg/bg-hero.svg";
import bgHeroMobile from "svg/bg-heromobile.svg";

//IMPORT SVGINJECT
import SVGInject from "@iconfu/svg-inject";

//IMPORT AOS
import AOS from "aos";
import "aos/dist/aos.css";

const NotFound = () => {
  useEffect(() => {
    AOS.init({
      easing: "easy-out-quart",
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <Header />
      <section className="container mb-9">
      <div className="flex-center" data-aos="fade-down" data-aos-delay="600">
          <img
            src={bgHero}
            className="bg-hero absolute"
            alt=""
            onLoad={(e) => {
              SVGInject(e.target);
            }}
          />
          <img src={bgHeroMobile} className="bg-heroMobile" alt="" />
          <div className="row mt-7">
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

        <div className="row">
          <div className="grid-4 disappear"></div>
          <div className="grid-4">
            <h1 className="h0 text-center color-primary" data-aos="fade-right" data-aos-delay="800">404</h1>
            <h5 className="text-center" data-aos="fade-left" data-aos-delay="1000">Página não encontrada!</h5>
            <p className="text-center mt-1" data-aos="fade-up" data-aos-delay="1200">
              A página que você tá procurando não existe ou foi removida. Clique
              para voltar para o site.
            </p>

            <Link to='/' className="btn w-100 mt-3" data-aos="fade-up" data-aos-delay="1400">
              Voltar p/ home
            </Link>
          </div>
          <div className="grid-4 disappear"></div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NotFound;
