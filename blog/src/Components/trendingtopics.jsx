//IMPORTS REACT
import { Link, useLocation } from "react-router-dom";

import { useEffect } from "react";

const Trendingtopics = ({ content }) => {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);
  return (
    <>
      <div class="grid-3 br-6 hidden p-0 relative thumb">
        <img src={content.imageUrl} className=" absolute " alt="" />
        <div className="">
          <div className="trending-card thumb">
            <Link to={"/description/" + content.id} onClick={onTop}>
              <h6 className="text-trending text-center link-title py-5">
                {content.category}
              </h6>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trendingtopics;
