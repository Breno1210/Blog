//IMPORTS REACT
//React
import { Link, useParams } from "react-router-dom";

//IMPORT COMPONENTS
import Header from "Components/header";
import Footer from "Components/footer";
import Card from "Components/card";

//SVGS E IMGS
import iconStar from "svg/icon-star.svg";

//Hooks
import { useState, useEffect } from "react";

//API
import api from "services/api";

//IMPORT AOS
import AOS from "aos";
import "aos/dist/aos.css";

const AllPosts = () => {
  const [allposts, setAllPosts] = useState([]);
  //Requisição do Main que mostra os 2 posts em ordem decrescente que tenha 5 estrelas
  api.get("/posts?_order=desc").then((response) => {
    setAllPosts(response.data);
  });

  const { word_search } = useParams();

  //Variveis de estado
  const [word, setWord] = useState(word_search);
  const [search, setSearch] = useState([]);
  const [form, setForm] = useState([]);

  useEffect(() => {
    if (word) {
      api.get(`/posts?q=${word}`).then((response) => {
        setSearch(response.data);
      });
    }
  }, [word]);

  function onChange(event) {
    const { value, name } = event.target;

    setForm({ ...form, [name]: value });
  }

  function handleSearch(e) {
    e.preventDefault();

    setWord(form.search);
  }

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
      <section className="container">
        <div data-aos="fade-down" data-aos-delay="200">
          <h6 className="color-primary text-center uppercase">
            {search.length} Resultados
          </h6>
          <h3 className="text-center">'{word}'</h3>
          <div className="row">
            <div className="grid-2 disappear"></div>
            <div className="grid-8">
              <form className="flex-center" onSubmit={handleSearch}>
                <input
                  type="text"
                  name="search"
                  placeholder="Buscar..."
                  onChange={onChange}
                />
                <div className="cta-desktop ml-3">
                  <Link onClick={handleSearch} className="btn">
                    Buscar
                  </Link>
                </div>
              </form>
            </div>
            <div className="grid-2 disappear"></div>
          </div>
        </div>
        <div className="row">
          {search.map((item) => {
            return <Card key={item.id} content={item} />;
          })}
        </div>
        <div className="bb-black my-5"></div>
        <div className="row ">
          <div
            className="flex-center" data-aos="fade-down" data-aos-delay="400"
          >
            <img src={iconStar} className="icon" alt="" />
          </div>
          <div
            className="flex-center mb-5" data-aos="fade-up" data-aos-delay="600"
          >
            <h2 className="link-title">
              Todos os Posts<span>.</span>
            </h2>
          </div>
        </div>
        <div className="row">
          {allposts.map((item) => {
            return <Card key={item.id} content={item} />;
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AllPosts;
