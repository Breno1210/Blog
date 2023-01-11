//IMPORT REACT
import React from "react";
import { Link } from "react-router-dom";

//SVGS E IMGS
import iconRecent from "svg/icon-time.svg";
import iconArrowRight from "svg/icon-arrowright.svg";
import ImageProfile1 from "img/profile/ben.png";
import ImageProfile2 from "img/profile/ny.jpg";
import imgCard1 from "img/netflix.png";
import imgCard2 from "img/keyboard.png";

const Mostrecent = () => {
  return (
    <>
      <section className="container">
        <div className="row">
          <div className="flex-space">
            <div className="flex-start-row">
              <img src={iconRecent} className="icon" alt="" />
              <h2 className="">
                Mais Recentes<span>.</span>
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

        <div className="row bb-black">
          <div className="grid-4 p-0">
            <div className="py-3">
              <Link className="btn-high uppercase">ENTRETERIMENTO</Link>
              <Link>
                <h4 className="mt-1 link-title">
                  Quais são os lançamentos da Netflix?
                </h4>
              </Link>

              <p className="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                urna pharetra ut ac, pellentesque.
              </p>
              <div className="flex-space">
                <div className="flex-start-row">
                  <div className="profile">
                    <img
                      src={ImageProfile1}
                      className="profile-img cursor-pointer"
                      alt=""
                    />
                  </div>
                  <div className="ml-1">
                    <h6 className="color-primary p4">by Ben Parker</h6>
                    <h6 className="color-gray p4">@benparker</h6>
                  </div>
                </div>
                <div className="flex-end-row">
                  <p className="ml-4 p5">Aug 2,2020</p>
                </div>
              </div>

              <div className="flex-start-row">
                <Link className="mt-2">
                  <span>Ler mais</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid-8 p-0">
            <div className="thumb-reverse">
              <img src={imgCard1} className="py-3 cursor-pointer" alt="" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="grid-4 p-0">
            <div className="py-3">
              <Link className="btn-high uppercase">TECNOLOGIA</Link>
              <Link>
                <h4 className="mt-1 link-title">
                  Afinal, quais são os tipos de switches mecânicos em teclados?
                </h4>
              </Link>

              <p className="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                urna pharetra ut ac, pellentesque.
              </p>
              <div className="flex-space">
                <div className="flex-start-row">
                  <div className="profile">
                    <img
                      src={ImageProfile2}
                      className="profile-img cursor-pointer"
                      alt=""
                    />
                  </div>
                  <div className="ml-1">
                    <h6 className="color-primary p4">by Nasser Yousef</h6>
                    <h6 className="color-gray p4">@nasseryousef</h6>
                  </div>
                </div>
                <div className="flex-end-row">
                  <p className="ml-4 p5">Aug 2,2020</p>
                </div>
              </div>

              <div className="flex-start-row">
                <Link className="mt-2">
                  <span>Ler mais</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid-8 p-0">
            <div className="thumb-reverse ">
              <img src={imgCard2} className="py-8 cursor-pointer" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mostrecent;
