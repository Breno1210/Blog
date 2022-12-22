//IMPORTS REACT

//IMPORT COMPONENTS
import Header from "Components/header";
import Footer from "Components/footer";
import Hero from "Components/hero";
import Main from "Components/main";
import Card from "Components/card";
import Banner from "Components/banner";

//SVGS E IMGS
import iconStar from "svg/icon-star.svg";
import profile from "img/profile/ny.jpg";

//API
import api from 'services/api';

// Hooks
import { useState, useEffect } from "react";

const Home = () => {
  
  //Variáveis de estado
  const [main, setMain] = useState([]);
  const [mostSeen, setMostSeen] = useState([]);
  const [banner, setBanner] = useState([]);

  //Faça isso quando o componente montar
  useEffect(() => {

    //Requisição do Main que mostra os 2 posts em ordem decrescente que tenha 5 estrelas
    api.get('/posts?star=5&_limit=2&_order=desc')
    .then((response) => {
      setMain(response.data);
    })

    //Requisição do Banner que sorteia de acordo com a data em ordem decrescente com limite 1
    api.get('/posts?_sort=date&_order=desc&_limit=1')
    .then((response) => {
      setBanner(response.data);
    })

    //Requisição de Posts mais vistos 
    api.get('/posts?_limit=3')
    .then((response) => {
      setMostSeen(response.data);
    })

  }, []);


  return (
    <>
      <Header />

      <Hero />
      
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
            <div className="flex-start-row mt-3">
              <div className="profile">
                <img
                  src={profile}
                  className="profile-img cursor-pointer"
                  alt=""
                />
              </div>
              <div className="ml-1">
                <h6 className="color-primary">Fulano de tal</h6>
                <h6 className="color-gray">Autor</h6>
              </div>
            </div>
          </div>
          <div className="grid-6">
            {
              main.map((item) => {
                return <Main key={item.id} content={item} />
              })
            }
          </div>
        </div>
      </section>

      <div className="bg-section">
        <section className="container">
          <h3 className="ml-2 mb-3">Mais vistos</h3>
          <div className="row">
            <Card />

            <Card />

            <Card />
          </div>
        </section>
      </div>

      <Banner />

      <Footer />
    </>
  );
};

export default Home;
