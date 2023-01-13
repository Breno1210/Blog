//IMPORTS REACT
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Card = ({ content }) => {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    onTop()
  }, [routePath]); 
  return (
    <>
      <div className="grid-4 card hidden p-0">
        <div className="thumb hidden">
          <Link to={"/description/" + content.id} onClick={onTop} className="p-0">
            <img src={content.imageUrl} alt="" />
          </Link>
        </div>
        <div className="p-2">
          <h6 className="uppercase color-primary btn-high">
            {content.category}
          </h6>
          <Link to={"/description/" + content.id} onClick={onTop} className="link-title">
            <h5 className="mt-1 title">{content.title}</h5>
          </Link>

          <p className="my-1 resume" >{content.resume}</p>
          <div className="flex-space">
            <div className="flex-start-row">
              <Link to={"/description/" + content.id} onClick={onTop} className="link p-0">
                <a href="#topo"><span>Ler mais</span></a>
                
              </Link>
            </div>

            <div className="flex-end-row">
              <p>
                {content.date} - {content.duration} min read.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
