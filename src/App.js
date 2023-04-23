import React from 'react';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, SpecialMenu } from './container';
import { Navbar } from './components';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import './App.css';
import BookTableForm from './components/BookTableForm/BookTableForm';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<div>
        <Navbar />
        <Header />
        <AboutUs />
        <SpecialMenu />
        <Chef />
        <Intro />
        <Gallery />
        <FindUs />
        <Footer />
      </div>} />
      <Route path='/book_table' element={<BookTableForm />} />
      <Route path='*' element={<><h1>404 Page Not Found</h1></>} />
    </Routes>
  </BrowserRouter>
);

export default App;
