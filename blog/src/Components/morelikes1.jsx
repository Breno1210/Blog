//IMPORT REACT
import { Link, useLocation } from "react-router-dom";

//API
import api from "services/api";

// Hooks
import { useState, useEffect } from "react";

const Morelikes1 = ({ content }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (content) {
      api.get("/user/" + content.id_user).then((response) => {
        setUser(response.data);
      });
    }
  }, []);

  //Função pra voltar ao topo da pagina
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    onTop()
  }, [routePath]); 
  return (
    <>
        <div className="py-3 bb-black">
          <Link>
            <h6 className="btn-high uppercase color-primary">
              {content.category}
            </h6>
          </Link>

          <Link to={"/description/" + content.id} onClick={onTop}>
            <h5 className="mt-1 link-title">{content.title}</h5>
          </Link>

          <p className="p4 mt-1">
            {content.resume}
          </p>

          <div className="flex-start-row mt-1">
            <div className="profile">
              <img
                src={user.ImageProfile}
                className="profile-img cursor-pointer"
                alt=""
              />
            </div>
            <p className="p5 ml-2">by {user.name} {user.surname}</p>
            <div className="dot ml-1 mr-1"></div>
            <p className="p5">{content.date}</p>
          </div>
        </div>
      

    </>
  );
};

export default Morelikes1;
