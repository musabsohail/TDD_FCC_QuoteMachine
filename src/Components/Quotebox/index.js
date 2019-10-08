import React, { Component } from 'react';

import QuoteAuthor from '../QuoteAuthor';
import QuoteText from '../Quotetext';
import QuoteTweet from '../QuoteTweet';

class QuoteBox extends Component {


  render () {
      return(
          <div id="quote-box">
              <QuoteText />
              <QuoteAuthor />
              <QuoteTweet />
          </div>
      )

  }

}

export default QuoteBox;