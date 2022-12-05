import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  setVisible:boolean = false;
  valorBoton:string = 'Enseñar';
  mostrarComponente() {
    if (this.setVisible == true) {
      this.setVisible = false;
      this.valorBoton = 'Enseñar'
    }
    else if (this.setVisible == false) {
      this.setVisible = true;
      this.valorBoton = 'Esconder'
    }

  }
}