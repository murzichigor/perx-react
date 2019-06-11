import React from 'react';
import { Header } from 'semantic-ui-react';
import OrgsContainer from '../OrgsContainer';

const OrgsSection = () => (
  <section>
    <Header as="h2">Organizations</Header>
    <OrgsContainer />
  </section>
);

export default OrgsSection;
