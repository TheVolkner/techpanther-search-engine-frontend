import { MatSnackBar } from '@angular/material/snack-bar';
import { ServicioBusquedaService } from './../../services/servicio-busqueda.service';
import { WebPage } from './../../model/WebPage';
import { Component, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {

    //GENERAMOS EL CAMPO DE BUSQUEDA EL CÚAL ESTARÁ VINCULADO CON EL INPUT DE LA PLANTILLA
    busqueda:string = '';
    paginas: WebPage[];

 //GENERAMOS UN HOST LISTENER PARA ESTAR A LA ESCUCHA DEL TECLADO Y SU BOTÓN ENTER
  //EL CÚAL LLAMARÁ AL MÉTODO DE BUSQUEDA, AL IGUAL QUE SI PULSARA EL BOTÓN
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if(event.key == 'Enter'){
      this.servicioBusqueda.realizarBusqueda(this.busqueda).subscribe(
        (data:WebPage[]) => {

          //OBTENEMOS LAS COINCIDENCIAS CON LA BUSQUEDA Y LAS GUARDAMOS EN EL ARREGLO DE WEBPAGES
          this.paginas = data;
          console.log(this.paginas);

          //EN CASO DE ERROR LO DESPLEGAMOS CON EL SNACK BAR
        },(error) => {
          this.matSnackBar.open(
            '¡Ha ocurrido un error al listar las coincidencias de su busqueda!',
            'Aceptar',
            {
              duration: 3000,
              verticalPosition: 'bottom',
              horizontalPosition: 'right',
              panelClass: ['yellow-snackbar','login-snackbar'],
            }
            );
          }
        );
    }
  }

    //INYECTAMOS EL SERVICE PARA REALIZAR LA BUSQUEDA
    constructor(private servicioBusqueda:ServicioBusquedaService,private route:ActivatedRoute,
      private matSnackBar:MatSnackBar){

      //LE ASIGNAMOS LA BUSQUEDA AL ATRIBUTO DE ESTE COMPONENTE
      this.busqueda = this.route.snapshot.params['busqueda'];

      //SUSCRIBIMOS CON EL MÉTODO DEL SERVICE PARA REALIZAR LA BUSQUEDA EN EL BACKEND SEGUN EL DATO
      this.servicioBusqueda.realizarBusqueda(this.busqueda).subscribe(
        (data:WebPage[]) => {

          //OBTENEMOS LAS COINCIDENCIAS CON LA BUSQUEDA Y LAS GUARDAMOS EN EL ARREGLO DE WEBPAGES
          this.paginas = data;
          console.log(this.paginas);

          //EN CASO DE ERROR LO DESPLEGAMOS CON EL SNACK BAR
        },(error) => {
          this.matSnackBar.open(
            '¡Ha ocurrido un error al listar las coincidencias de su busqueda!',
            'Aceptar',
            {
              duration: 3000,
              verticalPosition: 'bottom',
              horizontalPosition: 'right',
              panelClass: ['yellow-snackbar','login-snackbar'],
            }
            );
          }
        );
    }

    navegarLink(url:string){
      console.log(url);
      var boton= document.createElement('a');
      boton.href = url;
      boton.target="_blank";
      boton.click();
    }
}
