import PropTypes from 'prop-types';
import React from 'react';
import { List } from 'semantic-ui-react';
import { orgsSelectors } from '../../../state/orgs';
import { withLoadingState } from '../../hocs';
import { useFirstRendered } from '../../hooks';
import InitialItem from '../InitialItem';
import OrgsItem from '../OrgsItem';
import PlaceholderItem from '../PlaceholderItem';

const OrgsList = ({ orgs = [], loading = false }) => {
  const displayedOnce = useFirstRendered(orgs, loading);

  return (
    <List
      divided
      relaxed
    >
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

      {!loading && orgs.map(org => (
        <OrgsItem
          key={org.id}
          avatar={org.avatar_url}
          description={org.description}
          name={org.login}
        />
      ))}

      {!displayedOnce && !loading
      && <InitialItem />
      }

      {!loading && displayedOnce && orgs.length === 0 && (
        <List.Item>
          <List.Content>
            <List.Description>User doesn't have any organization</List.Description>
          </List.Content>
        </List.Item>
      )}
    </List>
  );
};

OrgsList.propTypes = {
  loading: PropTypes.bool,
  orgs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      login: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default withLoadingState(orgsSelectors.isLoading)(OrgsList);
