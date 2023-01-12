//IMPORT REACT
import { Link, useLocation } from "react-router-dom";

//API
import api from "services/api";

// Hooks
import { useState, useEffect } from "react";

const Morelikes = ({ content }) => {
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
      <div className="py-3">
        <Link className="btn-high uppercase">{content.category}</Link>
        <Link to={"/description/" + content.id} onClick={onTop}>
          <h3 className="mt-1 link-title">{content.title}</h3>
        </Link>

        <p className="mb-2">{content.resume}</p>
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
              <h6 className="color-primary">
                by {user.name} {user.surname}
              </h6>
              <h6 className="color-gray">@{user.user}</h6>
            </div>
          </div>
          <div className="flex-end-row">
            <p className="ml-4">
              {content.date} - {content.duration} min read
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Morelikes;
