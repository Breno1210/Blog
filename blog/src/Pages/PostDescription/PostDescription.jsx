//React router dom
import { Link, useParams } from "react-router-dom";

//COMPONENTS
import Header from "Components/header";
import Footer from "Components/footer";

//SVGS E IMGS
import iconFacebook from "svg/icon-facebook.svg";
import iconInstagram from "svg/icon-instagram.svg";
import iconYoutube from "svg/icon-youtube.svg";
import iconTwitter from "svg/icon-twitter.svg";

//api
import api from "services/api";

//Hooks
import { useState, useEffect } from "react";

//IMPORT AOS
import AOS from "aos";
import "aos/dist/aos.css";

const PostDescription = () => {
  //Variavel de estado
  const [post, setPost] = useState([]);
  const [user, setUser] = useState([]);

  const { idPost } = useParams();

  useEffect(() => {
    if (idPost) {
      api.get("/posts/" + idPost).then((response) => {
        setPost(response.data);

        api.get("/user/" + response.data.id_user).then((r) => {
          setUser(r.data);
        });
      });
    }
  }, []);

  useEffect(() => {
    AOS.init({
      easing: "easy-out-quart",
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <section className="hidden">
        <div className="">
          <img src={post.imageUrl} className="bg-description mt--110" alt="" />
        </div>
        <div className="container relative mt--110">
          <div
            className="flex-center"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <Link className="btn uppercase color-primary flex-center mb-2">
              {post.category}
            </Link>
          </div>

          <h3 className="text-center" data-aos="fade-up" data-aos-delay="600">
            {post.title}
          </h3>
          <p
            className="text-center mt-3 mb-3"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {post.resume}
          </p>

          <div className="flex-center my-3">
            <div className="profile" data-aos="fade-right" data-aos-delay="800">
              <img src={user.ImageProfile} className="profile-img" alt="" />
            </div>
            <div className="ml-2 mt-3" data-aos="fade-right" data-aos-delay="1000"
            >
              <h6 className="color-primary">
                {user.name} {user.surname}
              </h6>
              <h6 className="color-gray">{user.user}</h6>
            </div>
            <div className="dot ml-4 mr-2" data-aos="fade-up"data-aos-delay="1000"></div>
            <p className="ml-4" data-aos="fade-left" data-aos-delay="1200">
              {post.date} - {post.duration} min read
            </p>
          </div>

          <div className="row my-3">
            <div className="grid-3 disappear"></div>
            <div className="grid-6 mt-11" data-aos="fade-down" data-aos-delay="400">
              <h4 id="topo" className="text-center">
                {post.title}
              </h4>
              <p className="mt-3" data-aos="fade-right" data-aos-delay="600">{post.content}</p>
            </div>
            <div className="grid-3 disappear"></div>
          </div>

          <div className="row">
            <div className="grid-3 disappear"></div>
            <div className="grid-6 card-profile">
              <div className="row">
                <div className="grid-3 flex-center pl-1">
                  <div className="profile-big" data-aos="fade-right" data-aos-delay="800">
                    <img
                      src={user.ImageProfile}
                      className="profile-img"
                      alt=""
                    />
                  </div>
                </div>
                <div className="grid-9">
                  <div className="">
                    <h6 className="color-primary" data-aos="fade-down" data-aos-delay="1000">
                      {user.name} {user.surname}
                    </h6>
                    <h6 className="color-gray" data-aos="fade-up" data-aos-delay="1000">{user.user}</h6>
                    <div className="flex-end-row t">
                      <img src={iconFacebook} className="icon-s" alt="" data-aos="fade-up" data-aos-delay="1200"/>
                      <img src={iconInstagram} className="icon-s ml-1" alt="" data-aos="fade-down" data-aos-delay="1400"/>
                      <img src={iconYoutube} className="icon-s ml-1" alt="" data-aos="fade-up" data-aos-delay="1600"/>
                      <img src={iconTwitter} className="icon-s ml-1" alt="" data-aos="fade-down" data-aos-delay="1800"/>
                    </div>
                  </div>
                  <p className="mt-5"data-aos="fade-left" data-aos-delay="2000">{user.description}</p>
                </div>
              </div>
            </div>
            <div className="grid-3 disappear"></div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PostDescription;
