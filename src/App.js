import logo from './logo.svg';
import './App.css';
import Cosmetics from './components/Cosmetics/Cosmetics';
import Shoes from './components/Shoes/Shoes';

function App() {
  let t = "true";
  return (
    <div className="App">
      <Cosmetics></Cosmetics>
      <Shoes hero={t}></Shoes>
    </div>
  );
}

export default App;
