import { Component, OnInit } from '@angular/core';
import { Quemar } from '../../api/quemar';
@Component({
  selector: 'empresa-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.scss']
})
export class MostrarComponent implements OnInit {

  agregarArray: Quemar[] = [
    { id: 1, peso: 190, codigo: 'hola12', envio: "San Jose Acatempa" },
    { id: 2, peso: 190, codigo: 'hola12123', envio: "San Jose Pinula" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
