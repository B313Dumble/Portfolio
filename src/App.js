import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Middle from './components/Middle/Middle'

export default function App(){
    return(
        <div className='App'>
         <Header />    
         <About />
         <Middle />
        </div>
    )
}