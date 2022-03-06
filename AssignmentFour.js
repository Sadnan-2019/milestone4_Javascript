function anaToVori(ShonerAna) {
          if (typeof ShonerAna !== "number") {
            return "Please Input Number";
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
        

        function picnicBudget(Students) {
          var result;
        
          if (typeof Students !== "number") {
            return "Please give number";
          }
        
          if (Students <= 100) {
            result = Students * 5000;
            //console.log(Students);
          } else if (Students > 100 && Students <= 200) {
            var SecondExtraStudents = Students - 100;
            var Firststudent = 100 * 5000;
            var SecondStudent = SecondExtraStudents * 4000;
            result = Firststudent + SecondStudent;
            // console.log(Students);
          } else if (Students > 200) {
            var ThiredExtraStudents = Students - 200;
            //console.log(ThiredExtraStudents);
            var ThirdStudent = 100 * 5000;
            var FourStudent = 100 * 4000;
            var FiveStudent = ThiredExtraStudents * 3000;
            result = ThirdStudent + FourStudent + FiveStudent;
            //console.log(result);
          }
          //console.log(result);
          return result;
        }
        
        var StudentsOfPicnic = picnicBudget(233);
        
        console.log(StudentsOfPicnic);
        

        function oddFriend(myFriends) {
          // var FirstFriend = myFriends[0];
        
          
        
          for (i = 0; i < myFriends.length; i++) {
        
            if(typeof myFriends[i] !== "string"){
        
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
        