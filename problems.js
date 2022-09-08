let obj = [] === true;
console.log(obj);

let value = true === 'true';
console.log(value)

const arrow = (name) => {
    if (name === Number) {
        return true;
    }
    else {
        console.log(false)
    }
}

arrow('sahin');


let storeFalsyValue = true;

if (!storeFalsyValue) {
    console.log('nothing to show')
} else {
    console.log('you are amazing')
}

let sum = (num1, num2, num3) => {
    const value = num1 * num2
    return value;
}
const output = sum(25, 35);
console.log(output)

  

 
// const output = sum(25,20);
// console.log(output);

// function work(x, y = 4) {
//     return x + y;
// }
// console.log(work(32))