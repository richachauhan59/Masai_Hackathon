import React from 'react';
import './App.css';
import SignUp from './Components/Form';
import Home from './Dashboard/Home';
import {BrowserRouter, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route path="/" exact render={()=> <Home></Home>}></Route>
      <Route path="/register" render={()=><SignUp></SignUp>}></Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
