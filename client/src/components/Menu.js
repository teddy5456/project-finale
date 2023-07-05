import React, { useEffect, useState } from 'react';
import './Menu.css'; // Import the CSS file

const Menu = () => {
  const [menus, setMenus] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(null);

  useEffect(() => {
    fetchMenus();
  }, []);

  const fetchMenus = async () => {
    try {
      const response = await fetch('/menus');
      const data = await response.json();
      setMenus(data);
    } catch (error) {
      console.error('Error fetching menus:', error);
    }
  };

  const fetchMenuDetails = async (menuId) => {
    try {
      const response = await fetch(`/menus/${menuId}`);
      const data = await response.json();
      setSelectedMenu(data);
    } catch (error) {
      console.error('Error fetching menu details:', error);
    }
  };

  return (
    <div className="menu-container">
      <h1>Menu</h1>
      <ul className="menu-list">
        {menus.map((menu) => (
          <li key={menu.id} className="menu-item">
            <h3
              onClick={() => fetchMenuDetails(menu.id)}
              className="menu-name"
            >
              {menu.menu_name}
            </h3>
            <img
              src={menu.image_url}
              alt={menu.menu_name}
              className="menu-image"
            />
            {selectedMenu && selectedMenu.id === menu.id && (
              <div>
                <p>{menu.description}</p>
                <p>Price: ${menu.price}</p>
                <img
                  src={menu.image_url}
                  alt={menu.menu_name}
                  className="menu-image"
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
