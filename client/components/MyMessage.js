import React, { useState } from 'react'
import styles from '../styles/MyMessage.module.css';

function MyMessage({ message, time}) {
  // const [name] = useState(JSON.parse(localStorage.getItem("profile")).name);
  const [photo] = useState(JSON.parse(localStorage.getItem("profile"))?.photo);
  return (
    <div className={styles.chat}>
      <div className={styles.middle}>
        <div className={styles.space}>
          {/* <h3 className={styles.name}>{name}</h3> */}
          <span className={styles.time}>{time}</span>
        </div>
        <p className={styles.message}>{message}</p>
      </div>
      <div className={styles.avatar}>
        <img src={`${process.env.API_URL}/photo/${photo}`} alt="Avatar" />
      </div>
    </div>
  );
}

export default MyMessage;