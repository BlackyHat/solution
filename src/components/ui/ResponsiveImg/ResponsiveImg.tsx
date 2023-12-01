import { FC, useState, useEffect } from 'react';
import scss from './ResponsiveImg.module.scss';

interface Images {
  [x: string]: string;
}
interface ResponsiveImgProps {
  name: string;
  alt?: string;
  className?: string;
}

const ResponsiveImg: FC<ResponsiveImgProps> = ({ name, alt, className }) => {
  const [images, setImages] = useState<Images | null>(null);

  useEffect(() => {
    async function loadMobileIms() {
      try {
        const mobileImg = await import(
          `../../../assets/images/${name}-mobile@1x.jpg`
        );
        const mobileImg2x = await import(
          `../../../assets/images/${name}-mobile@2x.jpg`
        );
        const mobileImgWeb = await import(
          `../../../assets/images/${name}-mobile@1x.webp`
        );
        const mobileImgWeb2x = await import(
          `../../../assets/images/${name}-mobile@2x.webp`
        );

        setImages((prev) => {
          return {
            ...prev,
            mobileImg: mobileImg?.default,
            mobileImg2x: mobileImg2x?.default,
            mobileImgWeb: mobileImgWeb?.default,
            mobileImgWeb2x: mobileImgWeb2x?.default,
          };
        });
      } catch (error) {
        // console.log(`Mobile Images does not exist ${name}`);
      }
    }
    async function loadTabImgs() {
      try {
        const tabletImg = await import(
          `../../../assets/images/${name}-tablet@1x.jpg`
        );
        const tabletImg2x = await import(
          `../../../assets/images/${name}-tablet@2x.jpg`
        );
        const tabletImgWeb = await import(
          `../../../assets/images/${name}-tablet@1x.webp`
        );
        const tabletImgWeb2x = await import(
          `../../../assets/images/${name}-tablet@2x.webp`
        );
        setImages((prev) => {
          return {
            ...prev,
            tabletImg: tabletImg?.default,
            tabletImg2x: tabletImg2x?.default,
            tabletImgWeb: tabletImgWeb?.default,
            tabletImgWeb2x: tabletImgWeb2x?.default,
          };
        });
      } catch (error) {
        // console.log(`Tablet image does not exist ${name}`);
      }
    }
    async function loadDesktopImgs() {
      try {
        const desktopImg = await import(
          `../../../assets/images/${name}-desktop@1x.jpg`
        );
        const desktopImg2x = await import(
          `../../../assets/images/${name}-desktop@2x.jpg`
        );
        const desktopImgWeb = await import(
          `../../../assets/images/${name}-desktop@1x.webp`
        );
        const desktopImgWeb2x = await import(
          `../../../assets/images/${name}-desktop@2x.webp`
        );
        setImages((prev) => {
          return {
            ...prev,
            desktopImg: desktopImg?.default,
            desktopImg2x: desktopImg2x?.default,
            desktopImgWeb: desktopImgWeb?.default,
            desktopImgWeb2x: desktopImgWeb2x?.default,
          };
        });
      } catch (error) {
        // console.log(`Desktop Images does not exist ${name}`);
      }
    }
    loadTabImgs();
    loadMobileIms();
    loadDesktopImgs();
  }, [name]);

  return (
    <>
      {images && (
        <picture>
          {images.mobileImg && (
            <>
              <source
                srcSet={`${images.mobileImgWeb} 1x, ${images.mobileImgWeb2x} 2x`}
                type="image/webp"
                media="(max-width:767px)"
              />
              <source
                srcSet={`${images.mobileImg} 1x, ${images.mobileImg2x} 2x`}
                type="image/jpeg"
                media="(max-width:767px)"
              />
            </>
          )}

          <source
            srcSet={`${images.tabletImgWeb} 1x, ${images.tabletImgWeb2x} 2x`}
            type="image/webp"
            media="(max-width:1279px)"
          />
          <source
            srcSet={`${images.tabletImg} 1x, ${images.tabletImg2x} 2x`}
            type="image/jpeg"
            media="(max-width:1279px)"
          />

          <source
            srcSet={`${images.desktopImgWeb} 1x, ${images.desktopImgWeb2x} 2x`}
            type="image/webp"
            media="(min-width:1280px)"
          />
          <source
            srcSet={`${images.desktopImg} 1x, ${images.desktopImg2x} 2x`}
            type="image/jpeg"
            media="(min-width:1280px)"
          />
          <img
            srcSet={`${images.mobileImg} 320w, ${images.tabletImg} 768w, ${images.desktopImg} 1280w`}
            alt={alt || 'Wind turbine clean energy'}
            loading="lazy"
            sizes="(max-width: 767px) 320px, (min-width: 768px) 768px, (min-width: 1280px) 1280px"
            className={`${scss.image} ${className || ''}`}
          />
        </picture>
      )}
    </>
  );
};

export default ResponsiveImg;
