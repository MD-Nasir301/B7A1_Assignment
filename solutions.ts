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
console.log("Problem 4 Output:",res4);
