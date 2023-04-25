import { Route, Routes, NavLink, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { lazy, Suspense } from 'react';
/**
 * Components
 */
const CastPage = lazy(() => import('pages/CastPage/CastPage'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetails = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage')
);
const ReviewsPage = lazy(()=> import('pages/ReviewsPage/ReviewsPage'))
export const App = () => {
  return (
    <>
      <StyledNav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </StyledNav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="goit-react-hw-05-movies" element={<Navigate to="/" />} />
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
                  Whoops! 404.The requested URL/error was not found on this
                  server
                </h2>{' '}
                <StyledNavLink to="/">Go Home</StyledNavLink>
              </>
            }
          />
        </Routes>
      </Suspense>
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
