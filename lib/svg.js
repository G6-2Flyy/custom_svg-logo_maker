const Text = require('./text');
const Square = require('./square');
const Circle = require('./circle');
const Triangle = require('./triangle');

class Svg {
    constructor() {
        this.textElement = "";
        this.shapeElement = "";
    }
    render(){
        return `<svg width="300" height="200">
        ${this.shapeElement}
        ${this.textElement}
        </svg>`
    }
    setTextElement(text, color) {
        const newText = new Text(color, text);
        this.textElement = newText.render();
    }

    setShapeElement(shape, color) {
        switch (shape) {
            case 'circle':
                const circle = new Circle(color);
                this.shapeElement = circle.render();
                break;

            case 'triangle':
                const triangle = new Triangle(color);
                this.shapeElement = triangle.render();
                break;
            
            case 'square':
                const square = new Square(color);
                this.shapeElement = square.render();
                break;

            default:
                break;
        }
    }
}

module.exports = Svg;