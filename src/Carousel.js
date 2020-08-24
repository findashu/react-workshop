import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0,
  };

  //   constructor(props) {
  //     super(props);

  //     this.handleIndexClick = this.handleIndexClick.bind(this);
  //   }

  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];
    if (media.length) {
      photos = media.map(({ large }) => large);
    }
    return { photos };
  }
  handleIndexClick = (event) => {
    // what is this here??
    // pointing to someother context instead of carousel
    // to fix it, either bind this in constructor, turn it in fatArrow function
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === "active" ? "active" : ""}
              alt="animal-thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
