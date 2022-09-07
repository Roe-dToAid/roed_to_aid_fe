import { gql } from '@apollo/client';

export const GET_CLINICS = gql`
  query GetClinics {
    states {
      name
      id
      abbreviation
      resources {
        id
        stateId
        name
        website
        service
        active
        bipocFocus
      }
      misinformationCenters {
        id
        stateId
        name
        address
        source
        city
        zip
      }
      authorizedClinics {
        id
        stateId
        name
        city
        zip
        phone
        services
        website
        address
        source
      }
    }
  }
`;

export const GET_POLICIES = gql`
  query GetPolicies {
    states {
      name
      legal
      legalDescription
      abbreviation
    }
  }
`;
