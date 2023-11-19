var input = document.getElementById('output');

function EnterNumber(number){
    input.innerHTML += number;
}
function appenEqual(){
    input.innerHTML+='.';
}
function cleardisplay(){
    input.innerHTML ='';
}
function appenOperator(value){
    input.innerHTML += value;
}
function calculateResult() {
    var result = eval(input.innerHTML);
    input.innerHTML = result.toString();
    updateResult();
  }
