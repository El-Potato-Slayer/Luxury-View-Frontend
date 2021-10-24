import { useSelector } from 'react-redux';
import SkeletonListItem from '../../Skeletons/SkeletonListMansion/SkeletonListMansion';
import { sortMansionByNewest } from '../../Helpers/index';
import { listAgent, listMansionDetails } from './helper';

function MansionsList() {
  const { properties: mansions, loading } = useSelector((state) => state.propertiesReducer);

  return (
    <div data-testid="mansions" className="page">
      <h2 className="page-title">Mansions</h2>
      <div data-testid="listings" className="listings">
        {loading && (
          <>
            <SkeletonListItem />
            <SkeletonListItem />
            <SkeletonListItem />
          </>
        )}
        {sortMansionByNewest(mansions).map((mansion) => (
          <div key={mansion.id}>
            {listMansionDetails(mansion)}
            {listAgent(mansion)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MansionsList;
