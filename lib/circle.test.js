const Circle = require('./circle.js');

describe('CircleClass', ()=> {
    it('should render svg for a red circle', ()=>{
        const circle = new Circle('red');

        expect(circle.render()).toEqual('<circle cx="50%" cy="50%" r="40" height="100%" width="100%" fill="red" />')
    })
})