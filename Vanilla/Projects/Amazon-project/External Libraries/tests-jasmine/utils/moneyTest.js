import { fixCurrency } from "../../../Scripts/Utils/money.js"


describe('test suite :  fix Currency', () =>{
    it('converts cents into Dollars', () =>{
        expect(fixCurrency(2089)).toEqual('20.89')
    });

    it('works With 0', () => {
        expect(fixCurrency(0)).toEqual('0.00')
    });

    it('rounds up to the nearest cent', () => {
        expect(fixCurrency(3000.9)).toEqual('30.01')
    })
})