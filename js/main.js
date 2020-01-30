const numberForm = document.querySelector("#number-form");
const resultTag = document.querySelector("#result");

numberForm.addEventListener("submit", (e) => {
    // Prevent default behviour of the form
    e.preventDefault();

    // Get the number
    const firstNumber = document.getElementById("number1").value;
    const secondNumber = document.getElementById("number2").value;

    // Check if it's harshad or not
    findLCMofTwoIntergers(firstNumber, secondNumber);
})

const findLCMofTwoIntergers = (number1, number2) => {

    number1 = parseInt(number1);
    number2 = parseInt(number2);

    // If the number is a negative number
    if (number1 < 0 || number2 < 0) {
        // Return a notification and clear the form
        document.getElementById("number1").value = "";
        document.getElementById("number2").value = "";
        resultTag.innerHTML = "Both numbers must be positive";
        resultTag.className = "text-danger";
        return;
    }

    if (number1 == 1 || number2 == 1){
        document.getElementById("number1").value = "";
        document.getElementById("number2").value = "";
        resultTag.innerHTML = `The LCM of ${number1} and ${number2} is ${number1*number2}`;
        resultTag.className = "text-success";
        return;
    }

    if (number2 < number1){
        // Return a notification and clear the form
        document.getElementById("number1").value = "";
        document.getElementById("number2").value = "";
        resultTag.innerHTML = "Second number must be greater than the first number";
        resultTag.className = "text-danger";
        return;
    }

    // Initlize two arrays
    let firstNumberMulArray = [];
    let secondNumberMulArray = [];

    // Multiply every number with the first number
    // In the span of 2 to the second number
    for (let index = 2; index <= number2; index++) {
        firstNumberMulArray.push(index * number1);
    }

    // Multiply every number with the second number
    // In the span of 2 to the first number
    for (let index = 2; index <= number1; index++) {
        secondNumberMulArray.push(index * number2);
    }

    // Loop through the first number multiplication result array
    for (let index = 0; index < firstNumberMulArray.length; index++) {
        // Odd out a number
        const number = firstNumberMulArray[index];

        // If the number does exist in the 
        // second number multiplication result array
        if (secondNumberMulArray.indexOf(number) != -1){
            // Print out the result
            document.getElementById("number1").value = "";
            document.getElementById("number2").value = "";
            resultTag.innerHTML = `The LCM of ${number1} and ${number2} is ${number}`;
            resultTag.className = "text-success";
            break;
        }
    }
}