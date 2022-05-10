import React from "react"
import {Switch,Route} from "react-router-dom"
import Header from "./component/Head/Header"
import CrusherWearParts from "./component/Products/CrusherWearParts"
import Contact from "./component/Contact/Contact"
import Footer from "./component/Footer/Footer"
import Main from "./component/Main"
import ShredderWearParts from "./component/Products/ShredderWearParts"
import MillLinersParts from "./component/Products/MillLinersParts"
import JawCrusherPart from "./component/Products/CrusherWearParts/JawCrusherPart"
import ImpactCrusherParts from "./component/Products/CrusherWearParts/ImpactCrusherParts"
import ConeCrusherParts from "./component/Products/CrusherWearParts/ConeCrusherParts"
import GyratoryCrusherParts from "./component/Products/CrusherWearParts/GyratoryCrusherParts"
import VsiCrusherParts from "./component/Products/CrusherWearParts/VsiCrusherParts"
import ShredderGrates from "./component/Products/ShredderWearParts/ShredderGrates"
import ShredderHammers from "./component/Products/ShredderWearParts/ShredderHammers"
import ShredderRotor from "./component/Products/ShredderWearParts/ShredderRotor"
import ManganeseMillLiners from "./component/Products/MillLinerParts/ManganeseMillLiners"
import BallMillLiners from "./component/Products/MillLinerParts/BallMillLiners"
import CrMoAlloyMillLiners from "./component/Products/MillLinerParts/CrMoAlloyMillLiners"
import RollMillLiners from "./component/Products/MillLinerParts/RollMillLiners"
import RubberMillLiners from "./component/Products/MillLinerParts/RubberMillLiners"



import ManganeseSteel from "./component/Materials/ManganeseSteel"
// import ContactUs from "./component/Contact/ContactUs"
import "./App.css"




const App = () => {
  return (
    <>
      <Header/>
      <Switch>
      <Route exact path="/" component={Main}/>

        <Route exact path="/Products/CrusherWearParts" component={CrusherWearParts}/>
        <Route exact path="/Products/ShredderWearParts" component={ShredderWearParts}/>

        <Route exact path="/Products/MillLinersParts" component={MillLinersParts}/>

        <Route exact path="/CrusherWearParts/JawCrusherPart" component={JawCrusherPart}/>
        <Route exact path="/CrusherWearParts/ConeCrusherParts" component={ConeCrusherParts}/>
        <Route exact path="/CrusherWearParts/ImpactCrusherParts" component={ImpactCrusherParts}/>
        <Route exact path="/CrusherWearParts/GyratoryCrusherParts" component={GyratoryCrusherParts}/>
        <Route exact path="/CrusherWearParts/VsiCrusherParts" component={VsiCrusherParts}/>

        <Route exact path="/ShredderWearParts/ShredderGrates" component={ShredderGrates}/>
        <Route exact path="/ShredderWearParts/ShredderHammers" component={ShredderHammers}/>
        <Route exact path="/ShredderWearParts/ShredderRotor" component={ShredderRotor}/>

        <Route exact path="/MillLinerParts/ManganeseMillLiners" component={ManganeseMillLiners}/>
        <Route exact path="/MillLinerParts/BallMillLiners" component={BallMillLiners}/>
        <Route exact path="/MillLinerParts/RollMillLiners" component={RollMillLiners}/>
        <Route exact path="/MillLinerParts/CrMoAlloyMillLiners" component={CrMoAlloyMillLiners}/>
        <Route exact path="/MillLinerParts/RubberMillLiners" component={RubberMillLiners}/>


        
        
        <Route exact path="/Materials/ManganeseSteel" component={ManganeseSteel}/>








      </Switch>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
