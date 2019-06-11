import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import TagsList from '../TagList';

const ReposItem = ({
  url,
  name,
  description,
  stars,
  watchers,
  forks,
  language,
}) => (
  <List.Item>
    <List.Content>
      <List.Header
        as="a"
        href={url}
      >
        {name}
      </List.Header>
      <List.Description>
        {description}
      </List.Description>


      <TagsList
        tags={{
          stars,
          forks,
          watchers,
          language,
        }}
      />
    </List.Content>
  </List.Item>
);

ReposItem.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  stars: PropTypes.number.isRequired,
  watchers: PropTypes.number.isRequired,
  forks: PropTypes.number.isRequired,
  language: PropTypes.string,
};

export default ReposItem;
