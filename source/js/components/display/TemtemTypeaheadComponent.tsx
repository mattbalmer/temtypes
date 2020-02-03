import * as React from 'react';
import classnames from 'classnames';
import temtemList from '@client/data/temtems';

const returnValidTemtems = (temtems, query) => {
  if(!query) {
    return [];
  }
  
  query = query.toUpperCase();
  
  return temtems
    .filter(temtem => temtem.name.toUpperCase().includes(query) || temtems.types.some(type => type.includes(query)));
}

export const TemtemDisplayPlate = ({ temtem }) => {
  return <div className="temtem-display-plate">
    <div className="temtem-display-plate__portrait-wrapper">
      <img className="temtem-display-plate__portrait" src={temtem.portraitWikiUrl} />
    </div>
    <div className="temtem-display-plate__info">
      <div className="temtem-display-plate__name">
        {temtem.name}
      </div>
      <div className="temtem-display-plate__types">
        {temtem.types.map(type => <span key={type} className={`temtem-display-plate__type u-type-badge--${type.toLowerCase()}`}>{type}</span>)}
      </div>
    </div>
  </div>
}

export const TemtemTypeaheadComponent = () => {
  const inputRef = React.createRef();
  const [query, updateQuery] = React.useState('');
  const suggestions = returnValidTemtems(temtemList, query);
  
  const onSubmit = (e) => {
    e.preventDefault();
  };
  
  return (<div className="typeahead">
    <form onSubmit={onSubmit}>
      <div className="typeahead__input-wrapper">
        <input type="text" onChange={(e) => updateQuery(e.target.value)} value={query} />
        {query ?
          <div className="typeahead__suggestions">
            {temtemList.slice(0, 3).map(_ => <TemtemDisplayPlate key={_.number} temtem={_} />)}
          </div>
        : null}
      </div>
    </form>
  </div>)
};