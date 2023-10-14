import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledNavLink } from './Layout.styled';

function Layout() {
  return (
    <div>
      <header>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading....</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}

export default Layout;
