import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent {
  @Output() filterChange = new EventEmitter<any>();

  filterParams: any = {};

  applyFilter() {
    this.filterChange.emit(this.filterParams);
  }
}
