import React, { useEffect } from 'react'
import './navbar.css'
import { useStateContext } from '../context/ContextProvider';
const NavButton = ({ customFunc, icon, color }) => (
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="navbar_button"
    >
      {icon}
    </button>
);

const Navbar = () => {
  const {activeMenu, setActiveMenu,setScreenSize, screenSize} = useStateContext();
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  const handleActiveMenu = () => setActiveMenu(!activeMenu);
  return (
    <div className='navbar_parent_div'>
     <NavButton  customFunc={handleActiveMenu} color="aqua" icon={<i className="uil uil-bars bar"></i>} />
    </div>
  )
}

export default Navbar