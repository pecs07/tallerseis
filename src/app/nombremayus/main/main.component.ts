import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  public name = 'Carlos David Ruiz';
  public styles = "padding: 20px; color: blue;";
  public mostrarAlert = false; /* creamos el evento del Alert iniciando en false*/

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }


  public imprimirEnConsola() {
    /*  console.info("Evento capturado");*/
    console.info(this.name);
    this.mostrarAlert = !this.mostrarAlert;/* Le cambia el estado al Alert s mostrar con true pero para crear el efecto que dese paresca se cambia con el signo de !*/
  }
}
