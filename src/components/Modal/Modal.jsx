import styles from './Modal.module.css';

export const Modal = () => {
  //   const instance = BasicLightBox.create(
  //     ``
  //   );

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <img
          src="https://www.zdnet.com/a/img/resize/ba1b1ab92085d777ab5e313b34c66a94b7aa1236/2023/06/05/79a43eb8-ce38-488c-8cc0-e04699aaca7f/bing.jpg?auto=webp&width=1280"
          alt="Here is something"
        />
      </div>
    </div>
  );
};
