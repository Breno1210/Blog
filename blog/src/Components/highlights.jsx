//IMPORT REACT
import React from "react";
import { Link } from "react-router-dom";

//SVGS E IMGS
import iconStar from "svg/icon-star.svg";
import iconArrowRight from "svg/icon-arrowright.svg";
import banner from "img/10.png";
import banner2 from "img/11.png";
import banner3 from "img/12.png";
import banner4 from "img/13.png";
import ImageProfile from "img/profile/ny.jpg";

const Highlights = () => {
  return (
    <>
      <section className="container">
        <div className="row ">
          <div className="flex-space">
            <div className="flex-start-row">
              <img src={iconStar} className="icon" alt="" />
              <h2 className="">Destaques<span>.</span></h2>
            </div>

            <div className="flex-end-row mt-2">
              <Link>
                <h6 className="color-primary">Explorar mais artigos</h6>
              </Link>
              <img
                src={iconArrowRight}
                className="icon-arrowRight ml-1"
                alt=""
              />
            </div>
          </div>
        </div>
        <p className="flex-start-row mt-2">
          Últimas notícias, fotos, vídeos e reportagens especiais
        </p>

        <div className="row">
          <div class="grid-6 br-6 hidden p-0 relative thumb">
            <img src={banner} className=" absolute" alt="" />
            <div className="p-2 mt-9">
              <Link className="btn-high uppercase">Tecnologia</Link>
              <h3 className="mt-1 link-title">
                Quais as vantagens de ter um ecossistema Apple?
              </h3>
              <p className="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                urna pharetra ut ac, pellentesque.{" "}
              </p>

              <div className="flex-space">
                <div className="flex-start-row">
                  <div className="profile">
                    <img
                      src={ImageProfile}
                      className="profile-img cursor-pointer"
                      alt=""
                    />
                  </div>
                  <div className="ml-1">
                    <h6 className="color-primary">by Nasser Yousef Ali</h6>
                    <h6 className="color-gray">@nasseryousef</h6>
                  </div>
                </div>
                <div className="flex-end-row">
                  <p className="ml-4">Aug 2,2020 - 8 min read</p>
                </div>
              </div>
            </div>
          </div>

          <div class="grid-6 br-6 hidden p-0 relative thumb">
            <img src={banner2} className=" absolute" alt="" />
            <div className="ml-2 mt-9">
              <Link className="btn-high uppercase">Cinema</Link>
              <h5 className="mt-1 link-title">Top 10 Filmes de 2021</h5>

              <div className="flex-start-row">
                <p>by Lia Lake</p>
                <div className="dot ml-2 mr-2 color-gray"></div>
                <p>Dez 2, 2020 - 4 min read</p>
              </div>
            </div>
          </div>

          <div class="grid-3 br-6 hidden p-0 relative thumb">
            <img src={banner3} className=" absolute" alt="" />
            <div className="ml-2 mt-9">
              <Link className="btn-high uppercase">Games</Link>
              <h6 className="mt-1 link-title">PC Gamer muito caro, o que fazer?</h6>

              <div className="flex-start-row">
                <p className="p5">by Nasser Yousef</p>
                <div className="dot ml-1 mr-1"></div>
                <p className="p5">Dez 2, 2020</p>
              </div>
            </div>
          </div>

          <div class="grid-3 br-6 hidden p-0 relative thumb">
                <img src={banner4} className="absolute" alt="" />
            
            <div className="ml-2 mt-9">
              <Link className="btn-high uppercase">Fotografia</Link>
              <h6 className="mt-1 link-title">A melhor câmera CxB em 2021</h6>

              <div className="flex-start-row">
                <p className="p5">by Alex Jacob</p>
                <div className="dot ml-1 mr-1"></div>
                <p className="p5">Dez 2, 2020</p>
              </div>
            </div>
          </div>


        </div>
      </section>
    </>
  );
};

export default Highlights;
