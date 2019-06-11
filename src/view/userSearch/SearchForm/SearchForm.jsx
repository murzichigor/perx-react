import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { compose } from 'redux';
import { Button, Input, Message } from 'semantic-ui-react';
import { combinedLoading } from '../../../state/selectors';
import { withErrorMessage, withLoadingState } from '../../hocs';
import UserSearchContext from '../UserSearchContext';

const fieldName = 'user';

const SearchForm = ({ loading = false, errorMessage = null }) => {
  const { setUserName } = useContext(UserSearchContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target.elements[fieldName];

    setUserName(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        icon="github"
        iconPosition="left"
        type="search"
        name={fieldName}
        width={6}
        placeholder="Type user name…"
        action={<Button type="submit">search</Button>}
        loading={loading}
        aria-label="Search by username"
        error={!!errorMessage}
      />

      {errorMessage && <Message warning header={errorMessage} />}
    </form>
  );
};

SearchForm.propTypes = {
  loading: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default compose(
  withErrorMessage,
  withLoadingState(combinedLoading),
)(SearchForm);
