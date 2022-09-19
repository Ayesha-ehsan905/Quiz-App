type props = {
  question: string;
  answers: string[];

  correctAnswer: string;
};
const question: props[] = [
  {
    question: "C++ was developed by ___",
    answers: [
      "Thomas Kushz",
      "John Kemney",
      "Bjarne Stroutstrup",
      "James Goling",
    ],
    correctAnswer: "Bjarne Stroutstrup",
  },

  {
    question: "Which one of the following is a keyword?",
    answers: ["Size", "Key", "Jump", "Switch"],
    correctAnswer: "Switch",
  },

  {
    question: "____ is the smallest individual unit in a program.",
    answers: ["Variable", "Control", "Character", "Token"],
    correctAnswer: "Token",
  },

  {
    question:
      "What is a constant that contains a single character enclosed within single quotes?",
    answers: [" Character", "Numeric", "Fixed", "Floating point"],
    correctAnswer: "Character",
  },
  {
    question: "The modulus operator uses ___ character",
    answers: ["+", "*", "/", "%"],
    correctAnswer: "%",
  },
  {
    question: "Every variable should be separated by ___ separator",
    answers: ["Dot", "Colon", "Comma", "Semicolon"],
    correctAnswer: "Comma",
  },
  {
    question: "Auto, static, extern and register are called as ___",
    answers: ["Static", "Register", "Auto", "Storage specifier"],
    correctAnswer: "Storage specifier",
  },
  {
    question: "How many storage specifies are there in a C++?",
    answers: ["2", "3", "4", "5"],
    correctAnswer: "4",
  },
  {
    question: "Signed, unsigned, long and short are some of the ___",
    answers: ["Void", "Data", "Derived data", "Modifiers"],
    correctAnswer: "Modifiers",
  },
  {
    question: "Logical AND (&&) and Logical OR (||) are ___ operators.",
    answers: ["Logical", "Equality", "Class member", "Comma"],
    correctAnswer: "Logical",
  },
];

export default question;
