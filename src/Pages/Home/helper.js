import {
  CarouselProvider, DotGroup, Slide, Slider,
} from 'pure-react-carousel';
import { Link } from 'react-router-dom';
import { priceOutput } from '../../Helpers';
import SkeletonHeader from '../../Skeletons/SkeletonHome/SkeletonHeader';
import SkeletonRectangle from '../../Skeletons/SkeletonHome/SkeletonRectangle';

export function displayHeader(isLoading, properties) {
  return (
    <div className="homepage-header">
      {isLoading && <SkeletonHeader />}
      {!isLoading
        && (
        <CarouselProvider
          naturalSlideWidth={134}
          naturalSlideHeight={60}
          totalSlides={properties.length}
          className="carousel"
          isPlaying
        >
          <h2 className="carousel-title">
            The World&apos;s
            <br />
            Luxury Marketplace
          </h2>
          <Slider className="slider">
            {properties.map((mansion, index) => (
              <Slide className="slide" key={mansion.id} index={index} style={{ background: `url(${mansion.picture}) center / cover` }} />
            ))}
          </Slider>
          <DotGroup className="dots" />
        </CarouselProvider>
        )}
    </div>
  );
}

export function displayNewestProperties(isLoading, properties) {
  return (
    <section className="home-section" data-testid="homepage-newest">
      <h4 className="home-section-title">Newest</h4>
      <div className="home-newest">
        {isLoading && (
        <>
          <SkeletonRectangle />
          <SkeletonRectangle />
          <SkeletonRectangle />
          <SkeletonRectangle />
        </>
        )}
        {properties.map((mansion) => (
          <Link key={mansion.id} to={`mansions/${mansion.id}`} style={{ background: `url(${mansion.picture}) center / cover` }} className="home-newest-item">
            <p className="home-mansion-price">
              $
              {priceOutput(mansion.price)}
            </p>
            <p className="home-mansion-name">{mansion.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function displaySoonToCome() {
  return (
    <section className="home-section" data-testid="homepage-soon">
      <h4 className="home-section-title">Soon to come</h4>
      <div className="home-newest">
        <div className="home-newest-item" style={{ background: 'url(https://firebasestorage.googleapis.com/v0/b/tactus-caelesti.appspot.com/o/cars%2Fmercedes_benz_biome_concept_4.jpg?alt=media&token=f5a523f3-49b9-4b30-83f0-b6375c938084) center/ cover' }}>
          <p className="home-mansion-price">Cars</p>
        </div>
        <div className="home-newest-item" style={{ background: 'url(https://firebasestorage.googleapis.com/v0/b/tactus-caelesti.appspot.com/o/yacht%2Fyacht.jpg?alt=media&token=19b88a2e-92a3-4f1a-9882-c5d7a8074721) center/ cover' }}>
          <p className="home-mansion-price">Yachts</p>
        </div>
        <div className="home-newest-item" style={{ background: 'url(https://firebasestorage.googleapis.com/v0/b/tactus-caelesti.appspot.com/o/jets%2Fjet.jpg?alt=media&token=1ca94a0c-96af-4a82-9aac-187891d92b48) center/ cover' }}>
          <p className="home-mansion-price">Jets</p>
        </div>
        <div className="home-newest-item" style={{ background: 'url(https://firebasestorage.googleapis.com/v0/b/tactus-caelesti.appspot.com/o/helicopters%2FHill-Helicopters-HX50-1-1536x864.jpg?alt=media&token=a9412f86-5489-4ebf-a469-e34a55820598) center/ cover' }}>
          <p className="home-mansion-price">Helicopters</p>
        </div>
      </div>
    </section>
  );
}

export function displayAsSeenIn() {
  return (
    <section className="home-section home-seen" data-testid="homepage-seen">
      <h4>As seen in</h4>
      <div className="home-seen-grid">
        <div>
          <img src="/assets/huffpost.svg" alt="huffpost-logo" />
        </div>
        <div>
          <img src="/assets/business-insider.svg" alt="business-insider-logo" />
        </div>
        <div>
          <img src="/assets/bloomberg.svg" alt="bloomberg-logo" />
        </div>
        <div>
          <img src="/assets/cnbc.svg" alt="cnbc-logo" />
        </div>
        <div>
          <img src="/assets/bbc.svg" alt="bbc-logo" />
        </div>
        <div>
          <img src="/assets/financial-times.svg" alt="financial-times-logo" />
        </div>
      </div>
    </section>
  );
}
