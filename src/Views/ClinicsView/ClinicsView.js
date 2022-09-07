import React, { useEffect, useState, useRef } from 'react';
import { useQuery } from '@apollo/client';
import './ClinicsView.scss';
import ClinicKeyBlock from '../../Components/ClinicKeyBlock/ClinicKeyBlock';
import ToggleClinicsButton from '../../Components/ToggleClinicsButton/ToggleClinicsButton';
import SearchBar from '../../Components/SearchBar/SearchBar';
import ClinicCardContainer from '../../Components/ClinicCardContainer/ClinicCardContainer';
import Loading from '../../Components/Loading/Loading';
import Error from '../../Components/Error/Error';
import { GET_CLINICS } from '../../Utilities/queries';

const ClinicsView = () => {
  let { data, loading, error } = useQuery(GET_CLINICS);
  if (loading) console.log('Loading...') && <Loading />;
  if (error) console.log('error!', error.message);

  const [states, setStates] = useState([]);
  const [toggleSelected, setToggleSelected] = useState('all');
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!loading) {
      setStates(data.states);
    }
  }, [loading, data]);

  const handleSearchChange = (value) => {
    setSearchInput(value);
  };

  useEffect(() => {
    if (searchInput) {
      const filteredData = states.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredResults(filteredData);
    } else {
      setFilteredResults([]);
    }
  }, [searchInput, states]);

  return (
    <main className="clinics-view-container">
      <h1 data-cy="clinics-view-heading" tabIndex={0}>
        Find a safe clinic
      </h1>
      <div className="heading-container">
        <ClinicKeyBlock />
        <div>
          <p
            className="clinics-view-disclaimer"
            data-cy="clinics-view-disclaimer"
            tabIndex={0}
          >
            As this is an MVP project, we currently only have results for
            Indiana, New Mexico, and Texas. Please use one of those states when
            using the search bar.
          </p>
          <SearchBar
            inputRef={inputRef}
            handleSearchChange={handleSearchChange}
          />
          <ToggleClinicsButton setToggleSelected={setToggleSelected} />
        </div>
      </div>
      {!error ? (
        !loading ? (
          <ClinicCardContainer
            states={states}
            toggleSelected={toggleSelected}
            filteredResults={filteredResults}
            searchInput={searchInput}
          />
        ) : (
          <Loading />
        )
      ) : (
        <Error />
      )}
    </main>
  );
};

export default ClinicsView;
