import Home from "./components/Home";
import Contact from "./components/contact/Contact";
import Services from "./components/Services"; 
import About from './components/about'; 
import Calculatrice from "./components/calculatrice/Calculatrice";
import {Child} from "./components/Child/Child";
import MyHook from "./components/MyHook/MyHook";
import Effect from "./components/Effect";
import EffectA from "./components/EffectWithParams";
import EffectWithCleanUp from "./components/EffectWithCleanUp";

function App() {
  
const clickButton = () => {
  console.log("Je suis le composant fils")
}

  return (
    <div className="App">
      {/* <p>Project React</p> */}
      {/* <Home /> */}
      {/* <Contact /> */}
      {/* <Services/> */}
      {/* <About name={'kenza'} age={23}/> */}
      {/* <Calculatrice note1={17} note2={18} /> */}
      {/* <Child btn={clickButton} /> */}
      {/* <MyHook /> */}
      {/* <Effect/> */}
      {/* <EffectA/> */}
      <EffectWithCleanUp/>
    </div>
  );
}

export default App;
