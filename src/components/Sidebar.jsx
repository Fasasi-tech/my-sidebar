import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import {links} from './Data'
import './sidebar.css'
import {useStateContext} from '../context/ContextProvider'

const Sidebar = () => {
  
  const {activeMenu, setActiveMenu, screenSize}=useStateContext();
  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  return (
    <div className='sidebar_div sidebarr'>
        {activeMenu && (<>
          <div className="link_div">
            <Link to='/' onClick={handleCloseSideBar} className="sidebar_logo">Olaleye</Link>
            <button type='button' onClick={()=>setActiveMenu(!activeMenu)} className='circle'>
              <i className="uil uil-times-circle"></i>
            </button>
          </div>
            <div className='link_second_div'>
              {links.map((item)=>(
                <div key={item.title}>
                  <p className="map_link">{item.title}</p>
                  {item.links.map((link)=>(
                    <NavLink to={`/${link.name}`} key={link.name} onClick={handleCloseSideBar}
                    className='nav-link'>
                      <div className='link_dashboard'>
                      <span >{link.icon}</span>
                      <span className='link_name'>{link.name}</span>
                      </div>
                    </NavLink>
                  ))}
                </div>
              ))}

            </div>
           
        </>)}
    </div>
  )
}

export default Sidebar