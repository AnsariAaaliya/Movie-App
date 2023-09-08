import { MovieList } from './MovieList';
import './App.css';
import { useState } from 'react';
import Button from '@mui/material/Button';
import {AppBar, Toolbar } from '@mui/material';
import { TicTacToe } from './TicTacToe';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { BasicForm } from './BasicForm';
import { EditMovie } from './EditMovie';
import { Home } from './Home';
import { AddMovie } from './AddMovie'
import { NotFound } from './NotFound';
import { MovieDetails } from './MovieDetails';
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
   <Route path="/basic-form" element={<BasicForm />} />

   <Route  path="*" element={<NotFound />} />
   </Routes>
   </ThemeProvider>

  
    </>
    );
  }
  

   
  


 
 


  
  



