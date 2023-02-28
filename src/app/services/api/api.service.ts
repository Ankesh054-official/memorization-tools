import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  
  constructor(private http: HttpClient) {}

  // To search an image related to specific tag.
  searchImage(key: string): any {
    return this.http.get(
      `https://api.unsplash.com/search/photos/?client_id=${environment.UNSPLESH_accessKey}&query=${key}`
    );
  }
}
