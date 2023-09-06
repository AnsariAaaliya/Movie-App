import { MovieList } from './MovieList';
import './App.css';
import { useState } from 'react';
import Button from '@mui/material/Button';
import {AppBar, TextField, Toolbar } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { TicTacToe } from './TicTacToe';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useEffect } from 'react';

import{
  
  Routes,
  Route,
  
  Navigate,
  useNavigate,
  useParams,
}from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState("light");
const darkTheme = createTheme({
  palette: {
    mode: mode,
  },
});

  
  
  const navigate = useNavigate();
  //the all movies data come frome mock api it is calles CRUD method
//C- Create -POST
//R-Read-GET
//U-Update-PUT
//D-Delete-DELETE
  return (
  <>
   
 


   <ThemeProvider theme={darkTheme}>
   <CssBaseline />

  <AppBar position='static'>
    <Toolbar>
      <Button color='inherit' onClick={()=>navigate("/")}>
Home
      </Button>
      <Button color='inherit' onClick={()=>navigate("/movies")}>
Movies
      </Button>
      <Button color='inherit' onClick={()=>navigate("/films")}>
Films
      </Button>
      <Button color='inherit' onClick={()=>navigate("/addmovies")}>
AddMovie
      </Button>
      <Button color='inherit' onClick={()=>navigate("/tictactoe")}>
Tic-Tac-Toe
      </Button>
      <Button 
      style={{marginLeft:"auto"}}
      startIcon={mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      color='inherit' 
      onClick={()=> setMode(mode === "light" ? "dark" : "light")}>
{mode === "light" ? "dark" : "light"} mode      </Button>
      
    </Toolbar>
  </AppBar>

   <Routes>

    <Route exact path="/" element={<Home />}>
    </Route>
    <Route  path="/movies" element={<MovieList />
}>
    </Route>
    <Route  path="/films" element={<Navigate to="/movies" />
}>
    </Route>
    <Route path="/movies/:id" element={< MovieDetails />}></Route>
    <Route path="/movie/edit/:id" element={< EditMovie />}></Route>

    <Route path="/addmovies" element={<AddMovie />}>
   </Route>
   <Route path="/tictactoe" element={<TicTacToe />} />
  
   <Route  path="*" element={<NotFound />} />
   </Routes>
   </ThemeProvider>

  
    </>
    );
  }
  

   
  
function MovieDetails()
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
  function NotFound(){
    return <img src="https://www.smokeylemon.com/assets/blog-images/404-error__ResizedImageWzY0MCw0ODBd.gif" className='image' alt=""/>
  }
  function AddMovie(){
    
    const [name, setName] = useState("");
    const [poster, setPoster] = useState("");
    const [summary, setSummary] = useState("");
    const [trailer, setTrailer] = useState("");

    const navigate = useNavigate();
    const addmovie =()=>{
      
     const newMovie={
      name,
      poster,
      summary,
      trailer,
    };
    
      fetch("https://64f1c1040e1e60602d243b0e.mockapi.io/movies",{
        method:"POST",
        body: JSON.stringify(newMovie),
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
   
    <Button onClick={addmovie} variant="outlined">Add Movie</Button>
 
    
        
    </div>
  }

   function Home(){
    
      return <div className='home'>
        <h1>Hello,<br/>Welcome to <br />my Movie App</h1>
      </div>
      
    

  }

function EditMovie(){
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

  
  



