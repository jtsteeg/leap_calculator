(()=>{
    //elements
    var numbers = document.getElementsByClassName("numberButton");
    var numberDisplay = document.getElementById("numDisplay");
    var clearButton = document.getElementById("clearButton");

    console.log(numbers);
    console.log(numberDisplay);

    //classes
    class Calculator{
        constructor(){
            this.tempDisplay = 0;
        }

        newNumberInput(number) {
            this.tempDisplay = this.tempDisplay * 10 + parseInt(number);
            this.showOnDisplay();
        }

        showOnDisplay() {
            numberDisplay.value = this.tempDisplay;
            console.log(this.tempDisplay);
        }

        clearDisplay() {
            numberDisplay.value = 0;
        }
    }

    var calc = new Calculator();

    //eventlisteners
    for(var i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', function() {
            calc.newNumberInput(this.innerText);
        });
    }

    clearButton.addEventListener('click', () => {
        calc.clearDisplay();
    });


})()