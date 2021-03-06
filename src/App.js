import React from 'react';
import './styles/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from './components/Header';
import {Slider} from './components/Slider';
import {Gallery} from './components/Gallery';
import {Heading} from './components/Heading';
import {Banner} from './components/Banner';
import {Footer} from './components/Footer';
import {NewsLetter} from './components/NewsLetter';
import {Counter} from './components/Counter';
import {HappyClient} from './components/HappyClient';

function App() {

  return (
    <>
    <Header/>
    <Slider/>
    <Gallery/>
    
    <HappyClient/>
    <Counter/>
    <NewsLetter/>
    <Footer/>
   </>
  );
}

export default App;



// https://technext.github.io/shop/