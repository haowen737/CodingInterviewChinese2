function digitAtIndex(index) {
  if (!index) return 0
  const strN = index.toString()
  const length = strN.length

  let digit = 1
  while (true) {
    const numbers = countOfIntegers(digit)

    if (index < numbers * digit)
      return digitAtIndex2(index, digit)

    index -= digit * numbers
    digit++
  }

  return -1
}

function digitAtIndex2(index, digit) {
  let number = beginNumber(digit) + index / digit
  let indexFromRight = digit - Math.floor(index % digit)

  for (let i = 0; i < indexFromRight; i++) number /= 10

  return Math.floor(number % 10)
}

function beginNumber(digits) {
  if (digits === 1) return 0

  return Math.pow(10, digits - 1)
}

function countOfIntegers(digit) {
  if (digit === 1) return 10

  return 9 * Math.pow(10, digit - 1)
}
// ====================测试代码====================
function test(testName, inputIndex, expectedOutput) {
	if(digitAtIndex(inputIndex) == expectedOutput)
		console.log(testName, " passed.");
	else
		console.log(testName, " FAILED.");
}


;(function main() {
	test("Test1", 0, 0);
	test("Test2", 1, 1);
	test("Test3", 9, 9);
	test("Test4", 10, 1);
	test("Test5", 189, 9);  // 数字99的最后一位，9
	test("Test6", 190, 1);  // 数字100的第一位，1
	test("Test7", 1000, 3); // 数字370的第一位，3
	test("Test8", 1001, 7); // 数字370的第二位，7
	test("Test9", 1002, 0); // 数字370的第三位，0
	return 0;
})()