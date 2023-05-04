import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
//import { baseUrl } from '../../environments/environment';
//import { Http, Headers, Response } from '@angular/http/headers';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http: HttpClient) { }

  public login(userData): Observable<any> {
    console.log("Get Login detail");
    return this.http.post<any>(`https://localhost:44393/api/login`, userData);
  }

  isAuthedicated() {
    let token = localStorage.getItem("token");
    if (token == null) {
      return false;
    }
    return true;
  }

  public registerNewUser(userData): Observable<any> {
    const resheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
    console.log("Registering User detail");
    return this.http.post<any>(`https://localhost:44393/api/registration`, userData, { headers: resheaders });
  }
}
