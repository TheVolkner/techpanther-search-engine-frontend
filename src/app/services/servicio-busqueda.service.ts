import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';


@Injectable({
  providedIn: 'root'
})
//ESTE SERVICIO SERÁ PARA COMUNICARSE CON EL BACK-END Y REALIZAR LAS BUSQUEDAS
export class ServicioBusquedaService {

  //AGREGAMOS EL HTTP CLIENT
  constructor(private httpClient:HttpClient) { }


  //MANDAMOS AL BACKEND EL TEXTO CON EL QUE REALIZARÁ LA BUSQUEDA
  realizarBusqueda(busqueda:string){
     return this.httpClient.get(`${baseUrl}/webpages/buscar/${busqueda}`);
  }
}
