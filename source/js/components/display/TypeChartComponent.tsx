import * as React from 'react';
import classnames from 'classnames';
import { ResetIcon } from '@client/components/icons/ResetIcon';

enum TYPE {
  NORMAL = 'NORMAL',
  FIRE = 'FIRE',
  WATER = 'WATER',
  NATURE = 'NATURE',
  ELECTRIC = 'ELECTRIC',
  EARTH = 'EARTH',
  MENTAL = 'MENTAL',
  WIND = 'WIND',
  DIGITAL = 'DIGITAL',
  MELEE = 'MELEE',
  CRYSTAL = 'CRYSTAL',
  TOXIC = 'TOXIC',
}

const TYPTE_LIST = [
  'NORMAL',
  'FIRE',
  'WATER',
  'NATURE',
  'ELECTRIC',
  'EARTH',
  'MENTAL',
  'WIND',
  'DIGITAL',
  'MELEE',
  'CRYSTAL',
  'TOXIC',
];

const EFFECTIVENESS = {
  [TYPE.NORMAL]: {
    [TYPE.MENTAL]: 0.5,
  },

  [TYPE.FIRE]: {
    [TYPE.FIRE]: 0.5,
    [TYPE.WATER]: 0.5,
    [TYPE.NATURE]: 2,
    [TYPE.EARTH]: 0.5,
    [TYPE.CRYSTAL]: 2,
  },
  
  [TYPE.WATER]: {
    [TYPE.FIRE]: 2,
    [TYPE.WATER]: .5,
    [TYPE.NATURE]: .5,
    [TYPE.EARTH]: 2,
    [TYPE.DIGITAL]: 2,
    [TYPE.TOXIC]: .5,
  },
  
  [TYPE.NATURE]: {
    [TYPE.FIRE]: .5,
    [TYPE.WATER]: 2,
    [TYPE.NATURE]: .5,
    [TYPE.EARTH]: 2,
    [TYPE.TOXIC]: .5,
  },
  
  [TYPE.ELECTRIC]: {
    [TYPE.WATER]: 2,
    [TYPE.NATURE]: .5,
    [TYPE.ELECTRIC]: .5,
    [TYPE.EARTH]: .5,
    [TYPE.MENTAL]: 2,
    [TYPE.WIND]: 2,
    [TYPE.DIGITAL]: 2,
    [TYPE.CRYSTAL]: .5,
  },

  [TYPE.EARTH]: {
    [TYPE.FIRE]: 2,
    [TYPE.ELECTRIC]: 2,
    [TYPE.CRYSTAL]: 2,
    [TYPE.WATER]: .5,
    [TYPE.NATURE]: .5,
    [TYPE.WIND]: .5,
  },

  [TYPE.MENTAL]: {
    [TYPE.NORMAL]: 2,
    [TYPE.MELEE]: 2,
    [TYPE.CRYSTAL]: .5,
  },

  [TYPE.WIND]: {
    [TYPE.EARTH]: 2,
    [TYPE.TOXIC]: 2,
    [TYPE.ELECTRIC]: .5,
    [TYPE.WIND]: .5,
  },

  [TYPE.DIGITAL]: {
    [TYPE.MENTAL]: 2,
    [TYPE.DIGITAL]: 2,
    [TYPE.MELEE]: 2,
  },

  [TYPE.MELEE]: {
    [TYPE.EARTH]: 2,
    [TYPE.CRYSTAL]: 2,
    [TYPE.MENTAL]: .5,
    [TYPE.MELEE]: .5,
  },

  [TYPE.CRYSTAL]: {
    [TYPE.MENTAL]: 2,
    [TYPE.ELECTRIC]: 2,
    [TYPE.FIRE]: .5,
    [TYPE.EARTH]: .5,
  },

  [TYPE.TOXIC]: {
    [TYPE.WATER]: 2,
    [TYPE.NATURE]: 2,
    [TYPE.EARTH]: .5,
    [TYPE.DIGITAL]: .5,
    [TYPE.CRYSTAL]: .5,
    [TYPE.TOXIC]: .5,
  },
};


