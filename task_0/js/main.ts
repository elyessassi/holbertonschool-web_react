interface Student{
    firstName: string,
    lastName: string,
    age: number,
    location: string,    
}

let student1 = {
    firstName: "Elyes",
    lastName: "Sassi",
    age: 21,
    location: "Boumerdes",   
}

let student2 = {
    firstName: "Kais",
    lastName: "Said",
    age: 66,
    location: "Tunis",   
}

let studentsList : Student[] = [student1, student2]

const body : HTMLBodyElement = document.querySelector("body")
const table : HTMLTableElement = document.createElement("table")



for (let i = 0; i < 2 ; i++) {
    let row : HTMLTableRowElement = document.createElement("tr")
    let nameColumn : HTMLTableCellElement = document.createElement("td")
    let locationColumn : HTMLTableCellElement = document.createElement("td")
    nameColumn.textContent = studentsList[i].firstName
    locationColumn.textContent = studentsList[i].location
    row.appendChild(nameColumn)
    row.appendChild(locationColumn)
    table.appendChild(row)
    body.appendChild(table)
}
