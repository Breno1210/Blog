//IMPORTS REACT
import { Link } from "react-router-dom";

//IMPORT COMPONENTS
import Header from "Components/header";
import Footer from "Components/footer";
import Hero from "Components/hero";
import Banner from "Components/banner";
import Highlights from "Components/highlights";
import Highlights1 from "Components/highlights1";
import Highlights2 from "Components/highlights2";
import Morelikes from "Components/morelikes";
import Morelikes1 from "Components/morelikes1";
import Morecategory from "Components/morecategory";
import Mostrecent from "Components/mostrecent";
import Mostrecent1 from "Components/mostrecent1";
import People from "Components/people";
import Newletters from "Components/newletters";
import Sponsorednews from "Components/sponsorednews";
import Trendingtopics from "Components/trendingtopics";

//SVGS E IMGS
import iconStar from "svg/icon-star.svg";
import iconLike from "svg/icon-like.svg";
import iconArrowRight from "svg/icon-arrowright.svg";
import iconRecent from "svg/icon-time.svg";

//API
import api from "services/api";

// Hooks
import { useState, useEffect } from "react";

//IMPORT AOS
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  //Variáveis de estado
  const [banner, setBanner] = useState([]);
  const [highlight, setHighLight] = useState([]);
  const [highlight1, setHighLight1] = useState([]);
  const [highlight2, setHighLight2] = useState([]);
  const [moreLikes, setMoreLikes] = useState([]);
  const [moreLikes1, setMoreLikes1] = useState([]);
  const [trendingTopics, setTrendingTopics] = useState([]);
  const [mostRecent, setMostRecent] = useState([]);
  const [mostRecent1, setMostRecent1] = useState([]);

  //Faça isso quando o componente montar
  useEffect(() => {
    //Requisição do Banner que sorteia de acordo com a data em ordem decrescente com limite 1
    api.get("/posts?_sort=date&_order=desc&_limit=1").then((response) => {
      setBanner(response.data);
    });

    //Requisição de Posts mais curtidos
    api.get("/posts?likes=150&_limit=1").then((response) => {
      setMoreLikes(response.data);
    });

    //Requisição de Posts mais curtidos
    api.get("/posts?likes=160&_limit=2").then((response) => {
      setMoreLikes1(response.data);
    });

    //Requisição de topicos em alta
    api.get("/posts?star=5&_order=desc&_limit=4").then((response) => {
      setTrendingTopics(response.data);
    });

    //Requisição de destaques
    api.get("/posts?views=1000&_order=desc&_limit=1").then((response) => {
      setHighLight(response.data);
    });

    //Requisição de destaques1
    api.get("/posts?views=900&_order=desc&_limit=1").then((response) => {
      setHighLight1(response.data);
    });

    //Requisição de destaques2
    api.get("/posts?views=800&_order=desc&_limit=2").then((response) => {
      setHighLight2(response.data);
    });

    //Requisição de mais recentes
    api.get("/posts?date=12 Jan 2023&_order=desc&_limit=1").then((response) => {
      setMostRecent(response.data);
    });

    //Requisição de mais recentes
    api.get("/posts?date=13 Jan 2023&_order=desc&_limit=1").then((response) => {
      setMostRecent1(response.data);
    });
  }, []);

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

      <Hero />

      {/* =============== SECTION HIGHLIGHT =============== */}
      <section className="container">
        <div className="row mt-5">
          <div className="flex-space">
            <div
              className="flex-start-row"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <img src={iconStar} className="icon" alt="" />
              <h2 className="">
                Destaques<span>.</span>
              </h2>
            </div>

            <div
              className="flex-end-row mt-2"
              data-aos="fade-left"
              data-aos-delay="200"
            >
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
        <p
          className="flex-start-row mt-2"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          Últimas notícias, fotos, vídeos e reportagens especiais
        </p>

        <div className="row">
          <div
            class="grid-6 br-6 hidden p-0 relative thumb"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            {highlight.map((item) => {
              return <Highlights key={item.id} content={item} />;
            })}
          </div>
          <div
            class="grid-6 br-6 hidden p-0 relative thumb py-2"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            {highlight1.map((item) => {
              return <Highlights1 key={item.id} content={item} />;
            })}
          </div>

          {highlight2.map((item) => {
            return <Highlights2 key={item.id} content={item} />;
          })}
        </div>
      </section>

      {/* =============== BANNER =============== */}
      {banner.map((item) => {
        return <Banner key={item.id} content={item} />;
      })}

      {/* =============== MORE LIKES =============== */}
      <section className="container">
        <div className="row">
          <div className="flex-space">
            <div
              className="flex-start-row"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <img src={iconLike} className="icon" alt="" />
              <h2 className="">
                Mais Curtidos<span>.</span>
              </h2>
            </div>

            <div
              className="flex-end-row mt-2"
              data-aos="fade-left"
              data-aos-delay="300"
            >
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
          <p
            className="flex-start-row mt-2"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="row">
          <div
            className="grid-5 p-0"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            {moreLikes.map((item) => {
              return <Morelikes key={item.id} content={item} />;
            })}
          </div>
          <div className="grid-4 p-0" data-aos="fade-down" data-aos-delay="600">
            {moreLikes1.map((item) => {
              return <Morelikes1 key={item.id} content={item} />;
            })}
          </div>

          <h4
            className="title-trending py-4"
            data-aos="fade-left"
            data-aos-delay="800"
          >
            Tópicos em alta
          </h4>
          {trendingTopics.map((item) => {
            return <Trendingtopics key={item.id} content={item} />;
          })}
        </div>
      </section>

      {/* =============== SECTION MORE CATEGORIY =============== */}

      <Morecategory />

      {/* =============== SECTION MOST RECENTS =============== */}
      <section className="container">
        <div className="row">
          <div className="flex-space">
            <div className="flex-start-row" data-aos="fade-right"
            data-aos-delay="200">
              <img src={iconRecent} className="icon" alt="" />
              <h2 className="">
                Mais Recentes<span>.</span>
              </h2>
            </div>

            <div className="flex-end-row mt-2" data-aos="fade-left"
            data-aos-delay="300">
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
        <div className="row bb-black">
          {mostRecent.map((item) => {
            return <Mostrecent key={item.id} content={item} />;
          })}
        </div>
        <div className="row">
          {mostRecent1.map((item) => {
            return <Mostrecent1 key={item.id} content={item} />;
          })}
        </div>
      </section>

      {/* =============== SECTION PEOPLE =============== */}
      <People />

      {/* =============== SECTION NEWLETTERS =============== */}
      <Newletters />

      {/* =============== SECTION SPONSORED NEWS =============== */}
      <Sponsorednews />

      <Footer />
    </>
  );
};

export default Home;
