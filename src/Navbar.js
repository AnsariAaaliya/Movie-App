import React from 'react';
import { Link } from 'react-router-dom';
export function Navbar(){
    return(
        <>
       
        <nav className="navbar navbar-expand-lg bg-body-tertiary border bg-dark ">
  <div className="container-fluid bg-dark">
    <div className="navbar-brand wh" to="/">Movie-App</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link wh" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link wh" to="/movies">Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link wh" to="/films">Films</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link wh" to="/addmovies">AddMovie</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link wh" to="/tictactoe">TicTacToe</Link>
        </li>
        <li className="nav-item">
          <button className="nav-link wh" to="/tictactoe">Dark-them</button>
        </li>
    
        
      </ul>
     
    </div>
   
  </div>
</nav>


        </>
    )
}