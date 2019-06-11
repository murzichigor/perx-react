import PropTypes from 'prop-types';
import React, { useCallback, useContext } from 'react';
import { Button } from 'semantic-ui-react';
import { UserSearchContext } from '../../userSearch';

const LoadMore = ({ nextPage, fetchNextPage, loading = false }) => {
  const { userName } = useContext(UserSearchContext);
  const onClick = useCallback(() => {
    if (nextPage) {
      fetchNextPage(userName, nextPage);
    }
  }, [nextPage, fetchNextPage, userName]);

  if (!nextPage) return null;

  return (
    <Button onClick={onClick} fluid loading={loading} disabled={loading}>
      load more
    </Button>
  );
};

LoadMore.propTypes = {
  nextPage: PropTypes.number,
  fetchNextPage: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

export default LoadMore;
