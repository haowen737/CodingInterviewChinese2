function Print1ToMaxOfNDigits_1(n) {
  if (n < 0) return
  let number = new Array(n).fill(0)

  while(!increase(number)) {
    printNumber(number)
  }
}

function increase(number) {
  let isOverflow = false
  let nTakeOver = 0

  for (let i = number.length - 1; i >= 0 ; i--) {
    // const 
    let nSum = +number[i] + nTakeOver
    if (i === number.length -  1) nSum++

    if (nSum >= 10) {
      if (i === 0) {
        isOverflow = true
      } else {
        nSum = nSum - 10
        nTakeOver = 1
        number[i] = nSum
      }
    } else {
      number[i] = number[i] = nSum
    }
  }
  return isOverflow
}

function printNumber(number) {
  let isBeginning0 = true
  for (let i = 0; i < number.length; i++) {
    if (isBeginning0 && number[i] !== 0) {
      isBeginning0 = false
    }
    if (!isBeginning0) {
      console.log(number.slice(i, number.length).join(''))
      break
    }
  }
}


function Print1ToMaxOfNDigits_2(n) {
  if(n <= 0) return
  const number = new Array(n)

  for (let i = 0; i < 1; i++) {
    number[n - 1] = i
    Print1ToMaxOfNDigitsRecursively(number, n, 0)
  }
}

function Print1ToMaxOfNDigitsRecursively(number, n, index) {
  if (index === n) {
    printNumber(number)
    return
  }

  for (let i = 0; i < 10; i++) {
    number[index + 1] = i
    Print1ToMaxOfNDigitsRecursively(number, n, index + 1)
  }
}

// ====================测试代码====================
function Test(n)
{
    console.log("Test for %d begins:\n", n);

    // Print1ToMaxOfNDigits_1(n);
    Print1ToMaxOfNDigits_2(n);

    console.log("\nTest for %d ends.\n", n);
}

;(function main() {
    Test(1);
    Test(2);
    Test(3);
    Test(0);
    Test(-1);

    return 0;
})()