import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class DropDownService {

    constructor( private http:HttpClient) { }    

    public getDropDownListObservable(){
        return this.http.get('https://localhost:5001/api/MxFreight/dropDown');
    }
}