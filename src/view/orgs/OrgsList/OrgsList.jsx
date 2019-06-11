import PropTypes from 'prop-types';
import React from 'react';
import { Image, List } from 'semantic-ui-react';
import styles from './OrgsList.module.css';

const OrgsList = ({ orgs = [] }) => (
  <List
    divided
    relaxed
  >
    {orgs.map(org => (
      <List.Item key={org.id} className={styles.item}>
        <Image spaced size="mini" src={org.avatar_url} />
        <List.Content>
          <List.Header>
            {org.login}
          </List.Header>
          <List.Description>
            {org.description}
          </List.Description>
        </List.Content>
      </List.Item>
    ))}
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
