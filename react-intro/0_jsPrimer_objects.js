console.log('- Object destructuring --');
const example = {
  a: 10,
  b: `some value`,
  c: 20,
  d: 28
};

/* Access only the a property from the object */
let { a } = example;
console.log(a);

const destructureParameters = ({ c }) => console.log('Value of c: ' + c);
const destructureParameters1 = ({ c }) => console.log(`Value of c: ${c} is highly unappreciated ${b}`);
destructureParameters(example);
destructureParameters1(example);
//console.log(destructureParameters);
//console.log(destructureParameters1);

console.log('\n\n-- Object literal enhancement --');
const someValue = 'abc';
const anotherValue = 123;
const extraValue = 456;
const newObject = { someValue, anotherValue, extraValue };
console.log(newObject);

console.log('\n\n-- Spread operator --');
const food = ['bread', 'joghurt', 'banana'];
const meat = ['sausage', 'beef'];
const drinks = ['water', 'juice'];

const meal = [...food, ...meat, ...drinks];
console.log(meal);

console.log('\n\n-- Rest parameter in function definition --');
function restParameters (param1, ...theArgs) {
  console.log(theArgs);
}

restParameters(10, ...drinks);
