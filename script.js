// 'use strict';

// //code formatted and changes has been added

// function calAge(birthYear) {
//     let age = 2022 - birthYear;

//     function printAge() {
//         let result = `${firstName} yor age is ${age} and birthyear is ${birthYear}`
//         console.log(result);

//         if (birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true;
//             const firstName = 'vivek';
//             const str = `oh you are a millenial man ${firstName}`;
//             console.log(str);

//             function add(x, y) {
//                 return x + y;
//             }
//             result = 'new output';
//         }
//         // console.log(str);
//         // console.log(millenial);
//         console.log(result)
//         // add(2,2);


//     }
//     printAge();
//     console.log(firstName);
//     return age
// }

// const firstName = "vinod";
// console.log(calAge(1994));
// // console.log(age);
// // printAge()





// //Hoisting

// // console.log(x);
// // console.log(y);
// // console.log(z);

// // var x = 1;
// // // const y = 1;
// // let z = 1;


// // console.log(decF(2,5));
// // console.log(addExp(2,5));
// // console.log(addArrow(2,5));

// // function decF(a,b){
// //     return a+b;
// // }

// // const addExp = function(d,c){
// //     return d+c;
// // }

// // var addArrow = (a,b) =>{
// //     a+b
// // }

// // if(!count) DeleteallData()
// // console.log(count);
// // var count = 10;
// // function DeleteallData(){
// //     console.log('Delete all data in data base ')
// // }


// //Window usage

// // var x = 1;
// // const y = 1;
// // let z = 1;

// // console.log(x === window.x);
// // console.log(y === window.y);
// // console.log(z === window.y);


// // --------------------------------------------------------->

// //This Keyword Usage 

// //windows
// console.log(this);

// //normal function
// const Age = function (Year) {
//     console.log(2037 - Year);
//     console.log(this)
// }
// Age(1994);

// const AgeArrow = (Year1) => {
//     console.log(2037 - Year1);
//     console.log(this)
// }
// AgeArrow(1994);


// //Object /method call 

// const jonas = {
//     year:1994,
//     presentAge : function(){
//         console.log(this);
//         console.log(2022 - this.year)
//     }
// };
// jonas.presentAge();

// const mathilda = {
//     year:2015,

// };
// mathilda.presentAge = jonas.presentAge;
// mathilda.presentAge();

// const f  = jonas.presentAge;
// f();