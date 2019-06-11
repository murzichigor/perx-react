import PropTypes from 'prop-types';
import React from 'react';
import { List } from 'semantic-ui-react';
import InitialItem from '../InitialItem';
import OrgsItem from '../OrgsItem';

const OrgsList = ({ orgs = [] }) => (
  <List
    divided
    relaxed
  >
    {orgs.map(org => (
      <OrgsItem
        key={org.id}
        avatar={org.avatar_url}
        description={org.description}
        name={org.login}
      />
    ))}

    {orgs.length === 0
    && <InitialItem />
    }
  </List>
);

OrgsList.propTypes = {
  orgs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      login: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default OrgsList;
