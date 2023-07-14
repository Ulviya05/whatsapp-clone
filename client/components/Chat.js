import React, { useState } from 'react';
import styles from '../styles/Chat.module.css';
import Message from './Message';
import MyMessage from './MyMessage';
import Profile from './Profile';

function Chat({ avatar, name, number }) {
  const [isProfileShown, setIsProfileShown] = useState(false);

  const allMessages = [
    {
        avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        name: "Alice Johnson",
        message: "Nice to meet you!",
        time: "11:45 AM"
    },
    {
        avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        name: "Bob Thompson",
        message: "See you later!",
        time: "2:30 PM"
    },
    {
        avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        name: "Eva Martinez",
        message: "What's up?",
        time: "5:20 PM"
    }
    ];

    const allMyMessages = [
        {
            avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
            name: "Alice Johnson",
            message: "Nice to meet you!",
            time: "11:45 AM"
        },
        {
            avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
            name: "Bob Thompson",
            message: "See you later!",
            time: "2:30 PM"
        },
        {
            avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
            name: "Eva Martinez",
            message: "What's up?",
            time: "5:20 PM"
        }
        ];

  const handleHeaderClick = () => {
    setIsProfileShown(!isProfileShown);
  };

  return (
    <div className={styles.container}>
    <div className={styles.chatContainer}>
      <div className={styles.header} onClick={handleHeaderClick}>
        <div className={styles.avatar}>
          <img src={avatar} alt="Avatar" />
        </div>
        <div className={styles.right}>
          <h3 className={styles.name}>{name}</h3>
          <div className={styles.rightBottom}>
            <h3 className={styles.number}>{number}</h3>
            <h3 className={styles.members}>members</h3>
          </div>
        </div>
      </div>
      <div className={styles.section} style={{ overflowY: 'auto', paddingRight: '5px' }}>
        <div className={styles.chatSection} style={{ overflowY: 'auto', paddingRight: '5px' }}>
          {allMessages.map((person, index) => (
            <Message
              key={index}
              avatar={person.avatar}
              name={person.name}
              message={person.message}
              time={person.time}
            />
          ))}

          {allMyMessages.map((person, index) => (
            <MyMessage
              key={index}
              avatar={person.avatar}
              name={person.name}
              message={person.message}
              time={person.time}
            />
          ))}
        </div>

 <div className={styles.bottomSection}>
      <div
            className={`d-flex message-input d-flex align-items-center border-primary px-3 ${styles.msg}`}
            role="search"
            id="searchForm"
        >
            <input
                id="text"
                type="text"
                placeholder="Type a message"
                className={`bg-transparent border-0 w-100 ps-2 ${styles.msg_input}`}
            />
            <i className={`bi bi-paperclip ${styles.attach}`}></i>
        </div>
        <button className={styles.sendButton}>
            <div className={`bi bi-send ${styles.sendIcon}`}></div>
        </button>
        </div>
      </div>
      </div>
      {isProfileShown && (
        <Profile
          avatar={avatar}
          name={name}
          number={number}
        />
      )}
      </div>
  );
}

export default Chat;

