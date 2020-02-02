export type StringMap<T = any> = {
  [key: string]: T;
}

export type IDMap<T> = {
  [key: string]: T;
}

/**
 * Universally Unique Identifier
 */
export type UUID = string;

/**
 * Incremented Identifier
 */
export type IID = number;

export type GenericCallback = any;