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
import Morelikes from "Components/morelikes";
import Morelikes1 from "Components/morelikes1";
import Morecategory from "Components/morecategory";
import Mostrecent from "Components/mostrecent";
import People from "Components/people";
import Newletters from "Components/newletters";
import Sponsorednews from "Components/sponsorednews";

//SVGS E IMGS
import iconStar from "svg/icon-star.svg";

//SVGS E IMGS
import iconLike from "svg/icon-like.svg";
import iconArrowRight from "svg/icon-arrowright.svg";

//API
import api from "services/api";

// Hooks
import { useState, useEffect } from "react";
import Trendingtopics from "Components/trendingtopics";

const Home = () => {
  //Variáveis de estado
  const [main, setMain] = useState([]);
  const [mostSeen, setMostSeen] = useState([]);
  const [banner, setBanner] = useState([]);
  const [moreLikes, setMoreLikes] = useState([]);
  const [moreLikes1, setMoreLikes1] = useState([]);
  const [trendingTopics, settrendingTopics] = useState([]);

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
      settrendingTopics(response.data);
    });
  }, []);

  return (
    <>
      <Header />

      <Hero />

      <Highlights />

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

          <div class="grid-3 br-6 hidden p-0 relative">
            <h4>Tópicos em alta</h4>
            {trendingTopics.map((item) => {
              return <Trendingtopics key={item.id} content={item} />;
            })}
          </div>
        </div>
      </section>

      <Morecategory />

      <Mostrecent />

      <People />

      <Newletters />

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
