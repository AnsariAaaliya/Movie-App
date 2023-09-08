import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export function MovieDetails()
{
const {id} =useParams();
const [movie, setMovie] = useState([]);

const getMovie = ()=>{
  fetch(`https://64f1c1040e1e60602d243b0e.mockapi.io/movies/${id}`)
  .then((data)=>data.json())
  .then((mvs)=>setMovie(mvs));

}
useEffect(getMovie,[]);
 
   const navigate = useNavigate();

  
  return(

  <div>
  <iframe width="100%" height="526" 
  src={movie.trailer} 
  title="KGF 3 | Official Concept Trailer | Yash | Srinidhi Shetty | Raveena Tandon | Prashanth Neel |Prakash" 
  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
   allowfullscreen
  ></iframe>
    <div className='movie-detail-container'>
      <h3>{movie.name}</h3>
      <p>{movie.summary}</p>
      <Button variant="outlined"
      onClick={()=>navigate(-1)
    } 
      startIcon={<ArrowBackIosIcon />}>
        Back
      </Button>
     
    </div>
  </div>
  );
  

}