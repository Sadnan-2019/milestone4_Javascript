var factoreal = 1;
for (i = 1; i <= 4; i++) {
  // console.log(i);

  factoreal = factoreal * i;
  console.log(factoreal);
}

function DoFactoriel(factoreal) {
  let fact = 1;

  for (let i = 1; i <= factoreal; i++) {
    fact = fact * i;
  }
  console.log(fact);
}

DoFactoriel(5);

function DoNewFacttorel(number) {
  let NewFactoreal = 1;
  let i = number;
  while (i >= 1) {
    NewFactoreal = NewFactoreal * i;

    i--;
  }

  return NewFactoreal;
}

const FactoreSecond = DoNewFacttorel(7);

console.log(FactoreSecond, "77777");
