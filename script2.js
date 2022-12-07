const temparatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

const calAmplitude = function (temp) {
    let minTemp = temp[0];
    let maxTemp = temp[0];
    for (let i = 0; i < temp.length; i++) {
        const currentemp = temp[i];
        if (typeof currentemp !== 'number') continue;
        if (currentemp > maxTemp) maxTemp = currentemp
        if (currentemp < minTemp) minTemp = currentemp

    }
    console.log(maxTemp, minTemp);
    return maxTemp - minTemp;
}
const amplitide = calAmplitude(temparatures);
console.log(amplitide);


// merge two arrays when there are 2 arguments 


const calAmplitudeNew = function (temp1,temp2) {
    const temp = temp1.concat(temp2);
    console.log(temp)

    let minTemp = temp[0];
    let maxTemp = temp[0];
    for (let i = 0; i < temp.length; i++) {
        const currentemp = temp[i];
        if (typeof currentemp !== 'number') continue;
        if (currentemp > maxTemp) maxTemp = currentemp
        if (currentemp < minTemp) minTemp = currentemp

    }
    console.log(maxTemp, minTemp);
    return maxTemp - minTemp;
}
const amplitideNew = calAmplitudeNew([1,2,3],[4,5,6]);
console.log(amplitideNew);