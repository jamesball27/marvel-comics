import React from 'react';

class ComicsIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hovered: false };

    this.renderTitle = this.renderTitle.bind(this);
    this.setHover = this.setHover.bind(this);
    this.removeHover = this.removeHover.bind(this);
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

  render() {
    return(
      <li
        className="comics-index-item"
        onMouseOver={ this.setHover }
        onMouseLeave={ this.removeHover }
      >
        <div className="overlay">
          <img src={ this.props.comic.imageUrl } />
          { this.renderTitle() }
        </div>
      </li>
    );
  }
}

export default ComicsIndexItem;
