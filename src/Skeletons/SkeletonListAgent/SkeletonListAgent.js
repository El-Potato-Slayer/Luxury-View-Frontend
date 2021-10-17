import Shimmer from '../../Components/Shimmer/Shimmer';
import SkeletonBase from '../SkeletonBase/SkeletonBase';

function SkeletonListAgent() {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-rectangle">
        {/* <SkeletonBase type="text" /> */}
        <SkeletonBase type="listing-image" />
        <SkeletonBase type="text list-item" />
        <SkeletonBase type="text list-item" />
        <SkeletonBase type="text list-item" />
      </div>
      <Shimmer />
    </div>
  );
}

export default SkeletonListAgent;
