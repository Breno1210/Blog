//IMPORT REACT
import React from "react";

//SVGS E IMG
import imgCategory1 from "img/category1.png";
import imgCategory2 from "img/category2.png";
import imgCategory3 from "img/category3.png";
import imgCategory4 from "img/category4.png";
import imgCategory5 from "img/category5.png";
import iconLayer from "svg/icon-layers.svg";

//IMPORTS SWIPER SLIDE
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";

const Morecategory = () => {
  return (
    <>
      <section className="container">
        <div className="row">
          <div className="flex-center">
            <img src={iconLayer} className="icon" alt="" />
          </div>
          <div className="flex-center">
            <h2 className="mt-1 mb-1">
              Mais Categorias<span>.</span>
            </h2>
          </div>
          <p className="text-center">
            Pesquise os seus conteúdos por categoria. Clique e veja mais.
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
            <SwiperSlide>
              <div className="">
                <img src={imgCategory1} className="" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <img src={imgCategory2} className="" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <img src={imgCategory3} className="" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <img src={imgCategory4} className="" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <img src={imgCategory5} className="" alt="" />
              </div>
            </SwiperSlide>
            ...
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Morecategory;
