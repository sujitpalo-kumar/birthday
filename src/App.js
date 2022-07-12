import React from 'react';
import './App.css';
import Cards from './component/cards/Cards';

import Footer from './component/fotter/fotter';


import Navbar from './component/navbar/navbar';


  function App(){
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary navbar-expand-sm text-white animated zoomIn delay-1s text-center justify-content-center  h-200">
                    <a href="/" className="text-white">HAPPY BIRTHDAY SANDHYA RANI MISHRA</a>
                </nav>
        <Navbar/>
          <Cards/>
          
        
        
         <Footer/>
        
         
     
        
          
      </div>
    );
  
  }

export default App;
