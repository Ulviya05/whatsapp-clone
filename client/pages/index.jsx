import React from 'react';
import SessionReact from "supertokens-auth-react/recipe/session";
import styles from '../styles/MyHome.module.css';
import Sidebar from '../components/Sidebar';
import AllChats from '../components/AllChats';
import Chat from '../components/Chat';
import Settings from '../components/Settings';
import UserProfile from '../components/UserProfile';
// import Profile from '../components/Profile';

function Home() {
  const [showSettings, setShowSettings] = React.useState(false);
  const [showUserProfile, setShowUserProfile] = React.useState(false);

  const handleSettingsClick = () => {
    setShowSettings(true);
    setShowUserProfile(false);
  };

  const handleProfileClick = () => {
    setShowUserProfile(true);
    setShowSettings(false);
  };

  const handleAllChatsClick = () => {
    setShowUserProfile(false);
    setShowSettings(false);
  };

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
        <Sidebar
            onSettingsClick={handleSettingsClick}
            onProfileClick={handleProfileClick}
            onAllChatsClick={handleAllChatsClick}
          />
          {showSettings ? (
            <Settings onProfileClick={handleProfileClick} />
          ) : showUserProfile ? (
            <UserProfile />
          ) : (
            <AllChats />
          )}
          {selectedPerson.map((person, index) => (
            <Chat
              key={index}
              avatar={person.avatar}
              name={person.name}
              number={person.number}
            />
          ))}
        </div>
      </div>
    </SessionReact.SessionAuth>
  );

  
}

export default Home;


