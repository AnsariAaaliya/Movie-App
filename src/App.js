import { MovieList } from './MovieList';
import './App.css';
import { useState } from 'react';
import Button from '@mui/material/Button';
import {TextField } from '@mui/material';
import { Navbar } from './Navbar';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import ReplayIcon from '@mui/icons-material/Replay';

import{
  
  Routes,
  Route,
  
  Navigate,
  useNavigate,
  useParams,
}from "react-router-dom"
export default function App() {
  const movies=[
    {
    name: <a className="co" href="https://www.bing.com/ck/a?!&&p=c93094c9dde75799JmltdHM9MTY5MjMxNjgwMCZpZ3VpZD0zOWU5ZDU3NC1lOWZlLTYzYmYtMjk5NS1jNzVhZTg2NTYyNjImaW5zaWQ9NTIzNg&ptn=3&hsh=3&fclid=39e9d574-e9fe-63bf-2995-c75ae8656262&psq=gadar+2&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvR2FkYXJfMg&ntb=1">Gadar-2</a>,
    poster: "https://th.bing.com/th/id/OIP.fwPVyTcqo8rJQ7h7td1u2gHaJM?w=145&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    summary: "Gadar 2 is the official remake of Gadar: Ek Prem Katha, a historical drama film released in 2001",
    trailer: "https://www.youtube.com/embed/vhwr4vc_GY0"
  },

    {
      name: <a className="co" href="https://www.bing.com/ck/a?!&&p=0a67b4f7c8717100JmltdHM9MTY5MjMxNjgwMCZpZ3VpZD0zOWU5ZDU3NC1lOWZlLTYzYmYtMjk5NS1jNzVhZTg2NTYyNjImaW5zaWQ9NTIzOA&ptn=3&hsh=3&fclid=39e9d574-e9fe-63bf-2995-c75ae8656262&psq=jawan&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSmF3YW5fKGZpbG0p&ntb=1">Jawan</a>,
      poster: "https://assets.gadgets360cdn.com/pricee/assets/product/202206/Jawan-poster_1655912386.jpg",
      summary: "In late 2019, it was rumoured that Shah Rukh Khan would team up with Tamil film director Atlee.[17][18] Atlee confirmed the project while promoting Bigil.",
      trailer: "https://www.youtube.com/embed/k8YiqM0Y-78"
    },

      {
        name: <a className="co" href="https://www.bing.com/ck/a?!&&p=cd01d47fa79136a8JmltdHM9MTY5MjMxNjgwMCZpZ3VpZD0zOWU5ZDU3NC1lOWZlLTYzYmYtMjk5NS1jNzVhZTg2NTYyNjImaW5zaWQ9NTIxMQ&ptn=3&hsh=3&fclid=39e9d574-e9fe-63bf-2995-c75ae8656262&psq=bhul+bhulaiyya+3&u=a1aHR0cHM6Ly93d3cuZmlyc3Rwb3N0LmNvbS9lbnRlcnRhaW5tZW50L2FsbC1zZXQtZm9yLWJob29sLWJodWxhaXlhYS0zLWhlcmVzLXdoYXQtd2Uta25vdy1zby1mYXItMTA3OTEyODEuaHRtbA&ntb=1">Bhul bhulaiyya 3</a>,
        poster: "https://www.filmibeat.com/img/popcorn/movie_posters/bhoolbhulaiyaa3-20230302112752-21624.jpg",
        summary: "Bhool Bhulaiyaa 3 is an upcoming Hindi movie. The movie is directed by Anees Bazmee and will feature Kartik Aaryan as lead character.",
        trailer: "https://www.youtube.com/embed/LWevIKJVDDk"
      
      },

        {
          name: <a className="co" href="https://www.bing.com/ck/a?!&&p=21b1d956152079f7JmltdHM9MTY5MjMxNjgwMCZpZ3VpZD0zOWU5ZDU3NC1lOWZlLTYzYmYtMjk5NS1jNzVhZTg2NTYyNjImaW5zaWQ9NTIyMQ&ptn=3&hsh=3&fclid=39e9d574-e9fe-63bf-2995-c75ae8656262&psq=bramhastra+2&u=a1aHR0cHM6Ly9tb3ZpZXdlYi5jb20vYnJhaG1hc3RyYS1wYXJ0LXR3by1kZXYtZXZlcnl0aGluZy13ZS1rbm93Lw&ntb=1">Brahmastra 2</a>,
          poster: "https://i.ytimg.com/vi/To5ODcfm1Yc/maxresdefault.jpg",
          summary: "The film's first part leads Ranbir Kapoor's Shiva to Amitabh Bacchan's Guru's sanctuary and introduces the secret society of Sages who have been protecting the Astras for centuries.",
          trailer: "https://www.youtube.com/embed/JkEjEqoQWYw"
        },

          {
            name: <a className="co" href="https://www.bing.com/ck/a?!&&p=f7322c0145ac55b7JmltdHM9MTY5MjMxNjgwMCZpZ3VpZD0zOWU5ZDU3NC1lOWZlLTYzYmYtMjk5NS1jNzVhZTg2NTYyNjImaW5zaWQ9NTIzMg&ptn=3&hsh=3&fclid=39e9d574-e9fe-63bf-2995-c75ae8656262&psq=omg+2&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvT01HXzI&ntb=1">OMG-2</a>,
            poster: "https://indtoday.com/wp-content/uploads/2021/10/omg-2.jpg",
              summary: "OMG 2 is the story of Kanti Sharan Mudgal, a staunch devotee of Lord Shiva; a simple man, a loving father and a caring husband",
              trailer: "https://www.youtube.com/embed/Y6ZKXqM7HNQ"
            },
          {
            name: <a className="co"  href="https://www.bing.com/ck/a?!&&p=97e2165b2c6aa410JmltdHM9MTY5MjMxNjgwMCZpZ3VpZD0zOWU5ZDU3NC1lOWZlLTYzYmYtMjk5NS1jNzVhZTg2NTYyNjImaW5zaWQ9NTIxMQ&ptn=3&hsh=3&fclid=39e9d574-e9fe-63bf-2995-c75ae8656262&psq=kgf+3&u=a1aHR0cHM6Ly93d3cubmV3czE4LmNvbS9tb3ZpZXMvcHJhc2hhbnRoLW5lZWwtdG8tc3RhcnQtc2hvb3RpbmctZm9yLWtnZi1jaGFwdGVyLTMtZmlyc3QtYW5kLXRoZW4tc2FsYWFyLTItODUzNjA1Mi5odG1s&ntb=1">K.F.G-3</a>,
            poster: "https://th.bing.com/th/id/OIP.DBAPBosQlB2pKZekLHZOiAHaEK?w=328&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            summary: "A few days earlier, reports surfaced that KGF may have five sequels. Hombale Films reportedly wants to develop KGF into a Bond-style series.",
            trailer: "https://www.youtube.com/embed/9yXzwTUWilE"
          },
            {
              name: <a className="co" href="https://www.bing.com/ck/a?!&&p=a49555c322dc837bJmltdHM9MTY5MjMxNjgwMCZpZ3VpZD0zOWU5ZDU3NC1lOWZlLTYzYmYtMjk5NS1jNzVhZTg2NTYyNjImaW5zaWQ9NTIyMQ&ptn=3&hsh=3&fclid=39e9d574-e9fe-63bf-2995-c75ae8656262&psq=dram+girl+2&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRHJlYW1fR2lybF8y&ntb=1">Dream girl 2</a>,
              poster: "https://resize.indiatvnews.com/en/resize/newbucket/730_-/2023/02/sadsssssssaxszass-1676309040.jpg",
              summary: "Ayushmann Khurrana unveiled the very first poster of his upcoming film Dream Girl 2, a perpetual sequel to Raaj Shaandilyaa's 2019 directorial Dream Girl.",
              trailer: "https://www.youtube.com/embed/dlC1tNsr-n8"
            },
              {
                name: <a className="co" href="https://www.bing.com/ck/a?!&&p=7630906f15234dfbJmltdHM9MTY5MjMxNjgwMCZpZ3VpZD0zOWU5ZDU3NC1lOWZlLTYzYmYtMjk5NS1jNzVhZTg2NTYyNjImaW5zaWQ9NTIyNg&ptn=3&hsh=3&fclid=39e9d574-e9fe-63bf-2995-c75ae8656262&psq=tiger+3&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVGlnZXJfMw&ntb=1">Tiger-3</a>,
                poster: "https://i.ytimg.com/vi/ftwe3dSiK94/maxresdefault.jpg",
                summary: "Tiger 3 is an upcoming Indian Hindi-language action thriller film directed by Maneesh Sharma and produced by Aditya Chopra. The film stars Salman Khan, Katrina Kai",
                trailer: "https://www.youtube.com/embed/a-ScM-hDnHk"
              },
                {
                  name: <a className="co" href="https://www.bing.com/ck/a?!&&p=40e3e0939f6d7777JmltdHM9MTY5MjMxNjgwMCZpZ3VpZD0zOWU5ZDU3NC1lOWZlLTYzYmYtMjk5NS1jNzVhZTg2NTYyNjImaW5zaWQ9NTIxNg&ptn=3&hsh=3&fclid=39e9d574-e9fe-63bf-2995-c75ae8656262&psq=fukrey+3&u=a1aHR0cHM6Ly9pbmRpYW5leHByZXNzLmNvbS9hcnRpY2xlL2VudGVydGFpbm1lbnQvYm9sbHl3b29kL2Z1a3JleS0zLWdldHMtcmVsZWFzZS1kYXRlLTg0MDE5ODQv&ntb=1">Fukrey-3</a>,
                  poster: "https://th.bing.com/th/id/OIP.QkQ-5LleCql-n9yA0H-IHgAAAA?pid=ImgDet&rs=1",
                  summary: "The new posters of Fukrey 3 are out and confirm the return of the original cast of Richa Chadha, Pulkit Samrat, Varun Sharma, Manjot Singh and Pankaj Tripathi",
                  trailer: "https://www.youtube.com/embed/HLrq2H05hbE"
                },
  ];
  const [movieList, setMovieList] = useState(movies);
  

  return (
  <>
   
 


  
  
<Navbar />
   <Routes>

    <Route exact path="/" element={<Home />}>
    </Route>
    <Route  path="/movies" element={<MovieList movies={movieList} setMovieList={setMovieList}/>
}>
    </Route>
    <Route  path="/films" element={<Navigate to="/movies" />
}>
    </Route>
    <Route path="/movies/:id" element={< MovieDetails movies={movieList} />}></Route>
    
    <Route path="/addmovies" element={<AddMovie movieList={movieList} setMovieList={setMovieList} />}>
   </Route>
   <Route path="/tictactoe" element={<TicTacToe />} />
  
   <Route  path="*" element={<NotFound />} />
   </Routes>
  
    </>
    );
  }
  function TicTacToe(){
      const { width, height } = useWindowSize()

    const [board, setBoard]= useState([null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [isXTurn, setIsXTurn]= useState(true);
  const handleClick = (index)=>{
    console.log("clicked",index);
    //if x's turn then display x or else o
    //update only untouched boxes.
    //continue until no winner
    if(!winner && !board[index]){
    const boardCopy = [...board];
    boardCopy [index]= isXTurn ? "X" : "O";
    setBoard(boardCopy)
    setIsXTurn(!isXTurn);
    }

  };
  
  const decideWinner=(board)=>{
      const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],

      ];
      for (let i=0; i<lines.length; i++){
        const [a,b,c] = lines[i];
        //if all three are equal  and not null
        if(board[a] !== null && board[a] === board[b] && board[a]=== board[c]){
          console.log("winner is ", board[a]);
          return board[a];
        }


      }
      //when no winner is returnd
      return null;
  };
 const winner =  decideWinner(board);
    return(
      <div className='tic-tac-toe'>
        { winner ? <Confetti
       width={width}
      height={height}
    /> : ""}
      <div className='board'>
{/* 1. <GameBox val="X"/>
     <GameBox val="O"/>
     <GameBox val="X"/>
     
      <GameBox val="X"/>
      <GameBox val="O"/>
      <GameBox val="X"/>
    
       <GameBox val="X"/>
       <GameBox val="O"/>
    <GameBox val="X"/>* we remove it beacuse we using state in GameBox function
        {/* 2. <GameBox />
        <GameBox />
        <GameBox />
        <GameBox />
        <GameBox />
        <GameBox />
        <GameBox />
        <GameBox />
        <GameBox /> we cut it because we using map function beacuse it is repeating nine time
*/}
{board.map((val,index)=>(
  <GameBox val={val} onPlayerClick={()=>handleClick(index)} />
))}
     
       </div>
      { winner ? <h2>The winner is {winner}</h2> : ""}
      { winner ? <Button
       variant='outlined'
       onClick={()=>setBoard([   null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      null,])
      
    }
    startIcon={<ReplayIcon />}
      >
Re-start
      </Button> : ""}
       <Button
      variant='outlined'
      onClick={()=>setIsXTurn(true)}>
        Choose X
      </Button> 
      <Button
      variant='outlined'
      onClick={()=>setIsXTurn(false)}>
 Choose O
      </Button>
     
       </div>

    );
    }
  function GameBox({val,onPlayerClick}){
    //let val = "X"; we cut it becaue we use value as porps in upper line
   //const [val, setVal]= useState(null)
    const styles = { color: val === "X" ? "green" : "red" };//conditional styling
    return( <div style={styles} onClick={()=>onPlayerClick()} className='game-box'>
      {val}
    </div>
    );
   
  }
function MovieDetails({movies})
{
  
  console.log("movies",movies);
   const {id} =useParams();
   const movie = movies[id];
   console.log(movie);
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
  function AddMovie({movieList , setMovieList}){
    
    const [name, setName] = useState("");
    const [poster, setPoster] = useState("");
    const [summary, setSummary] = useState("");
    const navigate = useNavigate();
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
   
    <Button onClick={()=>{
     const newMovie={
       name,
       poster,
       summary,
     };
     console.log(newMovie);
     setMovieList([...movieList, newMovie]);
    
     navigate("/movies")
     
    }} variant="outlined">Add Movie</Button>
 
    
        
    </div>
  }

   function Home(){
    
      return <div className='home'>
        <h1>Hello,<br></br> Welcome to my <br/>Movie App</h1>;
      </div>
      
    

  }

  



