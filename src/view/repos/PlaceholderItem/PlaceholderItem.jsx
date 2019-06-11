import React from 'react';
import { Placeholder } from 'semantic-ui-react';

const PlaceholderItem = () => (
  <Placeholder>
    <Placeholder.Header>
      <Placeholder.Line length="short" />
    </Placeholder.Header>
    <Placeholder.Paragraph>
      <Placeholder.Line length="full" />
      <Placeholder.Line length="short" />
    </Placeholder.Paragraph>
    <Placeholder.Paragraph>
      <Placeholder.Line length="medium" />
    </Placeholder.Paragraph>
  </Placeholder>
);

export default PlaceholderItem;
