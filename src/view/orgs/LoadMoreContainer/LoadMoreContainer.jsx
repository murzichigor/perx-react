import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { orgsActions, orgsSelectors } from '../../../state';
import LoadMore from '../../shared/LoadMore';

const LoadMoreContainer = ({ nextPage, fetchNextPage }) => (
  <LoadMore fetchNextPage={fetchNextPage} nextPage={nextPage} />
);

LoadMoreContainer.propTypes = {
  nextPage: PropTypes.number,
  fetchNextPage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  nextPage: orgsSelectors.getNextPage(state),
});

export default connect(
  mapStateToProps,
  { fetchNextPage: orgsActions.fetchMoreOrgsRequest },
)(LoadMoreContainer);
