import * as React from 'react';
import { connect } from 'react-redux';

type ReducerState = any;

export type mapStateCallback = (state: ReducerState) => any;
export type mapDispatchCallback = (dispatch: Function) => any;

export function containerize<P = any>(component, mapStateToProps?: mapStateCallback, mapDispatchToProps?: mapDispatchCallback): any {
  return connect(
    mapStateToProps || (() => ({})),
    mapDispatchToProps || (() => ({})),
  )(component);
}