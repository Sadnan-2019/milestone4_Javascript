function anaToVori(ShonerAna) {
  if (typeof ShonerAna !== "number") {
    return "Plaease Input Number";
  } else if (ShonerAna < 0) {
    return "Please Enter Valid Number";
  }

  var SearchingVori = 16;

  var FoundVori = ShonerAna / SearchingVori;
  // console.log(FoundVori);

  return FoundVori;
}

var ana = anaToVori(400);
console.log(ana);
