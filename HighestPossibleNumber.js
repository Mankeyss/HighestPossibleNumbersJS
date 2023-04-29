let numbers = "38673"

numbers = numbers.split("");
for(j = 0; j < numbers.length; j++) {
    for(i = 0; i < numbers.length; i++) {
        if(numbers[i] > numbers[j]) numbers = numbers.toString().replace(numbers[i], numbers[j]).replace(numbers[j], numbers[i])
    }
}

console.log(numbers.split(",").join(""));