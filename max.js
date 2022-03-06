function LargestNumber(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}

var larger = LargestNumber(500, 1000, 800);
console.log(larger, "my larger");

function SmallestNumber(First_Number, Second_number, Third_Number) {
  var arr = [First_Number, Second_number, Third_Number];
  var mainarr = arr.sort((a, b) => b - a);
  var smallest;

  for (i = 0; i < mainarr.length; i++) {
    // console.log(i);

    if (i < i + 1) {
      smallest = mainarr[i];
    } else {
      smallest = mainarr[i + 1];
    }
  }

  console.log(smallest, "lalal", mainarr);
}

SmallestNumber(100, 500, 300);
// console.log(result,'Small Number');

function mySmallestNumber(arrynumber) {
  var newarray = arrynumber[0];

  for (i = 1; i < arrynumber.length; i++) {
    if (arrynumber[i] < newarray) {
      newarray = arrynumber[i];
    }
  }

  return newarray;
}

const arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4];

var result = mySmallestNumber(arr);

console.log(result);

function FindLargeNumber(Largeumbers) {
  var SetNumber = Largeumbers[0];

  for (i = 0; i < Largeumbers.length; i++) {
    var largerElement = Largeumbers[i];

    if (largerElement > SetNumber) {
      SetNumber = largerElement;
    }
  }
  return SetNumber;
}

var large = [54, 60, 85];

var largeResult = FindLargeNumber(large);

console.log(largeResult, "Boro Number");
