import * as React from 'react';
import { containerize } from '@lib/utils/react';
import { TypeChartComponent } from '@client/components/display/TypeChartComponent';

export const AppComponent = containerize(class extends React.Component<any, any> {
  render() {
    return (
      <TypeChartComponent />
    );
  }
});