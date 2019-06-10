import React, { useContext } from 'react';
import UserSearchContext from '../UserSearchContext';

const fieldName = 'user';

const SearchForm = () => {
  const { setUserName } = useContext(UserSearchContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target.elements[fieldName];

    setUserName(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" name={fieldName} placeholder="Type user name" />
      <button type="submit">search</button>
    </form>
  );
};

export default SearchForm;
