// import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
// import Main from "../Main/Main";
// import Movies from "../Movies/Movies";
import MoviesCard from "../MoviesCard/MoviesCard";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="background">
      <div className="page">
          
        <Header>

        </Header>

        <MoviesCard />
          
        <Footer />

      </div>
    </div>
  );
}

export default App;
