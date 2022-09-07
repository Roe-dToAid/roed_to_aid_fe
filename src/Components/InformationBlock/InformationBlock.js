import React from 'react';
import './InformationBlock.scss';

const InformationBlock = () => {
  return (
    <>
      <div
        className="authorized-clinics-block"
        data-cy="authorized-clinic-explanation"
      >
        <div className="authorized-header" tabIndex={0}>
          <h2>Authorized Clinics</h2>
        </div>
        <p tabIndex={0}>
          Clinics that have licensed medical personnel and provide safe,
          regulated abortion services. Providers will answer questions and
          address concerns over the phone or in person. Materials and resources
          are based on medical science and clearly state the kinds of services
          provided.
        </p>
      </div>
      <div
        className="misinformation-centers-block"
        data-cy="misinformation-center-explanation"
      >
        <div className="misinformation-header" tabIndex={0}>
          <h2>Misinformation Centers</h2>
        </div>
        <p tabIndex={0}>
          Misinformation Centers or "Crisis Pregnancy Centers" are facilities
          that often advertise as 'abortion clinics', however do not provide
          abortion services. Many of these centers provide false, harmful
          information and attempt to dissuade individuals from personal
          decisions.
        </p>
      </div>
    </>
  );
};

export default InformationBlock;
