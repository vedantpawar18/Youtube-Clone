import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Videos from './Videos';

function App() {
  return ( 

    <div className="App"> 
      <Header/>
      <h1>Hello</h1>
      <div className="main-display" style={{"display" : "flex"}}>
      <Sidebar/>
       <Videos/>
      </div>
    </div>
  );
}

export default App;

