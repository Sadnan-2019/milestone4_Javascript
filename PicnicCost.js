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

var StudentsOfPicnic = picnicBudget(1);

console.log(StudentsOfPicnic);
