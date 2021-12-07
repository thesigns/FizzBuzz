export function fizzBuzz(length) {

    let arr = [];

    for (let i = 1; i <= length; i += 1) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push("Fizz Buzz");
        } else if (i % 3 === 0) {
            arr.push("Fizz");
        } else if (i % 5 === 0) {
            arr.push("Buzz");
        } else {
            arr.push(i);
        }
    }

    return arr;

}
