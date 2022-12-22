//IMPORTS REACT
import React from "react";

//SVGS E IMGS
import profile from 'img/profile/ny.jpg';

const Main = () => {
  return (
    <>
      <div className="" data-aos="fade-down" data-aos-delay="400">
        <div className="py-4 bb-black">
          <h6 className="color-gray">01 NOV 2021</h6>
          <h6 className="uppercase color-primary">tecnologia</h6>

          <h4>Lorem Ipsum is simply dummy text of</h4>
          <p className="mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna
            pharetra ut ac, pellentesque.
          </p>
          <div className="flex-start-row mt-3">
            <div className="profile">
              <img
                src={profile}
                className="profile-img cursor-pointer"
                alt=""
              />
            </div>
            <div className="ml-1">
              <h6 className="color-primary">Fulano de tal</h6>
              <h6 className="color-gray">Autor</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
