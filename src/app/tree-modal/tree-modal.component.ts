import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit  } from '@angular/core';
//se importa la libreria para el mapa
import * as L from 'leaflet';

@Component({
  selector: 'app-tree-modal',
  templateUrl: './tree-modal.component.html',
  styleUrls: ['./tree-modal.component.css']
})
export class TreeModalComponent {
  @Input() tree: any;
  @Output() close = new EventEmitter();

  //se declara la variable que contendra el mapa
  private map: any;

  ngAfterViewInit() {
    this.initMap();
  }

  //funcion para levantar el mapa con las coordenadas del arbol seleccionado seleccionadas
  private initMap() {
    console.log('tree', this.tree);
    if (!this.tree || !this.tree.lat || !this.tree.lon) {
      return; // si las coordenadas no estan en el objeto el mapa no se iniciará
    }

    this.map = L.map('map').setView([this.tree.lat, this.tree.lon], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    L.marker([this.tree.lat, this.tree.lon]).addTo(this.map)
      .bindPopup(this.tree.object_name)
      .openPopup();
  }

}
