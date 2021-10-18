import 'pure-react-carousel/dist/react-carousel.es.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getRandomElements, sortMansionByNewest } from '../../Helpers/index';
import {
  displayAsSeenIn, displayHeader, displayNewestProperties, displaySoonToCome,
} from './helper';

function Home() {
  const [randomMansions, setRandomMansions] = useState([]);
  const [newestMansions, setNewestMansions] = useState([]);
  const { properties: mansions, loading } = useSelector((state) => state.propertiesReducer);

  useEffect(() => {
    setNewestMansions(sortMansionByNewest(mansions).slice(0, 4));
    setRandomMansions(getRandomElements(mansions, 3));
  }, [mansions]);

  return (
    <div data-testid="homepage">
      {displayHeader(loading, randomMansions)}
      {displayNewestProperties(loading, newestMansions)}
      {displaySoonToCome()}
      {displayAsSeenIn()}
    </div>
  );
}

export default Home;
