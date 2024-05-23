import React from 'react';
import Header from '../components/shared/Header';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

export default Layout;