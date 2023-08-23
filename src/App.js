import { MovieList } from './MovieList';
import './App.css';
import { useState } from 'react';
import Button from '@mui/material/Button';

function App() {
  const movies=[
    {
    name: <a className="co" href="https://www.bing.com/ck/a?!&&p=c93094c9dde75799JmltdHM9MTY5MjMxNjgwMCZpZ3VpZD0zOWU5ZDU3NC1lOWZlLTYzYmYtMjk5NS1jNzVhZTg2NTYyNjImaW5zaWQ9NTIzNg&ptn=3&hsh=3&fclid=39e9d574-e9fe-63bf-2995-c75ae8656262&psq=gadar+2&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvR2FkYXJfMg&ntb=1">Gadar-2</a>,
    poster: "https://th.bing.com/th/id/OIP.fwPVyTcqo8rJQ7h7td1u2gHaJM?w=145&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    summary: "Gadar 2 is the official remake of Gadar: Ek Prem Katha, a historical drama film released in 2001",
    },

    {
      name: <a className="co" href="https://www.bing.com/ck/a?!&&p=0a67b4f7c8717100JmltdHM9MTY5MjMxNjgwMCZpZ3VpZD0zOWU5ZDU3NC1lOWZlLTYzYmYtMjk5NS1jNzVhZTg2NTYyNjImaW5zaWQ9NTIzOA&ptn=3&hsh=3&fclid=39e9d574-e9fe-63bf-2995-c75ae8656262&psq=jawan&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSmF3YW5fKGZpbG0p&ntb=1">Jawan</a>,
      poster: "https://assets.gadgets360cdn.com/pricee/assets/product/202206/Jawan-poster_1655912386.jpg",
      summary: "In late 2019, it was rumoured that Shah Rukh Khan would team up with Tamil film director Atlee.[17][18] Atlee confirmed the project while promoting Bigil.",
      },

      {
        name: <a className="co" href="https://www.bing.com/ck/a?!&&p=cd01d47fa79136a8JmltdHM9MTY5MjMxNjgwMCZpZ3VpZD0zOWU5ZDU3NC1lOWZlLTYzYmYtMjk5NS1jNzVhZTg2NTYyNjImaW5zaWQ9NTIxMQ&ptn=3&hsh=3&fclid=39e9d574-e9fe-63bf-2995-c75ae8656262&psq=bhul+bhulaiyya+3&u=a1aHR0cHM6Ly93d3cuZmlyc3Rwb3N0LmNvbS9lbnRlcnRhaW5tZW50L2FsbC1zZXQtZm9yLWJob29sLWJodWxhaXlhYS0zLWhlcmVzLXdoYXQtd2Uta25vdy1zby1mYXItMTA3OTEyODEuaHRtbA&ntb=1">Bhul bhulaiyya 3</a>,
        poster: "https://www.filmibeat.com/img/popcorn/movie_posters/bhoolbhulaiyaa3-20230302112752-21624.jpg",
        summary: "Bhool Bhulaiyaa 3 is an upcoming Hindi movie. The movie is directed by Anees Bazmee and will feature Kartik Aaryan as lead character."
      },

        {
          name: <a className="co" href="https://www.bing.com/ck/a?!&&p=21b1d956152079f7JmltdHM9MTY5MjMxNjgwMCZpZ3VpZD0zOWU5ZDU3NC1lOWZlLTYzYmYtMjk5NS1jNzVhZTg2NTYyNjImaW5zaWQ9NTIyMQ&ptn=3&hsh=3&fclid=39e9d574-e9fe-63bf-2995-c75ae8656262&psq=bramhastra+2&u=a1aHR0cHM6Ly9tb3ZpZXdlYi5jb20vYnJhaG1hc3RyYS1wYXJ0LXR3by1kZXYtZXZlcnl0aGluZy13ZS1rbm93Lw&ntb=1">Brahmastra 2</a>,
          poster: "https://i.ytimg.com/vi/To5ODcfm1Yc/maxresdefault.jpg",
          summary: "The film's first part leads Ranbir Kapoor's Shiva to Amitabh Bacchan's Guru's sanctuary and introduces the secret society of Sages who have been protecting the Astras for centuries.",
        },

          {
            name: <a className="co" href="https://www.bing.com/ck/a?!&&p=f7322c0145ac55b7JmltdHM9MTY5MjMxNjgwMCZpZ3VpZD0zOWU5ZDU3NC1lOWZlLTYzYmYtMjk5NS1jNzVhZTg2NTYyNjImaW5zaWQ9NTIzMg&ptn=3&hsh=3&fclid=39e9d574-e9fe-63bf-2995-c75ae8656262&psq=omg+2&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvT01HXzI&ntb=1">OMG-2</a>,
            poster: "https://indtoday.com/wp-content/uploads/2021/10/omg-2.jpg",
              summary: "OMG 2 is the story of Kanti Sharan Mudgal, a staunch devotee of Lord Shiva; a simple man, a loving father and a caring husband",
          },
          {
            name: <a className="co"  href="https://www.bing.com/ck/a?!&&p=97e2165b2c6aa410JmltdHM9MTY5MjMxNjgwMCZpZ3VpZD0zOWU5ZDU3NC1lOWZlLTYzYmYtMjk5NS1jNzVhZTg2NTYyNjImaW5zaWQ9NTIxMQ&ptn=3&hsh=3&fclid=39e9d574-e9fe-63bf-2995-c75ae8656262&psq=kgf+3&u=a1aHR0cHM6Ly93d3cubmV3czE4LmNvbS9tb3ZpZXMvcHJhc2hhbnRoLW5lZWwtdG8tc3RhcnQtc2hvb3RpbmctZm9yLWtnZi1jaGFwdGVyLTMtZmlyc3QtYW5kLXRoZW4tc2FsYWFyLTItODUzNjA1Mi5odG1s&ntb=1">K.F.G-3</a>,
            poster: "https://th.bing.com/th/id/OIP.DBAPBosQlB2pKZekLHZOiAHaEK?w=328&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            summary: "A few days earlier, reports surfaced that KGF may have five sequels. Hombale Films reportedly wants to develop KGF into a Bond-style series.",
            },
            {
              name: <a className="co" href="https://www.bing.com/ck/a?!&&p=a49555c322dc837bJmltdHM9MTY5MjMxNjgwMCZpZ3VpZD0zOWU5ZDU3NC1lOWZlLTYzYmYtMjk5NS1jNzVhZTg2NTYyNjImaW5zaWQ9NTIyMQ&ptn=3&hsh=3&fclid=39e9d574-e9fe-63bf-2995-c75ae8656262&psq=dram+girl+2&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRHJlYW1fR2lybF8y&ntb=1">Dream girl 2</a>,
              poster: "https://resize.indiatvnews.com/en/resize/newbucket/730_-/2023/02/sadsssssssaxszass-1676309040.jpg",
              summary: "Ayushmann Khurrana unveiled the very first poster of his upcoming film Dream Girl 2, a perpetual sequel to Raaj Shaandilyaa's 2019 directorial Dream Girl."
            },
              {
                name: <a className="co" href="https://www.bing.com/ck/a?!&&p=7630906f15234dfbJmltdHM9MTY5MjMxNjgwMCZpZ3VpZD0zOWU5ZDU3NC1lOWZlLTYzYmYtMjk5NS1jNzVhZTg2NTYyNjImaW5zaWQ9NTIyNg&ptn=3&hsh=3&fclid=39e9d574-e9fe-63bf-2995-c75ae8656262&psq=tiger+3&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVGlnZXJfMw&ntb=1">Tiger-3</a>,
                poster: "https://i.ytimg.com/vi/ftwe3dSiK94/maxresdefault.jpg",
                summary: "Tiger 3 is an upcoming Indian Hindi-language action thriller film directed by Maneesh Sharma and produced by Aditya Chopra. The film stars Salman Khan, Katrina Kai",
              },
                {
                  name: <a className="co" href="https://www.bing.com/ck/a?!&&p=40e3e0939f6d7777JmltdHM9MTY5MjMxNjgwMCZpZ3VpZD0zOWU5ZDU3NC1lOWZlLTYzYmYtMjk5NS1jNzVhZTg2NTYyNjImaW5zaWQ9NTIxNg&ptn=3&hsh=3&fclid=39e9d574-e9fe-63bf-2995-c75ae8656262&psq=fukrey+3&u=a1aHR0cHM6Ly9pbmRpYW5leHByZXNzLmNvbS9hcnRpY2xlL2VudGVydGFpbm1lbnQvYm9sbHl3b29kL2Z1a3JleS0zLWdldHMtcmVsZWFzZS1kYXRlLTg0MDE5ODQv&ntb=1">Fukrey-3</a>,
                  poster: "https://th.bing.com/th/id/OIP.QkQ-5LleCql-n9yA0H-IHgAAAA?pid=ImgDet&rs=1",
                  summary: "The new posters of Fukrey 3 are out and confirm the return of the original cast of Richa Chadha, Pulkit Samrat, Varun Sharma, Manjot Singh and Pankaj Tripathi",
                },
  ];
  const [movieList, setMovieList] = useState(movies);
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");

  return (
  <>
  <div className='add-movie-form'>
   <input 
    value={name}
    onChange={(event)=>setName(event.target.value)}
    placeholder='Enter name'
   />

<input 
    value={poster}
    onChange={(event)=>setPoster(event.target.value)}
    placeholder="Enter poster link"
   />

<input 
    value={summary}
    onChange={(event)=>setSummary(event.target.value)}
    placeholder='Enter summary'
   />
  
   <Button onClick={()=>{
    const newMovie={
      name,
      poster,
      summary,
    };
    console.log(newMovie);
    setMovieList([...movieList, newMovie]);
   

    
   }} variant="outlined">Add Movie</Button>

   
       
   </div>
   <MovieList movies={movieList} setMovieList={setMovieList}/>
    </>
    );
  }


export default App;
