
var operationButtons = document.getElementsByClassName('operation-button');

var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');

function mackOperation(operationCode) {
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    if (operationCode === '+') {
        var result = number1 + number2;
    } else if (operationCode === '-') {
        var result = number1 - number2;
    } else if (operationCode === '*') {
        var result = number1 * number2;
    } else if (operationCode === '/') {
        var result = number1 / number2;
    } else {
        window.alert('operation is unknowen!');
    }
    window.alert(result);
}

function onOperationbuttonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    mackOperation(operation);
}

for ( var i = 0; i < operationButtons.length; i++) {
    var button = operationButtons[i];
    operationButtons[i].addEventListener('click', onOperationbuttonClick);
}
