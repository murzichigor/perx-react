import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import { orgsActions, orgsSelectors } from '../../../state';
import { UserSearchContext } from '../../userSearch';
import OrgsList from '../OrgsList';

const OrgsContainer = ({ fetchOrgsAct, orgs }) => {
  const { userName } = useContext(UserSearchContext);
  useEffect(() => {
    if (userName) {
      fetchOrgsAct(userName);
    }
  }, [fetchOrgsAct, userName]);

  return <OrgsList orgs={orgs} />;
};

OrgsContainer.propTypes = {
  fetchOrgsAct: PropTypes.func.isRequired,
  ...OrgsList.propTypes,
};

const mapStateToProps = state => ({
  orgs: orgsSelectors.getCurrentOrgsSel(state),
});

export default connect(
  mapStateToProps,
  {
    fetchOrgsAct: orgsActions.fetchOrgsRequest,
  },
)(OrgsContainer);
