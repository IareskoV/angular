import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-open-count',
  templateUrl: './open-count.component.html',
  styleUrls: ['./open-count.component.scss']
})
export class OpenCountComponent implements OnInit {
  @Input() translation:any
  constructor() { }

  ngOnInit(): void {
  }

}
