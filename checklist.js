function WoodTotal(quantity) {
  var ChairWood = 3;
  var TableWood = 10;
  var BedWood = 50;

  // var elements =quantity[0]
  var TotalChair = ChairWood * quantity[0];
  var TotalTable = TableWood * quantity[1];
  var TotalBed = BedWood * quantity[2];
  var Alltotal = TotalChair + TotalTable + TotalBed;

  // console.log(newone)

  // return TotalChair;
  return Alltotal;

  // console.log(TotalChair)
}
var quentity = [10, 15, 20];
const WoodPass = WoodTotal(quentity);
console.log(WoodPass, "kkk");
