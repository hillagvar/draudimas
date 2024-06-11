import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Owner } from '../models/owner';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http: HttpClient) { }

  public addOwner(owner: Owner) {
    return this.http.post("http://localhost:5999/owners", owner);
  }

}
