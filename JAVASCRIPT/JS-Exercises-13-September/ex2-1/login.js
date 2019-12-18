let database = {
    username: 'Eren',
    password: '12345'
}



function check (username, password, data){
    if(data.username == username && data.password == password){
        console.log('Login successful')
    }

    else if (data.username != username && data.password == password) {
        console.log('Wrong Username')
    }
    else if (data.username == username && data.password != password) {
        console.log('Wrong Password')
    }

    else (console.log("login unsuccess"))

}


check ('Eren', '1234', database);

