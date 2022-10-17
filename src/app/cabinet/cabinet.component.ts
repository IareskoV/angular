import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss']
})
export class CabinetComponent implements OnInit {
  @Input() translation:any
  constructor() { }

  ngOnInit(): void {
  }

}
