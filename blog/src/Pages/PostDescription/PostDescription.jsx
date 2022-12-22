//React router dom
import { Link, useParams } from "react-router-dom";

//COMPONENTS
import Header from "Components/header";
import Footer from "Components/footer";

//SVGS E IMGS
import ImgProfile from "img/profile/ny.jpg";
import bgDescription from "img/bg-description.jpg";
import iconFacebook from "svg/icon-facebook.svg";
import iconInstagram from "svg/icon-instagram.svg";
import iconYoutube from "svg/icon-youtube.svg";
import iconTwitter from "svg/icon-twitter.svg";

//api
import api from 'services/api';

//Hooks
import { useState, useEffect } from "react";

const PostDescription = () => {

  //Variavel de estado
  const [post, setPost] = useState([]);
  const [user, setUser] = useState([]);

  const { idPost } = useParams();

  useEffect(() => {
    if(idPost){
      api.get("/posts/" + idPost)
      .then((response) => {
        setPost(response.data);

        api.get("/user/" + response.data.id_user)
        .then((r) => {
          setUser(r.data);
        })
      })
    }
  },[]);

  return (
    <>
      <Header />
      <section className="hidden">
        <div className="">
          <img src={post.imageUrl} className="bg-description mt--110" alt="" />
        </div>
        <div className="container relative mt--110">
          <div className="flex-center">
            <Link className="btn uppercase color-primary flex-center mb-2">
              {post.category}
            </Link>
          </div>

          <h3 className="text-center">{post.title}</h3>
          <p className="text-center mt-3 mb-3">
            {post.resume}
          </p>

          <div className="flex-center my-3">
            <div className="profile">
              <img src={user.ImageProfile} className="profile-img" alt="" />
            </div>
            <div className="ml-2 mt-3">
              <h6 className="color-primary">{user.name} {user.surname}</h6>
              <h6 className="color-gray">{user.user}</h6>
            </div>
            <div className="dot ml-4 mr-2"></div>
            <p className="ml-4">{post.date} - {post.duration} min read</p>
          </div>

          <div className="row my-3">
            <div className="grid-3 disappear"></div>
            <div className="grid-6 mt-11">
              <h4 className="text-center">{post.title}</h4>
              <p className="mt-3">
                {post.content}
              </p>
            </div>
            <div className="grid-3 disappear"></div>
          </div>

          <div className="row">
            <div className="grid-3 disappear"></div>
            <div className="grid-6 card">
              <div className="row">
                <div className="grid-3 flex-center pl-1">
                  <div className="profile-big">
                    <img src={user.ImageProfile} className="profile-img" alt="" />
                  </div>
                </div>
                <div className="grid-9">
                  <div className="">
                    <h6 className="color-primary">{user.name} {user.surname}</h6>
                    <h6 className="color-gray">{user.user}</h6>
                    <div className="flex-end-row t">
                      <img src={iconFacebook} className="icon-s" alt="" />
                      <img src={iconInstagram} className="icon-s ml-1" alt="" />
                      <img src={iconYoutube} className="icon-s ml-1" alt="" />
                      <img src={iconTwitter} className="icon-s ml-1" alt="" />
                    </div>
                  </div>
                  <p className="mt-5">
                    {user.description}
                  </p>
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
