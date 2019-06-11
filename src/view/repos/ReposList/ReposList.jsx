import PropTypes from 'prop-types';
import React from 'react';
import { List } from 'semantic-ui-react';
import { reposSelectors } from '../../../state/repos';
import { withLoadingState } from '../../hocs';
import { useFirstRendered } from '../../hooks';
import LoadMoreContainer from '../LoadMoreContainer';
import PlaceholderItem from '../PlaceholderItem';
import InitialItem from '../InitialItem';
import ReposItem from '../ReposItem';

const ReposList = ({ repos = [], loading = false }) => {
  const displayedOnce = useFirstRendered(repos, loading);

  return (
    <List divided relaxed>
      {!displayedOnce && !loading && <InitialItem />}

      {loading && (
        <>
          <List.Item>
            <PlaceholderItem />
          </List.Item>
          <List.Item>
            <PlaceholderItem />
          </List.Item>
        </>
      )}

      {!loading && (
        <>
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
          <LoadMoreContainer />
        </>
      )}

      {!loading && displayedOnce && repos.length === 0 && (
        <List.Item>
          <List.Content>
            <List.Description>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              User doesn't have any repository
            </List.Description>
          </List.Content>
        </List.Item>
      )}
    </List>
  );
};

ReposList.propTypes = {
  loading: PropTypes.bool,
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

export default withLoadingState(reposSelectors.isLoading)(ReposList);
