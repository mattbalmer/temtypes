import * as React from 'react';
import { containerize } from '@lib/utils/react';
import { MultiTemtemTypeChartComponent } from '@client/components/display/MultiTemtemTypeChartComponent';
import { TemtemTypeaheadComponent } from '@client/components/display/TemtemTypeaheadComponent';

export const AppComponent = containerize(class extends React.Component<any, {
  selectedTemtems: any[],
}> {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedTemtems: [],
    };
  }
  
  onSelectTemtem = (selectedTemtem) => {
    if (this.state.selectedTemtems.length < 2 && !this.state.selectedTemtems.some(_ => _.number === selectedTemtem.number)) {
      this.setState({
        selectedTemtems: [...this.state.selectedTemtems, selectedTemtem],
      });
    }
  };
  
  render() {
    const { selectedTemtems } = this.state;

    return (
      <React.Fragment>
        <TemtemTypeaheadComponent
          onTemtemSelect={this.onSelectTemtem}
        />

        <MultiTemtemTypeChartComponent
          allowUserSelection={true}
          selectedTemtems={selectedTemtems}
          onReset={this.onReset}
          removeTemtem={this.removeTemtem}
        />
      </React.Fragment>
    );
  }

  removeTemtem = (temtem) => {
    this.setState({
      selectedTemtems: this.state.selectedTemtems.filter(_ => _.number !== temtem.number),
    });
  };

  onReset = () => {
    this.setState({
      selectedTemtems: [],
    });
  };

  onUnfocusedKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Backspace' && document.activeElement.tagName !== 'INPUT') {
      e.preventDefault();
      e.stopImmediatePropagation();
      this.onReset();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onUnfocusedKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onUnfocusedKeyDown);
  }

});