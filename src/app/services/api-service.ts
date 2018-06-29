import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService{
    url: string = "https://jsonplaceholder.typicode.com/users";

    constructor(private http: HttpClient) { }

    getAllUser(){
        return this.http.get(this.url);
    }

}