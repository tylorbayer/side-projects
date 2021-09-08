import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  axios
    .get('https://shakespeare.podium.com/api/reviews', {headers: { 'x-api-key': 'H3TM28wjL8R4#HTnqk?c'}})
    .then(response => {
      console.log(response)
    })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
