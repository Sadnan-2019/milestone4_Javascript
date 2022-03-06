function pandaCost(SingaraQuantity, SomssaQuantity, JilapiQuantity) {
  if (
    typeof SingaraQuantity !== "number" ||
    typeof SomssaQuantity !== "number" ||
    typeof JilapiQuantity !== "number"
  ) {
    return "Please give a number";
  }
  var SingaraPrice = 7;
  var SomssaPrice = 10;
  var JilapiPrice = 15;
  var totalProductPrice = 0;

  var ProductOneTotal = SingaraQuantity * SingaraPrice;
  var ProductTwoTotal = SomssaQuantity * SomssaPrice;
  var ProductThreeTotal = JilapiQuantity * JilapiPrice;
  // console.log(ProductOneTotal);
  // console.log(ProductTwoTotal);
  // console.log(ProductThreeTotal);

  totalProductPrice = ProductOneTotal + ProductTwoTotal + ProductThreeTotal;
  return totalProductPrice;
}

var pandaShop = pandaCost(5, 5, 15);
console.log(pandaShop);
