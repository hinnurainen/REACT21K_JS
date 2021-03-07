(function () {
    window.addEventListener('DOMContentLoaded', function (event) {
        const users = getUsers();

        document.getElementById('submit').addEventListener('click', event => {
            const sortedUsers = sortUsers(users);
            renderTable(sortedUsers);
        })

        let tbody = document.querySelector("tbody");

        users.forEach(addUser);
        renderTable(users);

        const oldestPerson = getOldest(users);
        console.log('The oldest person is ', oldestPerson.name, oldestPerson.age);

        let executeScript = () => {
            let row = tbody.insertRow(1)
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);

            cell1.innerHTML = "999";
            cell2.innerHTML = "Test User";
            cell3.innerHTML = "28";
            cell4.innerHTML = "false";
        }

        executeScript();
    })
})();

function sortUsers(userObjs) {
    for (let i = 0; i < userObjs.length - 1; i++) {
        for (let j = i + 1; j < userObjs.length; j++) {
            if (userObjs[i].age < userObjs[j].age) {
                let temp = userObjs[j];
                userObjs[j] = userObjs[i];
                userObjs[i] = temp;
            }
        }
    }

    return userObjs;
}

function renderTable(userObjs) {
    document.querySelector("tbody").innerHTML = '';
    userObjs.forEach(user => addUser(user));
}

function getOldest(userObjs) {
    let oldest = userObjs[0];

    for (let i = 1; i < userObjs.length; i++) {
        if (userObjs[i].age > oldest.age) {
            oldest = userObjs[i]
        }
    }

    return oldest;
}

let addUser = (userObj) => {
    let newRow = document.createElement('tr');
    newRow.innerHTML = `
    <td>${userObj.studentNo}</td>
    <td>${userObj.name}</td>
    <td>${userObj.age}</td>
    <td>${userObj.studentNo < 0}</td>
    `;
    document.querySelector("tbody").appendChild(newRow);
};

function getUsers() {
    return [
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
            age: 63
        }];
};