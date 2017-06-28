import React from 'react';

class ComicsIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hovered: false };

    this.renderTitle = this.renderTitle.bind(this);
    this.setHover = this.setHover.bind(this);
    this.removeHover = this.removeHover.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.renderHeart = this.renderHeart.bind(this);

  }

  setHover() {
    this.setState({ hovered: true });
  }

  removeHover() {
    this.setState({ hovered: false });
  }

  renderTitle() {
    if (this.state.hovered) {
      return(
        <span className="comic-title">{ this.props.comic.title }</span>
      );
    }
  }

  renderHeart() {
    let path = window.images.heartOff;
    if (this.props.favorited) {
      path = window.images.heartOn;
    } else if (this.state.hovered) {
      path = window.images.heartHover;
    }

    return(
      <img src={ path } className="heart" />
    );
  }

  toggleFavorite() {
    if (this.props.favorited) {
      this.props.deleteFavorite(this.props.comic.id);
    } else {
      this.props.createFavorite(this.props.comic.id);
    }
  }

  render() {
    const outline = { outline: '10px solid #db3c32' };

    return(
      <li
        className="comics-index-item"
        onMouseOver={ this.setHover }
        onMouseLeave={ this.removeHover }
        onClick={ this.toggleFavorite }
        style={ this.props.favorited ? outline : {} }
      >
        <div className="overlay">
          <img src={ this.props.comic.imageUrl } />
          { this.renderTitle() }
        </div>
        { this.renderHeart() }
      </li>
    );
  }
}

export default ComicsIndexItem;
