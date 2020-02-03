import * as React from 'react';
import { containerize } from '@lib/utils/react';
import { TypeChartComponent } from '@client/components/display/TypeChartComponent';
import { TemtemTypeaheadComponent } from '@client/components/display/TemtemTypeaheadComponent';

export const AppComponent = containerize(class extends React.Component<any, any> {
  constructor(props) {
    super(props)
    
    this.state = {
      selectedTemtem: null,
    };
  }
  
  onSelectTemtem = (selectedTemtem) => {
    this.setState({
      selectedTemtem,
    });
  }
  
  render() {
    const { selectedTemtem } = this.state;

    return (
      <React.Fragment>
        <TemtemTypeaheadComponent
          onTemtemSelect={this.onSelectTemtem}
        />

        <TypeChartComponent
          allowUserSelection={true}
          types={selectedTemtem ? selectedTemtem.types : []}
        />
      </React.Fragment>
    );
  }
});