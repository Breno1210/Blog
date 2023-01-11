//IMPORT REACT
import React from "react";
import { Link } from "react-router-dom";

//SVGS E IMGS
import iconLike from "svg/icon-like.svg";
import iconArrowRight from "svg/icon-arrowright.svg";
import ImageProfile from "img/profile/ny.jpg";
import Alta1 from "img/14.png";
import Alta2 from "img/15.png";
import Alta3 from "img/16.png";
import Alta4 from "img/17.png";

const Morelikes = () => {
  return (
    <>
      <section className="container">
        <div className="row">
          <div className="flex-space">
            <div className="flex-start-row">
              <img src={iconLike} className="icon" alt="" />
              <h2 className="">
                Mais Curtidos<span>.</span>
              </h2>
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
          <p className="flex-start-row mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="row">
          <div className="grid-5 p-0">
            <div className="py-3">
              <Link className="btn-high uppercase">Tecnologia</Link>
              <Link>
                <h3 className="mt-1 link-title">
                  As principais novidades da moda em 2022?
                </h3>
              </Link>

              <p className="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                urna pharetra ut ac, pellentesque. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Ornare urna pharetra ut ac,
                pellentesque.
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

          <div className="grid-4 p-0" data-aos="fade-down" data-aos-delay="400">
            <div className="py-3 bb-black">
              <Link>
                <h6 className="btn-high uppercase color-primary">fotografia</h6>
              </Link>

              <Link>
                <h5 className="mt-1 link-title">
                  Qual a lente adequada para a sua câmera fotográfica?
                </h5>
              </Link>

              <p className="p4 mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                urna pharetra ut ac, pellentesque.
              </p>

              <div className="flex-start-row mt-1">
                <div className="profile">
                  <img
                    src={ImageProfile}
                    className="profile-img cursor-pointer"
                    alt=""
                  />
                </div>
                <p className="p5 ml-2">by Alex Jacob</p>
                <div className="dot ml-1 mr-1"></div>
                <p className="p5">Dez 2, 2020</p>
              </div>
            </div>
            <div className="py-3">
              <Link>
                <h6 className="btn-high uppercase color-primary">games</h6>
              </Link>

              <Link>
                <h5 className="mt-1 link-title">
                  Quais os grandes lançamentos para 2022 nos games?
                </h5>
              </Link>

              <p className="p4 mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                urna pharetra ut ac, pellentesque.
              </p>

              <div className="flex-start-row mt-1">
                <div className="profile">
                  <img
                    src={ImageProfile}
                    className="profile-img cursor-pointer"
                    alt=""
                  />
                </div>
                <p className="p5 ml-2">by Alex Jacob</p>
                <div className="dot ml-1 mr-1"></div>
                <p className="p5">Dez 2, 2020</p>
              </div>
            </div>
          </div>

          <div class="grid-3 br-6 hidden p-0 relative">
            <div className="py-3">
              <h4>Tópicos em alta</h4>
              <div className="mt-3 thumb">
                <img src={Alta1} className="trending-card absolute" alt="" />
                <Link><h6 className="text-center link-title p-3">Tecnologia</h6></Link>
              </div>
              <div className="mt-3 thumb">
                <img src={Alta2} className="trending-card absolute" alt="" />
                <Link><h6 className="text-center link-title p-3">Cinema</h6></Link>
              </div>
              <div className="mt-3 thumb">
                <img src={Alta3} className="trending-card absolute" alt="" />
                <Link><h6 className="text-center link-title p-3">Games</h6></Link>
              </div>
              <div className="mt-3 thumb">
                <img src={Alta4} className="trending-card absolute" alt="" />
                <Link><h6 className="text-center link-title p-3">Fotografia</h6></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Morelikes;
