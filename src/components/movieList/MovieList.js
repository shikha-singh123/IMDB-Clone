import React,{useEffect,useState} from 'react';


import {useParams} from "react-router-dom";
import Card from '../cards/Card';
import MovieDetail from './pages/movieDetail';
const MovieList=()=>{
    const [movieList,setMovieList]=useState([])
    const {type}=useParams()
    useEffect(()=>{
        getData()
    },[])
    useEffect(()=>{
        getData()
    },[type])
    const getData=()=>{
        fetch(`https://api.themoviedb.org/3/movie/${type?type:"popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res=>res.json())
        .then(data=>console.log(data.results))
    }
    return (
        <div className="movie_List">
        <h2 className="list_title">{(type? type:"POPULAR").toUpperCase()}</h2>
        <div className="list_card">
        {
            movieList.map(movie=>(
                <Card movie={movie}/>

            ))
        }
            </div>
            </div>
    )
}
export default MovieList