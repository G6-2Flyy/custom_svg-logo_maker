const Square = require('./square.js');

describe('SquareClass', ()=> {
    it('should render svg for a red square', ()=>{
        const square = new Square('red');

        expect(square.render()).toEqual('<rect x="10" y="10" width="30" height="30" fill="red"/>')
    })
})