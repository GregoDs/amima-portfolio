import { useEffect, useRef, useState } from 'react';
import './Gallery.css';

const lovedOneItems = [
  {
    file: '001.GIF',
    title: 'LOVED ONE',
    src: 'https://c-p.rmcdn.net/680d0b16592864637495974c/5567598/Image-c2db8bd2-e4fa-4e35-bfaa-bc13e9489bfd.gif',
    alt: 'Loved One behind the scenes clip with two people in front of a brick wall',
    size: 'wide',
    scale: 0.97,
  },
  {
    file: '002.GIF',
    title: 'LOVED ONE',
    src: 'https://c-p.rmcdn.net/680d0b16592864637495974c/5567598/Image-c81be926-60c5-4f07-8b59-aff4e2125227.gif',
    alt: 'Loved One close-up profile clip',
    size: 'small',
    scale: 0.97,
  },
  {
    file: '001.JPG',
    title: 'LOVED ONE',
    src: 'https://i-p.rmcdn.net/680d0b16592864637495974c/5567598/image-df7580ec-b0e5-49af-a6bd-ea27570fc40a.jpg?w=528&cX=1187&cY=0&cW=1948&cH=2160',
    alt: 'Loved One portrait still',
    size: 'portrait',
    scale: 0.97,
  },
  {
    file: '003.GIF',
    title: 'LOVED ONE',
    src: 'https://c-p.rmcdn.net/680d0b16592864637495974c/5567598/Image-a8fd45d5-3e6c-49fc-a169-4661f03be089.gif',
    alt: 'Loved One side-profile clip in front of a brick wall',
    size: 'tall',
    scale: 0.97,
  },
];

const uglyItems = [
  {
    file: '001.JPG',
    title: 'UGLY',
    src: 'https://i-p.rmcdn.net/680d0b16592864637495974c/5567598/image-bf7be99c-e053-44b7-b683-c2b7cb853325.jpg?cX=172&cY=0&cW=377&cH=405',
    alt: 'Ugly portrait still',
    scale: 1,
    offset: '0vh',
    ratio: '0.93 / 1',
  },
  {
    file: '001.GIF',
    title: 'UGLY',
    src: 'https://c-p.rmcdn.net/680d0b16592864637495974c/5567598/Image-f17d0a95-2dbc-47a5-856a-b1505e426995.gif',
    alt: 'Ugly portrait clip',
    scale: 0.97,
    offset: '-1.2vh',
    ratio: '1.08 / 1',
  },
  {
    file: '002.JPG',
    title: 'UGLY',
    src: 'https://i-p.rmcdn.net/680d0b16592864637495974c/5567598/image-9d1b5a3c-f659-48d1-bc7d-deced367eab8.jpg?cX=163&cY=0&cW=395&cH=405',
    alt: 'Ugly portrait still',
    scale: 0.98,
    offset: '0.1vh',
    ratio: '0.97 / 1',
  },
];

const wranglerItems = [
  {
    file: '001.JPG',
    title: 'WRANGLER / THE CALL',
    src: 'https://i-p.rmcdn.net/680d0b16592864637495974c/5567598/image-4a4b1b6a-134d-413c-9d9d-162bfc0646af.jpg?w=428&cX=171&cY=12&cW=471&cH=357',
    alt: 'Wrangler scene with a child and people in the background',
    scale: 1,
    offset: '0vh',
    ratio: '1.31 / 1',
  },
  {
    file: '002.JPG',
    title: 'THE CALL',
    src: 'https://i-p.rmcdn.net/680d0b16592864637495974c/5567598/image-20a83188-4e15-4927-97cc-b20a07466c46.jpg?w=459&cX=243&cY=2&cW=275&cH=376',
    alt: 'Wrangler scene from behind a child walking outdoors',
    scale: 0.97,
    offset: '0vh',
    ratio: '0.73 / 1',
  },
  {
    file: '003.JPG',
    title: 'THE CALL',
    src: 'https://i-p.rmcdn.net/680d0b16592864637495974c/5567598/image-0d43d6dd-09b7-4eb2-b94f-e4f71f01d328.jpg?w=459&cX=150&cY=3&cW=356&cH=373',
    alt: 'Wrangler scene with a child in a blue shirt',
    scale: 0.98,
    offset: '0vh',
    ratio: '0.95 / 1',
  },
  {
    file: '004.JPG',
    title: 'THE CALL',
    src: 'https://i-p.rmcdn.net/680d0b16592864637495974c/5567598/image-c06cdab6-5238-41b9-8a6c-d9f9b4ee5659.jpg?w=881&cX=1529&cY=208&cW=3086&cH=2824',
    alt: 'Wrangler landscape title frame',
    scale: 1,
    offset: '0vh',
    ratio: '1.09 / 1',
  },
  {
    file: '001.GIF',
    title: 'THE CALL',
    src: 'https://c-p.rmcdn.net/680d0b16592864637495974c/5567598/Image-e455bf44-da00-45d8-80f7-774705b3af3e.gif',
    alt: 'Wrangler portrait clip of a child outdoors',
    scale: 0.98,
    offset: '0vh',
    ratio: '1.07 / 1',
  },
];

