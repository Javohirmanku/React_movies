import Movie from "./Movie"

export default function Movies(props){
  const {movies=[]} = props;

  return(
    <div className="movies">
        {movies.length ? movies.map(movie =>(
          <Movie key={movies.imdbID}{...movie}/>
        )) : <h4>Nothing Found</h4>}
    </div>
  )
}