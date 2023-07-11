import styles from '../styles/MyMessage.module.css';

function MyMessage({ avatar, name, message, time}) {
  return (
    <div className={styles.chat}>
      <div className={styles.middle}>
        <div className={styles.space}>
          <h3 className={styles.name}>{name}</h3>
          <span className={styles.time}>{time}</span>
        </div>
        <p className={styles.message}>{message}</p>
      </div>
      <div className={styles.avatar}>
        <img src={avatar} alt="Avatar" />
      </div>
    </div>
  );
}

export default MyMessage;