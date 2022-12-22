import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "Pages/Home/Home";

function App() {
  // useEffect para carregar o script do menu responsivo
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "./js/script.js";
    script.async = true;

    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    }

  }, []);

  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
