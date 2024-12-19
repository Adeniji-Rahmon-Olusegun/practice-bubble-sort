
function bubbleSort(arr) {

    // Iterate through the array
    for (let idx = 0; idx < arr.length - 1; idx++) {
      let flag = 0;

      for (let jdx = 0; jdx < arr.length - 1 - idx; jdx++) {
        // If the current value is greater than its neighbor to the right
        if (arr[jdx] > arr[jdx + 1]) {
          // Swap those values
          [arr[jdx], arr[jdx + 1]] = [arr[jdx + 1], arr[jdx]];

          console.log(arr.join(","));

          flag = 1;
        }
      }

      if (flag === 0) break;

    }

    return;
}

console.log(bubbleSort([2,4,6,8,1,3,5,7,9]));


module.exports = bubbleSort;