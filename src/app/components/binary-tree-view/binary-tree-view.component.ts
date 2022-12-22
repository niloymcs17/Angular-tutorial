import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binary-tree-view',
  templateUrl: './binary-tree-view.component.html',
  styleUrls: ['./binary-tree-view.component.scss']
})
export class BinaryTreeViewComponent implements OnInit  {

  constructor() { }

  ngOnInit(): void {
  }

  
  getDetaisl(event:any){
    console.log(event)
  }
}
