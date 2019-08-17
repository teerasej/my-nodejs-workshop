

let login = function(username, password) {
    if(username === 'admin' && password === '1234'){
        console.log('ผ่าน!');
    } else {
        console.log('ไม่ผ่าน');
    }
}

// let test = 0;
// console.log(test);


// login('admin','1234');

module.exports = login;