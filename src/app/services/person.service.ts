import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Person } from 'src/Person';
@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http:HttpClient) {

    
   }
   add(person:Person):Observable<Person>
  {
    console.log(person)
    return this.http.post<Person>(`http://localhost:8090/person/addperson`,person);

    
  }
  getpersons():Observable<Person[]>{
    return this.http.get<Person[]>(`http://localhost:8090/person/allpersons`)
  }
}
