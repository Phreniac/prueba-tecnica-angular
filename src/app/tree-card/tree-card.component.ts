import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tree-card',
  templateUrl: './tree-card.component.html',
  styleUrls: ['./tree-card.component.css']
})
export class TreeCardComponent {
  @Input() tree: any;
}
