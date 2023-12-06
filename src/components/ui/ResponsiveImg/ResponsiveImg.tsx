import { FC, useState, useEffect } from 'react';
import scss from './ResponsiveImg.module.scss';

interface LoadImagesProps {
  size: 'mobile' | 'tablet' | 'desktop';
  width: 360 | 768 | 1280;
}

interface Images {
  [x: string]: string;
}
interface ResponsiveImgProps {
  name: string;
  alt: string;
  className?: string;
}

const ResponsiveImg: FC<ResponsiveImgProps> = ({ name, alt, className }) => {
  const [images, setImages] = useState<Images | null>(null);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    async function loadImages({ size, width }: LoadImagesProps) {
      try {
        const jpegImg = await import(
          `../../../assets/images/${name}-${size}@1x.jpg`
        );
        const jpegImg2x = await import(
          `../../../assets/images/${name}-${size}@2x.jpg`
        );
        const webPImg = await import(
          `../../../assets/images/${name}-${size}@1x.webp`
        );
        const webP2x = await import(
          `../../../assets/images/${name}-${size}@2x.webp`
        );
        setImages({
          width: String(width),
          jpeg: jpegImg?.default,
          jpeg2x: jpegImg2x?.default,
          webP: webPImg?.default,
          webP2x: webP2x?.default,
        });
      } catch (error) {
        console.log(`Mobile Images does not exist ${name}`);
      }
    }

    if (windowSize < 768) {
      loadImages({ size: 'mobile', width: 360 });
    } else if (windowSize < 1280) {
      loadImages({ size: 'tablet', width: 768 });
    } else {
      loadImages({ size: 'desktop', width: 1280 });
    }
  }, [name, windowSize]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <>
      {images && (
        <picture>
          <source
            srcSet={`${images.webP} 1x, ${images.webP2x} 2x`}
            type="image/webp"
            media={`(min-width:${images.width}px)`}
          />
          <source
            srcSet={`${images.jpeg} 1x, ${images.jpeg2x} 2x`}
            type="image/jpeg"
            media={`(min-width:${images.width}px)`}
          />

          <img
            alt={alt}
            loading="lazy"
            src={images.jpeg}
            className={`${scss.image} ${className || ''}`}
          />
        </picture>
      )}
    </>
  );
};

export default ResponsiveImg;
