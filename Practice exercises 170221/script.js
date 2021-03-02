(window.addEventListener('DOMContentLoaded', function () {
    let tbody = document.querySelector("tbody");

    let executeScript = () => {
        let row = tbody.insertRow(1)
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);

        cell1.innerHTML = "999";
        cell2.innerHTML = "Test User";
        cell3.innerHTML = "28";
    }

    executeScript();


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

    let addUser = (userInfo) => {
        let row = tbody.insertRow(1)
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);

        cell1.innerHTML = studentNo;
        cell2.innerHTML = name;
        cell3.innerHTML = age;
    };

    const users = getUsers();

    users.forEach(user => {
        addUser(user);
    });

    let getOldest = (age, max = age[0]) => {
        for (let i = 0; i < age.length; i++) {
            if (max < age[i]) max = age[i];
        }
        return max;
    };

    getOldest();
    console.log("The oldest student is" + max(age) + "years old and called" + user.name);

    let addColumn = () => {
        let column = thead.insertCell(3);
        let cell4 = row.insertCell(3);

        column.innerHTML = "Staff or no"
        cell4.innerHTML = isStaff;
    }
    addColumn();

    let isStaff = (row) => {
        users.push(isStaff);

        if (studentNo >= 0) {
            user.isStaff = 'student'
        } else {
            user.isStaff = 'staff'
        }
    }

    for (var i = 0, row; row = tbody.rows[i]; i++) {
        isStaff(row);
    }

    let sortByAge = () => {
        users = [];
        let pos = 0, max = age[0], min = age[0];
        for (let j = 0; j < age.length; j++) {
            if (max > age[j]) {
                max = age[j];
            }
        }

        for (let i = 0; i < age.length; i++) {
            for (let k = 0; k < age.length; k++) {
                if (age[k] != null) {
                    if (min > age[k]) {
                        min = age[k];
                        pos = k;
                    }
                }
            }
            age[i] = min;
            age[pos] = null;
            min = max;

        }
        return age;
    };

    document.getElementById('submit').addEventListener('click', sortByAge);
}
}))();