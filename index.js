
const User = require('./models/user');
const login = require('./services/authen');
const calculator = require('./services/calculator');
const DatabaseConnect = require('./DatabaseConnect');

let db = new DatabaseConnect();
db.connect();
db.disconnect();





let subResult = require('./services/calculator').subtract(3,2);
console.log(subResult);

let result = calculator.plus(1,2);
console.log(result);

let addResult = calculator.addOne(10);
console.log(addResult);


// let username = 'pon';

// console.log(username);
// console.log(User);
// console.log(login);

// login('admin', '1234');