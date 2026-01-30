import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Heading from './assets/Components/Heading'
import './App.css'


function App() {
  return (
    <div className="App">
      <Heading firstName="Any name other than Bob" />
      <Heading firstName="Jack" />
    </div>
  );
}

export default App
