import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}>
          </Route>
          <Route path='/home' element={<Home></Home>} />
          <Route path='*' element={<NotFound></NotFound>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
