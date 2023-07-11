import styles from '../styles/Photos.module.css';

function Photos({photo}) {
return (
    <div className={styles.photo}>
        <img src={photo} alt="Photo" />
    </div>
  );
}

export default Photos;