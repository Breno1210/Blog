//IMPORT REACT
import { Link, useLocation } from "react-router-dom";
//API
import api from "services/api";

// Hooks
import { useState, useEffect } from "react";

//SVGS E IMGS
import imgCard2 from "img/keyboard.png";

const Mostrecent1 = ({ content }) => {
  const [user, setUser] = useState([]);
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    onTop()
  }, [routePath]); 

  useEffect(() => {
    if (content) {
      api.get("/user/" + content.id_user).then((response) => {
        setUser(response.data);
      });
    }
  }, []);
  return (
    <>
      <div className="row">
        <div className="grid-4 p-0">
          <div className="py-3">
            <Link className="btn-high uppercase">{content.category}</Link>
            <Link to={"/description/" + content.id} onClick={onTop}>
              <h4 className="mt-1 link-title">
                {content.title}
              </h4>
            </Link>
            <p className="mb-2 mt-1">
              {content.resume}
            </p>
            <div className="flex-space">
              <div className="flex-start-row">
                <div className="profile">
                  <img
                    src={user.ImageProfile}
                    className="profile-img cursor-pointer"
                    alt=""
                  />
                </div>
                <div className="ml-1">
                  <h6 className="color-primary p4">by {user.name} {user.surname}</h6>
                  <h6 className="color-gray p4">@{user.user}</h6>
                </div>
              </div>
              <div className="flex-end-row">
                <p className="ml-4 p5">{content.date}</p>
              </div>
            </div>

            <div className="flex-start-row">
              <Link to={"/description/" + content.id} onClick={onTop} className="mt-2">
                <span>Ler mais</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid-8 p-0">
          <div className="thumb-reverse ">
            <img src={imgCard2} className="py-8 cursor-pointer" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mostrecent1;
