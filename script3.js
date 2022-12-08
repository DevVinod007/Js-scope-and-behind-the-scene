const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        // value: Number(prompt('Degree celsius:')),
        value:100
    };

    const kelvin = measurement.value + 273;
    return kelvin
};
console.log(measureKelvin());




const calAmplitudeNew = function (temp1,temp2) {
    const temp = temp1.concat(temp2);
    console.log(temp)

    let minTemp = 0;
    let maxTemp = 0;
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