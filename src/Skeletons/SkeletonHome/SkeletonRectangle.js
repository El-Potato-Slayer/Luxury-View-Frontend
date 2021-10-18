import Shimmer from '../../Components/Shimmer/Shimmer';
import SkeletonBase from '../SkeletonBase/SkeletonBase';

function SkeletonRectangle() {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-rectangle">
        <SkeletonBase type="home-newest-item" />
        <Shimmer />
      </div>
    </div>
  );
}

export default SkeletonRectangle;
