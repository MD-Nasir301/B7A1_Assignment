# Pick and Omit : Keeps your code DRY (Don't Repeat Yourself).

**আজ আমরা আলোচনা করবো typespcript এর দুইটি utility Types সস্পর্কে। আমরা বোঝার চেষ্টা করবো Pick and Omit কীভাবে আমাদের কোডকে DRY রাখে এবং ডেভেলোপারদের সমায় বাঁচায়।**

###

## মূল আলোচনা:
<div align="justify">
আমারা বিভিন্ন সময় বিভিন্ন প্রজেক্টে কাজ করার সময় অনেক রকম বড় বড় ডাটা নিয়ে কাজ করি। টাইপস্ক্রিপ্টে আমাদের প্রায় সময়ই `interface` and `Type Alias` নিয়ে কাজ করতে হয়। কিছু কিছু `interface` এর ম্ধ্যে 20+ বেশি প্রোপার্টি থাকতে পারে। আবার প্রয়োজনে আমরা নতুন নতুন interface তৈরি করি। কখনো কখনো দেখায় যায় আমরা যে `interface` গুলো বানিয়েছি তাদের মধ্যে কিছু প্রোপার্টি একদম অন্য `interface` বা `type Alias` এর মধ্যে আছে। কিন্তু তারপরও আমাদেও দুই জায়গাতেই একই ডেটা বা প্রোপার্টি লিখতে হচ্ছে। ফলে আমাদের যেমন সময় নষ্ট হয় তেমনি অপ্রয়োজনে কোডর দৈর্ঘ্য বা ফাইল সাইজ বেড়ে যায়। একই জিনিস বারবার টাইপ করলে ভুল হওয়ার সম্ভাবনাও বাড়ে। তাছাড়া পরবর্তীতে কোড পড়ার সময় তার **readability** কমে যায়। তাই বড় প্রজেক্টে এই সমস্যা এড়াতে এবং কোডকে ক্লিন রাখতে `Pick` এবং `Omit` এর ব্যবহার খুবই গুরুত্বপূর্ণ হয়ে যায়।

## Pick কী?

- TypeScript এ `pick` মানে হলো নেওয়া। মানে মনে করুন আপনার কাছে একটা `Person` নামের interface আছে । এখন সেটা একজন `person` সম্পর্কে যা যা তথ্য প্রয়োজন সেই সব প্রোপার্টি গুলো সাজানো আছে?। এখন আপনার `Student` নামে একটা `interface` বানানোর প্রয়োজন পড়লো। এখন একজন Student এর কী কী তথ্য লাগে? যেমন name, age, class, roll, id, height ইত্যাদি এখন আপনি কিন্তু `Person` নামক `interface` এর মধ্যেও `name , age, nationality , height` ইত্যাদি হয়তো লিখেছিলেন। এখন কী আপনি `Student` interface এর ম্ধ্যেও আবার সবগুলো প্রোপার্টি লিখবে? খেয়াল করে দেখেন `name, age, height, nationality` এগুলো `Person` interface এর মধ্যে আগে থেকেই ছিল। এখন আবার লিখেতে গেল সময় নষ্ট হবে, এবং কোডের মধ্যে একই লেখা দুইবার থাকবে যা কিনা কোডকে **Unorganized** করে তুলবে। তাই আমরা যদি এমন একটা পদ্ধতি ব্যবহার করে যার মধ্যেমে আমরা বলতে পারবো আমার `Student` interface এর সাথে `Person` interface এ যে যে প্রোপার্টির মিল আছে সেগুলো `Person` interface থেকে নিয়ে আসো আর বাকি গুলো যেগুলো নতুন সেগুলো আমি লিখে দিচ্ছি। তাহলেই আমাদের কোড ক্লিন থাকবে এবং DRY নীতি অনুসরণ করা হবে।
  এবার আমরা একটা উদাহরণ দেখি ফেলি:

* উদাহরণ:

```
interface Person {
name: string;
age: number;
nationality: string;
height: string;
address: string;
}

//  Student interface বানানোর সময় আগে কমন প্রোপার্টি গুৃলো Person interface থেকে নিয়ে নিলাম। আর Student এর জন্য অতিরিক্ত প্রোপার্টি গুলো শুধু লিখলাম।
type Student = Pick<Person, "name" | "age" | "height" | "nationality"> & {
class: string;
roll: number;
id: string;
};

// এখন ‍Student interface ব্যবহারের সময় আমি  এই সব ডাটা দিতে পারবে। যা আমি সরাসরি Student interface লিখিনাই সেগুলোও।
const newStudent: Student = {
name: "Abir",
age: 9,
height: "3.6ft",
nationality: "Bangladeshi",
class: "five",
roll: 5,
id: "101"
};
```

**এখন আমরা বুঝতে পারলাম Pick কী, কেন এবং কীভাবে ব্যবহার করতে হয়।**

## Omit কী?

- Omit ঠিক Pick এর বিপরীত। Omit ও আমাদের সময় বাঁচানো কোড পুনরাবৃত্তি থেকে বাঁচায়। Pick এর মতো একই ভাবে যদি একটি বড় interface থেকে যদি নির্দিষ্ট কিছু প্রোপার্টি বাদ দিয়ে বাকি সবগুলোকে নিয়ে নতুন একটি interface বানাতে চাই, তবেই আমরা Omit ব্যবহার করি। একটা উদাহরণ দেখে নেওয়া যাক।
  উদাহরণ:

```
interface Person {
  name: string;
  age: number;
  nationality: string;
  height: string;
  address: string;
}

// Student এর মতো এখানেও Omit ব্যবহার করে শুধু অপ্রয়োজনীয় প্রোপার্টি বাদ দিয়ে নতুন একটি ইন্টারফেস বানাচ্ছি।
// এখানে Person থেকে address এবং nationality বাদ যাবে, বাকি সব থাকবে।
type Employee = Omit<Person, "address" | "nationality"> & {
  designation: string;
  salary: number;
  employeeId: string;
};

// এখন Employee টাইপটি ব্যবহারের সময় আমরা address এবং nationality ছাড়া বাকি সব ডাটা দিতে পারবো।
const newEmployee: Employee = {
  name: "ABC",
  age: 30,
  height: "5.7ft",
  designation: "MERN Stack Developer",
  salary: 50000,
  employeeId: "1010"
};
```

##

**আজকের আলোচনা থেকে আমরা বুঝতে পারলাম কেন আমাদের Pick and Omit ব্যবহার করা উচিত। আমাদের কোডকে DRY রাখেতে এবং Readability বাড়াতে Pick and Omit খুবই গুরুত্বপূর্ণ।**
