(window.addEventListener('DOMContentLoaded', function () {
    let tbody = document.querySelector("tbody");

    let executeScript = () => {
        let row = tbody.insertRow(1)
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);

        cell1.innerHTML = "s2100111";
        cell2.innerHTML = "John Doe";
        cell3.innerHTML = "28";
    }

    executeScript();

}))();


/* (function () {
    let tbody = document.querySelector("tbody");

    let executeScript = () => {
        let row = tbody.insertRow(1)
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);

        cell1.innerHTML = "s2100111";
        cell2.innerHTML = "John Doe";
        cell3.innerHTML = "28";
    }

    executeScript();
})();
*/
