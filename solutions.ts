const filterEvenNumbers = (arrOfNumbers: number[]): number[] => {
  const evenNumbers = arrOfNumbers.filter((num) => num % 2 == 0);
  return evenNumbers;
};

const reverseString = (inputText: string): string => {
  const reversText = inputText.split("").reverse().join("");
  return reversText;
};

type StringOrNumber = string | number;

const checkType = (inputFromUser: StringOrNumber): string => {
  if (typeof inputFromUser === "string") {
    return "String";
  } else {
    return "Number";
  }
};

const getProperty = <T, k extends keyof T>(obj: T, key: k): T[k] => {
  return obj[key];
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (obj: Book): Book & { isRead: boolean } => {
  return { ...obj, isRead: true };
};

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

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  const commonNumbers: number[] = arr1.filter((num) => arr2.includes(num));
  return commonNumbers;
};
