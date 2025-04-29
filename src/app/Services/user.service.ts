import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IApiResponseArr, IApiResponse, IUser } from "../Models/User";

@Injectable({
    providedIn: "root"
})
export class UserService {

  constructor(private http: HttpClient) { }

  setCurrentUser(user: IUser) { }

  getUsers(): Observable<IApiResponseArr> {
    const headers = new HttpHeaders({ 'x-api-key': 'reqres-free-v1'});
    return this.http.get<IApiResponseArr>("https://reqres.in/api/users?page=2", { headers })
  }

  getUser(id: number): Observable<IApiResponse> {
    const headers = new HttpHeaders({ 'x-api-key': 'reqres-free-v1'});
    return this.http.get<IApiResponse>(`https://reqres.in/api/users/${id}`, { headers });
  }

  updateUser(id: number, userData: object): Observable<object> {
    const headers = new HttpHeaders({ 'x-api-key': 'reqres-free-v1'});
    return this.http.put(`https://reqres.in/api/users/${id}`, userData, { headers });
  }

  deleteUser(id: number): Observable<IApiResponse> {
    const headers = new HttpHeaders({ 'x-api-key': 'reqres-free-v1'});
    return this.http.delete<IApiResponse>(`https://reqres.in/api/users/${id}`, { headers });
  }
}