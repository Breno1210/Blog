//IMPORTS REACT
import React from "react";
import { Link } from 'react-router-dom';

//SVGS E IMGS
import img from 'img/01.png';

const Card = () => {
  return (
    <>
      <div className="grid-4 card hidden p-0">
        <div className="thumb hidden">
          <Link href="" className="p-0">
            <img src={img} alt="" />
          </Link>
        </div>
        <div className="p-2">
          <h6 className="color-gray">01 NOV 2021</h6>
          <h6 className="uppercase color-primary">TECNOLOGIA</h6>
          <Link href="" className="link-title">
            <h4 className="mt-1">Os novos macbooks M1</h4>
          </Link>

          <p className="my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna
            pharetra ut ac, pellentesque.
          </p>
          <Link href="" className="link p-0">
            Ler mais
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
