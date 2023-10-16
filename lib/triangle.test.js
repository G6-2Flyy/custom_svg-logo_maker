const Triangle = require('./triangle.js');

describe('TriangleClass', ()=> {
    it('should render svg for a red triangle', ()=>{
        const triangle = new Triangle('red');

        expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="red" />')
    })
})