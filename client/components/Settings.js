import React, { useEffect, useState } from 'react'
import styles from '../styles/Settings.module.css';
import MessageSearch from './MessageSearch';
import axios from 'axios';



function Settings({ onProfileClick}) {
  const [profile, setProfile] = useState({})

  useEffect(() => {
    async function getProfile() {
        const _profile = (await axios.get(process.env.API_URL + "/profile/")).data;
        localStorage.setItem("profile", JSON.stringify(_profile))
        setProfile(_profile)   
    }
    
    getProfile()
  }, [])
  
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
                    <img src={`${process.env.API_URL}/photo/${profile.photo}`} alt="Avatar" />
            </div>
            <div className={styles.right}>
                <div className={styles.name}>{profile.name}</div>
                <div className={styles.about}>{profile.about}</div>
            </div>
        </div>
    </div>
  )
}

export default Settings