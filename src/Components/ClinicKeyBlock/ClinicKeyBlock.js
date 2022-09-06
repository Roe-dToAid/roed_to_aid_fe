import React from 'react';
import myBodyImage from './../../assets/feminist lettering compositions and stickers 2 png-03.png';
import './ClinicKeyBlock.scss';

const ClinicKeyBlock = () => {
  return (
    <div className="clinic-key-block-container">
      <div
        className="key-block authorized"
        data-cy="clinic-key-block-authorized"
      >
        <div className="header" data-cy="authorized-header">
          <p className='authorized-h3' data-cy="authorized-h3">Authorized</p>
        </div>
        <p data-cy="authorized-p">
          Blue clinics are verified safe and provide access to abortion care.
        </p>
      </div>
      <img
        src={myBodyImage}
        alt="my-body-my-rules"
        className="my-body-image"
        data-cy="my-body-image"
      ></img>
      <div
        className="key-block misinformation"
        data-cy="clinic-key-block-misinformation"
      >
        <div className="header" data-cy="misinformation-header">
          <p className='authorized-h3' data-cy="misinformation-h3">Misinformation</p>
        </div>
        <p data-cy="misinformation-p">
          Red clinics are "crisis centers" and are considered unsafe/harmful.
        </p>
      </div>
    </div>
  );
};

export default ClinicKeyBlock;
