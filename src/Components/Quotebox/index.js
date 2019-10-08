import React, { Component } from 'react';

import QuoteAuthor from '../QuoteAuthor';
import QuoteBtn from '../QuoteBtn';
import QuoteText from '../Quotetext';

class QuoteBox extends Component {


  render () {
      return(
          <div id="quote-box">
              <QuoteText />
              <QuoteAuthor />
              <QuoteBtn />
          </div>
      )

  }

}

export default QuoteBox;