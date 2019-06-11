import React from 'react';
import { Container, Divider, Grid, Header, Segment } from 'semantic-ui-react';
import styles from './Main.module.css';
import Orgs from './orgs';
import Repos from './repos';
import SearchForm, { SearchProvider } from './userSearch';

const Main = () => (
  <SearchProvider>
    <Container className={styles.root}>
      <Segment as="main">
        <Header as="h1">Search for GitHub user's repositories & organizations</Header>
        <Divider hidden />

        <SearchForm />

        <Divider />
        <Grid
          divided
          columns={2}
          stackable
        >
          <Grid.Row>
            <Grid.Column>

              <Repos />

            </Grid.Column>
            <Grid.Column>

              <Orgs />

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  </SearchProvider>
);

export default Main;
