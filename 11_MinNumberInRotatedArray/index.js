function Min(array) {
  let indexStart = 0
  let indexEnd = array.length - 1
  let indexMid = 0

  while (array[indexStart] >= array[indexEnd]) {

    if (indexEnd - indexStart === 1) {
      indexMid = indexEnd
      break
    }
    if (array[indexMid] === array[indexStart] && array[indexStart] === array[indexEnd]) {
      return array.sort()[0]
    }

    if (array[indexMid] >= array[indexStart]) {
      indexStart = indexMid
    } else if (array[indexMid] <= array[indexEnd]) {
      indexEnd = indexMid
    }

    indexMid = Math.ceil((indexEnd + indexStart) / 2)

    // indexMid = Math.ceil(array.length - 1)
  }

  return array[indexMid]
}

var array1 = [ 3, 4, 5, 1, 2 ]

// 有重复数字，并且重复的数字刚好的最小的数字
var array2 = [ 3, 4, 5, 1, 1, 2 ]
console.log(Min(array2) === 1)

// 有重复数字，但重复的数字不是第一个数字和最后一个数字
var array3 = [ 3, 4, 5, 1, 2, 2 ]
console.log(Min(array3) === 1)

// 有重复的数字，并且重复的数字刚好是第一个数字和最后一个数字
var array4 = [ 1, 0, 1, 1, 1 ]
console.log(Min(array4) === 0)

// 单调升序数组，旋转0个元素，也就是单调升序数组本身
var array5 = [ 1, 2, 3, 4, 5 ]
console.log(Min(array5) === 1)

// 数组中只有一个数字
var array6 = [ 2 ]
console.log(Min(array6) === 2)