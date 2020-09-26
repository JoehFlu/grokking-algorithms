const arr = [5, 9, 11, 15, 18];

function binarySearch(arr, item, left = 0, right = arr.length - 1) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const guess = arr[mid];
    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      right = mid - 1;
    }
    if (guess < item) {
      left = mid + 1;
    }
  }
  return null;
}

console.log(binarySearch(arr, 15)); // 3
console.log(binarySearch(arr, 21)); // null
