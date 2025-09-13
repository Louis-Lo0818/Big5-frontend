type Props = {
  text?: string;            // placeholder/alt text
  src?: string;             // real image URL (optional)
  alt?: string;             // override alt text
  height?: number | string; // if omitted, fills parent height (100%)
  className?: string;
};

export default function CarouselImage({ text = '', src, alt, height, className = '' }: Props) {
  const imgSrc = src ?? `https://via.placeholder.com/1600x900?text=${encodeURIComponent(text)}`;

  // Avoid mixing ?? and || inline
  const altText = alt ?? (text || 'Carousel image');
  const resolvedHeight =
    typeof height === 'number' ? `${height}px` : (height ?? '100%');

  return (
    <img
      className={`d-block w-100 ${className}`}
      src={imgSrc}
      alt={altText}
      style={{
        height: resolvedHeight,
        objectFit: 'cover',
      }}
      loading="lazy"
      draggable={false}
    />
  );
}