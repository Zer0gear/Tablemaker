import { useState, useEffect } from 'react';
import './App.css';
import './component/Header.js';
import Header from './component/Header.js';
import TableContainer from './component/TableContainer.js';

const App = () =>  {
  const [size,setSize] = useState([0,0])
  useEffect(() => {
    setSize(size);
  }, [size]);
  console.log("App",size)
  return (
    <div className="App">
      <Header setSize={setSize}/>
      <TableContainer startSize={size}/>
    </div>
  );
}

export default App;
