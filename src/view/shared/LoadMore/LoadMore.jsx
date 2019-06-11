import PropTypes from 'prop-types';
import React, { useCallback, useContext } from 'react';
import { Button } from 'semantic-ui-react';
import { UserSearchContext } from '../../userSearch';

const LoadMore = ({ nextPage, fetchNextPage }) => {
  const { userName } = useContext(UserSearchContext);
  const onClick = useCallback(
    () => {
      if (nextPage) {
        fetchNextPage(userName, nextPage);
      }
    },
    [nextPage, fetchNextPage, userName],
  );

  if (!nextPage) return null;

  return (
    <Button onClick={onClick} fluid>
      load more
    </Button>
  );
};

LoadMore.propTypes = {
  nextPage: PropTypes.number,
  fetchNextPage: PropTypes.func.isRequired,
};

export default LoadMore;
