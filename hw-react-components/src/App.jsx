import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ImgCard from '../components/imgcard/imgcard.jsx';
import Footer from '../components/footer/footer.jsx';

const App = () => {
  return (
    <div className="app">
      <ImgCard />
      <Footer />
    </div>
  );
};

export default App;
