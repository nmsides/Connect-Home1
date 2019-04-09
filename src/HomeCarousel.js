import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'

class HomeCarousel extends Component {
  render() {
    return (
      <div>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/Resources/stock1.jpg"
                alt="First slide"
                />
                <Carousel.Caption>

                <p>Connect-Home transitional care prepares older adults and their caregivers
                  to manage the older adults' serious illnessess at home.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/Resources/stock1.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <p>Connect-Home develops nursing home staff and leadership capacity to
                  prepare older adults to return home safely, and avoid complications when they get there.</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
      </div>
    );
  }
}

export default HomeCarousel;
