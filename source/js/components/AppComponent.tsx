import * as React from 'react';
import { containerize } from '@lib/utils/react';
import { TypeChartComponent } from '@client/components/display/TypeChartComponent';
import { TemtemTypeaheadComponent } from '@client/components/display/TemtemTypeaheadComponent';

export const AppComponent = containerize(class extends React.Component<any, any> {
  render() {
    return (
      <React.Fragment>
        <TemtemTypeaheadComponent />

        <TypeChartComponent
          allowUserSelection={true}
          types={[]}
        />
      </React.Fragment>
    );
  }
});