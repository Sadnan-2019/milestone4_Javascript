function picnicBudget(Students) {

          if(Students>200){

                    Students = Students *3000;
          }

          else if(Students>100){
                    Students = Students *4000;

          }

          else if(Students<100){
                    Students = Students *5000;

          }
        
          return Students;
        }
        
        var StudentsOfPicnic = picnicBudget(101);
        
        console.log("Picnic Budget", StudentsOfPicnic);