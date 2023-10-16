const inquirer = require("inquirer");
const Svg = require("./lib/svg");
const fs = require("fs");

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to three text characters: ",
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter a color keyword or hexadecimal number",
  },
  {
    type: "list",
    name: "shape",
    message: "Select a shape from the list of shapes: ",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter a color or hexadecimal number: ",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Successful!");
    }
  });
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    if (answers.text.length === 0 || answers.text.length > 3) {
      console.log("The text cannot be empty or more than three characters");
      init();
    } else {
      const svg = new Svg();
      svg.setTextElement(answers.text, answers.textColor);
      svg.setShapeElement(answers.shape, answers.shapeColor);
      writeToFile('./examples/logo.svg', svg.render());
    }
  });
}
init();