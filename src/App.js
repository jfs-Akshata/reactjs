import logo from './logo.svg';
import './App.css';

function App() {
  let x = [1,2,3,4,5,6]
  return (
    <>
   { x.map((item,index)=>(<li>{item}</li>))}
    </>
  );
}

export default App;
