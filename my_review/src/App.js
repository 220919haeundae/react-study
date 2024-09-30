import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Timer from './component/Timer';
import Counter from './component/Counter';
import styled from 'styled-components';
import Home from './component/Home';
import { createContext } from 'react';
const Body = styled.div`
width: 1000px;
height: 500px;
border: 1px solid black;
margin: auto;
`

export const UserContext = createContext();
let defaultUser = {
  id: '',
  pwd: ''
}

function App() {
  const [user, setUser] = useState(defaultUser);
  const defaultContext = {
    data: user,
    setData: setUser
  }


  const [timer, setTimer] = useState(true);
  const [count, setCount] = useState(false);

  useEffect(() => {
    if(timer === true) {
      setCount(false);
      
    }

    if(setCount === true) {
      setTimer(false);
    }
  }, [timer, count])



  

  

  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      


      </header>
      <nav style={{backgroundColor: 'teal'}}>
      <Link to ="/home">HOME</Link>  
      <Link to ="/timer">타이머</Link>
      <Link to ="/counter">글자 수 세기</Link>
      </nav>
      <div>
  
      <Body>
        <UserContext.Provider value={defaultContext}>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/timer" element={<Timer/>}/>
        <Route path="/counter" element={<Counter/>}/>
      
      </Routes>
      </UserContext.Provider>
      </Body>
      </div>
    </div>
    </BrowserRouter>
  );
  
}

export default App;