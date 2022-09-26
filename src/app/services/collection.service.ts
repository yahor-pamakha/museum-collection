import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Collection } from '../models/collection.model';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  apiKey = 'QKnUuTpe';

  constructor(private http: HttpClient) {}

  getCollection({ pageNumber = 0, pageSize = 10, searchKey = '', sortKey = '' }): Observable<Collection> {
    let params = new HttpParams();
    params = params.append('key', this.apiKey);
    params = params.append('p', String(pageNumber));
    params = params.append('ps', String(pageSize));
    params = params.append('q', searchKey);
    params = params.append('s', sortKey);
    return this.http.get<Collection>(`${environment.apiVersion}/collection`, {
      params,
    });
  }

  getDetailedObject(objectNumber: string | number): Observable<any> {
    let params = new HttpParams();
    params = params.append('key', this.apiKey);
    return this.http.get<any>(`${environment.apiVersion}/collection/${objectNumber}`, { params });
  }

  getObjectTiles(objectNumber: string | number): Observable<any> {
    let params = new HttpParams();
    params = params.append('key', this.apiKey);
    return this.http.get<any>(`${environment.apiVersion}/collection/${objectNumber}/tiles`, { params });
  }
}
