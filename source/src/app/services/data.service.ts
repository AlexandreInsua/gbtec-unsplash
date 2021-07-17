import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators'
import { Resource } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  base: string = "https://api.unsplash.com/photos/"
  param: string = "?page="
  privatekey: string = "tC5RcULmUupEg3ZTUst7Dyx7dOF9UI91M7_NV07AlRg"
  headers: HttpHeaders = null



  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ "Authorization": `Client-ID ${this.privatekey}` })
  }

  public getResources(page: number) {
    let url = `${this.base}${this.param}${page}`
    return this.http.get<Resource[]>(url, { headers: this.headers }).pipe(
      tap(
        data => console.log(data),
        error => console.log(error)
      )
    )
  }
}
