import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Person } from 'src/Person';
@Injectable({
  providedIn: 'root'
})
export class PersonService {

  
  constructor(private http:HttpClient) {

    
   }
   // calling the api and providing Person to the Post request
   add(person:Person):Observable<Person>
  {
    return this.http.post<Person>(`http://localhost:8090/person/addperson`,person);

    
  }
  // fetching all people on the database using the Get Request api
  getpersons():Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8090/person/allpersons`)
  }

  getspecificperson(id:number):Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8090/relations/specefic/${id}`)
  }
  addrelation(personid:number,relation:string,relative:number):Observable<any>
  {
    return this.http.post<any>(`http://localhost:8090/relations/add/${personid}/${relation}/${relative}`,{});

  }
}
