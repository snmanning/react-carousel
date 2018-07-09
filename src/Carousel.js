import React, { Component } from 'react';
import './Carousel.css';

class Carousel extends Component {
    constructor(props) {
      super(props);
      this.state = {
        viewer: ''
      }
    }

  changePic(){
    this.setState({
      viewer: 
    });
  }

  render() {
    return (
      <div className='Carousel-window'>
        {this.props.title ? <h1 className='Carousel-title'>{this.props.title}</h1> : null}
          <div className='Carousel-slide'>
            <img className='Carousel-images' src='./images/Buddy.jpg' alt='fat orange cat'/>
            <img className='Carousel-images' src='./images/Cuties.jpg' alt='orange kittens in box'/>
            <img className='Carousel-images' src='./images/Sassy.jpg' alt='cat beside coffee maker'/>
            <img className='Carousel-images' src='./images/Max_and_ThePrince' alt='black dog and silver cat playing'/>
          </div>
          <section className='Carousel-controls'>
            <button className='Carousel-move' 
                    onClick/>
            <button className='Carousel-move' />
          </section>
      </div>
    );
  }
}

export default Carousel;
