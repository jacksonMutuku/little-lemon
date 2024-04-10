import  './../App.css'
import React from 'react';
import Header from './Header';
import Footer from './Footer';


const Layout = ({ children }) => {
  return (
    <div className="container">
      <div className="logo-nav">
          <Header/>
      </div>
        <main>
          <div className="main-section">{children}</div>
        </main>
      <Footer />
    </div>
  );
};

export default Layout;
