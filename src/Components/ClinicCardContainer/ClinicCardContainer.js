import React, { useState, useEffect } from 'react';
import ClinicCard from '../ClinicCard/ClinicCard';
import './ClinicCardContainer.scss';

const ClinicCardContainer = ({
  states,
  toggleSelected,
  filteredResults,
  searchInput,
}) => {
  const [authorized, setAuthorized] = useState([]);
  const [misinformation, setMisinformation] = useState([]);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    if (filteredResults.length > 0) {
      setAuthorized(
        filteredResults.filter((state) => state.authorizedClinics.length > 0)
      );
      setMisinformation(
        filteredResults.filter(
          (state) => state.misinformationCenters.length > 0
        )
      );
      setResources(
        filteredResults.filter((state) => state.resources.length > 0)
      );
    } else {
      setMisinformation(
        states.filter((state) => state.misinformationCenters.length > 0)
      );
      setAuthorized(
        states.filter((state) => state.authorizedClinics.length > 0)
      );
      setResources(
        states.filter((state) => state.resources.length > 0)
      );
    }
  }, [states, filteredResults, setMisinformation, setAuthorized, setResources]);

  const misinformationCenters = misinformation.map((state) => {
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

  const authorizedClinics = authorized.map((state) => {
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

  const stateResources = resources.map((state) => {
    return state.resources.map((resource) => {
      return (
        <ClinicCard
          key={resource.id}
          name={resource.name}
          services={resource.service}
          url={resource.website}
          state={state.name}
        />
      );
    });
  });

  // console.log(noAuthorized);
  // console.log(authorizedClinics);
  return (
    <section
      className="all-clinics-card-container"
      data-cy="all-clinics-card-container"
    >
      {(toggleSelected === 'authorized' || toggleSelected === 'all') && (
        <>
          <h2>Authorized Clinics</h2>
          {authorized.length ? (
            <div
              className="card-container authorized-card-container"
              data-cy="authorized-card-container"
            >
              {authorizedClinics}
            </div>
          ) : (
            <h3>No Authorized Clinics match your search</h3>
          )}
        </>
      )}
      {(toggleSelected === 'resources' || toggleSelected === 'all') && (
        <>
          <h2>State Resources</h2>
          {resources.length ?(<div className="card-container resource-card-container">
            {stateResources}
          </div>) : <h3>No resources match your search</h3>}
        </>
      )}
      {(toggleSelected === 'misinformationCenters' ||
        toggleSelected === 'all') && (
        <>
          <h2>Misinformation Centers</h2>
          {misinformation.length ? (
            <div className="card-container misinformation-card-container">
              {misinformationCenters}
            </div>
          ) : (
            <h3>No MisInformation Centers match your search</h3>
          )}
        </>
      )}
    </section>
  );
};

export default ClinicCardContainer;
