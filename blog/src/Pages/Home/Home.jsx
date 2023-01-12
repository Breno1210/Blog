//IMPORTS REACT
import { Link } from "react-router-dom";

//IMPORT COMPONENTS
import Header from "Components/header";
import Footer from "Components/footer";
import Hero from "Components/hero";
import Main from "Components/main";
import Card from "Components/card";
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
import iconLayer from "svg/icon-layers.svg";
import iconLike from "svg/icon-like.svg";
import iconArrowRight from "svg/icon-arrowright.svg";
import iconRecent from "svg/icon-time.svg";

//API
import api from "services/api";

// Hooks
import { useState, useEffect } from "react";

const Home = () => {
  //Variáveis de estado
  const [main, setMain] = useState([]);
  const [mostSeen, setMostSeen] = useState([]);
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
    //Requisição do Main que mostra os 2 posts em ordem decrescente que tenha 5 estrelas
    api.get("/posts?star=5&_limit=2&_order=desc").then((response) => {
      setMain(response.data);
    });

    //Requisição do Banner que sorteia de acordo com a data em ordem decrescente com limite 1
    api.get("/posts?_sort=date&_order=desc&_limit=1").then((response) => {
      setBanner(response.data);
    });

    //Requisição de Posts mais vistos
    api.get("/posts?_limit=3").then((response) => {
      setMostSeen(response.data);
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

  return (
    <>
      <Header />

      <Hero />

      {/* =============== SECTION HIGHLIGHT =============== */}
      <section className="container">
        <div className="row ">
          <div className="flex-space">
            <div className="flex-start-row">
              <img src={iconStar} className="icon" alt="" />
              <h2 className="">
                Destaques<span>.</span>
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
        </div>
        <p className="flex-start-row mt-2">
          Últimas notícias, fotos, vídeos e reportagens especiais
        </p>

        <div className="row">
          <div class="grid-6 br-6 hidden p-0 relative thumb">
            {highlight.map((item) => {
              return <Highlights key={item.id} content={item} />;
            })}
          </div>
          <div class="grid-6 br-6 hidden p-0 relative thumb py-2">
            {highlight1.map((item) => {
              return <Highlights1 key={item.id} content={item} />;
            })}
          </div>

          {highlight2.map((item) => {
            return <Highlights2 key={item.id} content={item} />;
          })}
        </div>
      </section>

      {/* =============== MORE LIKES =============== */}
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
            {moreLikes.map((item) => {
              return <Morelikes key={item.id} content={item} />;
            })}
          </div>

          <div className="grid-4 p-0">
            {moreLikes1.map((item) => {
              return <Morelikes1 key={item.id} content={item} />;
            })}
          </div>

          <h4 className="py-4">Tópicos em alta</h4>
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

      <section className="container">
        <div className="row">
          <div className="grid-6" data-aos="fade-down" data-aos-delay="200">
            <img src={iconStar} className="icon-l" alt="" />
            <h3 className="mt-1">
              Os melhores e mais bem votados posts do mês.
            </h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              urna pharetra ut ac, pellentesque.
            </p>
          </div>
          <div className="grid-6">
            {main.map((item) => {
              return <Main key={item.id} content={item} />;
            })}
          </div>
        </div>
      </section>

      <div className="bg-section">
        <section className="container">
          <h3 className="ml-2 mb-3">Mais vistos</h3>
          <div className="row">
            {mostSeen.map((item) => {
              return <Card key={item.id} content={item} />;
            })}
          </div>
        </section>
      </div>

      {banner.map((item) => {
        return <Banner key={item.id} content={item} />;
      })}

      <Footer />
    </>
  );
};

export default Home;
