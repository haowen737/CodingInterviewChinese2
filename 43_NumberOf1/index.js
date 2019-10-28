function NumberOf1Between1AndN_Solution1(n) {
  if (n === 1) return 1

  let count = 0
  for (let i = 1; i <= n; i++) {
    count += NumberOf1(i)
  }

  return count
}

function NumberOf1(n) {
  let count = 0

  while(n > 0) {
    if (n % 10 == 1) count++

    n = Math.floor(n / 10)
  }

  return count
}

function NumberOf1Between1AndN_Solution2(n) {
  if (!n) return 0

  const strNumber = n.toString()
  const length = strNumber.length

  let first = +strNumber[0]

  // 0
  if (length === 1 && first === 0) return 0
  // 2,3,4
  if (length === 1 && first > 0) return 1

  let numFirst = 0
  if (first > 1) {
    numFirst = PowerBase10(length - 1)
  } else if (first === 1) {
    numFirst = length + 1
  }

  let numOtherDigits = first * (length - 1) * PowerBase10(length - 2)
  let numRecursive = NumberOf1(strNumber.slice(1,strNumber.length - 1))

  return numFirst + numOtherDigits + numRecursive
}

function PowerBase10(n) {
  let result = 1
  for(let i = 0; i < n; i++) {
    result *= 10
  }

  return result
}
// ====================测试代码====================
function Test(testName, n, expected)
{
    if(testName != null)
        console.log("%s begins: \n", testName);
    
        const result1 = NumberOf1Between1AndN_Solution1(n)
        console.log('result1', result1, 'expected', expected)
    if(result1 == expected)
        console.log("Solution1 passed.\n");
    else
        console.log("Solution1 failed.\n"); 
    
        const result2 = NumberOf1Between1AndN_Solution2(n)
        console.log('result2', result2, 'expected', expected)
    if(result2 == expected)
        console.log("Solution2 passed.\n");
    else
        console.log("Solution2 failed.\n"); 

    console.log("\n");
}

;(function main() {
  Test("Test1", 1, 1);
  Test("Test2", 5, 1);
  Test("Test3", 10, 2);
  Test("Test4", 55, 16);
  Test("Test5", 99, 20);
  Test("Test6", 10000, 4001);
  Test("Test7", 21345, 18821);
  Test("Test8", 0, 0);

    return 0;
})()

