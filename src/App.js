import './App.css';
import './component/Header.js';
import Header from './component/Header.js';
import TableContainer from './component/TableContainer.js';

const App = () =>  {
  return (
    <div className="App">
      <Header/>
      <TableContainer/>
    </div>
  );
}

export default App;
