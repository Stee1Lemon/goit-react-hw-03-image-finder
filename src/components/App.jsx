import { Component } from 'react';
import styles from './App.module.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ButtonMore } from './Button/Button';
import { Loader } from './Loader/Loader';
import { ErrorMassage } from './Error/Error';
import { NotFoundMessage } from './NotFoundMessage/NotFoundMessage';
import { Modal } from './Modal/Modal';
import { fetchImages } from './Api/Api-services';

export class App extends Component {
  state = {
    imagesToFind: '',
    searchbarField: '',
    currentPage: null,
    imagesToRender: null,
    isLoaded: false,
    error: false,
    messageNotFound: false,
    modalOpen: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.imagesToFind !== this.state.imagesToFind) {
      try {
        this.setState({ isLoaded: true, error: false, messageNotFound: false });
        const toSearch = await fetchImages(this.state.imagesToFind, 1);
        if (toSearch.hits < 1) {
          this.setState({ messageNotFound: true });
          return;
        }
        this.setState({ imagesToRender: toSearch.hits, currentPage: 1 });
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ isLoaded: false });
      }
    }

    if (prevState.currentPage !== this.state.currentPage) {
      this.setState({ currentPage: this.state.currentPage });
      if (this.state.currentPage === 1) return;
      const toSearch = await fetchImages(
        this.state.imagesToFind,
        this.state.currentPage
      );
      this.setState(prev => {
        return { imagesToRender: [...prev.imagesToRender, ...toSearch.hits] };
      });
    }
  }

  openModal = imgUrl => {
    this.setState({ modalOpen: imgUrl });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  handleSearchbarField = ({ target: { value } }) => {
    this.setState({ searchbarField: value });
  };

  handlePictures = e => {
    e.preventDefault();

    this.setState({
      imagesToFind: this.state.searchbarField,
    });
  };

  handleMorePictures = () => {
    this.setState(prevState => {
      return { currentPage: prevState.currentPage + 1 };
    });
  };

  render() {
    const {
      imagesToRender,
      currentPage,
      searchbarField,
      isLoaded,
      error,
      messageNotFound,
      modalOpen,
    } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar
          onSubmit={this.handlePictures}
          onChange={this.handleSearchbarField}
          value={searchbarField}
        />
        {isLoaded && <Loader />}
        {messageNotFound && <NotFoundMessage />}
        {error && <ErrorMassage />}
        {imagesToRender && (
          <ImageGallery images={imagesToRender} openModal={this.openModal} />
        )}
        {modalOpen && <Modal imgUrl={modalOpen} closeModal={this.closeModal} />}
        {currentPage && <ButtonMore morePictures={this.handleMorePictures} />}
      </div>
    );
  }
}
