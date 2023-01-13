import { useEffect } from "react";

//COMPONENTS
import Header from "Components/header";
import Footer from "Components/footer";

//SVGS e IMGS
import iconFacebook from "svg/icon-facebook.svg";
import iconInstagram from "svg/icon-instagram.svg";
import iconYoutube from "svg/icon-youtube.svg";
import iconGitHub from "svg/icon-github.svg";
import iconFlash from "svg/icon-flash.svg";

//IMPORT AOS
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
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
      <section className="container">
        <div className="row">
          <div className="grid-6">
            <h3 data-aos="fade-right" data-aos-delay="400">
              Entre em contato
            </h3>
            <form
              action="https://formsubmit.co/brenorosaalmeida14@gmail.com"
              method="POST"
              className="mt-1"
            >
              <input
                type="text"
                name="Nome"
                className="mt-2"
                placeholder="Nome"
                required
                data-aos="fade-right"
                data-aos-delay="600"
              />
              <input
                type="email"
                name="Email"
                className="mt-2"
                placeholder="E-mail"
                required
                data-aos="fade-left"
                data-aos-delay="800"
              />
              <textarea
                name="Mensagem"
                rows="8"
                className="mt-2"
                placeholder="Mensagem"
                required
                data-aos="fade-right"
                data-aos-delay="1000"
              ></textarea>
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value={"http://localhost:3000/thanks"}
              />
              <button
                className="btn mt-2"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                Enviar
              </button>
            </form>
          </div>
          <div className="grid-1 disappear"></div>
          <div className="grid-5">
            <h5 className="mt-4" data-aos="fade-left" data-aos-delay="1400">
              Algumas informações
            </h5>

            <div data-aos="fade-left" data-aos-delay="1600">
              <h6 className="color-primary mt-4">Info.</h6>
              <p>Projeto Blog em React.js do curso FrontPush</p>
            </div>

            <div data-aos="fade-left" data-aos-delay="1800">
              <h6 className="color-primary mt-4">Endereço</h6>
              <p>Belo Horizonte - MG</p>
            </div>

            <div data-aos="fade-left" data-aos-delay="2000">
              <h6 className="color-primary mt-4">E-mail</h6>
              <p>brenorosaalmeida@yahoo.com.br</p>
            </div>

            <h6 className="color-primary mt-4" data-aos="fade-left" data-aos-delay="2200">Redes sociais</h6>
            <div className="mt-2">
              <a
                href="https://www.facebook.com/breno.rosaalmeida15/"
                target={"_blank"}
                rel="noreferrer"
                data-aos="fade-down" data-aos-delay="2400"
              >
                <img src={iconFacebook} className="icon-s" alt="" />
              </a>

              <a
                href="https://www.instagram.com/breno_1almeida/?hl=pt-br"
                target={"_blank"}
                rel="noreferrer"
                data-aos="fade-up" data-aos-delay="2600"
              >
                <img src={iconInstagram} className="icon-s" alt="" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCmzKSehPfrurReK1Puoejnw"
                target={"_blank"}
                rel="noreferrer"
                data-aos="fade-down" data-aos-delay="2800"
              >
                <img src={iconYoutube} className="icon-s" alt="" />
              </a>

              <a
                href="https://github.com/Breno1210"
                target={"_blank"}
                rel="noreferrer"
                data-aos="fade-up" data-aos-delay="2800"
              >
                <img src={iconGitHub} className="icon-s" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
