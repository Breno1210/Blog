//IMPORTS REACT
import React from "react";
import { Link } from 'react-router-dom';

const Card = ( {content} ) => {
  return (
    <>
      <div className="grid-4 card hidden p-0 mb-5">
        <div className="thumb hidden">
          <Link href="" className="p-0">
            <img src={content.imageUrl} alt="" />
          </Link>
        </div>
        <div className="p-2">
          <h6 className="color-gray">{content.data}</h6>
          <h6 className="uppercase color-primary">{content.category}</h6>
          <Link href="" className="link-title">
            <h4 className="mt-1">{content.title}</h4>
          </Link>

          <p className="my-2">
            {content.resume}
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
