import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Owner } from '../models/owner';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  public owners: Owner[] = [];

  constructor(private http: HttpClient) { }

  public addOwner(owner: Owner) {
    return this.http.post("http://localhost:5999/owners", owner);
  }

  public loadOwnerData() {
    return this.http.get<Owner[]>("http://localhost:5999/owners");
  }

}
