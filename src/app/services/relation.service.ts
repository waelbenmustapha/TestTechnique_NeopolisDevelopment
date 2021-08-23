import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class RelationService {
  constructor(private http: HttpClient) {}

  getspecificperson(id: number): Observable<any[]> {
    return this.http.get<any[]>(
      `http://localhost:8090/relations/specefic/${id}`
    );
  }
  addrelation(
    personid: number,
    relation: string,
    relative: number
  ): Observable<any> {
    return this.http.post<any>(
      `http://localhost:8090/relations/add/${personid}/${relation}/${relative}`,
      {}
    );
  }
}
