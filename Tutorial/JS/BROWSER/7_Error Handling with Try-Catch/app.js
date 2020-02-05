const user = {email: 'erenyilmaz@gmail.com'};

try{
    console.log('Hello eren');
    //null.myMethod()
    //eval('Hello luck guy')
    if(!user.name) {
        //throw 'user has no name'
        throw new SyntaxError('user has no name')
    }
    //console.log('hello strange');
}catch(err){
    console.log(err);
    console.log(`UserError: ${err.message}`);
}
finally{
    console.log('Finally runs regardless of the result');
    console.log('Hello eren two');
}