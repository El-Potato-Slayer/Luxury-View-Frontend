import Shimmer from '../../Components/Shimmer/Shimmer';
import SkeletonBase from '../SkeletonBase/SkeletonBase';

function SkeletonListItem() {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-rectangle">
        {/* <SkeletonBase type="text" /> */}
        <SkeletonBase type="listing-image" />
        <SkeletonBase type="text list-item" />
        <SkeletonBase type="text list-item" />
        <SkeletonBase type="text list-item" />
        <SkeletonBase type="text mansion-item-agent" />
      </div>
      <Shimmer />
    </div>
  );
}

export default SkeletonListItem;
