function NumberOf1_Solution1(number) {
  let count = 0

  while(number) {
    number = number >> 1
  }
}

function NumberOf1_Solution2() {}


// ====================测试代码====================
function Test(number, expected)
{
    const actual = NumberOf1_Solution1(number);
    if (actual == expected)
        printf("Solution1: Test for %p passed.\n", number);
    else
        printf("Solution1: Test for %p failed.\n", number);

    // const actual2 = NumberOf1_Solution2(number);
    // if (actual2 == expected)
    //     printf("Solution2: Test for %p passed.\n", number);
    // else
    //     printf("Solution2: Test for %p failed.\n", number);

    printf("\n");
}

;(function main() {
    // 输入0，期待的输出是0
    Test(0, 0);

    // 输入1，期待的输出是1
    Test(1, 1);

    // 输入10，期待的输出是2
    Test(10, 2);

    // 输入0x7FFFFFFF，期待的输出是31
    Test(0x7FFFFFFF, 31);

    // 输入0xFFFFFFFF（负数），期待的输出是32
    Test(0xFFFFFFFF, 32);

    // 输入0x80000000（负数），期待的输出是1
    Test(0x80000000, 1);

    return 0;
})();

