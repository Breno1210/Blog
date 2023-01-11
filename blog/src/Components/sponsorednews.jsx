//SVG E IMG
import iconFlash from "svg/icon-flash.svg";

//IMPORT COMPONENTS
import Card from "Components/card";

//API
import api from "services/api";

// Hooks
import { useState, useEffect } from "react";

const Sponsorednews = () => {
  //Variáveis de estado
  const [mostSeen, setMostSeen] = useState([]);

  //Faça isso quando o componente montar
  useEffect(() => {
    //Requisição de Posts mais vistos
    api.get("/posts?_limit=3").then((response) => {
      setMostSeen(response.data);
    });
  }, []);
  return (
    <>
      <section className="container">
        <div className="row">
            <section className="container">
              <div className="flex-start-row">
                <img src={iconFlash} className="icon" alt="" />
                <h2 className="mt-1 mb-1">
                    Notícias patrocinadas<span>.</span>
                </h2>
              </div>
              <p className="flex-start-row">
                Últimas notícias impulsionadas por nossos patrocinadores.
              </p>

              <div className="row py-3">
                {mostSeen.map((item) => {
                  return <Card key={item.id} content={item} />;
                })}
              </div>
            </section>
          
        </div>
      </section>
    </>
  );
};

export default Sponsorednews;
