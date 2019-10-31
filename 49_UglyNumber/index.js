function isUgly(number) {

  // if (!number) return false

  while (number % 2 === 0) number /= 2

  while (number % 3 === 0) number /= 3

  while (number % 5 === 0) number /= 5

  return number === 1
}

function GetUglyNumber_Solution1(index) {
  let i = 0
  let number = 0
  while (i < index) {
    number += 1

    if (isUgly(number)) {
      i++
    }
  }

  return number
}

function GetUglyNumber_Solution2(index) {
  if (index <= 0) return 0

  let numbers = [] 
  numbers[0] = 1

  let nextIndex = 1
  let pMultiply2 = numbers.length
  let pMultiply3 = numbers.length
  let pMultiply5 = numbers.length

  while(nextIndex < index) {
    let min = Math.min(
      pMultiply2 * 2,
      pMultiply3 * 3,
      pMultiply5 * 5,
    )
    numbers[nextIndex] = min

    while(pMultiply2 * 2 <= numbers[nextIndex]) ++pMultiply2
    while(pMultiply3 * 3 <= numbers[nextIndex]) ++pMultiply3
    while(pMultiply5 * 5 <= numbers[nextIndex]) ++pMultiply5

    ++nextIndex
  }

  return numbers[numbers.length - 1]

}
// ====================测试代码====================
function Test(index, expected)
{
    // const result1 = GetUglyNumber_Solution1(index)
    // console.log(`solution1 result=${result1};expect=${expected}`);
    // if(result1 == expected)
    //     console.log("solution1 passed\n");
    // else
    //     console.log("solution1 failed\n");

    const result2 = GetUglyNumber_Solution2(index)
    console.log(`solution2 result=${result2};expect=${expected}`);
    if(result2 == expected)
        console.log("solution2 passed\n");
    else
        console.log("solution2 failed\n");
}

;(function main() {
    Test(1, 1);

    Test(2, 2);
    Test(3, 3);
    Test(4, 4);
    Test(5, 5);
    Test(6, 6);
    Test(7, 8);
    Test(8, 9);
    Test(9, 10);
    Test(10, 12);
    Test(11, 15);

    Test(1500, 859963392);

    Test(0, 0);

    return 0;
})()

