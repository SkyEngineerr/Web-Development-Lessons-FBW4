//ADD EXPORT BEFORE DECLARATION
let greeting = 'welcome back'

function hi (user) {
    return `${greeting} ${user} in JS MODULE`
}

//ADD EXPORT AFTER DECLARATION

export {greeting, hi}