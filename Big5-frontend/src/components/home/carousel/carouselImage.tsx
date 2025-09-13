type Props = {
    text?: string;
    src?: string;
    alt?: string;
    height?: number | string; // optional: usually leave undefined to inherit parent
    className?: string;
};

export default function CarouselImage({ text = '', src, alt, height, className = '' }: Props) {
    const imgSrc = src ?? `https://via.placeholder.com/1600x900?text=${encodeURIComponent(text)}`;
    const resolvedHeight = height !== undefined ? (typeof height === 'number' ? `${height}px` : height) : '100%';

    // avoid mixing ?? and || inline — compute alt text separately
    const altText = alt ?? (text || 'Carousel image');

    return (
        <img
            className={`d-block w-100 ${className}`}
            src={imgSrc}
            alt={altText}
            style={{
                width: '100%',
                height: resolvedHeight,
                objectFit: 'cover',
                display: 'block',
            }}
            loading="lazy"
            draggable={false}
        />
    );
}