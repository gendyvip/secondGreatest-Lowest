function secondLowest(numbers) {
  var lowest;
  var sortedArray = numbers.sort(function (a, b) {
    return a - b;
  });
  lowest = sortedArray[0];
  for (var i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] > lowest) return sortedArray[i];
  }
}
function secondGreates(numbers) {
  var greatest;
  var sortedArray = numbers.sort(function (a, b) {
    return b - a;
  });
  greatest = sortedArray[0];
  for (var i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] < greatest) return sortedArray[i];
  }
}
var arr = [1, 2, 3, 4, 5, 1, 5];
console.log(secondLowest(arr));
console.log(secondGreates(arr));
