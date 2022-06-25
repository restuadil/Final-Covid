import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/Covid/About";
import Indonesia from "./pages/Covid/Indonesia";
import Provinci from "./pages/Covid/Provinci";
import Home from "./pages/Home";

function App() {

  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/Covid/Indonesia" element={<Indonesia></Indonesia>}/>
        <Route path="/Covid/Provinsi" element={<Provinci></Provinci>}/>
        <Route path="/Covid/About" element={<About></About>}/>
      </Routes>
    </Layout>
    </>
  );
}

export default App;
