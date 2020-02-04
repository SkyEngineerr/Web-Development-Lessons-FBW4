const data = [
    {
        name : 'John Doe',
        age : 32,
        gender : 'male',
        lookingfor: 'female',
        location : 'Istanbul',
        image : 'https://randomuser.me/api/portraits/men/83.jpg'
    },
    {
        name : 'Bla Bla',
        age : 99,
        gender : 'female',
        lookingfor: 'female',
        location : 'Istanbul',
        image : 'https://randomuser.me/api/portraits/women/83.jpg'
    },
    {
        name : 'Hakan Sukur',
        age : 12,
        gender : 'male',
        lookingfor: 'female',
        location : 'Istanbul',
        image : 'https://randomuser.me/api/portraits/men/23.jpg'
    }
]


//Profile Iterator
function profileIter (profiles) {
    let nextIndex = 0;

    return {
        next : function(){
            return nextIndex < profiles.length?
            {value : profiles[nextIndex++], done : false}
        }
    }
}