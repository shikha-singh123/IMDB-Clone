import './App.css';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/MovieList';
function App(){
 return(
     <div className="App">
     <Header/>
      <BrowserRouter>
        <Routes >
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<MovieDetail/>}></Route>
          <Route path="movie/:type" element={<MovieList/>}></Route>
          <Route path="/*" element={<h1>Error page </h1>}></Route>
        </Routes>
      </BrowserRouter>
           </div>
           );
}
export default App;