import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent implements OnInit{
  @Output() filterChange = new EventEmitter<any>();

constructor(private router :Router){}
  ngOnInit(): void {
  }

  filterParams: any = {
    status:""
  };

  applyFilter() {
    this.filterChange.emit(this.filterParams);
  }
  newTask(){
    this.router.navigate(['/teammeber-task-assignment'])
  }
}