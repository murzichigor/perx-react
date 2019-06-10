import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import { reposActions, reposSelectors } from '../../../state';
import ReposList from '../ReposList';
import { UserSearchContext } from '../../userSearch';

const ReposContainer = ({ fetchReposAct, repos }) => {
  const { userName } = useContext(UserSearchContext);
  useEffect(() => {
    if (userName) {
      fetchReposAct(userName);
    }
  }, [fetchReposAct, userName]);

  return <ReposList repos={repos} />;
};

ReposContainer.propTypes = {
  fetchReposAct: PropTypes.func.isRequired,
  ...ReposList.propTypes,
};

const mapStateToProps = state => ({
  repos: reposSelectors.getCurrentReposSel(state),
});

export default connect(
  mapStateToProps,
  {
    fetchReposAct: reposActions.fetchReposRequest,
  },
)(ReposContainer);
