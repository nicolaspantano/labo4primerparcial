import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  getPaises() {
    return this.http.get("https://restcountries.com/v3.1/all");
  }

  getPaisByName(name: string) {
    return this.http.get("https://restcountries.com/v3.1/name/"+name);
  }


}
