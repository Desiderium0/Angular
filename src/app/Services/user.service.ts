import { HttpClient } from "@angular/common/http";
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
    return this.http.get<IApiResponseArr>("https://reqres.in/api/users?page=2")
  }

  getUser(id: number): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(`https://reqres.in/api/users/${id}`);
  }

  updateUser(id: number, userData: object): Observable<object> {
    return this.http.put(`https://reqres.in/api/users/${id}`, userData);
  }

  deleteUser(id: number): Observable<IApiResponse> {
    return this.http.delete<IApiResponse>(`https://reqres.in/api/users/${id}`);
  }
}