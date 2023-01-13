//COMPONENTS
import Header from "Components/header";
import Footer from "Components/footer";

//IMPORTS REACTS
import { useEffect } from "react";
import SVGInject from "@iconfu/svg-inject";
import { Link } from "react-router-dom";

//SVGS E IMGS
import bgSobre from "img/bg-sobre.png";
import iconLogo from "svg/blog-logo2.svg";

//IMPORT AOS
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
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
      <div className="py-9 mb-8">
        <img src={bgSobre} className="bg-sobre absolute" alt="" />
        <section className="container">
          <div data-aos="fade-down" data-aos-delay="200">
            <div className="row flex-center">
              <Link to="/">
                <img src={iconLogo} className="icon-xxl mt-2" alt="" />
              </Link>
            </div>

            <div className="row">
              <div className="grid-2 disappear"></div>
              <div className="grid-8">
                <p className="text-center">
                  Implementation of a modern Blog application and API requests,
                  made in React.js. I implemented the other version of the blog
                  that is taught in the <a href="https://www.frontpush.com.br/" target={"_blank"}
                rel="noreferrer">FrontPush</a> course by professor <a href="https://www.instagram.com/nasseryousef__/?hl=pt-br"
                target={"_blank"}
                rel="noreferrer">Nasser
                Yousef Ali.</a> 
                </p>
              </div>
              <div className="grid-2 disappear"></div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default About;
