import React from 'react'
import styles from '../styles/Settings.module.css';
import MessageSearch from './MessageSearch';

function Settings({ onProfileClick}) {
  return (
    <div className={styles.settings}>
        <div className="section-header d-flex">
          <h3 className={styles.msg_heading}>Settings</h3>
        </div>
        <div className="search-bar">
          <MessageSearch />
        </div>
        <div className={styles.profile} onClick={onProfileClick}>
            <div className={styles.avatar}>
                    <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="Avatar" />
            </div>
            <div className={styles.right}>
                <div className={styles.name}>ulviya</div>
                <div className={styles.about}>haha</div>
            </div>
        </div>
    </div>
  )
}

export default Settings