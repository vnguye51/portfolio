import React, { Component } from 'react';
import './Carousel.css'
class Carousel extends Component {
  render() {
    return (
      <div className = 'carouselBox'>
        <div id={'carousel'+ this.props.carouselId} class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            {this.props.images.map((url,i)=>{
                if(i === 0){
                    return(
                        <li data-target={'#carousel'+ this.props.carouselId} data-slide-to="0" class="active"></li>
                    )
                }
                return(
                    <li data-target={'#carousel'+ this.props.carouselId} data-slide-to={i}></li>
                )
            })}
        </ol>
        <div class="carousel-inner">

            {this.props.images.map((url,i) => {
                if(i === 0){
                    return(
                    <div class="carousel-item active">
                        <img class="d-block w-100 carouselImg" src={url} alt="First slide" />
                    </div>
                    )
                }
                return(
                    <div class="carousel-item">
                        <img class="d-block w-100 carouselImg" src={url} alt='slide' />
                    </div>
                )
            })}
        </div>
        <a class="carousel-control-prev" href={'#carousel'+ this.props.carouselId} role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href={'#carousel'+ this.props.carouselId} role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        </div>
      </div>
    );
  }
}

export default Carousel;
