Array.prototype.binarySearch = function (target) {
  let low = 0;
  let high = this.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (this[mid] < target) {
      low = mid + 1;
    } else if (this[mid] > target) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

const res = [1, 2, 3, 4, 5].binarySearch(4);
console.log('res', res);