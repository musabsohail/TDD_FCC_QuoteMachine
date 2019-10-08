import React from 'react'
import { shallow } from 'enzyme'
import QuoteText from './index'

describe('Render Quote Text Component', () => {

    it('Component Quote Text Renders without err!', () => {
        const component = shallow(<QuoteText />);
        console.log(component.debug());
        expect(component.find('#text').length).toBe(1)
    })

})