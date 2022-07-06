import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Card from './components/Card';
import Contador from './components/Contador';

function App() {
  return (
    <>
      {/* <Contador stock={5}/> */}
      <Navbar />
      <Body />
    </>
  );
}

export default App;
