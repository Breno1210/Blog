//IMPORT REACT
import { Link, useLocation } from "react-router-dom";
//API
import api from "services/api";

// Hooks
import { useState, useEffect } from "react";

const Highlights1 = ({ content }) => {
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
      <img src={content.imageUrl} className="br-6 absolute" alt="" />
      <div className="ml-2 mt-9">
        <Link className="btn-high uppercase">{content.category}</Link>
        <Link to={"/description/" + content.id} onClick={onTop}>
          <h5 className="mt-1 link-title">{content.title}</h5>
        </Link>

        <div className="flex-start-row mb-1">
          <p>
            by {user.name} {user.surname}
          </p>
          <div className="dot ml-2 mr-2 color-gray"></div>
          <p>
            {content.date} - {content.duration} min read
          </p>
        </div>
      </div>
    </>
  );
};

export default Highlights1;
