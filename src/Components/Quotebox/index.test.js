import React from 'react'
import { shallow } from 'enzyme'

import QuoteBox from './index'
import QuoteAuthor from '../QuoteAuthor';
import QuoteText from '../Quotetext';

const component = shallow(<QuoteBox />);
        

describe('Render Quote Box Component', () => {

    it('Component Quote Box Renders without err!', () => {
        console.log(component.debug());
        expect(component.find('#quote-box').length).toBe(1)
    })

})

// Integration Test
describe('Render QuoteText in QuoteBox', () => {

    it('Component with id "text" renders in QuoteBox without err!', () => {
        const innerDiv = component.find(QuoteText)  
        expect(innerDiv.length).toBe(1)
    })


})

describe('Render QuoteAuthor in QuoteBox', () => {

    it('Component with id "author" renders in QuoteBox without err!', () => {
        const innerDiv = component.find(QuoteAuthor)  
        expect(innerDiv.length).toBe(1)
    })


})