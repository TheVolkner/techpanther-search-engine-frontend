import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
//ESTE SERVICIO SERÁ PARA COMUNICARSE CON EL BACK-END Y REALIZAR LAS BUSQUEDAS
export class ServicioBusquedaService {

  //AGREGAMOS EL HTTP CLIENT
  constructor(private httpClient:HttpClient) { }


  //MANDAMOS AL BACKEND EL TEXTO CON EL QUE REALIZARÁ LA BUSQUEDA
  realizarBusqueda(busqueda:string){
     return this.httpClient.get(`http://localhost:8080/api/webpages/buscar/${busqueda}`);
  }
}
