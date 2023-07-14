import React, { useState } from 'react';
import styles from '../styles/UserProfile.module.css';

function UserProfile() {
  const [name, setName] = useState('ulviya');
  const [about, setAbout] = useState('haha');
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingAbout, setIsEditingAbout] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAboutChange = (event) => {
    setAbout(event.target.value);
  };

  const handleEditName = () => {
    setIsEditingName(!isEditingName);
  };

  const handleEditAbout = () => {
    setIsEditingAbout(!isEditingAbout);
  };

  const handleAvatarClick = () => {
    const fileInput = document.getElementById('avatar-upload');
    fileInput.click();
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Handle file upload logic here
    console.log('File uploaded:', file);
    setIsUploading(true);

    const reader = new FileReader();
    reader.onload = () => {
      setIsUploading(false);
      setUploadedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={styles.userProfile}>
      <div className="section-header d-flex">
        <h3 className={styles.msg_heading}>Profile</h3>
      </div>
      <div className={styles.profile}>
        <div className={`${styles.avatar} ${isUploading ? styles.uploading : ''}`} onClick={handleAvatarClick}>
          {isUploading ? (
            <div className={styles.uploadIndicator}>
              {/* <span>Uploading...</span> */}
            </div>
          ) : null}
          {uploadedImage ? (
            <img src={uploadedImage} alt="Avatar" />
          ) : (
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7wrKjpbjvQzLHlQfvKO8gsopOJBvbCEXe1A&usqp=CAU" alt="Avatar" />
          )}
          
          <div>
            <i class={`bi bi-camera ${styles.cameraIcon}`}></i>
            <div className={styles.uploadText}>CHANGE</div>
          <div className={styles.uploadText2}>PROFILE PHOTO</div>
          </div>
          
          <input id="avatar-upload" type="file" onChange={handleFileUpload} />
        </div>
        <div className={styles.nameSection}>
          <h3 className={styles.sectionName}>Your name</h3>
          <div className={styles.bottom}>
            {isEditingName ? (
              <input
                type="text"
                className={styles.nameInput}
                value={name}
                onChange={handleNameChange}
                autoFocus
              />
            ) : (
              <div className={styles.nameValue}>{name}</div>
            )}
            <i
              className={`bi ${isEditingName ? `bi-check2 ${styles.check_icon}` : `bi-pencil-fill ${styles.pen_icon}`}`}
              onClick={handleEditName}
            ></i>
          </div>
        </div>
        <div className={styles.aboutSection}>
          <h3 className={styles.sectionName}>About</h3>
          <div className={styles.bottom}>
            {isEditingAbout ? (
              <input
                type="text"
                className={styles.aboutInput}
                value={about}
                onChange={handleAboutChange}
                autoFocus
              />
            ) : (
              <div className={styles.aboutValue}>{about}</div>
            )}
            <i
              className={`bi ${isEditingAbout ? `bi-check2 ${styles.check_icon}` : `bi-pencil-fill ${styles.pen_icon}`}`}
              onClick={handleEditAbout}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;





