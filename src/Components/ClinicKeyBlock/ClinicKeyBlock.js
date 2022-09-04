import React from 'react';
import myBodyImage from './../../assets/feminist lettering compositions and stickers 2 png-03.png';
import './ClinicKeyBlock.scss';

const ClinicKeyBlock = () => {
  return (
    <div className="clinic-key-block-container">
      <div className="key-block authorized" data-cy="clinic-key-block-authorized">
        <div className="header" data-cy="authorized-header">
          <h3 data-cy="authorized-h3">Authorized</h3>
        </div>
        <p data-cy="authorized-p">
          Blue clinics are verified safe and provide access to abortion care.
        </p>
      </div>
      <img
        src={myBodyImage}
        alt="illustration of woman"
        className="my-body-image"
      ></img>
      <div className="key-block misinformation">
        <div className="header">
          <h3>Misinformation</h3>
        </div>
        <p>
          Red clinics are "crisis centers" and are considered unsafe/harmful.
        </p>
      </div>
    </div>
  );
};

export default ClinicKeyBlock;
