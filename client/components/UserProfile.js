import React, { useEffect, useState } from 'react';
import styles from '../styles/UserProfile.module.css';
import axios from 'axios';

function UserProfile() {
  const [name, setName] = useState(JSON.parse(localStorage.getItem("profile")).name);
  const [about, setAbout] = useState(JSON.parse(localStorage.getItem("profile")).about);
  const [photo, setPhoto] = useState(JSON.parse(localStorage.getItem("profile")).photo);
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingAbout, setIsEditingAbout] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  useEffect(() => {
    if (!isEditingName) {
      async function updateName() {
          const response = await axios.post(`${process.env.API_URL}/profile/name`, { name });
          const updatedName = response.data.name;
          setName(updatedName);
          localStorage.setItem("profile", JSON.stringify({
            ...JSON.parse(localStorage.getItem("profile")),
            name: updatedName
          }));
      }
      updateName();
    }
  }, [isEditingName, name]);
  
  

  const handleAboutChange = (event) => {
    setAbout(event.target.value);
  };


  useEffect(() => {
    if (!isEditingAbout) {
      async function updateAbout() {
          const response = await axios.post(`${process.env.API_URL}/profile/about`, { about });
          const updatedAbout = response.data.about;
          setAbout(updatedAbout);
          localStorage.setItem("profile", JSON.stringify({
            ...JSON.parse(localStorage.getItem("profile")),
            about: updatedAbout
          }));
      }
      updateAbout();
    }
  }, [isEditingAbout, about]);


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

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    console.log('File uploaded:', file);
  
    const formData = new FormData();
    formData.append('photo', file);
  
    try {
      const response = await axios.post(`${process.env.API_URL}/profile/photo`, formData);
      const updatedPhoto = response.data.photo;
      setPhoto(updatedPhoto);
      localStorage.setItem("profile", JSON.stringify({ ...JSON.parse(localStorage.getItem("profile")), photo: updatedPhoto }));
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    if (!isUploading) {
      async function updatePhoto() {
        try {
          const formData = new FormData();
          formData.append('photo', uploadedImage);
  
          const response = await axios.post(`${process.env.API_URL}/profile/photo`, formData);
          const updatedPhoto = response.data.photo;
          setPhoto(updatedPhoto);
          localStorage.setItem("profile", JSON.stringify({ ...JSON.parse(localStorage.getItem("profile")), photo: updatedPhoto }));
        } catch (error) {
          console.log(error);
        }
      }
      updatePhoto();
    }
  }, [isUploading, uploadedImage]);
  

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
              // <img src={photo || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7wrKjpbjvQzLHlQfvKO8gsopOJBvbCEXe1A&usqp=CAU"} alt="Avatar" />
              <img src={`${process.env.API_URL}/photo/${photo}`} alt="Avatar" />
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





