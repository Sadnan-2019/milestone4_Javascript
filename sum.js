const myArray = [20, 25, 52, 20];

let sum = 0;
for (i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  sum = sum + element;
}
console.log(sum, "jjj");

function SumFunction(numbers) {
  let total = 0;
  for (i = 0; i < numbers.length; i++) {
    var tempelement = numbers[i];

    total = total + tempelement;
  }

  console.log(total, "DONE");
}

const someArray = SumFunction([20, 30, 40, 50, 60]);
