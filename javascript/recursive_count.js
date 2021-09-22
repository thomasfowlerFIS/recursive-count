const recursiveCount = (num = 0, arr = []) => {
  if (num >= 0) {
    if (arr.length === 0) {
      let range = [...Array(num).keys()]
      if (range.length > 0 ) {
        console.log(range[0])
        recursiveCount(--num, range.slice(1))
      }
    } else if (arr.length > 0) {
      console.log(arr[0])
      recursiveCount(--num, arr.slice(1))
    }
  }
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution

// recursiveCount(10);