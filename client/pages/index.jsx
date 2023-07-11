import React from 'react';
import SessionReact from "supertokens-auth-react/recipe/session";
import styles from '../styles/MyHome.module.css';
import Sidebar from '../components/Sidebar';
import AllChats from '../components/AllChats';
import Chat from '../components/Chat';
// import Profile from '../components/Profile';

function Home() {
  const selectedPerson = [
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      name: "Designers",
      number: 9
    },
  ];

  return (
    <SessionReact.SessionAuth>
      <div className={styles.outerContainer}>
        <div className={styles.container}>
          <Sidebar />
          <AllChats />
          {selectedPerson.map((person, index) => (
            <Chat
              key={index}
              avatar={person.avatar}
              name={person.name}
              number={person.number}
            />
          ))}
        </div>
        {/* {selectedPerson.map((person, index) => (
          <Profile
            key={index}
            avatar={person.avatar}
            name={person.name}
            number={person.number}
          />
        ))} */}
      </div>
    </SessionReact.SessionAuth>
  );
}

export default Home;


