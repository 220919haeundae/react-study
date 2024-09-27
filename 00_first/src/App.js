
import './App.css';
import CurrentTime from './components/CurrentTime';

function Test() {
  return (
    <p>여기는 test컴포넌트입니다.</p>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>현재시간</h3>
        <Test/>
        <CurrentTime/>
      </header>
      
    </div>
  );
}

export default App;
