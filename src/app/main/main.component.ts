import { Component, OnInit,Input } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  routes: Routes = [
    {
      path: '',
      component: MainComponent
    }
  ];
  @Input() translation:any
  constructor() { }

  ngOnInit(): void {
  }

}
