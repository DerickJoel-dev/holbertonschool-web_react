// main.ts

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Derick",
  lastName: "Quinones",
  age: 29,
  location: "Holberton"
};

const student2: Student = {
  firstName: "Joel",
  lastName: "Medina",
  age: 29,
  location: "House"
};

const studentsList: Student[] = [student1, student2];

// DOM Manipulation
const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
