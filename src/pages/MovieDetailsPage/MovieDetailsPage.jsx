import { useEffect, useState } from 'react';
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import { getMovieDetailsById } from 'services/theMoviesDbAPI';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getMovieDetailsById(movieId).then(setMovie);
  }, [movieId]);
  return (
    movie && (
      <>
        <button
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          Go Back
        </button>
        <div>
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={`${movie.title} movie poster`}
            />
          ) : (
            <img
              src="https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
              alt="poster placeholder"
              width="200"
            />
          )}
          <div>
            <h1>
              {movie.title}({movie.release_date.slice(0, 4)})
            </h1>
            <p>User Score: {movie.vote_average}</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
          </div>
        </div>
        <div>
          <p>Additional information</p>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </>
    )
  );
};
export default MovieDetails;
