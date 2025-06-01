interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any; 
}

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false
};
interface Directors extends Teacher {
  numberOfReports: number;
}

// Ejemplo Directors
const director1: Directors = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'New York',
  numberOfReports: 17,
};

// Interfaz para la función
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implementación de la función
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Interfaz para el constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interfaz para la clase
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Clase que implementa la interfaz
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

console.log(director1);
console.log(teacher3);
console.log(printTeacher("John", "Doe")); // "J. Doe"
const student = new StudentClass("Derick", "Medina");
console.log(student.displayName());      // "Derick"
console.log(student.workOnHomework());   // "Currently working"