Array.prototype.sequentialSearch = function (target) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === target) {
      return i;
    }
  }
  return -1;
}

const res = [5, 4, 9, 1, 2, 7, -1].sequentialSearch(0);
console.log('res', res);