import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Heading from './assets/Components/Heading'
import Promo from './assets/Components/Promo'
import Card from './assets/Components/Card'
import './App.css'
import GuessNumber from './assets/Components/GuessNumber'


function App() {
  const fourthExample = () => console.log('fourth example');

  return (
    <div className="App">
      {/* <Heading firstName="Any name other than Bob" />
      <Heading firstName="Jack" />
      <Promo heading="Welcome to our store" promoSubHeading="Buy 1 get 1 free" />
      <Card h2="Card 1" h3="This is the first card" />
      <Card h2="Card 3" h3="This is the third card" /> */}

      {/* <div className="fourthExample">
        <button onClick={fourthExample}>
          using a separate function expression
        </button>
      </div> */}

      <GuessNumber />
    </div>
  );
}

export default App
