import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Sidebar,Navbar} from './components'
import {Electricity,Airtime,Bills,Computing,Dashboard,Electronics,Fashion,Internet,Gadgets,Health,Jumia,SuperMarket} from './pages'
import {useStateContext} from './context/ContextProvider'
function App() {
  const{activeMenu}=useStateContext()
  return (
    <>
    <BrowserRouter>
        <div className="parent_app_div">
          {activeMenu?(
            <div className="initial_sidebar sidebar">
              <Sidebar/>
            </div>
            ):(
              <div className="final_sidebar" >
                <Sidebar/>
              </div>)}
              <div className={activeMenu?"active_first":"active_second"}>
                <div className="navbar_div_app navbar">
                  <Navbar/>
                </div>
                <div>
                  <Routes>
                    <Route path='/' element={<Dashboard/>} />                 
                    <Route path='/supermarket' element={<SuperMarket />} />              
                    <Route path='/health' element={<Health />} />                          
                    <Route path='/gadgets' element={<Gadgets />} />
                    <Route path='/computing' element={<Computing />} />
                    <Route path='/electronics' element={<Electronics />} />
                    <Route path='/fashion' element={<Fashion />} />
                    <Route path='/jumia-prime' element={<Jumia />} />
                    <Route path='/pay-airtime' element={<Airtime />} />
                    <Route path='/pay-bills' element={<Bills />} />
                    <Route path='/electricity-bills' element={<Electricity />} />
                    <Route path='/internet-bills' element={<Internet />} />
                  </Routes>
                </div>
              </div>     
        </div>  
    </BrowserRouter>

    </>
  );
}

export default App;
