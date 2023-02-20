import { Component, HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  //GENERAMOS EL CAMPO DE BUSQUEDA EL CÚAL ESTARÁ VINCULADO CON EL INPUT DE LA PLANTILLA
  busqueda:string = '';

  //IMPORTAMOS EL SNACK BAR Y EL ROUTER
  constructor(private matSnackBar:MatSnackBar,private router:Router){}

  //GENERAMOS UN HOST LISTENER PARA ESTAR A LA ESCUCHA DEL TECLADO Y SU BOTÓN ENTER
  //EL CÚAL LLAMARÁ AL MÉTODO DE BUSQUEDA, AL IGUAL QUE SI PULSARA EL BOTÓN
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if(event.key == 'Enter'){
      this.ejecutarBusqueda();
    }
  }


  //MÉTODO PARA EJECUTAR LA BUSQUEDA, SE COMUNICARÁ CON EL SERVICE Y EJECUTARÁ LA PETICIÓN AL BACK
  ejecutarBusqueda(){

    if(this.busqueda == ''){

      this.matSnackBar.open(
        '¡Ingresa algo para buscar!',
        'Aceptar',
        {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'right',
          panelClass: ['yellow-snackbar','login-snackbar'],
        }
      );

    } else {
      this.router.navigate(['search',this.busqueda]);
    }

  }

}
