import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { reposActions, reposSelectors } from '../../../state';
import LoadMore from '../../shared/LoadMore';

const LoadMoreContainer = ({ nextPage, fetchNextPage, loading = false }) => (
  <LoadMore fetchNextPage={fetchNextPage} nextPage={nextPage} loading={loading} />
);

LoadMoreContainer.propTypes = {
  nextPage: PropTypes.number,
  fetchNextPage: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

const mapStateToProps = state => ({
  nextPage: reposSelectors.getNextPage(state),
  loading: reposSelectors.isLoadingMore(state),
});

export default connect(
  mapStateToProps,
  { fetchNextPage: reposActions.fetchMoreReposRequest },
)(LoadMoreContainer);
