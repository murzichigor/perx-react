import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import { ISSUES_URL } from '../../config';

const withErrorBoundary = WrappedComponent =>
  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
      this.setState({
        hasError: true,
        error,
        info,
      });
    }

    render() {
      const { hasError, error, info } = this.state;

      if (hasError) {
        return (
          <Container>
            <Segment>
              <Header as="h1">Sorry. Something went wrong.</Header>
              <Header.Subheader>
                Please go to
                {' '}
                <a href={ISSUES_URL}>our issue tracker</a>
                {' '}
                to find the solution of this
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                error or create new issue and we'll fix it as soon as possible. We promise.
              </Header.Subheader>

              <Header as="h3">{error.message}</Header>

              <Segment>
                <code style={{ whiteSpace: 'pre-wrap' }}>
                  {JSON.stringify(info, null, 2).replace(/\\n/g, '\n')}
                </code>
              </Segment>
            </Segment>
          </Container>
        );
      }
      return <WrappedComponent {...this.props} />;
    }
  };

export default withErrorBoundary;
