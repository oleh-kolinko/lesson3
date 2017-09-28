var array = [1,2,3,4,5,6,7,8,9,10];

array.forEach( function (element) {
  console.log(element + 1);
});

var array2 = array.map( function (element){
  return element + 1;
})

var array3 = array.filter( function (element){
  // if(element > 3){
  //   return true
  // }else{
  //   return false
  // }

  return (element > 3);
})

console.log('----------')
console.log('array1 = ', array);
console.log('array2 = ',array2);
console.log('array3 = ',array3);


//ES6
//1. let / const
// let number = 1;
// const number2 = 2;
//
// function add2numb( a, b ) {
//   var result = a + b;
//   if( a > 10 ){
//     var c = 1;
//     return result + c;
//   }
//   console.log(c);
// }

//2.arrow functions

// array.forEach( element => console.log(element + 1) );

let obj = {
  showHello() { console.log( 'hello ') }
}

//3.string literals:
let string = `Hello ${array[0]}`

//4 classes

class Person{
  constructor(name, occupation){
    this.name = name;
    this.occupation = occupation;
  }

  sayHello() {
    console.log('Hello')
  }
}

let Oleh = new Person('Oleh', 'WebDeveloper');

console.log(Oleh)

Oleh.sayHello();

//5.spread operator

let array4 = ['ssoi', ...array2 , 56, 56];
console.log('array4 = ', array4)

//6 descructoring

// let obj = {
//   a: 1,
//   b: 2,
//   c: 3
// }
//
// let a = obj.a;
// let b = obj.b;
// let c = obj.c;
//
// let { a, b, c } = obj;


$.ajax({
  url     : 'https://simple-api-ok.herokuapp.com/users',
  method  : 'GET',
  success : (result)=> {
    console.log('AJAX RESULT =', result) 
  },
  error   : function(error){ console.log(error) }
})

//
