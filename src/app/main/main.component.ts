import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input() translation:any
  constructor() { }

  ngOnInit(): void {
  }

}
