var student1 = {
    firstName: "Elyes",
    lastName: "Sassi",
    age: 21,
    location: "Boumerdes",
};
var student2 = {
    firstName: "Kais",
    lastName: "Said",
    age: 66,
    location: "Tunis",
};
var studentsList = [student1, student2];
var body = document.querySelector("body");
var table = document.createElement("table");
for (var i = 0; i < 2; i++) {
    var row = document.createElement("tr");
    var nameColumn = document.createElement("td");
    var locationColumn = document.createElement("td");
    nameColumn.textContent = studentsList[i].firstName;
    locationColumn.textContent = studentsList[i].location;
    row.appendChild(nameColumn);
    row.appendChild(locationColumn);
    table.appendChild(row);
    body.appendChild(table);
}
