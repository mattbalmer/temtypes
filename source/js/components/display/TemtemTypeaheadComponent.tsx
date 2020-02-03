import * as React from 'react';
import temtemList from '@client/data/temtems';
import { TemtemDisplayPlateComponent } from '@client/components/display/TemtemDisplayPlateComponent';

const returnValidTemtems = (temtems, query) => {
  if(!query) {
    return [];
  }

  query = query.toUpperCase();

  const matchedNamed = temtems
    .filter(temtem => temtem.name.toUpperCase().includes(query));

  const matchedType = temtems
    .filter(temtem => temtem.types.some(type => type.includes(query)));

  return [...matchedNamed, ...matchedType];
};

export class TemtemTypeaheadComponent extends React.Component<{
  onTemtemSelect: (any) => any;
}, {
  query: string,
  selection: number,
  suggestions: any[],
}> {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      selection: -1,
      suggestions: [],
    };
  }

  inputRef;

  onSubmit = (e) => {
    e.preventDefault();
  };

  onSelect = (temtem) => {
    this.props.onTemtemSelect(temtem);
    this.setState({
      query: '',
      suggestions: returnValidTemtems(temtemList, ''),
      selection: -1,
    });
  };

  onInputChange = (e) => {
    const query = e.target.value;
    this.setState({
      query,
      suggestions: returnValidTemtems(temtemList, query),
    });
  };

  onFocusedKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      this.setState({
        query: '',
        selection: -1,
        suggestions: returnValidTemtems(temtemList, ''),
      });
      this.inputRef.current.blur();
    }
    if (e.key === 'ArrowUp') {
      this.setState({
        selection: Math.max(-1, this.state.selection - 1),
      });
    }
    if (e.key === 'ArrowDown') {
      this.setState({
        selection: Math.min(this.state.suggestions.length - 1, this.state.selection + 1),
      });
    }
    if (e.key === 'Enter' && this.state.selection > -1) {
      this.onSelect(this.state.suggestions[this.state.selection]);
    }
  };

  onUnfocusedKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      this.inputRef.current.focus();
    }
    if (e.key === 'Escape') {
      this.setState({
        query: '',
        selection: -1,
        suggestions: returnValidTemtems(temtemList, ''),
      });
    }
  };

  onFocus = () => {
    window.addEventListener('keydown', this.onFocusedKeyDown);
    window.removeEventListener('keydown', this.onUnfocusedKeyDown);
  };

  onBlur = () => {
    window.removeEventListener('keydown', this.onFocusedKeyDown);
    window.addEventListener('keydown', this.onUnfocusedKeyDown);
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onUnfocusedKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onUnfocusedKeyDown);
  }

  render() {
    this.inputRef = React.createRef();
    const { query, selection } = this.state;
    const suggestions = returnValidTemtems(temtemList, query);

    console.log('render', query, selection);

    return (
      <div className="typeahead">
        <form onSubmit={this.onSubmit}>
          <div className="typeahead__input-wrapper">
            <input
              type="text"
              onChange={this.onInputChange}
              value={query}
              ref={this.inputRef}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              placeholder={"Search for Temtem here!"}
            />
            {query ?
              <div className="typeahead__suggestions">
                {suggestions.slice(0, 5).map((temtem, i) =>
                  <TemtemDisplayPlateComponent
                    key={temtem.number}
                    temtem={temtem}
                    onClick={this.onSelect}
                    selected={i === selection}
                  />
                )}
                {suggestions.length === 0 ? <span>No temtem found</span> : null}
                {suggestions.length > 5 ? <span>+ {suggestions.length - 5} more!</span> : null}
              </div>
              : null}
          </div>
        </form>
      </div>
    )
  }
}