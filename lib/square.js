const Shape = require('./shapes.js');

class Square extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<rect x="10" y="10" width="30" height="30" fill="${this.color}"/>`
    }
}

module.exports = Square;