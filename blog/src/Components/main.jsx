// Hooks
import { useState, useEffect} from "react";

// API
import api from 'services/api';

//SVGS E IMGS
import profile from 'img/profile/ny.jpg';

const Main = ( {content}) => {

  const [user, setUser] = useState([]);

  useEffect(() => {
    if(content){
      api.get('/user/' + content.id_user)
      .then((response) => {
        setUser(response.data);
      })
    }
  },[]);

  return (
    <>
      <div className="" data-aos="fade-down" data-aos-delay="400">
        <div className="py-4 bb-black">
          <h6 className="color-gray">{content.date}</h6>
          <h6 className="uppercase color-primary">{content.category}</h6>

          <h4>{content.title}</h4>
          <p className="mt-1">
          {content.resume}
          </p>
          <div className="flex-start-row mt-3">
            <div className="profile">
              <img
                src={user.ImageProfile}
                className="profile-img cursor-pointer"
                alt=""
              />
            </div>
            <div className="ml-1">
              <h6 className="color-primary">{user.name} {user.surname}</h6>
              <h6 className="color-gray">{user.user}</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
