import styles from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = () => {
  return (
    <ul className={styles.gallery}>
      <ImageGalleryItem />
    </ul>
  );
};
