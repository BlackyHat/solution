import { FC, useState, useEffect } from 'react';
interface Images {
  [x: string]: string;
}
interface ResponsiveImgProps {
  name: string;
}

const ResponsiveImg: FC<ResponsiveImgProps> = ({ name }) => {
  const [images, setImages] = useState<Images | null>(null);
  console.log('RESPONSIVE IMAGE');
  useEffect(() => {
    async function loadImage() {
      try {
        const mobileImg = await import(
          `../../assets/images/${name}-mobile@1x.jpg`
        );
        const mobileImg2x = await import(
          `../../assets/images/${name}-mobile@2x.jpg`
        );
        const mobileImgWeb = await import(
          `../../assets/images/${name}-mobile@1x.webp`
        );
        const mobileImgWeb2x = await import(
          `../../assets/images/${name}-mobile@2x.webp`
        );

        const tabletImg = await import(
          `../../assets/images/${name}-tablet@1x.jpg`
        );
        const tabletImg2x = await import(
          `../../assets/images/${name}-tablet@2x.jpg`
        );
        const tabletImgWeb = await import(
          `../../assets/images/${name}-tablet@1x.webp`
        );
        const tabletImgWeb2x = await import(
          `../../assets/images/${name}-tablet@2x.webp`
        );
        const desktopImg = await import(
          `../../assets/images/${name}-desktop@1x.jpg`
        );
        const desktopImg2x = await import(
          `../../assets/images/${name}-desktop@2x.jpg`
        );
        const desktopImgWeb = await import(
          `../../assets/images/${name}-desktop@1x.webp`
        );
        const desktopImgWeb2x = await import(
          `../../assets/images/${name}-desktop@2x.webp`
        );

        setImages({
          mobileImg: mobileImg?.default,
          mobileImg2x: mobileImg2x?.default,
          mobileImgWeb: mobileImgWeb?.default,
          mobileImgWeb2x: mobileImgWeb2x?.default,
          tabletImg: tabletImg?.default,
          tabletImg2x: tabletImg2x?.default,
          tabletImgWeb: tabletImgWeb?.default,
          tabletImgWeb2x: tabletImgWeb2x?.default,
          desktopImg: desktopImg?.default,
          desktopImg2x: desktopImg2x?.default,
          desktopImgWeb: desktopImgWeb?.default,
          desktopImgWeb2x: desktopImgWeb2x?.default,
        });
      } catch (error) {
        console.log(`Image does not exist ${name}`);
        setImages(null);
      }
    }
    loadImage();
  }, [name]);

  return (
    <>
      {images && (
        <picture>
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
          <source
            srcSet={`${images.tabletImgWeb} 1x, ${images.tabletImgWeb2x} 2x`}
            type="image/webp"
            media="(min-width:768px)"
          />
          <source
            srcSet={`${images.tabletImg} 1x, ${images.tabletImg2x} 2x`}
            type="image/jpeg"
            media="(min-width:768px)"
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
            alt="Wind turbine clean energy"
            loading="lazy"
            sizes="(max-width: 767px) 320px, (min-width: 768px) 768px, (min-width: 1280px) 1280px"
          />
        </picture>
      )}
    </>
  );
};

export default ResponsiveImg;
