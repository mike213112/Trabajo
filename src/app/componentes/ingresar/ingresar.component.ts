import { Component, OnInit } from '@angular/core';
import { Quemar } from '../../api/quemar';
@Component({
  selector: 'empresa-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.scss']
})
export class IngresarComponent implements OnInit {

  agregarArray: Quemar[] = [
    { id: 1, peso: 190, codigo: 'hola12', envio: "San Jose Acatempa" },
    { id: 2, peso: 190, codigo: 'hola12123', envio: "San Jose Pinula" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
