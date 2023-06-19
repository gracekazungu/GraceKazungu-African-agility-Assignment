// AFRICA AGILITY (THURSDAY, WEEK ONE)

// ASSIGNMENT

// 1. Write a function expression to find the maximum of two numbers and assign it to a variable
// called max.
const max=function(num1,num2){
return num1 > num2 ? num1 : num2;
}
console.log(max(67,34))

// 2. Convert the following function into an arrow function:
// function greet(name){
//     return 'Hello' +name +'!';
// }
const greet=(name)=>{
    return 'Hello' + name +'!';
}
console.log(greet('Grace'))

// 3. Create a higher order function called filter that takes an array and a callback function. The filter
// function should return a new array with only the elements that pass the callback function's test.
function filter(array,callback){
  const filteredArray=[]
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
          filteredArray.push(array[i]);
        }
      }
    
      return filteredArray;
    }
    const array = [10, 9, 3, 4, 5,30,31];
  
  function evenNum(number) {
    return number % 2 === 0;
  }
  
  const filteredNumbers = filter(array, evenNum);
  console.log(filteredNumbers); 


// 4. Write a callback function called square that takes a number as an argument and returns its square
// value.
function squarenum(number,callback){
    let square=number**2
    return callback(square)
}
function result(square){
  console.log(square)
}
squarenum(8,result)

// 5. Rewrite the following code using ES6 syntax:
// var name='John';
// var age=25;
// var message='My name is' + name + 'and I am ' + age +' years old.'
const greetPerson=(name,agee)=>{
  return 'My name is' + name+ 'and I am '+ agee+'years old.'
}
console.log(greetPerson('John',25))


// N:B:
// • Input your full name as the document name.
// • You can send your work as a node js file or use any application convenient but ensure I can see
// your code and output.

// Submission Address:
// Ogbu106@gmail.com
// Mr.Ogbu Princewill.

// SUBMISSION DEADLINE IS 2PM, MONDAY, 19Th June,2023. WEST AFRICAN TIME(WAT)