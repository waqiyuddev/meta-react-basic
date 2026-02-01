import './App.css'
import { Routes, Route } from "react-router-dom";
// import Main from './assets/Components/PropHandling/Main';
// import Heading from './assets/Components/Heading'
// import Promo from './assets/Components/Promo'
// import Card from './assets/Components/Card'
// import GuessNumber from './assets/Components/GuessNumber'
import Cat from './assets/Components/ParChiGra/Cat'
// import SimpleForm from './assets/Components/SimpleForm'
// import FruitsContainer from './assets/Components/ManagingState/FruitsContainer';
import AppBar from './assets/Components/AppBar/AppBar';
import Homepage from './assets/Pages/Homepage';
import AboutLittleLemon from './assets/Pages/AboutLittleLemon';
import Contact from './assets/Pages/Contac';



function App() {
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

      {/* <GuessNumber /> */}

      <Cat />

      {/* <SimpleForm /> */}

      {/* <Main
        msg="I passed through the Header and the Wrapper and I reached the Button component"
      /> */}

      {/*NOTE: Managing state in React */}
      {/* <FruitsContainer />; */}

      <AppBar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutLittleLemon />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App
