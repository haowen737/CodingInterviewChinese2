function getMaxValue_solution1(values, rows, cols) {
  if (!values || rows<= 0 || cols <= 0) return 0

  const maxValues = []

  for (let i = 0; i < rows; i++) {
    maxValues[i] = values[i]
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let left = 0
      let up = 0
      
      if (i > 0) up = values[i - 1][j]

      if (j > 0) left = values[i][j - 1]

      maxValues[i][j] = Math.max(left, up) + maxValues[i][j]
    }
  }


  const maxValue = maxValues[rows - 1][cols - 1]

  return maxValue
}

function getMaxValue_solution2() {}

// ====================测试代码====================
function test(testName, values, rows, cols, expected) {
  const result = getMaxValue_solution1(values, rows, cols)
  console.log('result', result, 'expect', expected)
    if(result == expected)
      console.log(testName, ": solution1 passed.");
    else
      console.log(testName, ": solution1 FAILED.");

    if(getMaxValue_solution2(values, rows, cols) == expected)
      console.log(testName, ": solution2 passed.");
    else
      console.log(testName, ": solution2 FAILED.");
}

function test1()
{
    // 三行三列
    const values = [
        [ 1, 2, 3 ],
        [ 4, 5, 6 ],
        [ 7, 8, 9]
    ]
    const expected = 29;
    test("test1", values, 3, 3, expected);
}

function test2()
{
    //四行四列
    const values = [
        [ 1, 10, 3, 8 ],
        [ 12, 2, 9, 6 ],
        [ 5, 7, 4, 11 ],
        [ 3, 7, 16, 5]
    ]
    const expected = 53;
    test("test2", values, 4, 4, expected);
}

function test3()
{
    // 一行四列
    const values = [
        [ 1, 10, 3, 8]
    ]
    const expected = 22;
    test("test3", values, 1, 4, expected);
}

function test4()
{
    const values = [
        [ 1 ],
        [ 12 ],
        [ 5 ],
        [ 3 ]
    ]
    const expected = 21;
    test("test4", values, 4, 1, expected);
}

function test5()
{
    // 一行一列
    const values = [
        [ 3 ]
    ]
    const expected = 3;
    test("test5", values, 1, 1, expected);
}

function test6()
{
     // 空指针
    const expected = 0;
    test("test6", nullptr, 0, 0, expected);
}

(function main() {
    test1();
    test2();
    test3();
    test4();
    test5();

    return 0;
})()
