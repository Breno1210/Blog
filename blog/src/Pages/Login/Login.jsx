//IMPORTS REACT
import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

//COMPONENTS
import Header from "Components/header";
import Footer from "Components/footer";
import Context from "Pages/Context/Context";

//SVGS OU IMGS
import logo from "svg/blog-logo2.svg";
import imgLogin from "img/18.png";
//import iconUser from "svg/icon-user.svg";
//import iconPassword from "svg/icon-password.svg";

//IMPORT AOS
import AOS from "aos";
import "aos/dist/aos.css";

//API
import api from "services/api";

import MD5 from "crypto-js/md5";

const initialState = {
  user: "",
  password: "",
};



const Login = () => {
  console.log(MD5("123456").toString().toUpperCase());

  // Variáveis de estado
  const [form, setForm] = useState(initialState);
  const [danger, setDanger] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const { setToken, setIdUser } = useContext(Context);

  /**
   * Função para atualizar a variável de estado form
   * a cada mudança de entrada de dados nos inputs
   **/

  function onChange(event) {
    // Desestruturação do nome e valor da propriedade do campo
    const { value, name } = event.target;

    // Pega o valor antigo e adiciona o novo que veio
    setForm({ ...form, [name]: value });

    //console.log(form);
  }

  /**
   * Função para prevenir o valor default de enviar
   * o formulário via GET ou POST para a URL
   * especificada em action.
   **/

  function handleLogin(event) {
    event.preventDefault();

    console.log(form.user);

    api.get(`/user?user=${form.user}`).then((response) => {
      if (response.data.length === 1) {
        /*
                Significa que o usuário está cadastrado no banco
                de dados. Porém, é necessário autenticar sua senha.
                Lembrando que isso é regra de negócio, é para o 
                back-end fazer isso, porém estamos fazendo uma 
                exceção e simulando no front-end.
                */

        if (
          response.data[0].token === MD5(form.password).toString().toUpperCase()
        ) {
          // Se sim, a senha está ok

          setDanger("");
          setSuccess("Login feito com sucesso! Aguarde...");
          setToken(response.data[0].token);
          setIdUser(response.data[0].id);
          navigate("/profile");
        } else {
          // Se não, a senha está errada!
          setDanger("A senha não corresponde!");
          //navigate("/");
        }
      } else {
        // Ou está duplicado ou não encontrou!
        setDanger("Usuário não encontrado!");
        //navigate("/");
      }
    });
  }

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

      <section className="container mb-3">
        <div className="row mb-8">
          <div className="grid-1 disappear"></div>
          <div className="grid-4 disappear">
            <div className="flex-center" data-aos="fade-down"
              data-aos-delay="200">
              <Link to="/">
                <img src={logo} className="icon-xl mt-6" alt="" />
              </Link>
            </div>
            <h5 className="text-center mb-3 mt-1" data-aos="fade-down"
              data-aos-delay="400">Seja bem-vindo ao blog.</h5>
            <div className="row">
              <form className="" onSubmit={handleLogin}>
                <div className="" data-aos="fade-right"
              data-aos-delay="600">
                  <input
                    type="text"
                    id="user"
                    name="user"
                    className=""
                    onChange={onChange}
                    placeholder="Digite seu usuário"
                    value={form.email}
                  />
                </div>
                <div className="" data-aos="fade-left"
              data-aos-delay="800">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="mt-2"
                    onChange={onChange}
                    placeholder="Digite sua senha"
                    value={form.password}
                  />
                </div>
                <div className="flex-space my-1">
                  <div className="flex-start-row">
                    <div className="flex-center" data-aos="fade-right"
              data-aos-delay="1000">
                      <input type="checkbox" className="check ml-1 mr-1 mt-1" />
                      <p className="mt-1">Lembrar-me</p>
                    </div>
                  </div>
                  <div className="flex-end-row" data-aos="fade-left"
              data-aos-delay="1200">
                    <Link to="/notfound" className="mt-1">
                      Esqueceu sua senha?
                    </Link>
                  </div>
                </div>
                <button className="btn w-100 mt-1" data-aos="fade-up"
              data-aos-delay="1400">Entrar</button>
                <p className="text-center mt-2" data-aos="fade-right"
              data-aos-delay="600">
                  Não possui uma conta?{" "}
                  <Link to="/notfound">Criar uma conta</Link>
                </p>

                {
                  // Renderização condicional para erros

                  danger ? (
                    <div className="card-danger p-2 mt-3">
                      <h6 className="h7 color-red">{danger}</h6>
                    </div>
                  ) : (
                    <div></div>
                  )
                }

                {
                  // Renderização condicional para erros

                  success ? (
                    <div className="card-success p-2 mt-3">
                      <h6 className="h7 color-green">{success}</h6>
                    </div>
                  ) : (
                    <div></div>
                  )
                }
              </form>
            </div>
          </div>
          <div className="grid-1 disappear"></div>
          <div className="grid-6 br-6 p-0 relative thumb-reverse">
            <div>
              <img src={imgLogin} className="absolute" alt="" data-aos="fade-left"
              data-aos-delay="1600"/>
              <div className="flex-center" data-aos="fade-right"
              data-aos-delay="1800">
                <Link className="btn mt-400">
                  <h6 className="uppercase">Fotografia</h6>
                </Link>
              </div>

              <h4 className="text-center mt-1" data-aos="fade-left"
              data-aos-delay="2000">Seja bem-vindo ao blog.</h4>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Login;
