import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private http: HttpClient) { }

  getBillsList(): Observable<any>{
    return this.http.get("../assets/BillList.json")
  }

  getLRList(): Observable<any>{
    return this.http.get("../assets/LRList.json")
  }

}
