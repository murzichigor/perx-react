import React from 'react';
import PropTypes from 'prop-types';
import { List, Label, Icon } from 'semantic-ui-react';
import styles from './ReposList.module.css';

const ReposList = ({ repos = [] }) => (
  <List
    divided
    relaxed
  >
    {repos.map(repo => (
      <List.Item key={repo.id}>
        <List.Content>
          <List.Header
            as="a"
            href={repo.html_url}
          >
            {repo.name}
          </List.Header>
          <List.Description>
            {repo.description}
          </List.Description>

          <Label.Group size="small" className={styles.tags}>
            <Label>
              <Icon name="star" />
              {repo.stargazers_count || 0}
            </Label>
            <Label>
              <Icon name="fork" />
              {repo.forks_count || 0}
            </Label>
            <Label>
              <Icon name="eye" />
              {repo.watchers_count || 0}
            </Label>
            {repo.language
            && <Label>{repo.language}</Label>
            }
          </Label.Group>
        </List.Content>
      </List.Item>
    ))}
  </List>
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
