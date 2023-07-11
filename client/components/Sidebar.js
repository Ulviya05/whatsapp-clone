import React from 'react';
import styles from '../styles/Sidebar.module.css';
import SessionReact from "supertokens-auth-react/recipe/session";
import SuperTokensReact from "supertokens-auth-react";

function Sidebar() {
  async function logoutClicked() {
    await SessionReact.signOut();
    SuperTokensReact.redirectToAuth();
  }

  return (
    <div className={`sidebar bg-dark text-white ${styles.sidebar}`}>
      <ul className={`sidebar-menu list-unstyled d-flex flex-column align-items-center justify-content-center h-100 ${styles.iconList}`}>
        <li>
          <a href="#">
            <i className={`bi bi-house-door ${styles.icon}`}></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className={`bi bi-chat-dots ${styles.icon}`}></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className={`bi bi-bookmark ${styles.icon}`}></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className={`bi bi-bell ${styles.icon}`}></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className={`bi bi-gear ${styles.icon}`}></i>
          </a>
        </li>
        <li>
          <a onClick={logoutClicked}>
            <i className={`bi bi-box-arrow-right ${styles.icon}`}></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;





