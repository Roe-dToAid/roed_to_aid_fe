import React from 'react';
import './QuoteBlock.scss';

const QuoteBlock = () => {
  return (
    <>
      <div className="quote-container" data-cy="quote-text">
        <p tabIndex={0}>
          "Abortion is health care. Abortion is freedom. Abortion is bodily
          autonomy. A country without this human right is not a free country."
          -H.R. Bellicosa
        </p>
      </div>
    </>
  );
};

export default QuoteBlock;
