import * as React from 'react';
import classnames from 'classnames';

export const TemtemColumnHeader = ({ temtem, onClick }) => {
  return <div className={classnames({
    "temtem-column-header": true,
  })}>
    <div className="temtem-column-header__portrait-wrapper" onClick={onClick} >
      <img className="temtem-column-header__portrait" src={temtem.portraitWikiUrl} alt={temtem.name} />
    </div>
  </div>
};
