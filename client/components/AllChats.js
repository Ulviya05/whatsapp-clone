import React from 'react';
import ChatPerson from './ChatPerson';
import styles from '../styles/AllChats.module.css';
import MessageSearch from './MessageSearch';

function AllChats() {
  const pinned = [
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      name: "John Doe",
      lastMessage: "Hello, how are you?",
      time: "9:30 AM"
    },
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      name: "Jane Smith",
      lastMessage: "I'm good, thanks!",
      time: "10:15 AM"
    },
  ];
  
  const all = [
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      name: "Alice Johnson",
      lastMessage: "Nice to meet you!",
      time: "11:45 AM"
    },
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      name: "Bob Thompson",
      lastMessage: "See you later!",
      time: "2:30 PM"
    },
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      name: "Eva Martinez",
      lastMessage: "What's up?",
      time: "5:20 PM"
    },
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      name: "Mike Wilson",
      lastMessage: "Let's grab a coffee!",
      time: "8:10 PM"
    },
  ];
  

  return (
    <div className={styles.all_chats}>
        <div className="section-header d-flex">
          <h3 className={styles.msg_heading}>Messages</h3>
          <h3 className={styles.unread}>(29)</h3>
        </div>
        <div className="search-bar">
          <MessageSearch />
        </div>
        <div className="section-messages" style={{ height: `calc(100vh - 160px)`, overflowY: "auto", paddingRight: "5px" }}>
        <div className={styles.pinned}>PINNED</div>
        <div className="chat-list">
          {pinned.map((person, index) => (
            <ChatPerson
              key={index}
              avatar={person.avatar}
              name={person.name}
              lastMessage={person.lastMessage}
              time={person.time}
            />
          ))}
        </div>
        <div className={styles.all}>ALL MESSAGES</div>
        {all.map((person, index) => (
            <ChatPerson
              key={index}
              avatar={person.avatar}
              name={person.name}
              lastMessage={person.lastMessage}
              time={person.time}
            />
          ))}
      </div>
    </div>
  );
}

export default AllChats;

