import styles from '../styles/ChatPerson.module.css';

function ChatPerson({ avatar, name, lastMessage, time }) {
  return (
    <div className={styles.chat}>
      <div className={styles.avatar}>
        <img src={avatar} alt="Avatar" />
      </div>
      <div className={styles.middle}>
        <div className={styles.space}>
          <h3 className={styles.name}>{name}</h3>
          <span className={styles.time}>{time}</span>
        </div>
        <p className={styles.lastMessage}>{lastMessage}</p>
      </div>
    </div>
  );
}

export default ChatPerson;

