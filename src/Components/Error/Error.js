import React from 'react';
import './Error.scss';

const Error = () => {
  return (
    <div className="error-messaging" data-cy="error">
      <h2>Something went wrong.</h2>
      <h3>Click the Roe'dToAid logo above to return home.</h3>
      <img
        className="error-image"
        data-cy="error-image"
        src="https://media.giphy.com/media/oypwltUsyqZT2jNkyU/giphy.gif"
        alt="This uterus says error!"
      />
    </div>
  );
};

export default Error;
