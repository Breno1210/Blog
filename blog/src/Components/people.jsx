//IMPORT REACT
import React from "react";
import { Link } from "react-router-dom";

//SVGS E IMG
import imgPeople1 from "img/profile/liap.png";
import imgPeople2 from "img/profile/megan.png";
import imgPeople3 from "img/profile/alexp.png";
import imgPeople4 from "img/profile/nyp.png";
import iconLayer from "svg/icon-layers.svg";

//IMPORTS SWIPER SLIDE
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";

const People = () => {
  return (
    <>
      <section className="container">
        <div className="row">
          <div className="flex-center">
            <img src={iconLayer} className="icon" alt="" />
          </div>
          <div className="flex-center">
            <h2 className="mt-1 mb-1">
                Nossos colunistas<span>.</span>
            </h2>
          </div>
          <p className="text-center">
            Os melhores em conteúdo, Clique e veja mais sobre os artigos de cada um.
          </p>
        </div>
        <div
          className="flex-center mt-5"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="">
              <div className="relative br-6">
                <img src={imgPeople1} className="absolute" alt="" />
                <div className="p-2">
                  <div className="mt-12">
                    <Link className="btn-high uppercase">Fotografia</Link>
                    <h5 className="mt-1">Lia Lake</h5>
                    <p>@lialake</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="relative br-6">
                <img src={imgPeople2} className="absolute" alt="" />
                <div className="p-2">
                  <div className="mt-12">
                    <Link className="btn-high uppercase">moda</Link>
                    <h5 className="mt-1">Megan Ryzen</h5>
                    <p>@meganryzen</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="relative br-6">
                <img src={imgPeople3} className="absolute" alt="" />
                <div className="p-2">
                  <div className="mt-12">
                    <Link className="btn-high uppercase">fotografia</Link>
                    <h5 className="mt-1">Alex Jacob</h5>
                    <p>@alexjacob</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="relative br-6">
                <img src={imgPeople4} className="absolute" alt="" />
                <div className="p-2">
                  <div className="mt-12">
                    <Link className="btn-high uppercase">tecnologia</Link>
                    <h5 className="mt-1">Násser Yousef</h5>
                    <p>@nasseryousef</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            ...
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default People;
