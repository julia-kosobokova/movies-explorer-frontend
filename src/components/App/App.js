// import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
// import Main from "../Main/Main";
import Movies from "../Movies/Movies";
// import MoviesCard from "../MoviesCard/MoviesCard";
// import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
// import Movies from "../Movies/Movies";

function App() {
  return (
    <div className="background">
      <div className="page">
          
        <Header>

        </Header>

        {/* <MoviesCardList /> */}
        <Movies />
          
        <Footer />

      </div>
    </div>
  );
}

export default App;
