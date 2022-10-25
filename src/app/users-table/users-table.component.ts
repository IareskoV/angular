import { Component, Input, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  @Input() users:any
  @Output() deleteItemEvent = new EventEmitter<string>();

  handleDelete(id:string) {
    this.deleteItemEvent.emit(id);
  }

  displayedColumns: string[] = ['name', 'second name', 'email', '',''];
  constructor() { }


  ngOnInit(): void {

  }

}
