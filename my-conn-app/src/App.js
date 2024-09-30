import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import './App.css';
import Practice1 from './components/Practice1';
import { Practice2 } from './components/Practice2';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
        <nav>
          <Link to="/">HOME</Link> |&nbsp;
          <Link to="/pt1">연습</Link> |&nbsp;
          <Link to="/pt2">연습2</Link>
        </nav>
      </header>

      <Routes>
      <Route path="/" element={<p>안녕 리액트?</p>}></Route>
      <Route path="/pt1" element={<Practice1/>}></Route>
      <Route path="/pt2" element={<Practice2/>}></Route>

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
