function Fibonacci_Solution1(n) {
  if (n == 0) return 0
  if (n == 1) return 1
  return Fibonacci_Solution1(n - 1) + Fibonacci_Solution1(n - 2)
}


function Fibonacci_Solution2(n) {
  if (n == 0) return 0
  if (n == 1) return 1

  let prev = 0
  let last = 1
  let number = 0
  for( let i = 2; i <= n; i++) {
    number = prev + last
    
    prev = last
    last = number
  }

  return number
}

console.log(Fibonacci_Solution2(6))