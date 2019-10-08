import React from 'react'
import { shallow } from 'enzyme'
import QuoteBox from './index'

describe('Render Quote Box Component', () => {

    it('Component Quote Box Renders without err!', () => {
        const component = shallow(<QuoteBox />);
        console.log(component.debug());
        expect(component.find('#quote-box').length).toBe(1)
    })

})