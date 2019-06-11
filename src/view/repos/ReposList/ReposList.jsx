import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import ReposItem from '../ReposItem';

const ReposList = ({ repos = [] }) => (
  <List
    divided
    relaxed
  >
    {repos.map(repo => (
      <ReposItem
        key={repo.id}
        url={repo.html_url}
        name={repo.name}
        description={repo.description}
        stars={repo.stargazers_count}
        watchers={repo.forks_count}
        forks={repo.watchers_count}
        language={repo.language}
      />
    ))}
  </List>
);

ReposList.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      stargazers_count: PropTypes.number.isRequired,
      forks_count: PropTypes.number.isRequired,
      watchers_count: PropTypes.number.isRequired,
      language: PropTypes.string,
    }),
  ).isRequired,
};

export default ReposList;
