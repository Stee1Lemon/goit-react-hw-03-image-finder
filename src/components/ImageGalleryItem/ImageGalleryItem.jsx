import styles from './ImageGalleryItem.module.css';

export const ImageGalleryItem = () => {
  return (
    <li className={styles.galleryItem}>
      <img className={styles.galleryItemImage} src="" alt="here is something" />
    </li>
  );
};
