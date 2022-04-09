import logo from './logo.svg';
import './App.css';
import { List } from './Components/List';

function App() {
  const arr = ["samsung","blackberry","android","mac"]
   const array = ["oppo","vivo","nokia","motrola"]
  return (
    <div className="App">
      <List name={arr} head={"mobile operating system"}/>
      <List name={array} head={"mobile manufactures"}/>
      
      
    </div>
  );
}



export default App;
