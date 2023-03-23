import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from './song';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  baseUrl = 'http://localhost:3000/songs';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Song[]>{
    return this.http.get<Song[]>(this.baseUrl); //get()-Funktion wird als Parameter die URL des Backends übergeben
  //rückgabewert ist ein Observabble -> Song Array
}

// getOne(id: string): Observable<Song>{
//   return this.http.get<Song>(this.baseUrl + '/' + id);
// }
}

