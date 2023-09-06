import { IconButton } from "@mui/material";
import { Movie } from "./Movie";
import  DeleteIcon  from "@mui/icons-material/Delete";
import { useEffect } from "react";
import { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";

export function MovieList(){
  const [movies, setMovieList] = useState([]);
  const navigate = useNavigate();

  const deleteMovie =(id) => {
   // console.log("deletethe movie");
      //      const deleteIndex =index;
        //    const remainingMovies =movies.filter((mv, idx)=> deleteIndex !== idx);
          //  console.log(movies,remainingMovies)
            //setMovieList(remainingMovies);
            fetch(`https://64f1c1040e1e60602d243b0e.mockapi.io/movies/${id}`,{
              method : "DELETE",
            })
            .then((data)=>data.json())
            //.then((mvs)=>setMovieList(mvs));
           .then(()=>getMovies()); 
  };
  const getMovies = ()=>{
    fetch("https://64f1c1040e1e60602d243b0e.mockapi.io/movies",{
      method:"GET",

    })
    .then((data)=>data.json())
    .then((mvs)=>setMovieList(mvs));

  }
  useEffect(()=>getMovies,[]);
    return(
        <>
        
       <div className="movie-list">
    {movies.map(({name , poster, summary,id},index)=>(
      <Movie 
      key={id}
      deleteButton={
        <IconButton aria-label="delete movie"
        color="error"  
        sx={{marginLeft: "auto"}}

        onClick={()=> deleteMovie(id)
        }><DeleteIcon  /> 
        </IconButton>
    }
    editButton={
      <IconButton aria-label="edit movie"
      color="secondary"  

      onClick={()=> {navigate(`/movie/edit/${id}`)}}>
        <EditIcon  /> 
      </IconButton>
  }
      id={id}
      name={name} 
      poster={poster} 
      summary={summary}
      
      />
      
    ))}

   
    </div>
        </>
    )
}