import * as React from 'react';
import { containerize } from '@lib/utils/react';

export const AppComponent = containerize(class extends React.Component<any, any> {
  render() {
    return (
      <div>
        Hello World
      </div>
    );
  }
});