import React from "react";

//COMPONENTS
import Header from "Components/header";
import Footer from "Components/footer";

//SVGS e IMGS
import iconFacebook from "svg/icon-facebook.svg";
import iconInstagram from "svg/icon-instagram.svg";
import iconYoutube from "svg/icon-youtube.svg";
import iconGitHub from "svg/icon-github.svg";
import iconFlash from "svg/icon-flash.svg";

const Contact = () => {
  return (
    <>
      <Header />
      <section className="container">
        <div className="row">
          <div className="grid-6" data-aos="fade-down" data-aos-delay="400">
            <h3>Entre em contato</h3>
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
              />
              <input
                type="email"
                name="Email"
                className="mt-2"
                placeholder="E-mail"
                required
              />
              <textarea
                name="Mensagem"
                rows="8"
                className="mt-2"
                placeholder="Mensagem"
                required
              ></textarea>
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value={"http://localhost:3000/thanks"}
              />
              <button className="btn mt-2">Enviar</button>
            </form>
          </div>
          <div className="grid-1 disappear"></div>
          <div className="grid-5" data-aos="fade-down" data-aos-delay="600">
            <h5 className="mt-4">Algumas informações</h5>

            <h6 className="color-primary mt-4">Info.</h6>
            <p>Projeto Blog em React.js do curso FrontPush</p>

            <h6 className="color-primary mt-4">Endereço</h6>
            <p>Belo Horizonte - MG</p>

            <h6 className="color-primary mt-4">E-mail</h6>
            <p>brenorosaalmeida@yahoo.com.br</p>

            <h6 className="color-primary mt-4">Redes sociais</h6>
            <div className="mt-2">
            <a
                href="https://www.facebook.com/breno.rosaalmeida15/"
                target={"_blank"}
                rel="noreferrer"
              >
                <img src={iconFacebook} className="icon-s" alt="" />
              </a>
              
              <a
                href="https://www.instagram.com/breno_1almeida/?hl=pt-br"
                target={"_blank"}
                rel="noreferrer"
              >
                <img src={iconInstagram} className="icon-s" alt="" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCmzKSehPfrurReK1Puoejnw"
                target={"_blank"}
                rel="noreferrer"
              >
                <img src={iconYoutube} className="icon-s" alt="" />
              </a>

              <a
                href="https://github.com/Breno1210"
                target={"_blank"}
                rel="noreferrer"
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
