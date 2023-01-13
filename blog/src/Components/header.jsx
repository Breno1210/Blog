//IMPORTS REACT
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

//COMPONENTS
import Context from 'Pages/Context/Context';

//SVG
import logo from "svg/blog-logo.svg";

import api from 'services/api';

const Header = () => {
  const initialValueForm = {
    search: ''
  }

  // Puxando o token do Context
  const { token, idUser, setToken, setIdUser } = useContext(Context);
  const [nameUser, setNameUser] = useState('');
  const [form, setForm] = useState(initialValueForm);
  const navigate = useNavigate();


  // Se tiver o token e iduser, buscar o nome do usuário
  if(token && idUser){

    api.get(`/user?id=${idUser}`)
    .then((response) => {
      setNameUser(response.data[0].name);
    })

  }

  // Função para realizar o logout do usuário
  function handleLogout(event){
    event.preventDefault();

    // Zera o token e o Id user na sessão
    setToken('');
    setIdUser('');

    // Faz o redirect para a home
    navigate('/');
  }

  function onChange(event){

    // Desestruturação do nome e valor da propriedade do campo
    const { value, name } = event.target;

    // Pega o valor antigo e adiciona o novo que veio
    setForm({ ...form, [name]: value});

    
  }

  function handleSearch(){
    navigate(`/search/${form.search}`);
  }

  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    onTop()
  }, [routePath]); 

  return (
    <>
      <header className="py-1 px-2">
        <nav>
          <div className="logo" data-aos="fade-right" data-aos-delay="400">
            <Link to="/" href="">
              <img src={logo} alt="" />
            </Link>
          </div>
          <ul className="menu">
            <li data-aos="fade-down" data-aos-delay="800">
              <Link to="/allposts" className="p-1">
                Posts
              </Link>
            </li>
            <li data-aos="fade-up" data-aos-delay="1200">
              <Link to="/about" className="p-1">
                Sobre
              </Link>
            </li>
            <li data-aos="fade-down" data-aos-delay="1400">
              <Link to="/contact" className="p-1">
                Contato
              </Link>
            </li>
          </ul>
        </nav>
        <div className="bx"></div>
        <div className="flex-start-row">
          <div className="search" data-aos="fade-right" data-aos-delay="1800">
            <form className="flex" onSubmit={handleSearch}>
              <input
                type="text"
                name="search"
                id=""
                placeholder="Buscar..."
                onChange={onChange}
              />
              <button className="btn-search"></button>
            </form>
          </div>
          {!token ? (
            <>
              <div className="cta-desktop ml-3" data-aos="fade-left" data-aos-delay="2200">
                <Link to="/login" className="btn" onClick={onTop}>
                  Login
                </Link>
              </div>
              <div className="cta-mobile mr-1">
                <Link to="/login" className="link">
                  Login
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="cta-desktop ml-3">
                <Link to="/profile" className="link">
                  {nameUser}
                </Link>
                <span> &nbsp; | &nbsp;</span>
                <a href="#" onClick={handleLogout} className="link">
                  Sair
                </a>
              </div>
              <div className="cta-mobile mr-1">
                <Link to="/profile" className="link">
                  {nameUser}
                </Link>
                <span> &nbsp; | &nbsp;</span>
                <a href="#" onClick={handleLogout} className="link">
                  Sair
                </a>
              </div>
            </>
          )}
        </div>
      </header>

      <div className="relative">
        <div className="menu-mobile">
          <ul className="nav-mobile">
            <li>
              <Link to="/allposts" className="link-menu-mobile">
                Posts
              </Link>
            </li>
            <li>
              <Link to="/about" className="link-menu-mobile">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link-menu-mobile">
                Contato
              </Link>
            </li>
            <li className="py-2 pl-2">
              <form className="flex">
                <input
                  type="text"
                  name="search"
                  id=""
                  placeholder="Buscar..."
                />
                <button className="btn-search"></button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
