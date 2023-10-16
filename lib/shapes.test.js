const Shape = require('./shapes.js');

describe('ShapeClass', ()=> {
    it('should give a color to shape', ()=>{
        const shape = new Shape('red');

        expect(shape.color).toEqual('red')
    })
})