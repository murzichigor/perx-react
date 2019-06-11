import React from 'react';
import { Header } from 'semantic-ui-react';
import ReposContainer from '../ReposContainer';

const ReposSection = () => (
  <section>
    <Header as="h2">Repositories</Header>
    <ReposContainer />
  </section>
);

export default ReposSection;
