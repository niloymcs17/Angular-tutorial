import { CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { TextBox } from '../models/controls.interface';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {

  textBox = new TextBox();

  email = new TextBox();

  todo = [ this.email, this.textBox];

  done = [this.textBox];

  selectedItem: any;
  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<any[]>) {
    console.log(this.done);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.done[event.currentIndex] = new TextBox();
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      var time = new Date();
      this.done[event.currentIndex].id = time.toLocaleString('en-US', { dateStyle:'full',timeStyle:'full'}) ;
    }
  }

  selected(index: number) {
    this.selectedItem = this.done[index];
  }

}
