import * as React from 'react';
import classnames from 'classnames';

export const TemtemDisplayPlateComponent = ({ temtem, onClick }) => {
  return <div className="temtem-display-plate" onClick={onClick ? () => onClick(temtem) : () => {}}>
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
