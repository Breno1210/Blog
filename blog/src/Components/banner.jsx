//IMPORTS REACT
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Banner = ({ content }) => {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);
  return (
    <>
      <section className="container">
        <div className="img-banner hidden">
          <img src={content.imageUrl} alt="" />
        </div>
        <div className="row mt-3">
          <div className="flex-center">
            <Link to={"/description/" + content.id} onClick={onTop}>
              <h6 className="uppercase btn color-primary text-center">
                {content.category}
              </h6>
            </Link>
          </div>

          <Link href="" className="link-title">
            <h2 className="mt-1 text-center">{content.title}</h2>
          </Link>

          <p className="my-2 text-center">{content.resume}</p>
          <div className="flex-center">
            <Link to={"/description/" + content.id} onClick={onTop} className="link p-0">
              Ler mais
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
