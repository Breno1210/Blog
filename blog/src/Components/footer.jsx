import React from 'react'

//IMPORTS REACT
import { Link } from "react-router-dom";

//SVG
import logo from 'svg/blog-logo.svg'
import iconFacebook from 'svg/icon-facebook.svg';
import iconInstagram from 'svg/icon-instagram.svg';
import iconYoutube from 'svg/icon-youtube.svg';
import iconTwitter from 'svg/icon-twitter.svg';

const Footer = () => {
  return (
    <>
        <footer className="bg-section bt-black">
            <section className="container pb-0 ">
                <div className="row flex-center" data-aos="fade-down" data-aos-delay="400" >
                    <Link to='/'><img src={logo} className="icon" alt="" /></Link>
                </div>
                <h4 className='text-center' data-aos="fade-up" data-aos-delay="400">blog<span>.</span></h4>

                <div className="row pb-3 bb-black">
                    <div className="grid-3">
                        <h4 data-aos="fade-right" data-aos-delay="600">Posts</h4>
                        <div className="flex-start-column mt-2">
                            <Link href="#" className="color-gray link-footer" data-aos="fade-right" data-aos-delay="800">Mais vistos</Link>
                            <Link href="#" className="color-gray link-footer" data-aos="fade-right" data-aos-delay="1000">Mais comentados</Link>
                            <Link href="#" className="color-gray link-footer" data-aos="fade-right" data-aos-delay="1200">Mais populares</Link>
                            <Link href="#" className="color-gray link-footer" data-aos="fade-right" data-aos-delay="1400">Mais recentes</Link>
                        </div>
                        
                    </div>

                    <div className="grid-3">
                        <h4 data-aos="fade-down" data-aos-delay="1500">Categorias</h4>
                        <div className="flex-start-column mt-2">
                            <Link href="#" className="color-gray link-footer" data-aos="fade-down" data-aos-delay="1600">Tecnologia</Link>
                            <Link href="#" className="color-gray link-footer" data-aos="fade-down" data-aos-delay="1800">Games</Link>
                            <Link href="#" className="color-gray link-footer" data-aos="fade-up" data-aos-delay="2000">Fotografia</Link>
                            <Link href="#" className="color-gray link-footer" data-aos="fade-up" data-aos-delay="2200">Cinema</Link>
                        </div>
                    </div>

                    <div className="grid-6">
                        <h4 className="mb-2" data-aos="fade-left" data-aos-delay="2400">Quer ser avisado dos novos posts do blog?</h4>
                        <p data-aos="fade-left" data-aos-delay="2400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Ornare urna pharetra ut ac, pellentesque. 
                        </p>
                        <div className="flex-start-row mt-2">
                            <input type="text" name="search" id="" placeholder="Digite seu e-mail aqui" data-aos="fade-left" data-aos-delay="2600"/>
                            <Link to='/contact' className="btn ml-2" data-aos="fade-left" data-aos-delay="2800">Cadastrar</Link>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="grid-9">
                        <p>2021 | Todos os direitos reservados. Projeto de React.js do curso <Link href="https://www.frontpush.com.br/" target="_blank">FrontPUSH.</Link> </p>
                    </div>

                    <div className="grid-3">
                        <img src={iconFacebook} className="icon-s" alt=""/>
                        <img src={iconInstagram} className="icon-s ml-2" alt=""/>
                        <img src={iconYoutube} className="icon-s ml-2" alt=""/>
                        <img src={iconTwitter} className="icon-s ml-2" alt=""/>
                    </div>
                </div>

            </section>
        </footer>
    </>
  )
}

export default Footer;