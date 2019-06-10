import PropTypes from 'prop-types';
import React from 'react';

const OrgsList = ({ orgs = [] }) => (
  <ul>
    {orgs.map(org => (
      <li key={org.id}>{org.login}</li>
    ))}
  </ul>
);

OrgsList.propTypes = {
  orgs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      login: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default OrgsList;
