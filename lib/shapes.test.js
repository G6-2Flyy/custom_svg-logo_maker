const Shape = require('./shapes.js');

describe('ShapeClass', ()=> {
    it('should render svg for a red circle', ()=>{
        const shape = new Shape('red');

        expect(shape.render()).toEqual('<shape cx="50%" cy="50%" r="40" height="100%" width="100%" fill="red" />')
    })
})