const Shape = require('./shapes.js');

class Square extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<rect x="10" y="10" width="100%" height="100%" fill="${this.color}"/>`
    }
}

module.exports = Square;