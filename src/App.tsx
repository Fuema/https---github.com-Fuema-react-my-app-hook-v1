import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Identify/Login';
import Register from './Identify/Register';
import Profile from './Identify/Profile';
import BoardUser from './Pages/BoardUser';
import BoardModerator from './Pages/BoardModerator';
import BoardAdmin from './Pages/BoardAdmin';

const App: React.FC = () =>{
  return (
    <div >
     <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/user" element={<BoardUser />} />
        <Route path="/mod" element={<BoardModerator />} />
        <Route path="/admin" element={<BoardAdmin />} />
     </Routes>
    </div>
  );
}

export default App;
