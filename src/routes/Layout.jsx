import React from 'react';
import Header from '../components/shared/Header';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../components/shared/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;