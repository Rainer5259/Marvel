import md5 from 'md5';

export const TS = Number(new Date());
export const KEYS = {
  PUBLIC: '617b2d25a9b4d7869eadac1b602fdae8',
  PRIVATE: '04842df6e830616d3f4553c91f9d2ee4f5aac0b4',
};
export const HASH = md5(TS + KEYS.PRIVATE + KEYS.PUBLIC);
