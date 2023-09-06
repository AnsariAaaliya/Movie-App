
import { useNavigate } from "react-router-dom";
import { Counter } from "./Counter";
import { Card, IconButton,} from "@mui/material";
import { Info } from "@mui/icons-material";

export function Movie({name, poster, summary,deleteButton,editButton,id}){
   const navigate = useNavigate();
    return(
        <>
        <Card className="movie-container">
  <img src={poster} className="movie-poster" alt="" />
  <div className='mx-2 my-3'>
  <h3 className='movie-name'><i>{name}</i>
  <IconButton
    onClick={()=>navigate(`/movies/${id}`)}
    color="primary"
    aria-label="movies-details"
    >
        <Info />
    </IconButton>
  </h3>
 <p className='movie-summery my-1 co'>{summary}</p>
 <div className="movie-actions"> 
  <Counter />
  
        {deleteButton}
        {editButton}
        </div>
  

   

  </div>
</Card>

        </>

    )
}