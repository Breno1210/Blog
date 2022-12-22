//COMPONENTS
import Header from "Components/header";
import Footer from "Components/footer";

//IMPORTS REACTS
import SVGInject from "@iconfu/svg-inject";
import { Link } from "react-router-dom";

//SVGS E IMGS
import bgSobre from "img/bg-sobre.jpg";
import iconLogo from "svg/blog-logo.svg";

const About = () => {
  return (
    <>
      <Header />
      <img
        src={bgSobre}
        className="bg-sobre mt--110"
        alt=""
        onLoad={(e) => {
          SVGInject(e.target);
        }}
      />
      <section className="container">
        <div data-aos="fade-down" data-aos-delay="200">
          <div className="row flex-center mt-7">
            <Link to="/">
              <img src={iconLogo} className="icon-xl mb-2" alt="" />
            </Link>
          </div>

          <h3 className="text-center uppercase bold">Quem Somos?</h3>

          <div>
            <p className="text-center mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              urna pharetra ut ac, pellentesque. Ultricies habitasse pretium
              purus viverra. Sit eget volutpat semper vitae metus, fringilla
              ullamcorper sapien nibh.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Ornare urna pharetra ut ac, pellentesque.
              Ultricies habitasse pretium purus viverra. Sit eget volutpat
              semper vitae metus, fringilla ullamcorper sapien nibh.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra
              ut ac, pellentesque. Ultricies habitasse pretium purus viverra.
              Sit eget volutpat semper vitae metus, fringilla ullamcorper sapien
              nibh.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
