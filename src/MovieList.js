import { IconButton } from "@mui/material";
import { Movie } from "./Movie";
import  DeleteIcon  from "@mui/icons-material/Delete";


export function MovieList({movies ,setMovieList}){
  const deleteMovie =(index) => {
    console.log("deletethe movie");
            const deleteIndex =index;
            const remainingMovies =movies.filter((mv, idx)=> deleteIndex !== idx);
            console.log(movies,remainingMovies)
            setMovieList(remainingMovies);
  }
    return(
        <>
        
       <div className="movie-list">
    {movies.map(({name , poster, summary},index)=>(
      <Movie 
      key={index}
      deleteButton={
        <IconButton aria-label="delete movie"
        color="error"  
           
        onClick={()=> deleteMovie(index)
        }><DeleteIcon  /> 
        </IconButton>
    }
      id={index}
      name={name} 
      poster={poster} 
      summary={summary}
      
      />
      
    ))}

   
    </div>
        </>
    )
}