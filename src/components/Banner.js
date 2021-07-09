import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
 import "./ban.css"
export default class extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
        interval={4000}
        isPlaying="true"
      >
        <Slider>
          <Slide index={0} width="1000"><img className="imageCar" src="https://images.ctfassets.net/rporu91m20dc/5aPw1eUd6J5g49XbwxXKmb/fc396b6f4f60437fa2e5e4ca9083a05c/the-elder-scrolls--online--greymoor-hero-img?q=70&fm=webp" /></Slide>
          <Slide index={1} width="1000"><img className="imageCar" src="https://lh3.googleusercontent.com/uYK6qVVc1NUqe6uMAjMsgEpaGYBebPJTFv3pHR5ccDMm5yf1BPDi72w5PzvJ5tTH2pvWAEfNITlSDyxO8IpxmaQ4dw" /></Slide>
          <Slide index={2} width="1000"><img className="imageCar" src="https://images.ctfassets.net/rporu91m20dc/4GSMaBEaadlFu4fhqtgVZc/b82d38220c047b6a8caac74a66cec855/fallout-76--wastelanders---raiders---settlers-content-bundle-hero-img?q=70&fm=webp" /></Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}