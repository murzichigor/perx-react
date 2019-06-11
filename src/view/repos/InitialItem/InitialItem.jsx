import React from 'react';
import { List } from 'semantic-ui-react';

const InitialItem = () => (
  <List.Item>
    <List.Content>
      <List.Header>
        Enter user name to search for his repositories
      </List.Header>
      <List.Description>
        There should be a list of all his repositories with public access.
      </List.Description>
    </List.Content>
  </List.Item>
);

export default InitialItem;
