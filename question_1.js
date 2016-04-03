// Input
var digits = 123456789;
console.log('start', digits);

//Data preparation
var digitsString = digits.toString();
var num = digitsString.split("");
var total = 0;

//There would be 3^8=6561 different operations
for(var i=0; i<=6561; i++){
    var sum = 0;
    var assistI = i;
    var operations = ternaryFormat(assistI);
    var equation = num[0].concat(operationGenerator(operations[0]), num[1],
        operationGenerator(operations[1]), num[2],
        operationGenerator(operations[2]), num[3],
        operationGenerator(operations[3]), num[4],
        operationGenerator(operations[4]), num[5],
        operationGenerator(operations[5]), num[6],
        operationGenerator(operations[6]), num[7],
        operationGenerator(operations[7]), num[8]
        );

    if(eval(equation)==100){
        total++;
        console.log(equation);
    }
}

console.log("There are total " + total + " equations.");

//The function to compute the operations
function ternaryFormat(data){
    var base = [0, 0, 0, 0, 0, 0, 0, 0];
    var count = 7;
    while((data/3 !== 0) && (count >= 0)){
        base[count] = Math.floor(data%3);
        data = data/3;
        count--;
    }
    return base;
}

//The function to generate the operations
function operationGenerator(data){
    var operator = ['+', '-' ,''];
    var operation;
    switch(data){
        case 0:
            operation = operator[0];
            break;
        case 1:
            operation = operator[1];
            break;
        case 2:
            operation = operator[2];
            break;
    }
    return operation;
}


