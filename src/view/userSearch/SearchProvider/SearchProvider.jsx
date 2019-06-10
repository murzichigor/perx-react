import PropTypes from 'prop-types';
import React, { useState } from 'react';
import UserSearchContext from '../UserSearchContext';

const SearchProvider = ({ children }) => {
  const [userName, setUserName] = useState('');

  const context = {
    userName,
    setUserName,
  };

  return <UserSearchContext.Provider value={context}>{children}</UserSearchContext.Provider>;
};

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SearchProvider;
