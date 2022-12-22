//IMPORTS REACT
import React from "react";
import { Link} from "react-router-dom";

//COMPONENTS
import Header from "Components/header";
import Footer from "Components/footer";

//SVGS OU IMGS
import logo from 'svg/blog-logo.svg'

const Login = () => {
  return (
    <>
      <Header />
      <section className="container mb-3">
        <div className="row mt-3">
          <div className="grid-4 disappear"></div>
          <div className="grid-4">
            <div classNameName="flex-center">
                <img src={logo} classNameName="icon-xl mb-2" alt="" />
              </div>
            <h2 classNameName="text-center mb-3">Blog<span>.</span></h2>
            <h6 className="text-center mb-2">Olá, faça o login para continuar.</h6>

            <input
              type="text"
              className="mt-2"
              name="user"
              id=""
              placeholder="Digite seu usuário"
            />
            <input
              type="password"
              className="mt-2 mb-2"
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
            <p
              classNameName="text-center mt-2"
              
            >
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