const TypeChartRow = ({ type, selectedTypes }) => {
  const finalEffectiveness = selectedTypes.reduce((effectiveness, selectedType) => {
    return effectiveness * (EFFECTIVENESS[type][selectedType] || 1);
  }, 1);
  
  return <div className="typechart__row">
  
    <span className={classnames({
        'typechart__heading-cell': true,
        [`u-type-bgicon--${type.toLowerCase()}`]: true,
        'typechart__heading-cell--dimmed': (selectedTypes.length > 0 && (finalEffectiveness === 1))
      })}>
      {finalEffectiveness !== 1 && false ? <span className={classnames({
        'typechart__badge': true,
        'typechart__badge--super-effective': finalEffectiveness > 1,
        'typechart__badge--not-very-effective': finalEffectiveness < 1,
      })}>{finalEffectiveness}x</span> : null}
    </span>
    {TYPTE_LIST.map(opposingType => { 
      const effectiveness = EFFECTIVENESS[type] && EFFECTIVENESS[type][opposingType] ? EFFECTIVENESS[type][opposingType] : 1;
      const dimmed = selectedTypes.length > 0 && (!selectedTypes.includes(opposingType));

      return <span
        className={classnames({
          typechart__cell: true,
          'typechart__cell--super-effective': effectiveness === 2,
          'typechart__cell--not-very-effective': effectiveness === 0.5,
          'typechart__cell--extra-super-effective': effectiveness === 4,
          'typechart__cell--extra-not-very-effective': effectiveness === 0.25,
          'typechart__cell--dimmed': dimmed,
        })}
        key={opposingType}
        data-row-type={type}
        data-col-type={opposingType}
      >
        {effectiveness}x
      </span>
    })}
    <div className={classnames({
      'typechart__joint-cell': true,
      'typechart__heading-cell--dimmed': selectedTypes.length === 0
    })}>
      <span className={classnames({
          'typechart__heading-cell': true,
          [`u-type-bgicon--${type.toLowerCase()}`]: true,
          'typechart__heading-cell--dimmed': (selectedTypes.length > 0 && (finalEffectiveness === 1))
        })}>
        {finalEffectiveness !== 1 && false ? <span className={classnames({
          'typechart__badge': true,
          'typechart__badge--super-effective': finalEffectiveness > 1,
          'typechart__badge--not-very-effective': finalEffectiveness < 1,
        })}>{finalEffectiveness}x</span> : null}
      </span>
      <span className={classnames({
        'typechart__cell': true,
        'typechart__cell--super-effective': finalEffectiveness === 2,
        'typechart__cell--not-very-effective': finalEffectiveness === .5,
        'typechart__cell--extra-super-effective': finalEffectiveness === 4,
        'typechart__cell--extra-not-very-effective': finalEffectiveness === 0.25,
      })}>
        {selectedTypes.length > 0
          ? `${finalEffectiveness}x`
          : null
        }
      </span>
    </div>
  </div>
};

export const TypeChartComponent = ({ allowUserSelection, types, onReset }) => {
  const [selectedTypes, setSelectedTypes] = (allowUserSelection !== undefined ? (allowUserSelection) : true)
    ? React.useState(types)
    : [types, (...args) => {}];
    
  React.useEffect(() => {
    setSelectedTypes(types);
  }, [types]);

  return <div className="typechart-container">
    <span className="typechart__horizontal-label">Defending Type</span>
    <div className="typechart__horizontal-row-container">
      <span className="typechart__vertical-label">Attacking Type</span>
      <div className={classnames({
        typechart: true,
        'typechart--has-selected-types': selectedTypes.length > 0,
      })}>
        <div className="typechart__row">
          <span className="typechart__empty-cell">
            <div style={{cursor: selectedTypes.length > 0 ? 'pointer' : 'auto'}} onClick={onReset}>
              <ResetIcon
                size={36}
                color={selectedTypes.length > 0 ? '#ccc' : '#444'}
              />
            </div>
          </span>
          {TYPTE_LIST.map(type => 
            <span 
              key={type} 
              className={classnames({
                'typechart__heading-cell': true,
                [`u-type-bgicon--${type.toLowerCase()}`]: true,
              })}
              onClick={() => {
                if(selectedTypes.includes(type)) {
                  setSelectedTypes(selectedTypes.filter(_ => _ !== type))
                } else if(selectedTypes.length < 2) {
                  setSelectedTypes([...selectedTypes, type])
                }
              }}
            >
            </span>
          )}
          <div className='typechart__joint-cell'>
            <span className="typechart__empty-cell"></span>
            <span className="typechart__empty-cell"></span>
          </div>
        </div>
        <div>
          {TYPTE_LIST.map(type => <TypeChartRow key={type} type={type} selectedTypes={selectedTypes} />)}
        </div>
      </div>
    </div>
  </div>
}