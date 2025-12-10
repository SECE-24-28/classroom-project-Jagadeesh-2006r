
import {BrowserRouter,Route,Routes,Link} from "react-router-dom" 
import './App.css';
import Home from './home';
import About from './about';
import Contact from './contact';
import Users from './user'
import Books from "./books";

 
function App() {
  return (
    
        <BrowserRouter>
        <h1>Hello sekar</h1>
        <ul>
          <Link to ="/" ><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
          <Link to="/user/1"><li>Users 1</li></Link>
          <Link to="/user/2"><li>Users 2</li></Link>
          <Link to="/book/newbook"><li>new books</li></Link>
          <Link to="/book/oldbook"><li>old books</li></Link>

        </ul>
        <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path ="/about" element={<About/>}/>
        <Route path ="/contact" element={<Contact/>}/>
        <Route path ="/user/:id" element={<Users/>}/>
        <Route path="/book">
         <Route path="newbook" element={<Books/>}></Route>
          <Route path="oldbook" element={<Books/>}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
