
import { Counter } from "./Counter";

export function Movie({name, poster, summary,deleteButton}){
   
    return(
        <>
        <div className="movie-container">
  <img src={poster} className="movie-poster" alt="" />
  <div className='mx-2 my-3'>
  <h3 className='movie-name'><i>{name}</i></h3>
 <p className='movie-summery my-1'>{summary}</p>
 <div className="movie-actions"> 
  <Counter />
 
        {deleteButton}

  

   
</div>
  </div>
</div>

        </>

    )
}