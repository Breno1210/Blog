//IMPORTS REACT
import { Link, useLocation } from "react-router-dom";

import { useEffect } from "react";

const Trendingtopics = ( {content} ) => {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    onTop()
  }, [routePath]); 
  return (
    <>
      <div className="py-2">
        <div className="thumb">
          <img src={content.imageUrl} className="trending-card absolute" alt="" />
          <Link to={"/description/" + content.id} onClick={onTop}>
            <h6 className="text-center link-title py-5">{content.category}</h6>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Trendingtopics;
