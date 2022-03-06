const fibo = [0, 1];

for (let i = 2; i <= 10; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}

console.log(fibo);

function FibonacciSeries(numbers) {
  fiboo = [0, 1];

  for (i = 2; i <= numbers; i++) {
    fiboo[i] = fiboo[i - 1] + fiboo[i - 2];
  }
  return fiboo;
}

var fibok = FibonacciSeries(13);
console.log(fibok);
