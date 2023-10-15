const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three text characters: '
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color keyword or hexadecimal number'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape from the list of shapes: ',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color or hexadecimal number: '
    }
]

function init() {
    inquirer.prompt(questions)
    .then((answers)=> {
       
        
    })
}
