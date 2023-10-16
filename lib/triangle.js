const Shape = require('./shapes.js');

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" height="100%" width="100%" fill="${this.color}"/>`
    }
}
module.exports = Triangle;