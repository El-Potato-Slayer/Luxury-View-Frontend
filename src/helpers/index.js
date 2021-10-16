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
