function FindNumsAppearOnce(data, length) {
  let result = 0
  for (let index = 0; index < length; index++) {
    result ^= data[index]
  }

  const firstBitIs1 = FindFirstBitIs1(result)
  for (let index = 0; index < length; index++) {
    if ()
  }

}

function FindFirstBitIs1(num) {
  // let index = 0
  return num.toString().reverse().split('').findIndex(x => x == 1)
}
// ====================测试代码====================
function Test(testName, data, length, expected1, expected2)
{
    if(testName != null)
        console.log("%s begins: ", testName);

    // const result1, result2;
    const [ result1, result2 ] = FindNumsAppearOnce(data, length);

    if((expected1 == result1 && expected2 == result2) ||
        (expected2 == result1 && expected1 == result2))
        console.log("Passed.\n\n");
    else
        console.log("Failed.\n\n");
}

function Test1()
{
    const data = [ 2, 4, 3, 6, 3, 2, 5, 5 ];
    Test("Test1", data, data.length, 4, 6);
}

function Test2()
{
    const data = [ 4, 6 ];
    Test("Test2", data, data.length, 4, 6);
}

function Test3()
{
    const data = [ 4, 6, 1, 1, 1, 1 ];
    Test("Test3", data, data.length, 4, 6);
}

;(function main() {
    Test1();
    Test2();
    Test3();

    return 0;
})()

