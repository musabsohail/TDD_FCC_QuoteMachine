import React from 'react';
import { shallow } from 'enzyme';
import QuoteTweet from './index';

describe('Render Quote Tweet Button Component', () => {
    it('Component Quote Tweet Button Renders without err!', () => {
        const component = shallow(<QuoteTweet />);
        console.log(component.debug());
        expect(component.find('#tweet-quote').length).toBe(1)
    })
})