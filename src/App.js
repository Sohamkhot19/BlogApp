import './App.css';
import About from './components/About';
import Blogcard from './components/Blogcard';
import Blogdetail from './components/Blogdetail';
import Createblog from './components/Createblog';
import Home from './components/Home';
import Login from './components/Login';
import Myblogs from './components/Myblogs';
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
        <Route path='/Myblogs' element={<Myblogs/>}></Route>
        <Route path='/CreateBlog' element={<Createblog/>}></Route>
        <Route path="/blog/:id" element={<Blogdetail />} />
        <Route path='/About' element={<About/>}></Route>
      </Routes>
    </Router>

    </>
  );
}

export default App;
