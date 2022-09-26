import { SORT_KEY_ENUM } from '../models/collection.model';

export const COLLECTION_SORT_OPTIONS = [
  {
    value: SORT_KEY_ENUM.RELEVANCE,
    title: 'Relevance',
  },
  {
    value: SORT_KEY_ENUM.OBJECT_TYPE,
    title: 'Object type',
  },
  {
    value: SORT_KEY_ENUM.CHRONOLOGIC,
    title: 'Chronologic',
  },
  {
    value: SORT_KEY_ENUM.ACHRONOLOGIC,
    title: 'Achronologic',
  },
  {
    value: SORT_KEY_ENUM.ARTIST,
    title: 'Artist',
  },
  {
    value: SORT_KEY_ENUM.ARTIST_DESC,
    title: 'Artist desc',
  },
];
