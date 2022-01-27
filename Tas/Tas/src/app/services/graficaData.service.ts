import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { GraficaRequest } from '../models/GraficaRequest.model';

// Constantre para mandar header un JSON
const httpOptions = {
    headers: new HttpHeaders({
        'Contend-Type': 'application/json'
    })
};

@Injectable( {providedIn: 'root'} )
export class GraficaData {

    constructor( private http:HttpClient ) { }

    // Metodos para obtener Datos de la grafica
    getGraficaDataObservable(){
     return this.http.get("http://localhost:5000/Grafica");
    }

    getGraficaData(){
        return this.getGraficaDataObservable()
            .pipe(
                map ( data => {
                    const values = Object.values( data );
                    return values;
                })
            )
    }

    //Cambiar el retorno :Observable<GraficaResponse>
    getGraficaDataObservable2(req:GraficaRequest){
        return this.http.post('https://localhost:5001/api/MxFreight', req, httpOptions);
        //return this.http.post<GraficaResponse>('https://localhost:5001/api/MxFreight', req, httpOptions);
    
    }

    getGraficaData2(re2:GraficaRequest){
        return this.getGraficaDataObservable2(re2)
            .pipe(
                map ( data => {
                    const values = Object.values( data );
                    return values;
                })
            )
    }


    // ------------------------------------------------------------------------
    //  Metodos Para Obtener los Labels
    getGraficaLabelsObservable(){
        return this.http.get("http://localhost:3001/barChartLabels");
    }

    getGraficaLabel(){
        return this.getGraficaLabelsObservable()
            .pipe(
                map ( data => {
                    const values = Object.values( data );
                    return values;
                })
            )
    }
}
