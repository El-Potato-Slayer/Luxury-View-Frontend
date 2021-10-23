// /* eslint-disable */
export function getRandomElements(arr, n) {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

export function priceOutput(price) {
  return parseInt(price, 10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function sortMansionByNewest(mansions) {
  return mansions.sort((a, b) => b.id - a.id);
}

export function showSuccess(success) {
  if (success) {
    return (
      <p>{success}</p>
    );
  }
  return null;
}

export function showDeleteError(error) {
  if (error) {
    return (
      <p>{error}</p>
    );
  }
  return null;
}

export const mainRooms = (mansion) => mansion.rooms.filter((room) => (
  room.name === 'Bedrooms' || room.name === 'Bathrooms'
));
