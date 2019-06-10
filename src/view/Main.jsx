import React from 'react';
import Repos from './repos';
import Orgs from './orgs';
import SearchForm, { SearchProvider } from './userSearch';

const Main = () => (
  <main>
    <SearchProvider>
      <SearchForm />

      <Repos />

      <Orgs />
    </SearchProvider>
  </main>
);

export default Main;
