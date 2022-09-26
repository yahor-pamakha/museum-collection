export interface Collection {
  artObjects: any[];
  count: number;
  countFacets: any;
  elapsedMilliseconds: number;
}

export interface CollectionApiParams {
  pageNumber?: number;
  pageSize?: number;
  searchKey?: string;
  sortKey?: SORT_KEY_ENUM;
}

export enum SORT_KEY_ENUM {
  RELEVANCE = 'relevance',
  OBJECT_TYPE = 'objecttype',
  CHRONOLOGIC = 'chronologic',
  ACHRONOLOGIC = 'achronologic',
  ARTIST = 'artist',
  ARTIST_DESC = 'artistdesc',
}
