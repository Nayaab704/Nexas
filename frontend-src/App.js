import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './views/Home';
import Login from "./views/Login";
import Settings from "./views/Settings"
import Profile from "./views/Profile"
import { Route, Routes } from 'react-router-dom';
import MatchPeers from './views/MatchPeers';
/*
import dotenv from 'dotenv';
dotenv.config();
*/

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
        <Route path="settings" element={<Settings />}></Route>
        <Route path="profile" element={<Profile />}></Route>
      </Routes>
    </div>
  </>
  );
}

export default App;
