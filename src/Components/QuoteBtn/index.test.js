import React from 'react'
import { shallow } from 'enzyme'
import QuoteBtn from './index'

describe('Render Quote Button Component', () => {

    it('Component Quote Button Renders without err!', () => {
        const component = shallow(<QuoteBtn />);
        console.log(component.debug());
        expect(component.find('#new-quote').length).toBe(1)
    })

})