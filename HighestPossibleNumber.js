let numbers = "3303459"

numbers = numbers.split("");
for(j = 0; j < numbers.length; j++) {
    for(i = 0; i < numbers.length; i++) {
        if(numbers[j] > numbers[i]) numbers = numbers.toString().replace(numbers[i], numbers[j]).replace(numbers[j], numbers[i]);
    }
}

console.log(numbers.split("").reverse().join("").split(",").join(""));