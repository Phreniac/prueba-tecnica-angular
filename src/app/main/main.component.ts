import { Component } from '@angular/core';
import { TreeService } from '../services/tree.service';

//componente principal este es el home que contiene los demas componentes

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  trees: any[] = [];

  constructor(private treeService: TreeService) { }

  //se obtienen los objetos al iniciar el componente
  ngOnInit() {
    this.treeService.getTrees().subscribe((data:any) => {
      this.trees = data.objetos;
      console.log('data tree', data);
    });
  }

  selectedTree = null;

  //funcion que muestra el modal con la información del arbol
  showModal(tree: any) {
    this.selectedTree = tree;
  }
//funcion que cierra el modal con la información del arbol
  closeModal() {
    this.selectedTree = null;
  }
}
