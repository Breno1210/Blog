//IMPORTS REACT
import { Link } from "react-router-dom";

const Trendingtopics = ( {content} ) => {
  return (
    <>
      <div className="py-2">
        <div className="thumb">
          <img src={content.imageUrl} className="trending-card absolute" alt="" />
          <Link>
            <h6 className="text-center link-title py-5">{content.category}</h6>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Trendingtopics;
