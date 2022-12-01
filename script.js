'use strict';

//code formatted and changes has been added

function calAge(birthYear) {
    let age = 2022 - birthYear;

    function printAge() {
        let result = `${firstName} yor age is ${age} and birthyear is ${birthYear}`
        console.log(result);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const firstName = 'vivek';
            const str = `oh you are a millenial man ${firstName}`;
            console.log(str);

            function add(x, y) {
                return x + y;
            }
            result = 'new output';
        }
        // console.log(str);
        // console.log(millenial);
        console.log(result)
        // add(2,2);


    }
    printAge();
    console.log(firstName);
    return age
}

const firstName = "vinod";
console.log(calAge(1994));
// console.log(age);
// printAge()