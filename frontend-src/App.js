import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './views/Home';
import Login from "./views/Login";
import { Route, Routes } from 'react-router-dom';
import MatchPeers from './views/MatchPeers';
import dotenv from 'dotenv';
dotenv.config();


function App() {

  return (
  <>
    <Navbar />
    <div className='content'>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="match-peers" element={<MatchPeers />}></Route>
      </Routes>
    </div>
  </>
  );
}

export default App;
