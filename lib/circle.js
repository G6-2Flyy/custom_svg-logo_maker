const Shape = require('./shape.js');

class Circle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<circle cx="50%" cy="50%" r="40" height="100%" width="100%" fill="${this.color}" />`
    }
}