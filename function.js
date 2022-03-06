/// function delaration

function startWork() {
  console.log("my first function");
  console.log("my first end");
}

///call the function
startWork();
startWork();

function bringWeed(taka) {
  console.log("this is " + taka);
  var quentity = 10;
  var DWedd = taka / quentity;

  console.log("takeme" + DWedd);
  return DWedd;
}
var money = 100;
var ForWEED = bringWeed(money);
console.log(ForWEED, "welcome");

function evenNumber(tes) {
  // console.log('now ok');
  // var me=5;
  // var masme= tes /me;

  // console.log(masme + " love you")

  for (i = 1; i < tes; i++) {
    if (i % 2 == 0) {
      console.log(".....EVEN", i);
    } else {
      console.log("...............ODD", i);
    }
  }
}

evenNumber(100);

function LargerNumber(num1, num2, num3) {
  if (num3 >= num3 && num3 >= num2) {
    console.log("this true");
  } else {
    console.log("false");
  }

  console.log("happy");
}

var one = 20;
var two = 50;
var three = 60;

LargerNumber(one, two, three);

function addKormu(first, second) {
  var addfol = first * second;
  console.log(addfol, "jogfol");
}

var addone = 10;
var addtwo = 10;
var addtwoNumber = addKormu(addone, addtwo);

function InchestoFeet(Pinches) {
  var Inchi = 12;
  var feet = Pinches / Inchi;
  console.log("my ", parseInt(feet));
}

var OriginalInchi = 164;
var result = InchestoFeet(OriginalInchi);

function millesToKilo(mile) {
  var kilo = 1.623;
  var miletoKillo = kilo * mile;
  // console.log('mile',miletoKillo)
  return miletoKillo;
}

var Omile = 15;
var CallMile = millesToKilo(Omile);
console.log("Miles far miles", CallMile);

function IsitLeapYear(year) {
  if (year % 400 == 0) {
    // console.log(">>>>>", year)
    return true;
  } else if (year % 100 != 0 && year % 4 == 0) {
    return true;
  } else {
    console.log(year, " not lEAP YEAR");
    return false;
  }
}

// IsitLeapYear(2021)

var Year = 2021;
var Pyear = IsitLeapYear(Year);
console.log(Pyear, "lEAP YEAR");

function Factoriel(fact) {
  let factoreal = 1;

  for (let i = 1; i <= fact; i++) {
    factoreal = factoreal * i;
    // console.log(factoreal,"sucess")
    // return factoreal;
  }
  return factoreal;
}

// var factvalue=5;
var factF = Factoriel(5);
console.log(factF, "now ok");

function WhileFact(number) {
  let Whilefacto = 1;
  let i = 1;
  while (i <= number) {
    Whilefacto = Whilefacto * i;
    i++;
  }

  return Whilefacto;
}

var Second = WhileFact(7);
console.log(Second, "seven");

function DoFharenhiet(num1, num2, num3) {
  var Num1Num2 = num1 * num2;

  var TOTAL = Num1Num2 + num3;
  return TOTAL;
}

var Celcius = DoFharenhiet(8, 1.8, 32);
console.log(Celcius, "Ami farenheit");

function DoCelcius(Fvalue, Svalue, Tvalue) {
  var Num1num2 = Fvalue - Svalue;
  var result = Num1num2 / Tvalue;
  return result;
}

var Fatenheit = DoCelcius(103, 32, 1.8);
console.log(Fatenheit, "ami celcius");

function BestFriend(friends) {
  var result = [0];

  for (i = 0; i <= friends.length; i++) {
    // var  myfriends = friends[i];
    if (friends[i].length > result[0].length) {
      result = friends[i];
    }
  }
  return result;
}
var friendslist = [
  "llllllllllllllllllllllllllllll",
  "polash",
  "mamun",
  "sadkatulshakil",
  "kakakakakakakakaka",
];

var passfriends = BestFriend(friendslist);
console.log(passfriends, "bestf");
