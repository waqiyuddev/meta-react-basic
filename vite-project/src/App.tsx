import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Heading from './assets/Components/Heading'
import Promo from './assets/Components/Promo'
import './App.css'


function App() {
  return (
    <div className="App">
      <Heading firstName="Any name other than Bob" />
      <Heading firstName="Jack" />
      <Promo heading="Welcome to our store" promoSubHeading="Buy 1 get 1 free" />
    </div>
  );
}

export default App
