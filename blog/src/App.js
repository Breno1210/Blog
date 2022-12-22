//IMPORTS REACTS
import { useEffect } from "react";

//Pages
import Paths from "paths";

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
      <Paths />
    </>
  );
}

export default App;
