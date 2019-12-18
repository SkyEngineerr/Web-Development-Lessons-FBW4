function check (username, password, data){
   for (let i = 0; i<data.length; i++) {
       if (data[i].username == username && data[i].password == password) {
           return console.log('login success')
       }
       else {console.log('unsuccess')}
   }
}

let database = [{
    username: 'Eren',
    password: '12345'
} , {
    username: 'John',
    password: '1234'
}, {
    username: 'Mark',
    password: '123'
}]
check ('Eren', '12345', database);
check ('safwan', '12345', database);