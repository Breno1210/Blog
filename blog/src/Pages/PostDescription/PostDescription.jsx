//React
import React from "react";
import { Link } from "react-router-dom";

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

const PostDescription = () => {
  return (
    <>
      <Header />
      <section className="hidden">
        <div className="">
          <img src={bgDescription} className="bg-description " alt="" />
        </div>
        <div className="container relative mt--110">
          <div className="flex-center">
            <Link className="btn uppercase color-primary flex-center mb-2">
              GAMES
            </Link>
          </div>

          <h3 className="text-center">O que tem de novo no PS5??</h3>
          <p className="text-center mt-3 mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna
            pharetra ut ac, pellentesque.{" "}
          </p>

          <div className="flex-center my-3">
            <div className="profile">
              <img src={ImgProfile} className="profile-img" alt="" />
            </div>
            <div className="ml-2">
              <h6 className="color-primary">Násser Yousef Ali</h6>
              <h6 className="color-gray">Author</h6>
            </div>
            <div className="dot ml-4 mr-2"></div>
            <p className="ml-4">Aug 2, 2020 - 8 min read</p>
          </div>

          <div className="row my-3">
            <div className="grid-3 disappear"></div>
            <div className="grid-6 mt-11">
              <h4>Esse aqui é o primeiro título</h4>
              <p className="mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                urna pharetra ut ac, pellentesque. Ultricies habitasse pretium
                purus viverra. Sit eget volutpat semper vitae metus, fringilla
                ullamcorper sapien nibh. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Ornare urna pharetra ut ac, pellentesque.
                Ultricies habitasse pretium purus viverra. Sit eget volutpat
                semper vitae metus, fringilla ullamcorper sapien nibh.
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
                    <img src={ImgProfile} className="profile-img" alt="" />
                  </div>
                </div>
                <div className="grid-9">
                  <div className="">
                    <h6 className="color-primary">Násser Yousef Ali</h6>
                    <h6 className="color-gray">Author</h6>
                    <div className="flex-end-row t">
                      <img src={iconFacebook} className="icon-s" alt="" />
                      <img src={iconInstagram} className="icon-s ml-1" alt="" />
                      <img src={iconYoutube} className="icon-s ml-1" alt="" />
                      <img src={iconTwitter} className="icon-s ml-1" alt="" />
                    </div>
                  </div>
                  <p className="mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ornare urna pharetra ut ac, pellentesque. Ultricies
                    habitasse pretium purus viverra. Sit eget volutpat semper
                    vitae metus, fringilla ullamcorper sapien nibh.
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
