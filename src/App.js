import './App.css';
import Blogcard from './components/Blogcard';
import Blogdetail from './components/Blogdetail';
import Createblog from './components/Createblog';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/CreateBlog' element={<Createblog/>}></Route>
        <Route path='/BlogDetail' element={<Blogdetail/>}></Route>
      </Routes>
    </Router>

    </>
  );
}

export default App;
