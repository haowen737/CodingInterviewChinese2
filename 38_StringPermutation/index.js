// Code same as leetcode-cn.com
// 46.全排列

function Permutation(pStr) {
  if (!pStr) return null

  let begin = 0

  core(pStr, begin)
}

function core(pStr, begin) {
  if (begin === pStr.length) {
    print(pStr)
    return
  }

  for (let i = begin; i < pStr.length; i++) {
    const str = pStr.split('')
    const temp = str[i]
    str[i] = str[begin]
    str[begin] = temp

    core(str.join(''), begin + 1)
  }
}

function print(str) {
  console.log(str)
}
// ====================测试代码====================
function Test(pStr) {
    if(pStr == null)
        console.log("Test for null begins:\n");
    else
        console.log("Test for %s begins:\n", pStr);

    Permutation(pStr);

    console.log("\n");
}

;(function main() {
    Test(null);

    const string1 = "";
    Test(string1);

    const string2 = "a";
    Test(string2);

    const string3 = "ab";
    Test(string3);

    const string4 = "abc";
    Test(string4);

    return 0;
})()