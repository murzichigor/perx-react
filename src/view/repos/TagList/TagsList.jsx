import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Label } from 'semantic-ui-react';
import styles from '../ReposItem/ReposItem.module.css';

const TagsList = ({ tags = {} }) => {
  const tagsArray = [
    {
      id: 'stars',
      default: 0,
      icon: 'star',
      value: tags.stars,
    },
    {
      id: 'forks',
      default: 0,
      icon: 'fork',
      value: tags.forks,
    },
    {
      id: 'watchers',
      default: 0,
      icon: 'eye',
      value: tags.watchers,
    },
    {
      id: 'language',
      default: null,
      value: tags.language,
    },
  ];

  return (
    <Label.Group
      size="small"
      className={styles.tags}
    >
      {tagsArray.map((tag) => {
        if (!tag.value && tag.default === null) {
          return null;
        }

        return (
          <Label key={tag.id}>
            {tag.icon && <Icon name={tag.icon} />}
            {tag.value || tag.default}
          </Label>
        );
      })}
    </Label.Group>
  );
};

TagsList.propTypes = {
  tags: PropTypes.shape({
    [PropTypes.string]: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  }),
};

export default TagsList;
