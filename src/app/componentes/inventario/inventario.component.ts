import { Component, OnInit } from '@angular/core';
import { Quemar } from 'src/app/api/quemar';

@Component({
  selector: 'empresa-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements OnInit {

  agregarArray: Quemar[] = [
    { id: 1, peso: 190, codigo: 'hola12', envio: "San Jose Acatempa" },
    { id: 2, peso: 190, codigo: 'hola12123', envio: "San Jose Pinula" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
