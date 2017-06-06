
/** classic */
function add(a, b){
    return a + b;
}
console.log('Classic function' + add(2, 3));

/** addStatement */
var addStatement = (a, b) => {
    return a + b;
}
console.log('Arrow function 1 =>' + addStatement(3, 5));

/** addExpression */
var addExpression = (a, b) => a + b;
console.log('Arrow function 2 =>' + addExpression(3, -2));