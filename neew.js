//  result = "";
function BestFriend(friends) {
  var  result = friends[0];

  for (i = 0; i < friends.length; i++) {
    // var  myfriends = friends[i];
    if (friends[i].length > result.length) {
      result = friends[i];
    }
  }
  return result;
}
var friendslist = [
  "ll",
  "polash",
  "mamun",
  "sadkatulshakil",
  "kakakakakakakakakakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
];

var passfriends = BestFriend(friendslist);
console.log(passfriends, "bestf");

var array = ["ami", 2, 3, 4, 5];
console.log(array.length[0]);
console.log(array[array.length - 1]);
// console.log(array[2])

/* function FeetToinchs(){



}



var feet=([1]) */

/* function FindPrimeNumber(numbers){
      
            for(i=0; i<numbers.length; i++){
                  var flg = 0;
              // console.log(numbers[i]/2,"console");
            //   return (Math.sqrt((a * a) + (b * b)));

              for(j =2;j<Math.sqrt(numbers[i]); j++){
            
                if(numbers[i]%j == 0 ){
                  flg = 1;
                   break; 
              }
            }
              if(flg==0){
                console.log(numbers[i]," prime");
              }

              else{
                  console.log(numbers[i],"Not prime");


              }
            }
            // for(i=0;i<numbers.length;i++)
      
            //      {
      
            //            var counter=0;
            
            //              for(j=2;j<numbers[i];j++)
      
            //            {
      
            //                  if(numbers[i]%j==0)
      
            //                  {
            
            //                        counter=1;
      
            //                        break;
      
            //                  }
            
            //            }
            
            //            if(counter==0)
      
            //            {
      
            //             console.log(numbers[i],"is Prime");
      
            //            }

            //      }
             


}
 
var PrimeNumber=([20,2,3,4,60,40,5]);
var CallPrime=FindPrimeNumber(PrimeNumber); */
