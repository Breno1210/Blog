//React
import { Link, useParams } from "react-router-dom";

//COMPONENTS
import Header from "Components/header";
import Footer from "Components/footer";
import Card from "Components/card";

//Hooks
import { useState, useEffect } from "react";

//API
import api from "services/api";

const Search = () => {
  const { word_search } = useParams();

  //Variveis de estado
  const [word, setWord] = useState(word_search);
  const [search, setSearch] = useState([]);
  const [form, setForm] = useState([]);

  useEffect(() => {
    if (word) {
      api.get(`/posts?q=${word}`)
      .then((response) => {
        setSearch(response.data);
      });
    }
  }, [word]);

  function onChange(event) {
    const { value, name } = event.target;

    setForm({ ...form, [name]: value });

  }

  function handleSearch(e){
    e.preventDefault();

    setWord(form.search);

}

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
                  <Link onClick={handleSearch} className="btn">Buscar</Link>
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
      </section>
      <Footer />
    </>
  );
};

export default Search;
