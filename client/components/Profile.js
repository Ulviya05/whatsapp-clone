import React from 'react';
import styles from '../styles/Profile.module.css';
import Photos from './Photos';

function Profile({ avatar, name, number }) {
    const allPhotos= [ 
        {
        photo: "https://st2.depositphotos.com/3557671/11465/v/950/depositphotos_114656902-stock-illustration-girl-icon-cartoon-single-avatarpeaople.jpg"
        },
        {
        photo: "https://st2.depositphotos.com/3557671/11465/v/950/depositphotos_114656902-stock-illustration-girl-icon-cartoon-single-avatarpeaople.jpg"
        },
        {
        photo: "https://st2.depositphotos.com/3557671/11465/v/950/depositphotos_114656902-stock-illustration-girl-icon-cartoon-single-avatarpeaople.jpg"
        }
        ,        
        {
        photo: "https://st2.depositphotos.com/3557671/11465/v/950/depositphotos_114656902-stock-illustration-girl-icon-cartoon-single-avatarpeaople.jpg"
        }
        ,
        {
        photo: "https://st2.depositphotos.com/3557671/11465/v/950/depositphotos_114656902-stock-illustration-girl-icon-cartoon-single-avatarpeaople.jpg"
        }
    ];
    return (
    <div className={`${styles.profileContainer}`} style={{ overflowY: "auto", paddingRight: "10px", marginBottom: "20px"}}>
        <div className={styles.top}>
            <div className={styles.topLeft}>
                <div className={styles.avatar}>
                    <img src={avatar} alt="Avatar" />
                </div>
                <h3 className={styles.name}>{name}</h3>
                <div className={styles.rightBottom}>
                    <h3 className={styles.number}>{number}</h3>
                    <h3 className={styles.members}>members</h3>
                </div>
            </div>
            <div className={`bi bi-three-dots-vertical ${styles.dots}`}></div>
        </div>
        <div className={styles.call}>
            <div className={styles.mic}>
                <div className={`bi bi-mic ${styles.micIcon}`}></div>
                <h3 className={styles.micChat}>Voice chat</h3>
            </div>
            <div className={styles.video}>
                <div className={`bi bi-camera-video ${styles.videoIcon}`}></div>
                <h3 className={styles.videoChat}>Video chat</h3>
            </div>
        </div>
        <div className={styles.additional}>
            <div className={styles.search}>
                <h3 className={styles.add_left}>Search in Conversation</h3>
                <div className="bi bi-search"></div>
            </div>
            <div className={styles.color}>
                <h3 className={styles.add_left}>Change Color</h3>
                <div className="bi bi-palette2"></div>
            </div>
            <div className={styles.emoji}>
                <h3 className={styles.add_left}>Change emoji</h3>
                <div className="bi bi-emoji-smile"></div>
            </div>
            <div className={styles.links}>
                <h3 className={styles.add_left}>Links</h3>
                <div className="bi bi-link-45deg"></div>
            </div>
            <div className={styles.photo_label}>
                <div className={`bi bi-image ${styles.photoIcon}`}></div>
                <h3 className={styles.shared}>Shared photo</h3>
            </div>
            </div>
            <div className={styles.photo} >
                {allPhotos.map((person) => (
                    <Photos
                        photo={person.photo}
                    />
                ))}
            </div>
    </div>
  );
}

export default Profile;