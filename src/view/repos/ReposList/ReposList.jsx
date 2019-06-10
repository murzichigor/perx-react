import React from 'react';
import PropTypes from 'prop-types';

const ReposList = ({ repos = [] }) => (
  <ul>
    {repos.map(repo => (
      <li key={repo.id}>
        <a href={repo.html_url}>{repo.name}</a>
      </li>
    ))}
  </ul>
);

ReposList.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ReposList;
