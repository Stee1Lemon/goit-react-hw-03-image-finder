import { Component } from 'react';
import styles from './App.module.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ButtonMore } from './Button/Button';
// import { Loader } from './Loader/Loader';
// import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    toFind: '',
  };

  handlePictures = e => {
    e.preventDefault();

    const picturesToFind = e.currentTarget.elements.picture.value;

    this.setState({
      toFind: picturesToFind,
    });
  };

  render() {
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handlePictures} />
        <ImageGallery />
        <ButtonMore />
      </div>
    );
  }
}
