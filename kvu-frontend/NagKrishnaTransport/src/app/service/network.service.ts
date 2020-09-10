import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
    // return this.http.get("../assets/LRList.json")
    return this.http.request('GET',"http://192.168.1.10:7000/api/lr/{}/0/50/descending", { responseType:'json'});
  }

}
