import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IApiResponse } from "../Models/Resource";

@Injectable({
    providedIn: "root"
})
export class ResourceService {
    
    constructor(private http: HttpClient) { }
  
    getResources(): Observable<IApiResponse> {
      const headers = new HttpHeaders({ 'x-api-key': 'reqres-free-v1'});
      return this.http.get<IApiResponse>("https://reqres.in/api/unknown", { headers })
    }
}