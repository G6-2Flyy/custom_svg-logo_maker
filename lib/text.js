class Text {
    constructor(color, text) {
        this.color = color;
        this.text = text;
    }
    render() {
        return `<text text-anchor="middle" x="50%" y="50%" fill="${this.color}">${this.text}</text>`
    }
} 
module.exports = Text;