import Movie from "./Movie";

export default function MoviesList({movies = []}) {

    return (
        <div className="container">
            <div className="row">
                {movies.length ? 
                    movies.map(movie => (
                     <div key={movie.imdbID} className="col d-flex mt-3">
                          <Movie key={movie.imdbID} {...movie} />
                   </div>
                ))
                 : <h4>'Not found'</h4>}
           </div>
        </div>
    )
}