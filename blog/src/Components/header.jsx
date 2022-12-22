//React
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

//SVG
import logo from "svg/blog-logo.svg";

const Header = () => {

    const initialValueForm = {
        search: ''
    }

    //Variaveis de Estado
    const [form, setForm] = useState(initialValueForm);

    // UseNavigate para redirecionar
    const navigate = useNavigate();

    function onChange(event){
        const {value, name} = event.target;

        setForm({...form, [name]: value});

        //console.log(form);
    }

    function handleSearch(e){
        e.preventDefault();

        navigate(`/search/${form.search}`);
    }
  
    return (
    <>
      <header className="py-1 px-2">
        <nav>
          <div className="logo">
            <Link to="/" href="">
              <img src={logo} alt="" />
            </Link>
          </div>
          <ul className="menu">
            <li>
              <Link to="/" className="p-1">
                Categorias
              </Link>
            </li>
            <li>
              <Link to="/about" className="p-1">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/contact" className="p-1">
                Contato
              </Link>
            </li>
          </ul>
        </nav>
        <div className="bx"></div>
        <div className="flex-start-row">
          <div className="search">
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
          <div className="cta-desktop ml-3">
            <Link to="/login" className="btn">
              Login
            </Link>
          </div>
          <div className="cta-mobile mr-1">
            <Link to="/login" className="link">
              Login
            </Link>
          </div>
        </div>
      </header>

      <div className="relative">
        <div className="menu-mobile">
          <ul className="nav-mobile">
            <li>
              <Link to="/" className="link-menu-mobile">
                Categorias
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
