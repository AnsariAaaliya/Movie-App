import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";

export function EditMovie(){
    const {id} =useParams();
    const [movie, setMovie] = useState(null);

  const getMovie = ()=>{
  fetch(`https://64f1c1040e1e60602d243b0e.mockapi.io/movies/${id}`)
  .then((data)=>data.json())
  .then((mv)=>setMovie(mv));

}
useEffect(getMovie,[]);

    return movie ? < UpdateMovie movie={movie}/> : "" ;
  }
  function UpdateMovie({movie}){
    console.log("UpdateMovie", movie);
    const [name, setName] = useState(movie.name);
    const [poster, setPoster] = useState(movie.poster);
    const [summary, setSummary] = useState(movie.summary);
    const [trailer, setTrailer] = useState(movie.trailer);

    const navigate = useNavigate();
    const editmovie =()=>{
     const updatedMovie={
      name,
      poster,
      summary,
      trailer,
    };
    
      fetch(`https://64f1c1040e1e60602d243b0e.mockapi.io/movies/${movie.id}`,
      {
        method:"PUT",
        body: JSON.stringify(updatedMovie),
        headers :{"Content-Type": "application/json"},
  
      })
      .then((data)=>data.json())
      .then(()=>navigate("/movies"));
    
   
    
    //1.post method
    //2.body data & data in JSON format
    //3. header JSON data
    };

    return   <div className='add-movie-form container mx-5 my-5'>
    <TextField 
     value={name}
     onChange={(event)=>setName(event.target.value)}
     label='Enter name'
     variant='standard'
    
    />
 
 <TextField 
     value={poster}
     onChange={(event)=>setPoster(event.target.value)}
     label='Enter poster link'
     variant='standard'
    />
 
 <TextField 
     value={summary}
     onChange={(event)=>setSummary(event.target.value)}
     label='Enter summary'
     variant='standard'
    />
     <TextField 
     value={trailer}
     onChange={(event)=>setTrailer(event.target.value)}
     label='Enter trailer'
     variant='standard'
    />
   
    <Button onClick={editmovie} variant="outlined" color='success'> Save</Button>
 
    
        
    </div>
  }
