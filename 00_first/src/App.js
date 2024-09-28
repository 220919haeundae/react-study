
import './App.css';
import CurrentTime from './components/CurrentTime';
import UserList from './components/UserList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>현재시간</h3>
        <CurrentTime/>
      </header>
      <UserList/>
      
    </div>
  );
}

export default App;
