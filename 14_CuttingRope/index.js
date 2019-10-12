function maxProductAfterCutting_solution1(length) {
  if (length < 2) return 0
  if (length === 2) return 1
  if (length === 3) return 2

  const products = {}
  products[0] = 0
  products[1] = 1
  products[2] = 2
  products[3] = 3

  for (let i = 4; i <= length; i++) {
    let max = 0
    for (let j = 1; j <= i / 2; j++) {
      const product = products[j] * products[i - j]
      max = max > product ? max : product
      products[i] = max
    }
  }
  return products[length]
}

function maxProductAfterCutting_solution2() {
  return true
}

function test(testName, length, expected) {
  const result1 = maxProductAfterCutting_solution1(length);
  if(result1 == expected)
      console.log("Solution1 for ", testName, " passed.")
  else
      console.log("Solution1 for ", testName, " FAILED.")

  // const result2 = maxProductAfterCutting_solution2(length);
  // if(result2 == expected)
  //     console.log("Solution2 for ", testName, " passed.")
  // else
  //     console.log("Solution2 for ", testName, " FAILED.")
}

function test1() {
  const length = 1;
  const expected = 0;
  test("test1", length, expected);
}

function test2() {
  const length = 2;
  const expected = 1;
  test("test2", length, expected);
}

function test3() {
  const length = 3;
  const expected = 2;
  test("test3", length, expected);
}

function test4() {
  const length = 4;
  const expected = 4;
  test("test4", length, expected);
}

function test5() {
  const length = 5;
  const expected = 6;
  test("test5", length, expected);
}

function test6() {
  const length = 6;
  const expected = 9;
  test("test6", length, expected);
}

function test7() {
  const length = 7;
  const expected = 12;
  test("test7", length, expected);
}

function test8() {
  const length = 8;
  const expected = 18;
  test("test8", length, expected);
}

function test9() {
  const length = 9;
  const expected = 27;
  test("test9", length, expected);
}

function test10() {
  const length = 10;
  const expected = 36;
  test("test10", length, expected);
}

function test11() {
  const length = 50;
  const expected = 86093442;
  test("test11", length, expected);
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
    test10();
    test11();

    return 0;
})();
