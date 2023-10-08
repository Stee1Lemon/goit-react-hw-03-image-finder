import { Component } from 'react';
import styles from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.escClose);
    window.addEventListener('click', this.escClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.escClose);
    window.removeEventListener('click', this.escClose);
  }

  escClose = e => {
    const overlay = styles.overlay;
    if (e.key === 'Escape' || e.target.className === overlay) {
      this.props.closeModal();
    }
  };

  render() {
    const { imgUrl } = this.props;

    return (
      <div className={styles.overlay} onClick={this.escClose}>
        <div className={styles.modal}>
          <img src={imgUrl} alt="" />
        </div>
      </div>
    );
  }
}
