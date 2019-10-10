import React from 'react';
import ReactDOM from 'react-dom';
import { render, mount } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


const quoteApp = mount(<App />);

describe('Quote App is running', () => {

  console.log("Testing The Quote App::: >>>", quoteApp.html());

  it('Displays a Quote Box', () => {
    const wrapper = quoteApp.find('#quote-box');
    expect(wrapper.length).toBe(1)
  });

  it('Displays a Quote Text', () => {
    const wrapper = quoteApp.find('#text');
    expect(wrapper.length).toBe(1);
    expect(wrapper.text()).not.toBe('');
  });

  it('Displays a Quote Author', () => {
    const wrapper = quoteApp.find('#author');
    expect(wrapper.length).toBe(1);
    expect(wrapper.text()).not.toBe('');
  });

  it('Displays a Button - Clickable element for New Quote', () => {
    const wrapper = quoteApp.find('#new-quote');
    expect(wrapper.length).toBe(1);
    // console.log("BTN >>>> ####", wrapper.name , "\nHTML :::::::::", wrapper.html());
    // expect(wrapper.html())
  });

  it('New Quote on #new-quote Btn click', () => {
    const wrapperQuote = quoteApp.find('#text');
    const quote = wrapperQuote.text();
    const btn = quoteApp.find('#new-quote');
    btn.simulate('click')
    expect(wrapperQuote.text()).not.toBe(quote);
    expect(wrapperQuote.text()).not.toBe('');
  });

}); 