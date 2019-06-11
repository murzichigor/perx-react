import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Button, Form, Input } from 'semantic-ui-react';
import { withLoadingState } from '../../hocs';
import UserSearchContext from '../UserSearchContext';

const fieldName = 'user';

const SearchForm = ({ loading = false }) => {
  const { setUserName } = useContext(UserSearchContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target.elements[fieldName];

    setUserName(value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        icon="github"
        iconPosition="left"
        type="search"
        name={fieldName}
        width={6}
        placeholder="Type user name…"
        action={<Button type="submit">search</Button>}
        loading={loading}
      />
    </Form>
  );
};

SearchForm.propTypes = {
  loading: PropTypes.bool,
};

export default withLoadingState(SearchForm);
