function oddFriend(myFriends) {
  // var FirstFriend = myFriends[0];

  

  for (i = 0; i < myFriends.length; i++) {
    // console.log(myFriends);

    if(typeof myFriends[i] !== "string"){
      // console.log(myFriends[i]);

      return "please give string";
    }

    if (myFriends[i].length % 2 != 0) {
      // console.log(myFriends[i],"oddd")
      // break;

      return myFriends[i];
    }
  }
}

var Friends = ["robi", "mamunura", "shakil", "arman", "sadakatul"];
var CallOddFriends = oddFriend(Friends);
console.log(CallOddFriends);
