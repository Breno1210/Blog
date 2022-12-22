import React from 'react'

//SVGS e IMGS
import iconFacebook from 'svg/icon-facebook.svg';
import iconInstagram from 'svg/icon-instagram.svg';
import iconYoutube from 'svg/icon-youtube.svg';
import iconTwitter from 'svg/icon-twitter.svg';

const Contact = () => {
  return (
    <>
        <section className="container">
        <div className="row">
          <div className="grid-6" data-aos="fade-down" data-aos-delay="400">
            <h3>Entre em contato</h3>
            <p className="mt-1">
              Aqui você vai conseguir tirar dúvidas sobre o LEAPS.
            </p>
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
            <p>
              O Laboratório de Estudos em Avaliação Psicológica (LEAPS) foi
              criado pela faculdade de psicologia (Fapsi) da PUC Minas - Praça
              da Liberdade, para atender e oferecer suporte aos alunos da
              unidade que buscam conhecimento sobre os temas da Avaliação
              Psicológica.
            </p>

            <h6 className="color-primary mt-4">Endereço</h6>
            <p>
              Sala 1101- Prédio 3 (PIC) Rua Cláudio Manoel, n° 1185, <br />
              Belo Horizonte - MG
            </p>

            <h6 className="color-primary mt-4">E-mail</h6>
            <p>leaps.pucpraca@gmail.com</p>

            <h6 className="color-primary mt-4">Redes sociais</h6>
            <div className="mt-2">
              <a
                href="https://www.instagram.com/leaps_praca/"
                target={"_blank"}
                rel="noreferrer"
              >
                <img src={iconFacebook} className="icon-s" alt="" />
                <img src={iconInstagram} className="icon-s" alt="" />
                <img src={iconYoutube} className="icon-s" alt="" />
                <img src={iconTwitter} className="icon-s" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact