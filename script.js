'use strict';

// // //code formatted and changes has been added

// // function calAge(birthYear) {
// //     let age = 2022 - birthYear;

// //     function printAge() {
// //         let result = `${firstName} yor age is ${age} and birthyear is ${birthYear}`
// //         console.log(result);

// //         if (birthYear >= 1981 && birthYear <= 1996) {
// //             var millenial = true;
// //             const firstName = 'vivek';
// //             const str = `oh you are a millenial man ${firstName}`;
// //             console.log(str);

// //             function add(x, y) {
// //                 return x + y;
// //             }
// //             result = 'new output';
// //         }
// //         // console.log(str);
// //         // console.log(millenial);
// //         console.log(result)
// //         // add(2,2);


// //     }
// //     printAge();
// //     console.log(firstName);
// //     return age
// // }

// // const firstName = "vinod";
// // console.log(calAge(1994));
// // // console.log(age);
// // // printAge()





// // //Hoisting

// // // console.log(x);
// // // console.log(y);
// // // console.log(z);

// // // var x = 1;
// // // // const y = 1;
// // // let z = 1;


// // // console.log(decF(2,5));
// // // console.log(addExp(2,5));
// // // console.log(addArrow(2,5));

// // // function decF(a,b){
// // //     return a+b;
// // // }

// // // const addExp = function(d,c){
// // //     return d+c;
// // // }

// // // var addArrow = (a,b) =>{
// // //     a+b
// // // }

// // // if(!count) DeleteallData()
// // // console.log(count);
// // // var count = 10;
// // // function DeleteallData(){
// // //     console.log('Delete all data in data base ')
// // // }


// // //Window usage

// // // var x = 1;
// // // const y = 1;
// // // let z = 1;

// // // console.log(x === window.x);
// // // console.log(y === window.y);
// // // console.log(z === window.y);


// // // --------------------------------------------------------->

// // //This Keyword Usage 

// // //windows
// // console.log(this);

// // //normal function
// // const Age = function (Year) {
// //     console.log(2037 - Year);
// //     console.log(this)
// // }
// // Age(1994);

// // const AgeArrow = (Year1) => {
// //     console.log(2037 - Year1);
// //     console.log(this)
// // }
// // AgeArrow(1994);


// // //Object /method call 

// // const jonas = {
// //     year:1994,
// //     presentAge : function(){
// //         console.log(this);
// //         console.log(2022 - this.year)
// //     }
// // };
// // jonas.presentAge();

// // const mathilda = {
// //     year:2015,

// // };
// // mathilda.presentAge = jonas.presentAge;
// // mathilda.presentAge();

// // const f  = jonas.presentAge;
// // f();


// //function vs Arrow function (this);

// // var firstName = 'Matlinda'
// // const jonas = {
// //  firstName : 'Vinod',
// //  year: 1994,
// //  calc : function (){
// //     console.log(2037 - this.year)

//     //solution 1

// //     const self  = this; // declaring  self and replacing this with it 
// //     const isMalenial = function () {
// //         console.log(self);
// //         console.log(self.year >= 1981 && self.year <= 1996);
// //     };
// //     isMalenial();
// //  },

// // // solution2 

// //         // no need when using arrow
// //         const isMalenial =  () => {
// //             console.log(this);
// //             console.log(this.year >= 1981 && this.year <= 1996);
// //         };
// //         isMalenial();
// //     },

// //  greet:() =>{
// //   console.log(this);
// //   console.log(`hey this ${this.firstName}`)
// //  },
// // };
// // jonas.greet();
// // jonas.calc();


// // Arguments keyword

// const addExp = function(a,b){
//     console.log(arguments)
//     return a+b;
// }
// addExp(2,5)
// addExp(2,3,4,5,6)

// var addArrow = (a,b) => {
//     console.log(arguments)
//     return a+b;

// };
// addArrow(2,3,3,3);


//Primitives vs Objects

// case Primitives 

// let age = 30;
// let storedAge = age;
// age = 31;

// console.log('Age',age);
// console.log('storedAge',storedAge);

// // case Objects 

// const Jonas = {
//     Fname: 'Jonas',
//     SName:'Scmittd'
// };
// let Friend = Jonas;
// Friend.Fname ='vinod';

// console.log('Friend',Friend);
// console.log('Jonas',Jonas);


// Primitives and Objects in practice 

// let Fname = 'vinod';
// let name = Fname;
// Fname ='R';

// console.log(Fname,name);


// const JoJessica = {
//     Fname: 'Jonas',
//     SName:'Scmittd'
// };
// let AfterMarriage = JoJessica;
// AfterMarriage.Fname ='vinod';

// console.log('Friend',JoJessica);
// console.log('Jonas',AfterMarriage);


//Copy New objects 

// const JoJessica2 = {
//         Fname: 'Jonas',
//         SName:'Scmittd',
//         family : ['a','c','d'],
//     };

//    const JoJessica3 =  Object.assign({},JoJessica2);
//    JoJessica3.SName = 'vinnod';
//    JoJessica3.family.push('b'),
//    JoJessica3.family.push('Vinod')

//    console.log(JoJessica3);
//    console.log(JoJessica2)





