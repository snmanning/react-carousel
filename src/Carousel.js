import React, { Component } from 'react';
import './Carousel.css';
import Buddy from './images/Buddy.jpg';
import Cuties from './images/Cuties.jpg';
import Sassy from '.images/Sassy.jpg';
import Max_and_ThePrince from './images/Max_and_ThePrince';

console.log(Buddy)
console.log(Cuties)
console.log(Sassy)
console.log(Max_and_ThePrince)

class Carousel extends Component {
    constructor(props) {
      super(props);
      this.state = {
        viewer: '',
      };
    }

  changePic(image){
    this.setState({
      viewer: image
    });
  }

  slidePicR(c) {
    this.setState({
      left: c.target.value
    })
  }

  slidePicL(c) {
    this.setState({
      right: c.target.value
    })
  }

  render() {
    const style = {
        slideStyle: {
          viewer: this.state.viewer,
        }
    };
    const {slideStyle} = style;
    return (
      <div className='Carousel-window'>
        {this.props.title ? <h1 className='Carousel-title'>{this.props.title}</h1> : null}
          <div className='Carousel-slide' style={slideStyle}>{this.state.viewer}
            <img className='Carousel-images' src={Buddy} alt='fat orange cat'/>
            <img className='Carousel-images' src={Cuties} alt='orange kittens in box'/>
            <img className='Carousel-images' src={Sassy} alt='cat beside coffee maker'/>
            <img className='Carousel-images' src={Max_and_ThePrince} alt='black dog and silver cat playing'/>
          </div>
          <section className='Carousel-controls'>
            <button className='Carousel-move' 
                    onClick={() => this.changePic(this.state.left)}>
                    Right </button>
            <button className='Carousel-move' 
                    onClick={() => this.changePic(this.state.right)} >
                    Left </button>
          </section>
      </div>
    );
  }
}

export default Carousel;
