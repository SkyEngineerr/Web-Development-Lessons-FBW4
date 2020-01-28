let number = Math.floor(Math.random() * 100);

const calculate = new Promise ((resolve, reject) => {
    if (number < 35) {
        resolve('Random number smaller than 35')
    }

    else {
        reject(Error('Reject because Random number greater than 35'))
    }
})

calculate.then(alert)