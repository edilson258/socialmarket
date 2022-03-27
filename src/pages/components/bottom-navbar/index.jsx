import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css';
import { House, People, Shop, Cart } from 'react-bootstrap-icons';

function NavBar(props) {

  const [activeMenuId, setActiveMenuId]  = useState(null);

  const navigate = useNavigate();

  const [navItems, setActiveNavItem] = useState([
    {
      key: 1,
      icon: House,
      isActive: false,
      target: '/'
    },
    { key: 2,
      icon: People,
      isActive: false,
      target: '/wanted/'
    },
    {
      key: 3,
      icon: Shop,
      isActive: false,
      target: '/selled/'
    },
    {
      key: 4,
      icon: Cart,
      isActive: false,
      target: '/cart/'
    }
  ]);

  useEffect(() => {
    setActiveMenuId(props.menuId);
  }, [props.menuId]);

  function handleNavigate(key) {
    const activeMenu = navItems.find(item => item.key === key);
    navigate(activeMenu.target);
  }
  
  useMemo(() => {
    const newNavItems = navItems.map(item => {
      return item.key === activeMenuId ? { ...item, isActive: true } : { ...item, isActive: false };
    });
    setActiveNavItem(newNavItems);
  }, [activeMenuId]);
   
  return(
    <>
      <div id="navbar-wrap">

        { navItems.map((item) => (
          <div id="nav-icons">
            <item.icon onClick={() => handleNavigate(item.key) }  className={ item.isActive ? 'is-active' : '' } key={item.key} id="nav-icon" />
          </div> 
        ))}

      </div>
    </>
  );
}

export default NavBar;
