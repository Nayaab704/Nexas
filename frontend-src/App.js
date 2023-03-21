import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Home from './Home';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Sidebar/>
        <Home />
      </div>
    </div>
  );
}

export default App;
