import Home from "./components/Home";
import Contact from "./components/contact/Contact";
import Services from "./components/Services"; 
import About from './components/about'; 

function App() {
  return (
    <div className="App">
      <p>Project React</p>
      {/* <Home /> */}
      {/* <Contact /> */}
      {/* <Services/> */}
      <About name={'kenza'} age={23}/>
    </div>
  );
}

export default App;
