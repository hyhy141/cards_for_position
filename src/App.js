import "./App.css";
import About from "./components/About";
import Icons from "./components/Icons";
import Info from "./components/Info";
import Interests from "./components/Interests";

function App() {
  return (
    <div className="App">
      <div className="app_inner">
        <Info />
        <About />
        <Interests />
        <Icons />
      </div>
    </div>
  );
}

export default App;
