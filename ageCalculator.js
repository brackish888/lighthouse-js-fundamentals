var name =" ";
var birthyear,currentyear;
function ageCalculator(name,birthyear,currentyear)
{
  var age = currentyear -birthyear;
  return (name+ " is " + age + " years old.");

}
 console.log(ageCalculator("rachel",1960,2021));
