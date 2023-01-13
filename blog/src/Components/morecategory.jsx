//IMPORTS REACT
import { Link, useLocation } from "react-router-dom";

// Hooks
import { useEffect } from "react";

//SVGS E IMG
import imgCategory1 from "img/01.png";
import imgCategory2 from "img/03.png";
import imgCategory3 from "img/08.png";
import imgCategory4 from "img/09.png";
import imgCategory5 from "img/netflix.png";

import iconLayer from "svg/icon-layers.svg";

//IMPORTS SWIPER SLIDE
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";

const Morecategory = () => {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);

  return (
    <>
      <section className="container">
        <div className="row">
          <div
            className="flex-center"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <img src={iconLayer} className="icon" alt="" />
          </div>
          <div className="flex-center" data-aos="fade-down"
          data-aos-delay="200">
            <h2 className="mt-1 mb-1">
              Mais Categorias<span>.</span>
            </h2>
          </div>
          <p className="text-center" data-aos="fade-down"
          data-aos-delay="300">
            Pesquise os seus conteúdos por categoria. Clique e veja mais.
          </p>
        </div>
        <div
          className="flex-center mt-5"
          data-aos="fade-up"
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
            <div className="row">
              <SwiperSlide>
                <div className="py-2">
                  <div className="thumb">
                    <img src={imgCategory1} className="absolute" alt="" />
                    <Link onClick={onTop}>
                      <h6 className="text-category text-center link-title">
                        Tecnologia
                      </h6>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="py-2">
                  <div className="thumb">
                    <img src={imgCategory2} className="absolute" alt="" />
                    <Link onClick={onTop}>
                      <h6 className="text-category text-center link-title">
                        Cinema
                      </h6>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="py-2">
                  <div className="thumb">
                    <img src={imgCategory3} className="absolute" alt="" />
                    <Link onClick={onTop}>
                      <h6 className="text-category text-center link-title">
                        Games
                      </h6>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="py-2">
                  <div className="thumb">
                    <img src={imgCategory4} className="absolute" alt="" />
                    <Link onClick={onTop}>
                      <h6 className="text-category text-center link-title">
                        Fotografia
                      </h6>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="py-2">
                  <div className="thumb">
                    <img src={imgCategory5} className="absolute" alt="" />
                    <Link onClick={onTop}>
                      <h6 className="text-category text-center link-title">
                        Entreterimento
                      </h6>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </div>
            ...
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Morecategory;
