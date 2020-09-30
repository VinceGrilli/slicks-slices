import React from 'react';
import Footer from './Footer';
import Nav from './Nav';

export default function Layout({ childern }) {
  return (
    <div>
      <Nav />
      {childern}
      <Footer />
    </div>
  );
}
