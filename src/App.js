import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/Home/Home';
import Details from './Components/Home/Projects/Details/Details';
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}>
          </Route>
          <Route path='/home' element={<Home></Home>} />
          <Route path='/aboutMe' element={<AboutMe></AboutMe>} />
          <Route path='/blogs' element={<Blogs></Blogs>} />
          <Route path="/details/:projectId" element={<Details></Details>} />
          <Route path='*' element={<NotFound></NotFound>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
