import React from 'react';
import { List, Placeholder } from 'semantic-ui-react';

const InitialItem = () => (
  <List.Item style={{ display: 'flex', alignItems: 'flex-start' }}>
    <Placeholder style={{ height: 32, width: 32, marginRight: '1rem' }}>
      <Placeholder.Image />
    </Placeholder>
    <List.Content>
      <List.Header>
        Enter user name to search for organizations
      </List.Header>
      <List.Description>
        There should be a list of all his organizations with public access.
      </List.Description>
    </List.Content>
  </List.Item>
);

export default InitialItem;
