import logo from './logo.svg';
import './App.css';

import Albums from "./Components/Albums";

function App() {
  return (
    <div>
      <img src={logo} width={100} height={100}/>
      <Albums />
    </div>
  );
}

export default App;