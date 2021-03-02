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
        studentNo: -1,
        name: 'Minerva',
        age: 70
    }
];

const users = getUsers();

users.forEach(user => {
    addUser(user);
})

function getOldest(user) {

    return user.reduce(function (acc, current) {
        if (acc.age > current.age) {
            return acc
        } else {
            return current
        }
    }).name
}

getOldest();

let isStaff = new getUsers(user);
user.push(isStaff);

if (studentNo >= 0) {
    user.isStaff = 'student'
} else {
    user.isStaff = 'staff'
}

console.table(getUsers);

function sortByAge() { }

document.getElementById('submit').addEventListener('click', sortByAge);