import React from 'react';
import Scheduler from './pages/Calendar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <div className="fixed w-full md:static bg-main-bg dark:bg-main-dark-bg navbar ">
        <Navbar />
      </div>
      <div className="fixed w-full md:static bg-main-bg dark:bg-main-dark-bg navbar ">
        <Scheduler />
      </div>
      <Footer />
    </>
  );
}

export default App;
