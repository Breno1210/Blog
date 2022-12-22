//IMPORTS REACT
import { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";

//COMPONENTS
import Header from "Components/header";
import Footer from "Components/footer";
import Context from 'Pages/Context/Context';

//SVGS OU IMGS
import logo from "svg/blog-logo2.svg";
import iconUser from "svg/icon-user.svg";
import iconPassword from 'svg/icon-password.svg'

//API
import api from 'services/api';

//import MD5 from "crypto-js/md5";

const Login = () => {
  
  return (
    <>
      <Header />
      <section className="container mb-3">
        <div className="row mt-3">
          <div className="grid-4 disappear"></div>
          <div className="grid-4 mb-7">
            <div className="flex-center">
              <Link to='/'><img src={logo} className="icon-xl mt-6" alt="" /></Link>
            </div>
            <h6 className="text-center mb-2">
              Olá, faça o login para continuar.
            </h6>

            <form className="relative">
              <img src={iconUser} className="icon-user" alt="" />
              <input
                type="text"
                className="input-user-login mt-2"
                name="user"
                id=""
                placeholder="Digite seu usuário"
              />
              <img src={iconPassword} className="icon-password" alt="" />
              <input
                type="password"
                className="input-password-login mt-2 mb-2"
                name="password"
                id=""
                placeholder="Digite sua senha"
              />

              {/* <div className="card-danger p-2 my-1">
              <h6 className="h7 color-red">Olá, isso é uma mensagem de erro</h6>
            </div>

            <div className="card-success p-2 my-1">
              <h6 className="h7 color-green">Olá, isso é uma mensagem de erro</h6>
            </div>

            <div className="card-warning p-2 my-1">
              <h6 className="h7 color-yellow">Olá, isso é uma mensagem de erro</h6>
            </div>

            <div className="card-info p-2 my-1">
              <h6 className="h7 color-primary">Olá, isso é uma mensagem de erro</h6>
            </div> */}

              <button className="btn w-100 mt-2">Entrar</button>
            </form>
            <p className="text-center mt-2">
              Não possui uma conta? <Link to="/register">Criar uma conta</Link>
            </p>
          </div>

          <div className="grid-4 disappear"></div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
