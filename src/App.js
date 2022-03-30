import {Route, Routes, Switch} from 'react-router-dom'
import Sidebar from '../src/Components/Sidebar/Sidebar.js'
import Home from '../src/Components/Home/Home.js'
import Navbar from './Components/Navbar/Navbar';
import Accounts from './Components/Accounts/Accounts';
import HyperVault from './Components/HyperVault/HyperVault.js';
import Swap from './Components/Swap/Swap.js';
import Footer from './Components/Footer/Footer.js';
import Calculator from './Components/Calculator/Calculator.js';
import { useState } from 'react';

function App() {
  const [sidebar, setSidebar] = useState(false)

  return (
    <div className='body'>
      <div className="sidebar_body">
        <Sidebar sidebar={sidebar} set={setSidebar}/>
      </div>
      <div className="home_body">
        <Navbar sidebar={sidebar} set={setSidebar}/>
        <Routes>
          <Route exact element={<Home   />} path='/' />
          <Route exact element={<Accounts/>} path='/account' />
          <Route exact element={<HyperVault/>} path='/hyper_vault' />
          <Route exact element={<Swap/>} path='/swap' />
          <Route exact element={<Calculator/>} path='/calculator' />
        </Routes>
        <Footer/>
     </div>
    </div>
  );
}

export default App;
