import md5 from 'md5';

export const TIMESTAMP = Number(new Date());
export const MARVEL_API_KEYS = {
  PUBLIC: '617b2d25a9b4d7869eadac1b602fdae8',
  PRIVATE: '04842df6e830616d3f4553c91f9d2ee4f5aac0b4',
};
export const MARVEL_HASH = md5(
  TIMESTAMP + MARVEL_API_KEYS.PRIVATE + MARVEL_API_KEYS.PUBLIC,
);
