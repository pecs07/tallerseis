import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickmortyService {

  private ulr = "https://rickandmortyapi.com/api/character"
  constructor(
    private http: HttpClient,
  ) { }

  //crear el metodo de http client
  public getCharacters() {
    return this.http.get(this.ulr)

  }


}
