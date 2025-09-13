import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/carousel.css';
import CarouselImage from './carouselImage';

type Props = {
  height?: number;
};

export default function MyCarousel({ height = 610 }: Props) {
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number | null) => {
    if (typeof selectedIndex === 'number') setIndex(selectedIndex);
  };

  return (
    <div className="carousel-full-bleed" style={{ height: `${height}px`, position: 'relative' }}>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        controls
        indicators={true}   // make sure indicators are on
        className="h-full"
      >
        <Carousel.Item className="h-full">
          <CarouselImage text="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="h-full">
          <CarouselImage text="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="h-full">
          <CarouselImage text="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}