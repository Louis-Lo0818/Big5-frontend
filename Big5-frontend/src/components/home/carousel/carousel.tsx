import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/carousel.css';
import CarouselImage from './carouselImage';

type Props = {
  height?: number;
  intervalMs?: number;
};

export default function MyCarousel({ height = 610, intervalMs = 3000 }: Props) {
  const [index, setIndex] = useState(0);

  const slides = [
    { key: 0, text: 'First slide', title: 'First slide label', body: 'Nulla vitae elit libero, a pharetra augue mollis interdum.' },
    { key: 1, text: 'Second slide', title: 'Second slide label', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { key: 2, text: 'Third slide', title: 'Third slide label', body: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.' },
  ];

  return (
    <div className="carousel-full-bleed" style={{ height: `${height}px`, position: 'relative' }}>
      <Carousel
        activeIndex={index}
        onSelect={(i) => setIndex(i)}
        interval={intervalMs}
        pause={false}
        controls
        indicators
        className="h-full"
        style={{ height: '100%' }}
      >
        {slides.map((s) => (
          <Carousel.Item key={s.key} className="h-full" style={{ height: '100%' }}>
            <CarouselImage text={s.text} />
            <Carousel.Caption>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <div
        key={index}
        className="carousel-progress-anim"
        style={{ ['--interval' as any]: `${intervalMs}ms` }}
        aria-hidden
      />
    </div>
  );
}