import React from 'react';
import Sidebar from './components/Sidebar/Sidebar'

import './assets/css/bootstrap.min.css';
import './assets/css/icons.css';
import './assets/css/metisMenu.min.css';
import './assets/css/style.css';
import Content from './components/Content/Content';

function App() {
  return (
    <div id="wrapper" className="App">
    <Sidebar /> 
    <Content /> 
    </div>
  );
}

export default App;
