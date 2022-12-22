import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from 'Pages/Home/Home';

function App() {
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
