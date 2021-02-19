const getUsers = () => [
    {
        studentNo: 123,
        name: 'Harry',
        age: 15
    },
    {
        studentNo: 234,
        name: 'Ron',
        age: 16
    },
    {
        studentNo: 135,
        name: 'Hermione',
        age: 17
    },
    {
        studentNo: -1,
        name: 'Snape',
        age: 55
    },
    {
        studentNo: -1,
        name: 'Hagrid',
        age: 65
    },

    {
        studentNo: 999,
        name: 'Minerva',
        age: 70
    }
];

const users = getUsers();
const adding = addUser();

users.forEach(user => {
    addUser(user);
})

let oldest = getOldest(users);
console.log(oldest.name);

function getOldest(users) {

    return users.reduce(function (acc, current) {
        if (acc.age > current.age) {
            return acc
        } else { return current }
    }).name

}

getOldest();

let newColumn = new getUsers(users);
users.push(newColumn);
console.table(getUsers);


document.getElementById('submit').addEventListener('click', sortByAge);

function sortByAge() { }