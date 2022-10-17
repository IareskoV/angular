import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-you-waiting',
  templateUrl: './you-waiting.component.html',
  styleUrls: ['./you-waiting.component.scss']
})
export class YouWaitingComponent implements OnInit {
  @Input() translation:any
  constructor() { }

  ngOnInit(): void {
  }

}
