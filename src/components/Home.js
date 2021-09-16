import PropTypes from 'prop-types';
import {
  CarouselProvider, Slider, Slide, DotGroup,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRandomElements, priceOutput, sortMansionByNewest } from '../helpers';

function Home({ mansions }) {
  const [randomMansions, setRandomMansions] = useState([]);
  const [newestMansions, setNewestMansions] = useState([]);

  useEffect(() => {
    setNewestMansions(sortMansionByNewest(mansions).slice(0, 4));
    setRandomMansions(getRandomElements(mansions, 3));
  }, [mansions]);

  return (
    <div data-testid="homepage">
      <div className="homepage-header">
        <CarouselProvider
          naturalSlideWidth={134}
          naturalSlideHeight={60}
          totalSlides={randomMansions.length}
          className="carousel"
          isPlaying
        >
          <h2 className="carousel-title">
            The World&apos;s
            <br />
            Luxury Marketplace
          </h2>
          <Slider className="slider">
            {randomMansions.map((mansion, index) => (
              <Slide className="slide" key={mansion.id} index={index} style={{ background: `url(${mansion.picture}) center / cover` }} />
            ))}
          </Slider>
          <DotGroup className="dots" />
        </CarouselProvider>

      </div>

      <section className="home-section" data-testid="homepage-newest">
        <h4 className="home-section-title">Newest</h4>
        <div className="home-newest">
          {newestMansions.map((mansion) => (
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
    </div>
  );
}

const mapStateToProps = (state) => ({
  mansions: state.propertiesReducer.properties,
});

Home.propTypes = {
  mansions: PropTypes.instanceOf(Array).isRequired,
};

// export default Home;
export default connect(mapStateToProps)(Home);
