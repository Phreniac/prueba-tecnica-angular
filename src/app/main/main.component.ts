import { Component } from '@angular/core';
import { TreeService } from '../services/tree.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  trees: any[] = [];

  constructor(private treeService: TreeService) { }

  ngOnInit() {
    this.treeService.getTrees().subscribe((data:any) => {
      this.trees = data.objetos;
      console.log('data tree', data);
    });
  }

  selectedTree = null;

  showModal(tree: any) {
    this.selectedTree = tree;
  }

  closeModal() {
    this.selectedTree = null;
  }
}
