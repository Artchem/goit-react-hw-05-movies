import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Footer,
  Main,
  StyledHeader,
  StyledNav,
  StyledNavLink,
} from './Layout.styled';

function Layout() {
  return (
    <>
      <StyledHeader>
        <StyledNav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </StyledNav>
      </StyledHeader>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer></Footer>
      <ToastContainer autoClose={3000} position="top-right" />
    </>
  );
}

export default Layout;
