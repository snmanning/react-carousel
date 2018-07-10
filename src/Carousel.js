import React, { Component } from 'react';
import './Carousel.css';
import buddy from './images/buddy.jpg';
import cuties from './images/cuties.jpg';
import sassy from './images/sassy.jpg';
import maxAndThePrince from './images/maxAndThePrince.jpg';


class Carousel extends Component {
    constructor(props) {
      super(props);
      this.state = {
        viewerImages: [
          './images/buddy.jpg',
          './images/cuties.jpg',
          './images/sassy.jpg',
          './images/maxAndThePrince.jpg'
        ],
        viewerIndex: 0,
      };
    }

  changePic(image){
    this.setState({
      viewerImages: image
    });
  }

  // slidePicR(c) {
  //   this.setState({
  //     left: c.target.value
  //   })
  // }

  // slidePicL(c) {
  //   this.setState({
  //     right: c.target.value
  //   })
  // }

  render() {
    const style = {
        slideStyle: {
          viewer: this.state.viewerImages,
        }
    };
    const {slideStyle} = style;
    return (
      <div className='Carousel-window'>
        {this.props.title ? <h1 className='Carousel-title'>{this.props.title}</h1> : null}
          <div className='Carousel-slide' style={slideStyle}>{this.state.viewer}
            <img className='Carousel-images' src={buddy} alt='fat orange cat'/>
            <img className='Carousel-images' src={cuties} alt='orange kittens in box'/>
            <img className='Carousel-images' src={sassy} alt='cat beside coffee maker'/>
            <img className='Carousel-images' src={maxAndThePrince} alt='black dog and silver cat playing'/>
          </div>
          <section className='Carousel-controls'>
            <button className='Carousel-move' 
                    onClick={() => this.changePic(this.state.viewer-1)}>
                    Right </button>
            <button className='Carousel-move' 
                    onClick={() => this.changePic(this.state.viewer+1)} >
                    Left </button>
          </section>
      </div>
    );
  }
}

export default Carousel;
