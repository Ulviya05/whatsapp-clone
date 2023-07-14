import React, { useState } from 'react';
import styles from '../styles/Sidebar.module.css';
import SessionReact from 'supertokens-auth-react/recipe/session';
import SuperTokensReact from 'supertokens-auth-react';

function Sidebar({ onAllChatsClick, onSettingsClick }) {
  const [activeIcon, setActiveIcon] = useState('house'); // Set the default active icon as 'house'

  async function logoutClicked() {
    await SessionReact.signOut();
    SuperTokensReact.redirectToAuth();
  }

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  const isIconActive = (icon) => {
    return icon === activeIcon ? styles.active : '';
  };

  return (
    <div className={`sidebar bg-dark text-white ${styles.sidebar}`}>
      <ul className={`sidebar-menu list-unstyled d-flex flex-column align-items-center justify-content-center h-100 ${styles.iconList}`}>
        <li>
          <a onClick={onAllChatsClick}>
            <i className={`bi bi-house-door ${styles.icon} ${isIconActive('house')}`} onClick={() => handleIconClick('house')}></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className={`bi bi-chat-dots ${styles.icon} ${isIconActive('chat')}`} onClick={() => handleIconClick('chat')}></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className={`bi bi-bookmark ${styles.icon} ${isIconActive('bookmark')}`} onClick={() => handleIconClick('bookmark')}></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className={`bi bi-bell ${styles.icon} ${isIconActive('bell')}`} onClick={() => handleIconClick('bell')}></i>
          </a>
        </li>
        <li>
          <a onClick={onSettingsClick}>
            <i className={`bi bi-gear ${styles.icon} ${isIconActive('gear')}`} onClick={() => handleIconClick('gear')}></i>
          </a>
        </li>
        <li>
          <a onClick={logoutClicked}>
            <i className={`bi bi-box-arrow-right ${styles.icon} ${isIconActive('box-arrow')}`} onClick={() => handleIconClick('box-arrow')}></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;









