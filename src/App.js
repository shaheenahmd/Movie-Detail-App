import "./App.css";
import Home from "./components/Home/Home";
import MovieList from "./components/MovieList/MovieList";
import Navbar from "./components/Navbar/Header";
import { Routes,Route} from "react-router-dom";
import Movie from "./components/movieDetail/Movie";




function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="movie/:id" element={<Movie/>}/>
        <Route path="movies/:type" element={<MovieList/>}/>
        <Route path="*" element={<h1 className="d-flex justify-content-center pt-5 text-center">404 Error</h1>}/>
      </Routes>

       
    </div>
  );
}

export default App;
