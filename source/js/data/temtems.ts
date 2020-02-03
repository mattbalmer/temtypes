import temtems from './temtems-raw';
export default temtems.map(temtem => ({
  number: temtem.number,
  name: temtem.name,
  types: temtem.types.map(_ => _.toUpperCase()),
  portraitWikiUrl: temtem.portraitWikiUrl,
  wikiUrl: temtem.wikiUrl,
}));