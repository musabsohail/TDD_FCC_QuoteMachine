import React, { Component } from 'react';

import QuoteAuthor from '../QuoteAuthor';
import QuoteText from '../Quotetext'

class QuoteBox extends Component {


  render () {
      return(
          <div id="quote-box">
              <QuoteText />
              {/* <QuoteAuthor /> */}
          </div>
      )

  }

}

export default QuoteBox;