export interface Collection {
  artObjects: any[];
  count: number;
  countFacets: any;
  elapsedMilliseconds: number;
}

export enum SORT_KEY_ENUM {
  RELEVANCE = 'relevance',
  OBJECT_TYPE = 'objecttype',
  CHRONOLOGIC = 'chronologic',
  ACHRONOLOGIC = 'achronologic',
  ARTIST = 'artist',
  ARTIST_DESC = 'artistdesc',
}
