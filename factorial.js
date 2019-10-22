const factorial= (num)=>{
    var operation = "";
    var fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i; 
        operation+=i+"*";
    }
    operation = operation.substring(0,operation.length-1);
    let array = operation.split("");
    array = array.reverse();
    operation = "";
    array.forEach(element => {
        operation+=element;
    });

    operation = "("+operation+") = "+fact;

    console.log(operation);
}

factorial(5);