(()=>{
    //elements
    var numbers = document.getElementsByClassName("numberButton");
    var operators = document.getElementsByClassName("operatorButton");
    var numberDisplay = document.getElementById("numDisplay");
    var clearButton = document.getElementById("clearButton");
    var equalButton = document.getElementById("equals");

    console.log(numbers);
    console.log(numberDisplay);

    //classes
    class Calculator{

        newNumberInput(number) {
            numberDisplay.value = numberDisplay.value + number;
        }

        newOperatorInput(operator) {
            isNaN(numberDisplay.value.slice(-1)) ? numberDisplay.value : numberDisplay.value = numberDisplay.value + operator;
            console.log(typeof numberDisplay.value)
            console.log(typeof operator)
        }

        clearDisplay() {
            numberDisplay.value = "";
        }

        performMath(){
            if(/[a-z]/i.test(numberDisplay.value)){
            }else{
            isNaN(numberDisplay.value.slice(-1)) ? numberDisplay.value : numberDisplay.value = eval(numberDisplay.value);
            }
        }
    }

    var calc = new Calculator();

    //eventlisteners
    for(var i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', function() {
            calc.newNumberInput(this.innerText);
        });
    }

    for(var i = 0; i < operators.length; i++) {
        operators[i].addEventListener('click', function() {
            calc.newOperatorInput(this.innerText);
        });
    }

    clearButton.addEventListener('click', () => {
        calc.clearDisplay();
    });

    equalButton.addEventListener('click', () => {
        calc.performMath();
    });
})()