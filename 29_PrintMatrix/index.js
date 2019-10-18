
function PrintMatrixClockwisely(numbers, columns, rows) {
  if (numbers === null || !columns || !rows) return null

  let start = 0
  while(columns > start * 2 && rows > start * 2) {
    PrintMatrixInCircle(numbers, columns, rows, start)
    start++
  }
}

function PrintMatrixInCircle(numbers, columns, rows, start) {
  const endX = columns - start - 1
  const endY = rows - start - 1

  // ➡️
  for (let i = start; i <= endX; i++) {
    print(numbers[start][i])
  }

  // ⬇️ 终止行号 > 起始行号
  if (endY > start) {
    for (let i = start + 1; i <= endY; i++) {    
      print(numbers[i][endX])
    }
  }

  // ⬅️ 终止行号 > 起始行号  && 终止列 > 起始列
  if (endY > start && endX > start) {
    for (let i = endX - 1; i >= start + 1; i--) {
      print(numbers[endY][i])
    }
  }

  // ⬆️ 终止行号 > 起始行号  && 终止列 > 起始列 + 1
  if (endY - 1 > start && endX > start) {
    for (let i = endY - 1; i >= start + 1; i--) {
      print(numbers[i][start]) 
    }
  }

}

function print(n) {
  console.log(n)
}

// ====================测试代码====================
function Test(columns, rows) {
    console.log("Test Begin: %d columns, %d rows.\n", columns, rows);

    if(columns < 1 || rows < 1)
        return;

    let numbers = new Array(rows)
    for(let i = 0; i < rows; ++i)
    {
        numbers[i] = new Array(columns);
        for(let j = 0; j < columns; ++j)
        {
            numbers[i][j] = i * columns + j + 1;
        }
    }

    console.log('current numbers', numbers)
    PrintMatrixClockwisely(numbers, columns, rows);
    console.log("\n");

    // for(int i = 0; i < rows; ++i)
    //     delete[] (int*)numbers[i];

    // delete[] numbers;
}

;(function main() {
    /*
    1    
    */
    Test(1, 1);

    /*
    1    2
    3    4
    */
    Test(2, 2);

    /*
    1    2    3    4
    5    6    7    8
    9    10   11   12
    13   14   15   16
    */
    Test(4, 4);

    /*
    1    2    3    4    5
    6    7    8    9    10
    11   12   13   14   15
    16   17   18   19   20
    21   22   23   24   25
    */
    Test(5, 5);

    /*
    1
    2
    3
    4
    5
    */
    Test(1, 5);

    /*
    1    2
    3    4
    5    6
    7    8
    9    10
    */
    Test(2, 5);

    /*
    1    2    3
    4    5    6
    7    8    9
    10   11   12
    13   14   15
    */
    Test(3, 5);

    /*
    1    2    3    4
    5    6    7    8
    9    10   11   12
    13   14   15   16
    17   18   19   20
    */
    Test(4, 5);

    /*
    1    2    3    4    5
    */
    Test(5, 1);

    /*
    1    2    3    4    5
    6    7    8    9    10
    */
    Test(5, 2);

    /*
    1    2    3    4    5
    6    7    8    9    10
    11   12   13   14    15
    */
    Test(5, 3);

    /*
    1    2    3    4    5
    6    7    8    9    10
    11   12   13   14   15
    16   17   18   19   20
    */
    Test(5, 4);

    return 0;
})()

