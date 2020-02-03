import * as React from 'react';
import classnames from 'classnames';
import temtemList from '@client/data/temtems';
import { TemtemDisplayPlateComponent } from '@client/components/display/TemtemDisplayPlateComponent';

const returnValidTemtems = (temtems, query) => {
  if(!query) {
    return [];
  }
  
  query = query.toUpperCase();
  
  return temtems
    .filter(temtem => temtem.name.toUpperCase().includes(query) || temtem.types.some(type => type.includes(query)));
}

export const TemtemTypeaheadComponent = ({ onTemtemSelect }) => {
  const inputRef = React.createRef();
  const [query, updateQuery] = React.useState('');
  const suggestions = returnValidTemtems(temtemList, query);
  
  const onSubmit = (e) => {
    e.preventDefault();
  };
  
  const onSelect = (temtem) => {
    onTemtemSelect(temtem);
    updateQuery('');
  };
  
  return (<div className="typeahead">
    <form onSubmit={onSubmit}>
      <div className="typeahead__input-wrapper">
        <input type="text" onChange={(e) => updateQuery(e.target.value)} value={query} />
        {query ?
          <div className="typeahead__suggestions">
            {suggestions.slice(0, 5).map(_ => 
              <TemtemDisplayPlateComponent
                key={_.number}
                temtem={_}
                onClick={onSelect}
              />
            )}
            {suggestions.length > 5 ? <span>+ {suggestions.length - 5} more!</span> : null}
          </div>
        : null}
      </div>
    </form>
  </div>)
};