const boxrawItems = [
  {
    file: '001.JPG',
    title: 'BOXRAW // DO BETTER',
    src: 'https://i-p.rmcdn.net/680d0b16592864637495974c/5567598/image-89c6110e-513c-4627-ab0a-7eb2864e8ce8.jpg?w=919&cX=257&cY=0&cW=566&cH=608',
    alt: 'Boxraw black-and-white boxing portrait still',
    scale: 1,
    offset: '0vh',
    ratio: '0.93 / 1',
  },
  {
    file: '001.GIF',
    title: 'DO BETTER',
    src: 'https://c-p.rmcdn.net/680d0b16592864637495974c/5567598/Image-0a427a48-74c0-40e9-bd59-daba3121ce3a.gif',
    alt: 'Boxraw black-and-white boxing training clip',
    scale: 1,
    offset: '0vh',
    ratio: '1.15 / 1',
  },
  {
    file: '002.JPG',
    title: 'DO BETTER',
    src: 'https://i-p.rmcdn.net/680d0b16592864637495974c/5567598/image-d7a60e0e-7dcf-4dd2-9107-4a039ec3674a.jpg?w=413&cX=218.11764705882354&cY=0&cW=643.7647058823529&cH=608',
    alt: 'Boxraw black-and-white portrait still',
    scale: 1,
    offset: '25.8vh',
    ratio: '1.06 / 1',
  },
];

function Gallery() {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!section || !viewport || !track) {
      return undefined;
    }

    let animationFrame = 0;

    const measure = () => {
      if (window.matchMedia('(max-width: 900px)').matches) {
        setScrollDistance(0);
        track.style.transform = '';
        return;
      }

      const distance = Math.max(0, track.scrollWidth - viewport.clientWidth);
      setScrollDistance(distance);
    };

    const update = () => {
      animationFrame = 0;

      if (window.matchMedia('(max-width: 900px)').matches) {
        track.style.transform = '';
        return;
      }

      const maxDistance = Math.max(0, track.scrollWidth - viewport.clientWidth);
      const rect = section.getBoundingClientRect();
      const maxProgress = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / maxProgress));

      track.style.transform = `translate3d(${-maxDistance * progress}px, 0, 0)`;
    };

    const requestUpdate = () => {
      if (animationFrame) {
        return;
      }

      animationFrame = window.requestAnimationFrame(update);
    };

    measure();
    update();

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', measure);
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', measure);
      window.removeEventListener('resize', requestUpdate);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <section
        className="gallery"
        style={{ '--gallery-scroll-distance': `${scrollDistance}px` }}
        ref={sectionRef}
        aria-label="Loved One gallery"
      >
        <div className="gallery__viewport" ref={viewportRef}>
          <div className="gallery__track" ref={trackRef} aria-label="Loved One">
            {lovedOneItems.map((item) => (
              <figure
                className={`gallery__item gallery__item--${item.size}`}
                style={{ '--gallery-image-scale': item.scale }}
                key={item.src}
              >
                <figcaption className="gallery__caption">
                  <span>{item.file}</span>
                  <span>{item.title}</span>
                </figcaption>
                <img className="gallery__media" src={item.src} alt={item.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="ugly-gallery" aria-label="Ugly gallery">
        <div className="ugly-gallery__grid">
          {uglyItems.map((item) => (
            <figure
              className="ugly-gallery__item"
              style={{
                '--ugly-image-scale': item.scale,
                '--ugly-image-offset': item.offset,
                '--ugly-image-ratio': item.ratio,
              }}
              key={item.src}
            >
              <figcaption className="gallery__caption">
                <span>{item.file}</span>
                <span>{item.title}</span>
              </figcaption>
              <img className="gallery__media" src={item.src} alt={item.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <section className="wrangler-gallery" aria-label="Wrangler gallery">
        <div className="wrangler-gallery__grid">
          {wranglerItems.map((item) => (
            <figure
              className="wrangler-gallery__item"
              style={{
                '--wrangler-image-scale': item.scale,
                '--wrangler-image-offset': item.offset,
                '--wrangler-image-ratio': item.ratio,
              }}
              key={item.src}
            >
              <figcaption className="gallery__caption">
                <span>{item.file}</span>
                <span>{item.title}</span>
              </figcaption>
              <img className="gallery__media" src={item.src} alt={item.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <section className="boxraw-gallery" aria-label="Boxraw gallery">
        <div className="boxraw-gallery__grid">
          {boxrawItems.map((item) => (
            <figure
              className="boxraw-gallery__item"
              style={{
                '--boxraw-image-scale': item.scale,
                '--boxraw-image-offset': item.offset,
                '--boxraw-image-ratio': item.ratio,
              }}
              key={item.src}
            >
              <figcaption className="gallery__caption">
                <span>{item.file}</span>
                <span>{item.title}</span>
              </figcaption>
              <img className="gallery__media" src={item.src} alt={item.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}

export default Gallery;
