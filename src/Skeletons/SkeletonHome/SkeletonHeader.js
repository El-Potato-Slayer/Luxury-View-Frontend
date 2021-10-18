import Shimmer from '../../Components/Shimmer/Shimmer';
import SkeletonBase from '../SkeletonBase/SkeletonBase';

function SkeletonHeader() {
  return (
    <div className="skeleton-wrapper">
      {/* <SkeletonBase type="text" /> */}
      {/* <SkeletonBase type="listing-image" />
        <SkeletonBase type="text list-item" />
        <SkeletonBase type="text list-item" />
        <SkeletonBase type="text list-item" /> */}
      <SkeletonBase type="slider" />
      <Shimmer />
    </div>
  );
}

export default SkeletonHeader;
