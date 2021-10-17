import SkeletonBase from '../SkeletonBase/SkeletonBase';

function SkeletonRectangle() {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-rectangle">
        <SkeletonBase type="rectangle" />
      </div>
    </div>
  );
}

export default SkeletonRectangle;
