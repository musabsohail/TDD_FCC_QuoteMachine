import React from 'react'
import { shallow } from 'enzyme'
import QuoteAuthor from './index'

describe('Render Quote Author Component', () => {

    it('Component Quote Author Renders without err!', () => {
        const component = shallow(<QuoteAuthor />);
        console.log(component.debug());
        expect(component.find('#author').length).toBe(1)
    })

})