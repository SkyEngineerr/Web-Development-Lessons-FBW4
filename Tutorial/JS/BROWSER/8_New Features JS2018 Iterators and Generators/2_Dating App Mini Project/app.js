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


const profiles = profileIterator(data)
//Call the first profile

//Next Event
document.getElementById('next').addEventListener('click', nextProfile)

//Event Handler : display the next profile
function nextProfile () {
    const currentProfile =  profiles.next().value
    document.getElementById('profileDisplay').innerHTML = `
    <ul class='list-group>
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">age: ${currentProfile.age}</li>
        <li class="list-group-item">gender: ${currentProfile.gender}</li>
        <li class="list-group-item">lookingfor: ${currentProfile.lookingfor}</li>
        <li class="list-group-item">location: ${currentProfile.location}</li>
    </ul>'`
    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}"`
}

//Profile Iterator
function profileIter (profiles) {
    let nextIndex = 0;

    return {
        next : function(){
            return nextIndex < profiles.length?
            {value : profiles[nextIndex++], done : false}:
            {done : true}
        }
    }
}