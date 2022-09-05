import React, { useState, useEffect } from 'react';
import ClinicCard from '../ClinicCard/ClinicCard';
import './ClinicCardContainer.scss';

const ClinicCardContainer = ({ states, toggleSelected, filteredResults }) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (filteredResults.length > 0) {
      setSearchResults(filteredResults);
    } else {
      setSearchResults(states);
    }
  }, [states, filteredResults, setSearchResults]);

  const misinformationCenters = searchResults.map((state) => {
    return state.misinformationCenters.map((clinic) => {
      return (
        <ClinicCard
          key={clinic.id}
          name={clinic.name}
          address={clinic.address}
          city={clinic.city}
          state={state.name}
          zip={clinic.zip}
        />
      );
    });
  });

  const authorizedClinics = searchResults.map((state) => {
    return state.authorizedClinics.map((clinic) => {
      return (
        <ClinicCard
          key={clinic.id}
          name={clinic.name}
          address={clinic.address}
          city={clinic.city}
          state={state.name}
          zip={clinic.zip}
          phone={clinic.phone}
          services={clinic.services}
          url={clinic.website}
        />
      );
    });
  });

  const stateResources = searchResults.map((state) => {
    return state.resources.map((resource) => {
      return (
        <ClinicCard
          key={resource.id}
          name={resource.name}
          services={resource.service}
          url={resource.website}
        />
      );
    });
  });
  return (
    <section className="all-clinics-card-container" data-cy="all-clinics-card-container">
      {(toggleSelected === 'authorized' || toggleSelected === 'all') && (
        <>
          <h2>Authorized Clinics</h2>
          <div className="card-container authorized-card-container" data-cy="authorized-card-container">
            {authorizedClinics}
          </div>
        </>
      )}
      {(toggleSelected === 'misinformationCenters' ||
        toggleSelected === 'all') && (
        <>
          <h2>Misinformation Centers</h2>
          <div className="card-container misinformation-card-container">
            {misinformationCenters}
          </div>
        </>
      )}
      {(toggleSelected === 'resources' || toggleSelected === 'all') && (
        <>
          <h2>State Resources</h2>
          <div className="card-container resource-card-container">
            {stateResources}
          </div>
        </>
      )}
    </section>
  );
};

export default ClinicCardContainer;
