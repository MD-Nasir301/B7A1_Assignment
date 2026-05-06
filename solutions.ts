// Problem 1:

const filterEvenNumbers = (arrOfNumbers: number[]): number[] => {
  const evenNumbers = arrOfNumbers.filter((num) => num % 2 == 0);
  return evenNumbers;
};

const result = filterEvenNumbers([1, 2, 3, 4, 5, 6, 12, 45, 50, 11]);
console.log("Problem 1 Output:", result);

// Problem 2:

const reverseString = (inputText: string): string => {
  const reversText = inputText.split("").reverse().join("");
  return reversText;
};

const result2 = reverseString("Nasir");
console.log("Problem 2 Output:", result2);

// Problem 3:

type StringOrNumber = string | number;

const checkType = (inputFromUser: StringOrNumber): string => {
  if (typeof inputFromUser === "string") {
    return "String";
  } else {
    return "Number";
  }
};

const res3 = checkType("sfdso");
console.log("Problem 3 Output:", res3);

// Problem 4:

const user = { id: 1, name: "John Doe", age: 21 };
const person = { id: 2, name: "Nasir", isStudent: true };

const getProperty = <T, k extends keyof T>(obj: T, key: k): T[k] => {
  return obj[key];
};

const res4 = getProperty(person, "id");
console.log("Problem 4 Output:", res4);

//Problem 5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (obj: Book): Book & { isRead: boolean } => {
  return { ...obj, isRead: true };
};
const res5 = toggleReadStatus({
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
});

console.log("Problem 5 Output:", res5);

// Problem 6

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age} Grade: ${this.grade}`;
  }
}
const student = new Student("Alice", 20, "A");
console.log("Problem 6 Output:", student.getDetails());

// Problem 7

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  const commonNumbers = arr1.filter((num) => arr2.includes(num));
  return commonNumbers;
};
console.log(
  "Problem 7 Output:",
  getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]),
);
