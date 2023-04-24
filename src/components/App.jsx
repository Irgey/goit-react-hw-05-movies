import { Route, Routes, NavLink } from 'react-router-dom';
import styled from 'styled-components';
/**
 * Components
 */
import { CastPage } from 'pages/CastPage/CastPage';
import { HomePage } from 'pages/HomePage/HomePage';
import { MoviesPage } from 'pages/MoviesPage/MoviesPage';
import { MovieDetails } from 'pages/MovieDetailsPage/MovieDetailsPage';
import { ReviewsPage } from 'pages/ReviewsPage/ReviewsPage';

export const App = () => {
  return (
    <>
      <StyledNav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </StyledNav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
        <Route
          path="*"
          element={
            <>
              {' '}
              <h2>
                Whoops! 404.The requested URL/error was not found on this server
              </h2>{' '}
              <StyledNavLink to="/">Go Home</StyledNavLink>
            </>
          }
        />
      </Routes>
    </>
  );
};

const StyledNavLink = styled(NavLink)`
  color: black;
  &:hover {
    background-color: #a6959586;
  }
  &.active {
    color: #3333c2;
    background-color: #a6959586;
  }
`;
const StyledNav = styled.nav`
  height: 40px;
  border: 2px black;
  background-color: aliceblue;
`;
