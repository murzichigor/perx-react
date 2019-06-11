import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { orgsActions, orgsSelectors } from '../../../state';
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
  nextPage: orgsSelectors.getNextPage(state),
  loading: orgsSelectors.isLoadingMore(state),
});

export default connect(
  mapStateToProps,
  { fetchNextPage: orgsActions.fetchMoreOrgsRequest },
)(LoadMoreContainer);
