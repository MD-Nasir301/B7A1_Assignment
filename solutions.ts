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
console.log("Problem 3 Output: ", res3);
