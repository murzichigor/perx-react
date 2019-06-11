import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { reposActions, reposSelectors } from '../../../state';
import LoadMore from '../../shared/LoadMore';

const LoadMoreContainer = ({ nextPage, fetchNextPage }) => (
  <LoadMore fetchNextPage={fetchNextPage} nextPage={nextPage} />
);

LoadMoreContainer.propTypes = {
  nextPage: PropTypes.number,
  fetchNextPage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  nextPage: reposSelectors.getNextPage(state),
});

export default connect(
  mapStateToProps,
  { fetchNextPage: reposActions.fetchMoreReposRequest },
)(LoadMoreContainer);
