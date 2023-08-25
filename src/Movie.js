
import { Counter } from "./Counter";
import { Card } from "@mui/material";

export function Movie({name, poster, summary,deleteButton}){
   
    return(
        <>
        <Card className="movie-container">
  <img src={poster} className="movie-poster" alt="" />
  <div className='mx-2 my-3'>
  <h3 className='movie-name co'><i>{name}</i></h3>
 <p className='movie-summery my-1 co'>{summary}</p>
 <div className="movie-actions"> 
  <Counter />
  
        {deleteButton}
        </div>
  

   

  </div>
</Card>

        </>

    )
}