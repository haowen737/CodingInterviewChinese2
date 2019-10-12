function movingCount(threshold, rows, cols) {
  const visited = new Map()
  const count = movingCountCore(threshold, rows, cols, 0, 0, visited)
  return count
}

function movingCountCore(threshold, rows, cols, row, col, visited) {
  let count = 0
  const key = `${row},${col}`

  if (
    row < rows && row >= 0 &&
    col < cols && col >= 0 &&
    !visited.has(key) &&
    accessable(row, col, threshold)
  ) {
    visited.set(key, true)

    count = 1
      + movingCountCore(threshold, rows, cols, row - 1, col, visited)
      + movingCountCore(threshold, rows, cols, row + 1, col, visited)
      + movingCountCore(threshold, rows, cols, row, col - 1, visited)
      + movingCountCore(threshold, rows, cols, row, col + 1, visited)
  }
  
  return count
}


function accessable(row, col, threshold) {
  return row.toString().split('').concat(
    col.toString().split('')
  ).reduce((total, next) => {
    return total + +next
  }, 0) <= threshold
}

function test(testName, threshold, rows, cols, expected)
{
    if(testName != null)
        console.log("%s begins: ", testName);

    if(movingCount(threshold, rows, cols) == expected)
        console.log("Passed.\n");
    else
        console.log("FAILED.\n");
}


// 方格多行多列
function test1()
{
    test("Test1", 5, 10, 10, 21);
}

// 方格多行多列
function test2()
{
    test("Test2", 15, 20, 20, 359);
}

// 方格只有一行，机器人只能到达部分方格
function test3()
{
    test("Test3", 10, 1, 100, 29);
}

// 方格只有一行，机器人能到达所有方格
function test4()
{
    test("Test4", 10, 1, 10, 10);
}

// 方格只有一列，机器人只能到达部分方格
function test5()
{
    test("Test5", 15, 100, 1, 79);
}

// 方格只有一列，机器人能到达所有方格
function test6()
{
    test("Test6", 15, 10, 1, 10);
}

// 方格只有一行一列
function test7()
{
    test("Test7", 15, 1, 1, 1);
}

// 方格只有一行一列
function test8()
{
    test("Test8", 0, 1, 1, 1);
}

// 机器人不能进入任意一个方格
function test9()
{
    test("Test9", -10, 10, 10, 0);
}

;(function main() {
    test1();
    test2();
    test3();
    test4();
    test5();
    test6();
    test7();
    test8();
    test9();

    return 0;
})()
