import { Component, OnInit } from '@angular/core';
import { Quemar } from 'src/app/api/quemar';
import { BaseService } from '../../services/base.service';
import { Connec } from '../../models/connec';
import { element } from 'protractor';

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

  listarMateriales: Connec[];

  constructor(private baseService: BaseService) { }

  ngOnInit() {
    this.baseService.getProduct()  
    .snapshotChanges()
    .subscribe(item => {
      this.listarMateriales = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.listarMateriales.push(x as Connec)
      })
    })
  }
}
