import PropTypes from 'prop-types';
import React from 'react';
import { Image, List } from 'semantic-ui-react';
import styles from './OrgsItem.module.css';

const OrgsItem = ({
  avatar,
  name,
  description,
}) => (
  <List.Item className={styles.root}>
    <Image
      spaced
      size="mini"
      src={avatar}
    />
    <List.Content>
      <List.Header>
        {name}
      </List.Header>
      <List.Description>
        {description}
      </List.Description>
    </List.Content>
  </List.Item>
);

OrgsItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default OrgsItem;
