//IMPORT REACT
import { Link, useLocation } from "react-router-dom";

//API
import api from "services/api";

// Hooks
import { useState, useEffect } from "react";

const Highlights2 = ({ content }) => {
  const [user, setUser] = useState([]);
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
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
      <div class="grid-3 hidden p-0 br-6 relative thumb">
        <img src={content.imageUrl} className=" absolute" alt="" />
        <div className="ml-2 mt-10 py-3">
          <Link className="btn-high uppercase">{content.category}</Link>
          <Link to={"/description/" + content.id} onClick={onTop}>
            <h6 className="mt-1 link-title">{content.title}</h6>
          </Link>

          <div className="flex-start-row">
            <p className="p5">
              by {user.name} {user.surname}
            </p>
            <div className="dot ml-1 mr-1"></div>
            <p className="p5">{content.date}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Highlights2;
