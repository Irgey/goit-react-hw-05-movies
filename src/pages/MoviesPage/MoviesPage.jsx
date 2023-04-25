import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { searchMovieByKeyword } from 'services/theMoviesDbAPI';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    searchMovieByKeyword(query)
      .then(response => response.data.results)
      .then(setMovies);
    console.log(Boolean([]));
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setSearchParams({ query: form.elements.search.value });
    form.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="search" type="text" />
        <button type="submit">Search</button>
      </form>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`}>
                {movie.title ? movie.title : movie.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MoviesPage;
