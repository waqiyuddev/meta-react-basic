import './App.css'
import { Routes, Route } from "react-router-dom";
// import Main from './assets/Components/PropHandling/Main';
import Heading from './assets/Components/Heading'
import Promo from './assets/Components/Promo'
import Card from './assets/Components/Card'
// import GuessNumber from './assets/Components/GuessNumber'
import Cat from './assets/Components/ParChiGra/Cat'
// import SimpleForm from './assets/Components/SimpleForm'
// import FruitsContainer from './assets/Components/ManagingState/FruitsContainer';
import AppBar from './assets/Components/AppBar/AppBar';
import Homepage from './assets/Pages/Homepage';
import AboutLittleLemon from './assets/Pages/AboutLittleLemon';
import Contact from './assets/Pages/Contac';
import Message from './assets/ConditionalRender/Message';



function App() {
  return (
    <div className="App">
      <h1>App is working!</h1>

      <Heading firstName="Any name other than Bob" />
      <Heading firstName="Jack" />
      <Promo heading="Welcome to our store" promoSubHeading="Buy 1 get 1 free" />
      <Card h2="Card 1" h3="This is the first card" />
      <Card h2="Card 3" h3="This is the third card" />
      <Cat />

      {/* <Message isLoggedIn={true} /> */}
      <Message isLoggedIn={false} />

    </div>


  );
}

export default App
