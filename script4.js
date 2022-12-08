let printforecast = function (arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str = str + `${arr[i]}'C  in ${i+1} days ... `
//         console.log(`...${arr[i]}'C 
//   in ${i + 1} days...`)
  
    }
    console.log('...'+ str)
}
console.log(printforecast([17, 21, 23]))

//