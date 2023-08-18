
import './App.css';

function App() {
  const movies=[
    {
    name: "Gadar-2",
    poster: "https://th.bing.com/th/id/OIP.fwPVyTcqo8rJQ7h7td1u2gHaJM?w=145&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    summary: "Gadar 2 is the official remake of Gadar: Ek Prem Katha, a historical drama film released in 2001",
    },

    {
      name: "Jawan",
      poster: "https://assets.gadgets360cdn.com/pricee/assets/product/202206/Jawan-poster_1655912386.jpg",
      summary: "In late 2019, it was rumoured that Shah Rukh Khan would team up with Tamil film director Atlee.[17][18] Atlee confirmed the project while promoting Bigil.",
      },

      {
        name: "Bhul bhulaiyya 3",
        poster: "https://www.filmibeat.com/img/popcorn/movie_posters/bhoolbhulaiyaa3-20230302112752-21624.jpg",
        summary: "Bhool Bhulaiyaa 3 is an upcoming Hindi movie. The movie is directed by Anees Bazmee and will feature Kartik Aaryan as lead character."
      },

        {
          name: "Brahmastra 2",
          poster: "https://i.ytimg.com/vi/To5ODcfm1Yc/maxresdefault.jpg",
          summary: "The film's first part leads Ranbir Kapoor's Shiva to Amitabh Bacchan's Guru's sanctuary and introduces the secret society of Sages who have been protecting the Astras for centuries.",
        },

          {
            name: "OMG-2",
            poster: "https://indtoday.com/wp-content/uploads/2021/10/omg-2.jpg",
              summary: "OMG 2 is the story of Kanti Sharan Mudgal, a staunch devotee of Lord Shiva; a simple man, a loving father and a caring husband",
          },
          {
            name: "K.F.G-3",
            poster: "https://th.bing.com/th/id/OIP.DBAPBosQlB2pKZekLHZOiAHaEK?w=328&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            summary: "A few days earlier, reports surfaced that KGF may have five sequels. Hombale Films reportedly wants to develop KGF into a Bond-style series.",
            },
            {
              name: "Dream girl 2",
              poster: "https://resize.indiatvnews.com/en/resize/newbucket/730_-/2023/02/sadsssssssaxszass-1676309040.jpg",
              summary: "Ayushmann Khurrana unveiled the very first poster of his upcoming film Dream Girl 2, a perpetual sequel to Raaj Shaandilyaa's 2019 directorial Dream Girl."
            },
              {
                name: "Tiger-3",
                poster: "https://i.ytimg.com/vi/ftwe3dSiK94/maxresdefault.jpg",
                summary: "Tiger 3 is an upcoming Indian Hindi-language action thriller film directed by Maneesh Sharma and produced by Aditya Chopra. The film stars Salman Khan, Katrina Kai",
              },
                {
                  name: "Fukrey-3",
                  poster: "https://th.bing.com/th/id/OIP.QkQ-5LleCql-n9yA0H-IHgAAAA?pid=ImgDet&rs=1",
                  summary: "The new posters of Fukrey 3 are out and confirm the return of the original cast of Richa Chadha, Pulkit Samrat, Varun Sharma, Manjot Singh and Pankaj Tripathi",
                },
  ];
  return (
  <>
   
    <div className="movie-list">
    {movies.map(({name , poster, summary})=>(
      <Movie name={name} poster={poster} summary={summary}/>
    ))}
   
    </div>
    </>
    );
  }

function Movie({name , poster, summary}){
  return(
    <>
    <div className="movie-container">
  <img src={poster} className="movie-poster" alt="" />
  <div className='mx-2 my-3'>
  <h3 className='movie-name'><i><u>{name}</u></i></h3>
  <p className='movie-summery my-1'>{summary}</p>
  </div>
</div>
  </>
 );
}
export default App;