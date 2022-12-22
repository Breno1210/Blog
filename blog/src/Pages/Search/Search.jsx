//React
import React from "react";
import { Link } from "react-router-dom";

//COMPONENTS
import Header from "Components/header";
import Footer from "Components/footer";


const Search = () => {
  return (
    <>
      <Header />
      <section className="container">
        <div data-aos="fade-down" data-aos-delay="200">
          <h6 className="text-center color-gradient-3 bold uppercase">
            3 Resultados
          </h6>
          <h3 className="text-center">Tecnlogia</h3>
          <div className="row">
            <div className="grid-2"></div>
            <div className="grid-8">
              <form className="flex">
                <input type="text" name="search" placeholder="Buscar..." />
                <div className="cta-desktop ml-3">
                  <Link href="#" className="btn">
                    Buscar
                  </Link>
                </div>
              </form>
            </div>
            <div className="grid-2"></div>
          </div>
        </div>

        <div
          className="row mb-7 mt-7"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <div className="grid-4 card p-0">
            
          </div>
          <div className="grid-4 card p-0">
            
          </div>
          <div className="grid-4 card p-0">
            
          </div>
        </div>

        {/* <h4 className="ml-2 mb-3">Posts Relacionados</h4>
        <div className="row">
          <div className="grid-4 card p-0">
            <TestCard />
          </div>
          <div className="grid-4 card p-0">
            <TestCard />
          </div>
          <div className="grid-4 card p-0">
            <TestCard />
          </div>
        </div> */}
      </section>
      <Footer />
    </>
  );
};

export default Search;
