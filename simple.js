function ConsoleNumber(i) {
  if (i > 6) {
    return "DONE";
  }

  console.log(i);
  ConsoleNumber((i = i + 1));
}
ConsoleNumber(1);

let sum = 0;

/* for (let i = 5; i >= 1; i--) {
  sum = sum + i;
}
console.log(sum); */

function sum1(i) {
  console.log(i);
  if (i <= 1) {
    return 1;
  }

  return i + sum1(--i);
}

console.log(sum1(5));

function NewFactoreal(number) {
  if(number==1){
            return 1;

  }
            return number * NewFactoreal(--number );
  
}

console.log(NewFactoreal(4));
